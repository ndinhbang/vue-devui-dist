var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { defineComponent, ref, computed, onMounted, onUnmounted, provide, createVNode, inject } from "vue";
const rowProps = {
  align: {
    type: String,
    default: "top"
  },
  gutter: {
    type: [Number, Object, Array],
    default: 0
  },
  justify: {
    type: String,
    default: "start"
  },
  wrap: {
    type: Boolean,
    default: false
  }
};
const numberProp = Number;
const colPropsBaseStyle = {
  flex: [String, Number],
  order: numberProp
};
const colPropsBaseClass = {
  offset: numberProp,
  pull: numberProp,
  push: numberProp,
  span: numberProp
};
const screenSizesProp = [Number, Object];
const screenSizes = {
  xs: screenSizesProp,
  sm: screenSizesProp,
  md: screenSizesProp,
  lg: screenSizesProp,
  xl: screenSizesProp,
  xxl: screenSizesProp
};
const colProps = __spreadValues(__spreadValues(__spreadValues({}, colPropsBaseStyle), colPropsBaseClass), screenSizes);
const RESULT_SCREEN = ["xxl", "xl", "lg", "md", "sm", "xs"];
const screenMedias = {
  xs: "screen and (max-width: 575px)",
  sm: "screen and (min-width: 576px)",
  md: "screen and (min-width: 768px)",
  lg: "screen and (min-width: 992px)",
  xl: "screen and (min-width: 1200px)",
  xxl: "screen and (min-width: 1600px)"
};
const subscribers = /* @__PURE__ */ new Map();
let subUid = -1;
const screen = {};
const results = {};
function dispatch() {
  subscribers.forEach((value) => {
    value(__spreadValues({}, screen));
  });
}
function register() {
  Object.keys(screenMedias).forEach((key) => {
    const result = window.matchMedia(screenMedias[key]);
    if (result.matches) {
      screen[key] = true;
      dispatch();
    }
    const listener = (e) => {
      screen[key] = e.matches;
      dispatch();
    };
    result.addEventListener("change", listener);
    results[key] = {
      res: result,
      listener
    };
  });
}
function responesScreen(func) {
  if (!subscribers.size) {
    register();
  }
  subUid += 1;
  subscribers.set(subUid, func);
  func(__spreadValues({}, screen));
  return subUid;
}
function unRegister() {
  Object.keys(screenMedias).forEach((key) => {
    const handler = results[key];
    handler.res.removeEventListener("change", handler.listener);
  });
  subscribers.clear();
}
function removeSubscribeCb(id) {
  subscribers.delete(id);
  if (subscribers.size === 0) {
    unRegister();
  }
}
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
var row = "";
var Row = defineComponent({
  name: "DRow",
  props: rowProps,
  emits: [],
  setup(props, {
    slots
  }) {
    const gutterScreenSize = ref({});
    const ns = useNamespace("row");
    const rowClass = computed(() => ({
      [ns.em("align", props.align)]: true,
      [ns.em("justify", props.justify)]: true,
      [ns.e("wrap")]: props.wrap
    }));
    let token;
    onMounted(() => {
      token = responesScreen((screen2) => {
        gutterScreenSize.value = screen2;
      });
    });
    onUnmounted(() => {
      removeSubscribeCb(token);
    });
    const gutterStyle = computed(() => {
      if (!props.gutter) {
        return {};
      }
      let currentGutter = [0, 0];
      if (Array.isArray(props.gutter)) {
        currentGutter = props.gutter;
      } else if (typeof props.gutter === "number") {
        currentGutter = [props.gutter, 0];
      } else {
        RESULT_SCREEN.some((size) => {
          const gzs = props.gutter[size];
          if (gutterScreenSize.value[size] && gzs) {
            if (typeof gzs === "number") {
              currentGutter = [gzs, 0];
            } else {
              currentGutter = gzs;
            }
            return true;
          }
          return false;
        });
      }
      const paddingLeft = `${(currentGutter[0] || 0) / 2}px`;
      const paddingRight = `${(currentGutter[0] || 0) / 2}px`;
      const paddingTop = `${(currentGutter[1] || 0) / 2}px`;
      const paddingBottom = `${(currentGutter[1] || 0) / 2}px`;
      return {
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom
      };
    });
    provide("gutterStyle", gutterStyle);
    return () => {
      var _a;
      return createVNode("div", {
        "class": [ns.b(), rowClass.value]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
const colNs = useNamespace("col");
function useColClassNames(props) {
  return computed(() => ({
    [colNs.em("span", props.span ? String(props.span) : "")]: true,
    [colNs.em("offset", props.offset ? String(props.offset) : "")]: true,
    [colNs.em("pull", props.pull ? String(props.pull) : "")]: true,
    [colNs.em("push", props.push ? String(props.push) : "")]: true
  }));
}
function setSpace(val) {
  return ` ${val.trim()}${val && " "}`;
}
function useSize(colSizes) {
  const keys = Object.keys(colSizes).filter((key) => key in screenSizes);
  return computed(() => {
    return keys.reduce((total, key) => {
      const valueType = typeof colSizes[key];
      if (valueType === "number") {
        total = `${setSpace(total)}${colNs.em(key, `span-${colSizes[key]}`)}`;
      } else if (valueType === "object") {
        const colSizesKeys = Object.keys(colSizes[key]);
        const sum = colSizesKeys.filter((item) => item in colPropsBaseClass).reduce((tot, k) => {
          const baseClass = colSizes[key];
          const _class = baseClass[k];
          if (typeof _class !== "number") {
            return "";
          } else {
            tot = `${setSpace(tot)}${colNs.em(key, `${k}-${_class}`)}`;
          }
          return tot;
        }, "");
        total = `${setSpace(total)}${sum}`;
      }
      return total;
    }, "");
  });
}
var col = "";
var Col = defineComponent({
  name: "DCol",
  props: colProps,
  setup(props, {
    slots
  }) {
    const ns = useNamespace("col");
    const formatFlex = (flex) => {
      if (typeof flex === "number") {
        return `${flex} ${flex} auto`;
      }
      if (/^\d+(\.\d+)?(px|rem|em|%)$/.test(flex)) {
        return `0 0 ${flex}`;
      }
      return flex;
    };
    const colClassNames = useColClassNames(props);
    const sizeClassNames = useSize(props);
    const colStyle = computed(() => ({
      flex: formatFlex(props.flex),
      order: props.order
    }));
    const gutterStyle = inject("gutterStyle");
    return () => {
      var _a;
      return createVNode("div", {
        "class": [ns.b(), colClassNames.value, sizeClassNames.value],
        "style": __spreadValues(__spreadValues({}, colStyle.value), gutterStyle == null ? void 0 : gutterStyle.value)
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
var index = {
  title: "Grid \u6805\u683C",
  category: "\u5E03\u5C40",
  status: "100%",
  install(app) {
    app.component(Row.name, Row);
    app.component(Col.name, Col);
  }
};
export { Col, Row, colProps, colPropsBaseClass, colPropsBaseStyle, index as default, rowProps, screenSizes };
