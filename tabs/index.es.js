import { toRefs, computed, defineComponent, shallowRef, reactive, inject, onUpdated, onBeforeMount, onMounted, onUnmounted, watch, nextTick, createVNode, resolveComponent, provide, mergeProps, getCurrentInstance } from "vue";
const tabsProps = {
  modelValue: {
    type: [String, Number],
    default: null
  },
  type: {
    type: String,
    default: "tabs"
  },
  showContent: {
    type: Boolean,
    default: true
  },
  reactivable: {
    type: Boolean,
    default: true
  },
  customWidth: {
    type: String,
    default: ""
  },
  cssClass: {
    type: String,
    default: ""
  },
  beforeChange: {
    type: Function,
    default: null
  },
  closeable: {
    type: Boolean,
    default: false
  },
  addable: {
    type: Boolean,
    default: false
  },
  tabPosition: {
    type: String,
    default: "top"
  }
};
function createBem(namespace, element, modifier) {
  let cls = namespace;
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}
function useNamespace(block, needDot = false) {
  const namespace = needDot ? `.b-${block}` : `b-${block}`;
  const b = () => createBem(namespace);
  const e = (element) => element ? createBem(namespace, element) : "";
  const m = (modifier) => modifier ? createBem(namespace, "", modifier) : "";
  const em = (element, modifier) => element && modifier ? createBem(namespace, element, modifier) : "";
  return {
    b,
    e,
    m,
    em
  };
}
const ns$1 = useNamespace("tabs");
function useTabNavRender(props, data) {
  const { cssClass, tabPosition, customWidth } = toRefs(props);
  const ulClasses = computed(() => ({
    [ns$1.e("nav")]: true,
    [ns$1.em("nav", props.type)]: true,
    [cssClass.value]: Boolean(cssClass.value),
    [ns$1.em("nav", "top")]: tabPosition.value === "top",
    [ns$1.em("nav", "right")]: tabPosition.value === "right",
    [ns$1.em("nav", "bottom")]: tabPosition.value === "bottom",
    [ns$1.em("nav", "left")]: tabPosition.value === "left"
  }));
  const aClasses = computed(() => ({
    ["custom-width"]: Boolean(customWidth.value)
  }));
  const customStyle = {
    width: props.customWidth ? props.customWidth : ""
  };
  const sliderAnimationStyle = computed(() => {
    if (["top", "bottom"].includes(props.tabPosition)) {
      return {
        left: data.offsetLeft + "px",
        width: data.offsetWidth + "px"
      };
    } else {
      return {
        top: data.offsetTop + "px",
        height: data.offsetHeight + "px",
        width: data.offsetWidth + "px"
      };
    }
  });
  return { ulClasses, aClasses, customStyle, sliderAnimationStyle };
}
function useTabNavFunction(props, tabs, tabsList, data, ctx, tabsEle) {
  const update = () => {
    if (props.type === "slider") {
      setTimeout(() => {
        var _a;
        const tabEle = (_a = tabsEle.value) == null ? void 0 : _a.querySelector("#" + props.modelValue + ".active");
        if (tabEle && tabsEle.value) {
          if (["top", "bottom"].includes(props.tabPosition)) {
            data.offsetLeft = tabEle.getBoundingClientRect().left - tabsEle.value.getBoundingClientRect().left;
          } else {
            data.offsetTop = tabEle.getBoundingClientRect().top - tabsEle.value.getBoundingClientRect().top;
            data.offsetHeight = tabEle.getBoundingClientRect().height;
          }
          data.offsetWidth = tabEle.getBoundingClientRect().width;
        }
      });
    }
  };
  const canChange = (currentTab) => {
    let changeResult = Promise.resolve(true);
    if (typeof props.beforeChange === "function") {
      const result = props.beforeChange(currentTab);
      if (typeof result !== "undefined") {
        if (result.then) {
          changeResult = result;
        } else {
          changeResult = Promise.resolve(result);
        }
      }
    }
    return changeResult;
  };
  const activeClick = (item, tabEl) => {
    const id = item.props.id;
    if (!props.reactivable && props.modelValue === id) {
      return;
    }
    canChange(id).then((change) => {
      if (!change) {
        return;
      }
      const tab2 = tabsList.value.find((itemOption) => itemOption.props.id === id);
      if (tabs && tab2 && !tab2.props.disabled) {
        tabs.state.active = id;
        if (props.type === "slider" && tabEl && tabsEle && tabsEle.value) {
          if (["left", "right"].includes(props.tabPosition)) {
            data.offsetLeft = tabEl.getBoundingClientRect().left - tabsEle.value.nativeElement.getBoundingClientRect().left;
          } else {
            data.offsetTop = tabEl.getBoundingClientRect().top - tabsEle.value.nativeElement.getBoundingClientRect().top;
            data.offsetHeight = tabEl.getBoundingClientRect().height;
          }
          data.offsetWidth = tabEl.getBoundingClientRect().width;
        }
        ctx.emit("active-tab-change", tab2.props.id);
      }
    });
  };
  const beforeMount = () => {
    if (props.type !== "slider" && props.modelValue === void 0 && tabsList.value && tabsList.value.length > 0) {
      activeClick(tabsList.value[0]);
    }
  };
  const mounted = () => {
    var _a;
    if (props.type === "slider" && props.modelValue === void 0 && tabsList.value && tabsList.value.length > 0 && tabsList.value[0]) {
      const tabsStateData = tabsList.value[0];
      const dom = (_a = tabsStateData.tabsEle) == null ? void 0 : _a.value;
      const ele = dom == null ? void 0 : dom.getElementById(tabsStateData.tabId);
      activeClick(ele);
    }
  };
  const tabCanClose = (item) => {
    return (props.closeable || item.closeable) && !item.disabled;
  };
  return { update, activeClick, beforeMount, mounted, tabCanClose };
}
function useTabNavEvent(ctx) {
  const onTabRemove = (item, ev) => {
    ev.stopPropagation();
    ctx.emit("tab-remove", item.props, ev);
    ctx.emit("tab-change", item.props.id, "delete");
  };
  const onTabAdd = () => {
    ctx.emit("tab-add");
    ctx.emit("tab-change", void 0, "add");
  };
  return { onTabRemove, onTabAdd };
}
var tabNav = "";
var TabNav = defineComponent({
  name: "DTabNav",
  props: tabsProps,
  emits: ["active-tab-change", "tab-remove", "tab-add", "tab-change"],
  setup(props, ctx) {
    const ns2 = useNamespace("tabs");
    const tabsEle = shallowRef();
    const data = reactive({
      offsetLeft: 0,
      offsetWidth: 0,
      offsetTop: 0,
      offsetHeight: 0,
      id: null
    });
    const tabs = inject("tabs");
    const tabsList = computed(() => Object.values((tabs == null ? void 0 : tabs.state.data) || {}));
    const {
      ulClasses,
      aClasses,
      customStyle,
      sliderAnimationStyle
    } = useTabNavRender(props, data);
    const {
      update,
      beforeMount,
      mounted,
      activeClick,
      tabCanClose
    } = useTabNavFunction(props, tabs, tabsList, data, ctx, tabsEle);
    const {
      onTabRemove,
      onTabAdd
    } = useTabNavEvent(ctx);
    const handleTabAdd = () => {
      onTabAdd();
      nextTick(() => {
        if (tabsEle.value) {
          tabsEle.value.scrollLeft = tabsEle.value.scrollWidth;
        }
      });
    };
    let isSlide = false;
    const handleSlideTab = (mousedownEvent) => {
      if (tabsEle.value) {
        const mousedownX = mousedownEvent.clientX;
        const scrollLeft = tabsEle.value.scrollLeft;
        isSlide = true;
        tabsEle.value.addEventListener("mousemove", (mousemoveEvent) => {
          if (isSlide && tabsEle.value) {
            const mousemoveX = mousemoveEvent.clientX;
            const scrollWidth = mousemoveX - mousedownX;
            tabsEle.value.scrollLeft = scrollLeft - scrollWidth;
          }
        });
        tabsEle.value.addEventListener("mouseup", () => {
          isSlide = false;
        });
        tabsEle.value.addEventListener("mouseleave", () => {
          isSlide = false;
        });
      }
    };
    onUpdated(() => update());
    onBeforeMount(() => beforeMount());
    onMounted(() => {
      mounted();
      if (tabsEle.value) {
        tabsEle.value.addEventListener("mousedown", handleSlideTab);
      }
    });
    onUnmounted(() => {
      if (tabsEle.value) {
        tabsEle.value.removeEventListener("mousedown", handleSlideTab);
      }
    });
    watch(() => props.modelValue, () => {
      nextTick(() => {
        const tab2 = tabsList.value.find((item) => item.props.id === props.modelValue);
        if (tab2) {
          activeClick(tab2);
        }
      });
    });
    return () => {
      const closeIconEl = (item) => {
        return tabCanClose(item) ? createVNode("span", {
          "class": ns2.e("close-btn"),
          "onClick": (ev) => onTabRemove(item, ev)
        }, [createVNode(resolveComponent("d-icon"), {
          "size": "12px",
          "name": "error-o"
        }, null)]) : null;
      };
      const newButton = props.addable ? createVNode("li", {
        "class": ns2.e("new-tab"),
        "onClick": handleTabAdd
      }, [createVNode(resolveComponent("d-icon"), {
        "name": "add"
      }, null)]) : null;
      return createVNode("ul", {
        "ref": tabsEle,
        "role": "tablist",
        "class": ulClasses.value
      }, [(tabsList.value || []).map((item) => {
        return createVNode("li", {
          "role": "presentation",
          "onClick": () => {
            activeClick(item);
          },
          "class": (props.modelValue === item.props.id ? "active" : "") + (item.props.disabled ? " disabled" : ""),
          "id": item.props.id
        }, [createVNode("span", {
          "class": ns2.e("nav-content")
        }, [createVNode("a", {
          "role": "tab",
          "data-toggle": item.props.id,
          "aria-expanded": props.modelValue === item.props.id,
          "class": aClasses.value,
          "style": customStyle
        }, [item.slots.title ? item.slots.title() : createVNode("span", null, [item.props.title])]), closeIconEl(item)])]);
      }), newButton, createVNode("div", {
        "class": ns2.e(`nav-${props.type}-animation`),
        "style": sliderAnimationStyle.value
      }, null)]);
    };
  }
});
const ns = useNamespace("tabs");
function useTabsEvent(ctx) {
  const onUpdateModelValue = (value) => {
    ctx.emit("update:modelValue", value);
  };
  const onActiveTabChange = (value) => {
    ctx.emit("active-tab-change", value);
  };
  const onTabRemove = (item, ev) => {
    ctx.emit("tab-remove", item, ev);
  };
  const onTabAdd = () => {
    ctx.emit("tab-add");
  };
  const onTabChange = (id, type) => {
    ctx.emit("tab-change", id, type);
  };
  return { onUpdateModelValue, onActiveTabChange, onTabRemove, onTabAdd, onTabChange };
}
function useTabsRender(props) {
  const tabsClasses = computed(() => ({
    [ns.b()]: true,
    [ns.m(props.tabPosition)]: true
  }));
  return { tabsClasses };
}
var Tabs = defineComponent({
  name: "DTabs",
  props: tabsProps,
  emits: ["update:modelValue", "active-tab-change", "tab-remove", "tab-add", "tab-change"],
  setup(props, ctx) {
    const state = reactive({
      data: {},
      active: props.modelValue,
      showContent: props.showContent
    });
    const addTab = (tabCtx) => {
      if (tabCtx.uid) {
        state.data[tabCtx.uid] = tabCtx;
      }
    };
    const deleteTab = (uid) => {
      if (uid) {
        delete state.data[uid];
      }
    };
    provide("tabs", {
      state,
      addTab,
      deleteTab
    });
    const {
      onUpdateModelValue,
      onActiveTabChange,
      onTabRemove,
      onTabAdd,
      onTabChange
    } = useTabsEvent(ctx);
    const {
      tabsClasses
    } = useTabsRender(props);
    watch(() => state.active, () => {
      onUpdateModelValue(state.active);
    });
    return () => {
      var _a, _b;
      const tabNav2 = createVNode(TabNav, mergeProps(props, {
        "onActiveTabChange": onActiveTabChange,
        "onTabRemove": onTabRemove,
        "onTabAdd": onTabAdd,
        "onTabChange": onTabChange
      }), null);
      const content = (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
      return createVNode("div", {
        "class": tabsClasses.value
      }, [props.tabPosition === "bottom" ? [content, tabNav2] : [tabNav2, content], createVNode("div", {
        "style": "clear: both"
      }, null)]);
    };
  }
});
const tabProps = {
  title: {
    type: [String, Number],
    default: null
  },
  id: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  closeable: {
    type: Boolean,
    default: false
  }
};
var tab = "";
var Tab = defineComponent({
  name: "DTab",
  props: tabProps,
  setup(props, {
    slots
  }) {
    const tabs = inject("tabs");
    const ns2 = useNamespace("tab");
    const instance = getCurrentInstance();
    const tabContext = reactive({
      uid: instance == null ? void 0 : instance.uid,
      slots,
      props
    });
    onMounted(() => {
      tabs == null ? void 0 : tabs.addTab(tabContext);
    });
    onUnmounted(() => {
      tabs == null ? void 0 : tabs.deleteTab(tabContext.uid);
    });
    return () => {
      var _a;
      const {
        id
      } = props;
      const content = (tabs == null ? void 0 : tabs.state.showContent) && tabs.state.active === id ? createVNode("div", {
        "class": ns2.e("content")
      }, [createVNode("div", {
        "role": "tabpanel"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]) : null;
      return content;
    };
  }
});
var index = {
  title: "Tabs \u9009\u9879\u5361",
  category: "\u5BFC\u822A",
  status: "100%",
  install(app) {
    app.component(Tabs.name, Tabs);
    app.component(Tab.name, Tab);
  }
};
export { Tab, Tabs, index as default, tabsProps };
