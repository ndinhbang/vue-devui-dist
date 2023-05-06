import { reactive, ref, defineComponent, provide, computed, createVNode, inject, onMounted, Transition } from "vue";
const panelProps = {
  type: {
    type: String,
    default: "default"
  },
  cssClass: {
    type: String,
    default: ""
  },
  isCollapsed: {
    type: Boolean,
    default: false
  },
  beforeToggle: {
    type: Function,
    default: null
  },
  showAnimation: {
    type: Boolean,
    default: true
  },
  hasLeftPadding: {
    type: Boolean,
    default: true
  }
};
const option = reactive({});
class Store {
  static getByKey(timeStamp) {
    return option[timeStamp];
  }
  static state() {
    return option;
  }
  static setData(key, value) {
    option[key] = ref(value);
  }
}
var panel = "";
var Panel = defineComponent({
  name: "DPanel",
  props: panelProps,
  emits: ["toggle"],
  setup(props, ctx) {
    provide("beforeToggle", props.beforeToggle);
    provide("showAnimation", computed(() => props.showAnimation));
    provide("hasLeftPadding", computed(() => props.hasLeftPadding));
    const isCollapsed = ref(props.isCollapsed);
    const type = computed(() => props.type);
    const cssClass = computed(() => props.cssClass);
    const timeStamp = new Date().getTime().toString() + Math.random();
    const onToggle = () => {
      ctx.emit("toggle", Store.getByKey(`isCollapsed[${timeStamp}]`));
    };
    Store.setData(`isCollapsed[${timeStamp}]`, isCollapsed.value);
    return () => {
      var _a, _b;
      return createVNode("div", {
        "onClick": onToggle,
        "class": `devui-panel devui-panel-${type.value} ${cssClass.value}`
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
    };
  }
});
var PanelHeader = defineComponent({
  name: "DPanelHeader",
  props: panelProps,
  emits: ["toggle"],
  setup(props, ctx) {
    const beforeToggle = inject("beforeToggle");
    const keys = Object.keys(Store.state());
    const key = keys.pop();
    const isCollapsed = ref(Store.state()[key]);
    const changeFlag = ref();
    let header = null;
    const res = ref(isCollapsed.value);
    let changeResult = true;
    const done = () => {
      res.value = !res.value;
      if (!changeFlag.value) {
        if (res.value) {
          Store.setData(`${key}`, res.value);
          isCollapsed.value = res.value;
          ctx.emit("toggle", res.value);
        }
        return;
      }
      if (res.value !== void 0) {
        Store.setData(`${key}`, res.value);
        isCollapsed.value = res.value;
        ctx.emit("toggle", res.value);
      }
    };
    const canToggle = async () => {
      if (beforeToggle) {
        const tmpRes = beforeToggle(isCollapsed, done);
        if (typeof tmpRes !== "undefined") {
          if (tmpRes instanceof Promise) {
            changeResult = await tmpRes;
          } else {
            changeResult = tmpRes;
          }
        } else {
          changeResult = true;
        }
      }
      return changeResult;
    };
    canToggle().then((val) => changeFlag.value = val);
    const toggleBody = () => {
      canToggle().then((val) => {
        changeFlag.value = val;
        if (!val) {
          if (!isCollapsed.value) {
            Store.setData(`${key}`, !isCollapsed.value);
            isCollapsed.value = !isCollapsed.value;
            ctx.emit("toggle", isCollapsed.value);
          }
          return;
        }
        if (isCollapsed.value !== void 0) {
          Store.setData(`${key}`, !isCollapsed.value);
          isCollapsed.value = !isCollapsed.value;
          ctx.emit("toggle", isCollapsed.value);
        }
      });
    };
    return () => {
      var _a, _b;
      if (ctx.slots.default) {
        header = createVNode("div", {
          "class": "devui-panel-heading",
          "onClick": toggleBody,
          "style": {
            cursor: changeFlag.value ? "pointer" : "auto"
          }
        }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
      }
      return header;
    };
  }
});
var PanelBody = defineComponent({
  name: "DPanelBody",
  props: panelProps,
  setup(props, ctx) {
    const animationName = inject("showAnimation");
    const hasLeftPadding = inject("hasLeftPadding");
    const keys = Object.keys(Store.state());
    const key = keys.pop();
    const isCollapsed = Store.state();
    const bodyEl = ref();
    onMounted(() => {
      if (bodyEl.value) {
        const dom = bodyEl.value;
        if (isCollapsed[key]) {
          dom.style.height = `${dom.offsetHeight}px`;
        }
      }
    });
    const enter = (element) => {
      const el = element;
      el.style.height = "";
      const height = el.offsetHeight;
      el.style.height = "0px";
      el.offsetHeight;
      el.style.height = `${height}px`;
    };
    const leave = (element) => {
      const el = element;
      el.style.height = "0px";
    };
    return () => {
      return createVNode("div", {
        "class": `devui-panel devui-panel-${props.type} ${props.cssClass}`
      }, [createVNode(Transition, {
        "name": animationName.value ? "devui-panel" : "",
        "onEnter": enter,
        "onLeave": leave
      }, {
        default: () => {
          var _a, _b;
          return [isCollapsed[key] === void 0 || isCollapsed[key] ? createVNode("div", {
            "ref": bodyEl,
            "class": `devui-panel-body ${isCollapsed[key] !== void 0 ? "devui-panel-body-collapse" : ""} ${!hasLeftPadding.value ? "no-left-padding" : ""}`
          }, [createVNode("div", {
            "class": "devui-panel-content"
          }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)])]) : null];
        }
      })]);
    };
  }
});
var PanelFooter = defineComponent({
  name: "DPanelFooter",
  setup(props, ctx) {
    return () => {
      var _a, _b;
      const footerContent = ctx.slots.default ? createVNode("div", {
        "class": "devui-panel-footer"
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]) : null;
      return footerContent;
    };
  }
});
var index = {
  title: "Panel \u9762\u677F",
  category: "\u901A\u7528",
  status: "100%",
  deprecated: {
    value: true,
    reason: "Panel \u662F\u6298\u53E0\u9762\u677F\u7684\u4E00\u79CD\u7279\u6B8A\u5F62\u6001\uFF0C\u5E94\u8BE5\u4F7F\u7528\u66F4\u901A\u7528\u7684 Collapse \u66FF\u4EE3\u3002"
  },
  install(app) {
    app.component(Panel.name, Panel);
    app.component(PanelHeader.name, PanelHeader);
    app.component(PanelBody.name, PanelBody);
    app.component(PanelFooter.name, PanelFooter);
  }
};
export { Panel, PanelBody, PanelFooter, PanelHeader, index as default, panelProps };
