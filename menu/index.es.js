var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { ref, defineComponent, getCurrentInstance, inject, toRefs, computed, createVNode, watch, onMounted, Transition, withDirectives, vShow, watchEffect, provide, reactive } from "vue";
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
const elements = [];
let parents = [];
const defaultIndent = ref(24);
const ns$5 = useNamespace("menu");
const subNs$2 = useNamespace("submenu");
const menuClass = ns$5.b();
const menuItemHorizontalWrapper = `${ns$5.b()}-item-horizontal-wrapper`;
const menuItemSelect$1 = `${ns$5.b()}-item-select`;
const menuActiveParent = `${ns$5.b()}-active-parent`;
function setDefaultIndent(indent) {
  defaultIndent.value = indent;
}
function pushElement(element) {
  elements.push(element);
}
function addLayer() {
  parents = [];
  elements.forEach((val) => {
    parents.push(val.el.parentElement);
  });
  const stack = [...parents];
  const getLayerFromClass = (className) => {
    var _a;
    return (_a = /layer_(\d*)/gim.exec(className)) == null ? void 0 : _a[1];
  };
  while (stack.length) {
    const shiftItem = stack.shift();
    if (shiftItem == null ? void 0 : shiftItem.classList.contains(menuClass)) {
      const children = shiftItem.children;
      stack.unshift(...Array.from(children));
      continue;
    } else {
      if (shiftItem.tagName === "DIV") {
        if (shiftItem.classList.contains(`${ns$5.b()}-item-vertical-wrapper`) || shiftItem.classList.contains(`${subNs$2.b()}-menu-item-vertical-wrapper`)) {
          const parent = shiftItem.parentElement;
          stack.unshift(...Array.from(shiftItem.children));
          if (parent == null ? void 0 : parent.classList.contains(menuClass)) {
            shiftItem.classList.add("layer_1");
          } else {
            let layer = getLayerFromClass((parent == null ? void 0 : parent.classList.value) || "");
            layer = Number(layer);
            shiftItem.classList.add(`layer_${layer}`);
          }
        } else {
          const parent = shiftItem.parentElement;
          let layer = getLayerFromClass((parent == null ? void 0 : parent.classList.value) || "");
          layer = Number(layer);
          shiftItem.classList.add(`layer_${layer}`);
          shiftItem.style.paddingLeft = `${(layer === 2 ? 1 : layer - 1) * defaultIndent.value}px`;
        }
      }
      if (shiftItem.tagName === "UL") {
        const parent = shiftItem.parentElement;
        const children = shiftItem.children;
        for (let i = 0; i < children.length; i++) {
          stack.unshift(children[i]);
        }
        const classList = (parent == null ? void 0 : parent.classList.value) || "";
        let layer = getLayerFromClass(classList);
        if (parent == null ? void 0 : parent.classList.contains(menuClass)) {
          layer = 1;
          shiftItem.classList.add(`layer_${2}`);
        } else {
          shiftItem.classList.add(`layer_${Number(layer) + 1}`);
          layer = Number(layer) + 1;
        }
      }
      if (shiftItem.tagName === "LI") {
        const parent = shiftItem.parentElement;
        const parentClassList = (parent == null ? void 0 : parent.classList.value) || "";
        let layer = getLayerFromClass(parentClassList);
        getLayerFromClass(parentClassList);
        layer = Number(layer);
        shiftItem.style.padding = `0 ${layer * defaultIndent.value}px`;
      }
    }
  }
}
function getRoot(path) {
  var _a;
  const paths = path;
  let rootElement = null;
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i];
    if ((_a = p == null ? void 0 : p.classList) == null ? void 0 : _a.contains(`${ns$5.b()}-horizontal`)) {
      rootElement = p;
    }
  }
  return rootElement;
}
function clearSelect_isHorizontal(ele, event) {
  let element = event.target;
  let stack = [];
  const root = getRoot(event.composedPath());
  stack = [...Array.from(root.children)];
  if (element.tagName === "SPAN") {
    element = element.parentElement;
  }
  while (stack.length) {
    const shiftItem = stack.shift();
    if ((shiftItem == null ? void 0 : shiftItem.tagName) === "UL" || (shiftItem == null ? void 0 : shiftItem.classList.contains(menuItemHorizontalWrapper))) {
      const children = shiftItem == null ? void 0 : shiftItem.children;
      stack.unshift(...Array.from(children));
    }
    if (shiftItem !== element) {
      shiftItem == null ? void 0 : shiftItem.classList.remove(menuItemSelect$1);
      shiftItem == null ? void 0 : shiftItem.classList.remove(menuActiveParent);
    }
  }
}
function clearSelect_notHorizontal(ele, event) {
  const stack = [];
  const path = event.path || event.composedPath && event.composedPath();
  for (let i = 0; i < path.length; i++) {
    const e = path[i];
    if (!e.classList.contains(menuClass)) {
      stack.push(...Array.from(e.children));
    } else {
      stack.push(...Array.from(e.children));
      break;
    }
  }
  while (stack.length) {
    const shiftItem = stack.shift();
    if ((shiftItem == null ? void 0 : shiftItem.tagName) === "UL" || (shiftItem == null ? void 0 : shiftItem.classList.contains(menuItemHorizontalWrapper))) {
      stack.push(...Array.from(shiftItem == null ? void 0 : shiftItem.children));
    }
    if (shiftItem !== ele) {
      if ((shiftItem == null ? void 0 : shiftItem.tagName) === "DIV") {
        stack.unshift(...Array.from(shiftItem == null ? void 0 : shiftItem.children));
      }
      shiftItem == null ? void 0 : shiftItem.classList.remove(menuItemSelect$1);
      shiftItem == null ? void 0 : shiftItem.classList.remove(menuActiveParent);
    }
  }
}
function clearSelect(ele, event, isHorizontal = false) {
  if (isHorizontal) {
    clearSelect_isHorizontal(ele, event);
  } else {
    clearSelect_notHorizontal(ele, event);
  }
}
function getLayer(el) {
  var _a;
  const getLayerReg = /layer_(\d{1,})/gim;
  const className = el.className;
  return (_a = getLayerReg.exec(className)) == null ? void 0 : _a[1];
}
const menuItemProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: ""
  },
  route: {
    type: [String, Object]
  }
};
const ns$4 = useNamespace("menu");
function initSelect(defaultSelectKeys, keys, isMultiple, disabled) {
  const isSelect = ref(false);
  if (!isMultiple) {
    if (defaultSelectKeys[0] === keys && !disabled.value) {
      isSelect.value = true;
    } else {
      isSelect.value = false;
    }
  } else {
    if (defaultSelectKeys.includes(keys)) {
      isSelect.value = true;
    } else {
      isSelect.value = false;
    }
  }
  return isSelect.value;
}
function addActiveParent(ele) {
  var _a, _b;
  let cur = ele.parentElement;
  while (!cur.classList.contains(ns$4.b())) {
    if (((_a = cur.firstElementChild) == null ? void 0 : _a.tagName) === "DIV") {
      (_b = cur == null ? void 0 : cur.firstElementChild) == null ? void 0 : _b.classList.add(`${ns$4.b()}-active-parent`);
    }
    cur = cur.parentElement;
  }
  return cur;
}
function changeRoute(props, router, useRouter, key) {
  if (useRouter && router) {
    const route = props.route || key;
    const routerResult = router.push(route).then((res) => {
      return res;
    });
    return { route, routerResult };
  }
  return void 0;
}
const ns$3 = useNamespace("menu");
function useClick(e) {
  const paths = e.composedPath();
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    if (path.classList.contains(`${ns$3.b()}-horizontal`)) {
      break;
    } else if (path.classList.contains(`${ns$3.b()}-item-horizontal-wrapper`)) {
      continue;
    } else {
      if (path.tagName !== "SPAN") {
        path.classList.add(`${ns$3.b()}-item-select`);
      }
    }
  }
}
const ns$2 = useNamespace("menu");
const menuItemSelect = `${ns$2.b()}-item-select`;
const menuItemDisabled = `${ns$2.b()}-item-disabled`;
var MenuItem = defineComponent({
  name: "DMenuItem",
  props: menuItemProps,
  setup(props, ctx) {
    var _a, _b;
    const instance = getCurrentInstance();
    const key = String(instance == null ? void 0 : instance.vnode.key);
    const menuStore = inject("menuStore");
    const mode = inject("mode");
    const multiple = inject("multiple");
    const indent = inject("defaultIndent");
    const isCollapsed = inject("isCollapsed");
    const defaultSelectKey = inject("defaultSelectKey");
    const {
      disabled
    } = toRefs(props);
    const isSelect = ref(initSelect(defaultSelectKey.value, key, multiple, disabled));
    const isLayer1 = ref(true);
    const rootMenuEmit = inject("rootMenuEmit");
    const useRouter = inject("useRouter");
    const router = instance == null ? void 0 : instance.appContext.config.globalProperties.$router;
    const classObject = computed(() => ({
      [`${ns$2.b()}-item`]: true,
      [`${ns$2.b()}-item-isCollapsed`]: isCollapsed.value,
      [menuItemSelect]: isSelect.value,
      [menuItemDisabled]: disabled.value
    }));
    menuStore.on("menuItem:clear:select", () => {
      isSelect.value = false;
    });
    const onClick = (e) => {
      var _a2;
      e.stopPropagation();
      const ele = e.currentTarget;
      let changeRouteResult = void 0;
      props.disabled && e.preventDefault();
      if (!props.disabled) {
        if (!multiple) {
          menuStore.emit("menuItem:clear:select");
          clearSelect(ele, e, mode.value === "horizontal");
          if (mode.value === "horizontal") {
            useClick(e);
          }
          isSelect.value = true;
          changeRouteResult = changeRoute(props, router, useRouter, key);
        } else {
          if (ele.classList.contains(menuItemSelect)) {
            rootMenuEmit("deselect", {
              type: "deselect",
              key,
              el: ele,
              e
            });
            isSelect.value = false;
            return;
          } else {
            isSelect.value = true;
            ele.classList.add(menuItemSelect);
          }
        }
        if (changeRouteResult === void 0) {
          rootMenuEmit("select", {
            type: "select",
            key,
            el: ele,
            e
          });
        } else {
          rootMenuEmit("select", {
            type: "select",
            key,
            el: ele,
            e,
            route: changeRouteResult
          });
        }
      }
      if (mode.value === "vertical") {
        const target = e.currentTarget;
        addActiveParent(target);
      }
      if (mode.value === "horizontal") {
        const ul = (_a2 = ele.parentElement) == null ? void 0 : _a2.parentElement;
        ul == null ? void 0 : ul.classList.add(`${ns$2.b()}-active-parent`);
      }
    };
    const icons = createVNode("span", {
      "class": `${ns$2.b()}-icon`
    }, [(_b = (_a = ctx.slots).icon) == null ? void 0 : _b.call(_a)]);
    const menuItems = ref(null);
    watch(disabled, () => {
      if (!multiple) {
        classObject.value[menuItemSelect] = false;
      }
    });
    watch(() => [...defaultSelectKey.value], (n) => {
      isSelect.value = initSelect(n, key, multiple, disabled);
      classObject.value[menuItemSelect] = isSelect.value;
    });
    onMounted(() => {
      var _a2, _b2;
      let oldPadding = "";
      const ele = menuItems.value;
      if (mode.value === "vertical") {
        if ((_b2 = (_a2 = ele.parentElement) == null ? void 0 : _a2.parentElement) == null ? void 0 : _b2.classList.contains(ns$2.b())) {
          isLayer1.value = true;
          if (isLayer1.value) {
            ele.style.paddingRight = ``;
            ele.style.paddingLeft = `${indent}px`;
          }
          watch(isCollapsed, (val) => {
            if (val) {
              if (ele.style.padding !== "0") {
                oldPadding = ele.style.padding;
              }
              setTimeout(() => {
                ele.style.padding = "0";
                ele.style.width = "";
                ele.style.textAlign = `center`;
              }, 300);
              ele.style.display = `block`;
            } else {
              ele.style.padding = `${oldPadding}`;
              ele.style.textAlign = ``;
              ele.style.display = `flex`;
            }
          });
        } else {
          isLayer1.value = false;
        }
      }
    });
    return () => {
      return mode.value === "vertical" ? createVNode("div", {
        "class": `${ns$2.b()}-item-vertical-wrapper`
      }, [createVNode("li", {
        "class": classObject.value,
        "onClick": onClick,
        "ref": menuItems
      }, [ctx.slots.icon !== void 0 && icons, props.href === "" ? createVNode(Transition, {
        "name": "fade"
      }, {
        default: () => {
          var _a2, _b2;
          return [withDirectives(createVNode("span", null, [(_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2)]), [[vShow, !isCollapsed.value]])];
        }
      }) : createVNode("a", {
        "href": props.href
      }, [createVNode(Transition, {
        "name": "fade"
      }, {
        default: () => {
          var _a2, _b2;
          return [(_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2)];
        }
      })])])]) : createVNode("li", {
        "class": classObject.value,
        "onClick": onClick,
        "ref": menuItems
      }, [ctx.slots.icon !== void 0 && icons, props.href === "" ? createVNode(Transition, {
        "name": "fade"
      }, {
        default: () => {
          var _a2, _b2;
          return [withDirectives(createVNode("span", null, [(_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2)]), [[vShow, !isCollapsed.value]])];
        }
      }) : createVNode("a", {
        "href": props.href
      }, [createVNode(Transition, {
        "name": "fade"
      }, {
        default: () => {
          var _a2, _b2;
          return [(_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2)];
        }
      })])]);
    };
  }
});
function randomId(n = 8) {
  const str = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str[parseInt((Math.random() * str.length).toString())];
  }
  return result;
}
function useNearestMenuElement(ele) {
  while (ele && ele.tagName !== "LI" && ele.tagName !== "UL") {
    ele = ele.parentElement;
  }
  return ele;
}
const elTransition = "0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out";
const TransitionObj = {
  "before-enter"(el) {
    el.style.transition = elTransition;
    el.setAttribute("data-oldPadding", el.style.padding);
    el.setAttribute("data-oldMargin", el.style.margin);
    el.style.height = "0";
    el.style.padding = "0";
    el.style.margin = "0";
  },
  enter(el) {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "";
    }
    el.style.padding = el.getAttribute("data-oldPadding");
    el.style.margin = el.getAttribute("data-oldMargin");
    el.style.overflow = "hidden";
  },
  "after-enter"(el) {
    el.style.transition = "";
    el.style.transition = "";
    el.style.height = "";
    el.style.overflow = el.getAttribute("data-overflow");
  },
  "before-leave"(el) {
    if (!el.dataset) {
      el.dataset = {};
    }
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;
    el.style.height = el.scrollHeight + "px";
    el.style.overflow = "hidden";
  },
  leave(el) {
    if (el.scrollHeight !== 0) {
      el.style.transition = elTransition;
      el.style.height = "0";
      el.style.paddingTop = "0";
      el.style.paddingBottom = "0";
    }
  },
  "after-leave"(el) {
    el.style.transition = "";
    el.style.height = "";
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }
};
var MenuTransition = defineComponent({
  name: "DMenuTransition",
  setup(prop, ctx) {
    return () => {
      return createVNode(Transition, {
        "onBeforeEnter": (e) => TransitionObj["before-enter"](e),
        "onBeforeLeave": (e) => TransitionObj["before-leave"](e),
        "onEnter": (e) => TransitionObj["enter"](e),
        "onAfterEnter": (e) => TransitionObj["after-enter"](e),
        "onLeave": (e) => TransitionObj["leave"](e),
        "onAfterLeave": (e) => TransitionObj["after-leave"](e)
      }, {
        default: () => {
          var _a, _b;
          return [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)];
        }
      });
    };
  }
});
const subMenuProps = {
  title: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  }
};
const ns$1 = useNamespace("menu");
const subNs$1 = useNamespace("submenu");
const menuItemHorizontalWrapperHidden = `${ns$1.b()}-item-horizontal-wrapper-hidden`;
const menuItemHorizontalWrapperShow = `${ns$1.b()}-item-horizontal-wrapper-show`;
function useShowSubMenu(eventName, e, wrapper) {
  const target = e.currentTarget;
  const targetParent = target.parentElement;
  const wrapperChildren = wrapper.children;
  wrapper.style.padding = `0 20px !important`;
  if (eventName === "mouseenter") {
    if ((targetParent == null ? void 0 : targetParent.tagName) === "DIV") {
      wrapper.classList.add(`${ns$1.b()}-item-horizontal-wrapper-level`);
      const { width } = target.getClientRects()[0];
      wrapper.style.top = `0px`;
      wrapper.style.left = `${width}px`;
    } else {
      wrapper.style.top = `26px`;
      wrapper.style.left = `0px`;
    }
    wrapper.classList.remove(menuItemHorizontalWrapperHidden);
    wrapper.classList.add(menuItemHorizontalWrapperShow);
    for (let i = 0; i < wrapperChildren.length; i++) {
      const ul = wrapperChildren[i];
      if (ul.tagName === "UL" && ul.classList.contains(subNs$1.b())) {
        const levelUlWrapper = ul.getElementsByClassName(`${ns$1.b()}-item-horizontal-wrapper`)[0];
        ul.addEventListener("mouseenter", (ev) => {
          ev.stopPropagation();
          useShowSubMenu("mouseenter", ev, levelUlWrapper);
          levelUlWrapper.classList.remove(menuItemHorizontalWrapperHidden);
          levelUlWrapper.classList.add(menuItemHorizontalWrapperShow);
        });
        ul.addEventListener("mouseleave", (ev) => {
          ev.stopPropagation();
          useShowSubMenu("mouseleave", ev, levelUlWrapper);
          levelUlWrapper.classList.remove(menuItemHorizontalWrapperShow);
          levelUlWrapper.classList.add(menuItemHorizontalWrapperHidden);
        });
      }
    }
  }
  if (eventName === "mouseleave") {
    wrapper.classList.remove(menuItemHorizontalWrapperShow);
    wrapper.classList.add(menuItemHorizontalWrapperHidden);
  }
}
const ns = useNamespace("menu");
const subNs = useNamespace("submenu");
const subMenuClass = subNs.b();
var SubMenu = defineComponent({
  name: "DSubMenu",
  props: subMenuProps,
  setup(props, ctx) {
    const isShow = ref(true);
    const {
      vnode: {
        key
      }
    } = getCurrentInstance();
    let key_ = String(key);
    const defaultOpenKeys = inject("openKeys");
    const isOpen = ref(defaultOpenKeys.value.includes(key_));
    const indent = inject("defaultIndent");
    const isCollapsed = inject("isCollapsed");
    const mode = inject("mode");
    const subMenuItemContainer = ref(null);
    const parentEmit = inject("rootMenuEmit");
    const isHorizontal = mode.value === "horizontal";
    if (key_ === "null") {
      console.warn(`[devui][menu]: Key can not be null`);
      key_ = `randomKey-${randomId(16)}`;
    }
    const clickHandle = (e) => {
      e.stopPropagation();
      const ele = useNearestMenuElement(e.target);
      if (ele.classList.contains(subMenuClass) && isHorizontal) {
        return;
      }
      if (isHorizontal) {
        clearSelect(ele, e, true);
        useClick(e);
      }
      if (!props.disabled && mode.value !== "horizontal") {
        const cur = useNearestMenuElement(e.target);
        const idx = defaultOpenKeys.value.indexOf(key_);
        if (idx >= 0 && cur.tagName === "UL") {
          defaultOpenKeys.value.splice(idx, 1);
        } else {
          if (cur.tagName === "UL") {
            defaultOpenKeys.value.push(key_);
          }
        }
        isOpen.value = defaultOpenKeys.value.indexOf(key_) >= 0;
        parentEmit("submenu-change", {
          type: "submenu-change",
          state: isOpen.value,
          key: key_,
          el: ele
        });
      }
    };
    const wrapper = ref(null);
    let wrapperDom;
    const subMenu = ref(null);
    const title = ref(null);
    let oldPadding = "";
    const class_layer = ref("");
    watchEffect(() => {
      wrapperDom = wrapper.value;
      pushElement({
        el: subMenu.value
      });
    }, {
      flush: "post"
    });
    watch(() => defaultOpenKeys, (n) => {
      if (n.value.includes(key_)) {
        isOpen.value = true;
      } else {
        isOpen.value = false;
      }
    }, {
      deep: true
    });
    onMounted(() => {
      var _a;
      const subMenuTitle = title.value;
      const subMenuWrapper = subMenu.value;
      addLayer();
      class_layer.value = `layer_${(_a = Array.from(subMenuWrapper.classList).at(-1)) == null ? void 0 : _a.replace("layer_", "")}`;
      if (isHorizontal && !props.disabled) {
        subMenu.value.addEventListener("mouseenter", (ev) => {
          ev.stopPropagation();
          useShowSubMenu("mouseenter", ev, wrapperDom);
        });
        subMenu.value.addEventListener("mouseleave", (ev) => {
          ev.stopPropagation();
          useShowSubMenu("mouseleave", ev, wrapperDom);
        });
      }
      watch(isCollapsed, (newValue) => {
        const layer = Number(getLayer(subMenuWrapper));
        if (!Number.isNaN(layer)) {
          layer > 2 && (isShow.value = !isCollapsed.value);
        }
        if (newValue) {
          subMenuTitle.style.padding !== "0" && (oldPadding = subMenuTitle.style.padding);
          setTimeout(() => {
            subMenuTitle.style.padding = "0";
            subMenuTitle.style.width = "";
            subMenuTitle.style.textAlign = `center`;
          }, 300);
          subMenuTitle.style.display = `block`;
        } else {
          subMenuTitle.style.padding = `${oldPadding}`;
          subMenuTitle.style.textAlign = ``;
          subMenuTitle.style.display = `flex`;
        }
      });
    });
    return () => {
      var _a, _b, _c, _d;
      return withDirectives(createVNode("ul", {
        "onClick": clickHandle,
        "class": [subMenuClass, class_layer.value, props["disabled"] && `${subMenuClass}-disabled`],
        "ref": subMenu
      }, [createVNode("div", {
        "class": [`${subMenuClass}-title`],
        "style": `padding: 0 ${indent}px`,
        "ref": title
      }, [createVNode("span", {
        "class": `${ns.b()}-icon`
      }, [(_b = (_a = ctx.slots) == null ? void 0 : _a.icon) == null ? void 0 : _b.call(_a)]), withDirectives(createVNode("span", {
        "class": `${subMenuClass}-title-content`
      }, [props.title]), [[vShow, !isCollapsed.value]]), withDirectives(createVNode("i", {
        "class": {
          "icon icon-chevron-up": class_layer.value !== `layer_${subMenuClass}`,
          "icon icon-chevron-right": class_layer.value === `layer_${subMenuClass}`,
          "is-opened": isOpen.value
        }
      }, null), [[vShow, !isCollapsed.value && key !== "overflowContainer"]])]), isHorizontal ? withDirectives(createVNode("div", {
        "class": `${ns.b()}-item-horizontal-wrapper ${ns.b()}-item-horizontal-wrapper-hidden`,
        "ref": wrapper
      }, [(_d = (_c = ctx.slots).default) == null ? void 0 : _d.call(_c)]), [[vShow, !props.disabled]]) : createVNode(MenuTransition, null, {
        default: () => {
          var _a2, _b2;
          return [withDirectives(createVNode("div", {
            "class": [`${subMenuClass}-menu-item-vertical-wrapper`],
            "ref": subMenuItemContainer
          }, [(_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2)]), [[vShow, isOpen.value]])];
        }
      })]), [[vShow, isShow.value]]);
    };
  }
});
const menuProps = {
  width: {
    type: String,
    default: ""
  },
  collapsed: {
    type: Boolean,
    default: false
  },
  collapsedIndent: {
    type: Number,
    default: 24
  },
  indentSize: {
    type: Number,
    default: 24
  },
  multiple: {
    type: Boolean,
    default: false
  },
  openKeys: {
    type: Array,
    default: []
  },
  defaultSelectKeys: {
    type: Array,
    default: []
  },
  mode: {
    type: String,
    default: "vertical"
  },
  router: {
    type: Boolean,
    default: false
  }
};
var menu = "";
const recordTable = {};
class Store {
  constructor(rootName) {
    __publicField(this, "rootMenuName");
    this.rootMenuName = rootName;
  }
  on(eventName, fn) {
    var _a;
    if (!((_a = recordTable == null ? void 0 : recordTable[this.rootMenuName]) == null ? void 0 : _a[eventName])) {
      Reflect.set(recordTable[this.rootMenuName], eventName, []);
    }
    recordTable[this.rootMenuName][eventName].push(fn);
  }
  emit(eventName, ...args) {
    recordTable[this.rootMenuName][eventName].forEach((fn) => fn(...args));
  }
  off(eventName, fn) {
    const idx = recordTable[this.rootMenuName][eventName].indexOf(fn);
    if (idx >= 0) {
      recordTable[this.rootMenuName][eventName].splice(idx, 1);
    }
  }
}
function useStore(rootName) {
  if (!recordTable[rootName]) {
    Reflect.set(recordTable, rootName, {});
  }
  return new Store(rootName);
}
var Menu = defineComponent({
  name: "DMenu",
  props: menuProps,
  emits: ["select", "deselect", "submenu-change"],
  setup(props, ctx) {
    const ns2 = useNamespace("menu");
    const {
      openKeys,
      mode,
      collapsed,
      defaultSelectKeys
    } = toRefs(props);
    const menuId = randomId(16);
    const store = useStore(menuId);
    provide("menuStore", store);
    provide("isCollapsed", collapsed);
    provide("defaultIndent", props["indentSize"]);
    provide("multiple", props["multiple"]);
    provide("openKeys", openKeys);
    provide("defaultSelectKey", defaultSelectKeys);
    provide("mode", mode);
    provide("collapsedIndent", props["collapsedIndent"]);
    provide("rootMenuEmit", ctx.emit);
    provide("useRouter", props.router);
    setDefaultIndent(props["indentSize"]);
    const menuRoot = ref(null);
    const overflowItemLength = ref(0);
    const overflowContainer = ref(null);
    const selectClassName = `${ns2.b()}-item-select`;
    const rootClassName = computed(() => ({
      [`${ns2.b()}`]: true,
      [`${ns2.b()}-vertical`]: mode.value === "vertical",
      [`${ns2.b()}-horizontal`]: mode.value === "horizontal",
      [`${ns2.b()}-collapsed`]: collapsed.value
    }));
    const overflowContainerClassName = reactive({
      [selectClassName]: false,
      [`${ns2.b()}-overflow-container`]: true
    });
    const resetOverflowContainerSelectState = (e) => {
      const children = Array.from(e.children);
      for (const item of children) {
        if (item.classList.contains(selectClassName)) {
          overflowContainerClassName[selectClassName] = true;
          break;
        } else {
          overflowContainerClassName[selectClassName] = false;
        }
      }
    };
    onMounted(() => {
      var _a;
      if (props["mode"] === "horizontal") {
        let flag = false;
        const overflowContainerElement = (_a = overflowContainer.value) == null ? void 0 : _a.$el;
        const root = menuRoot.value;
        const children = root.children;
        const container = overflowContainerElement.children[1];
        const ob = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              const cloneNode = entry.target.cloneNode(true);
              if (entry.target.classList.contains(`${ns2.b()}-overflow-container`)) {
                if (flag && entry.target.previousElementSibling && container.children.length) {
                  root.appendChild(entry.target.previousElementSibling);
                } else {
                  flag = true;
                }
              } else {
                overflowItemLength.value += 1;
                entry.target.style.visibility = "hidden";
                if (overflowContainerElement.nextSibling) {
                  root.insertBefore(entry.target, overflowContainerElement.nextSibling);
                } else {
                  root.appendChild(entry.target);
                }
                container.appendChild(cloneNode);
                resetOverflowContainerSelectState(container);
              }
            } else {
              if (!entry.target.classList.contains(`${ns2.b()}-overflow-container`) && entry.target.style.visibility === "hidden") {
                ob.unobserve(entry.target);
                root.insertBefore(entry.target, overflowContainerElement);
                entry.target.style.visibility = "";
                const obItem = overflowContainerElement.previousElementSibling;
                const canObAgin = obItem && entry.boundingClientRect.width % entry.target.getBoundingClientRect().width === 0;
                if (canObAgin) {
                  ob.observe(obItem);
                }
                if (obItem == null ? void 0 : obItem.classList.contains("devui-submenu")) {
                  const sub = obItem;
                  const wrapper = obItem.children[1];
                  sub.addEventListener("mouseenter", (ev) => {
                    ev.stopPropagation();
                    useShowSubMenu("mouseenter", ev, wrapper);
                  });
                  sub.addEventListener("mouseleave", (ev) => {
                    ev.stopPropagation();
                    useShowSubMenu("mouseleave", ev, wrapper);
                  });
                }
                overflowItemLength.value -= 1;
                ob.observe(entry.target);
                if (container.lastChild) {
                  container.removeChild(container.lastChild);
                }
                resetOverflowContainerSelectState(container);
              }
            }
          });
        }, {
          root,
          threshold: 1,
          rootMargin: "8px"
        });
        for (let i = 0; i < children.length; i++) {
          ob.observe(children[i]);
        }
      }
    });
    return () => {
      var _a, _b;
      return createVNode("ul", {
        "ref": menuRoot,
        "class": rootClassName.value,
        "style": [props["collapsed"] ? `width:${props["collapsedIndent"] * 2}px` : `width: ${props["width"]}`]
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a), withDirectives(createVNode(SubMenu, {
        "ref": overflowContainer,
        "key": "overflowContainer",
        "title": "...",
        "class": overflowContainerClassName
      }, null), [[vShow, overflowItemLength.value > 0 && mode.value === "horizontal"]])]);
    };
  }
});
var index = {
  title: "Menu \u83DC\u5355",
  category: "\u5BFC\u822A",
  status: "100%",
  install(app) {
    app.component(Menu.name, Menu);
    app.component(MenuItem.name, MenuItem);
    app.component(SubMenu.name, SubMenu);
  }
};
export { Menu, MenuItem, SubMenu, index as default };
