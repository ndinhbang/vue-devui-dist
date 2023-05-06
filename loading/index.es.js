var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { h, render, defineComponent, ref, createVNode } from "vue";
const COMPONENT_CONTAINER_SYMBOL = Symbol("dev_component_container");
function createComponent(component, props, children = null) {
  const vnode = h(component, __spreadValues({}, props), children);
  const container = document.createElement("div");
  vnode[COMPONENT_CONTAINER_SYMBOL] = container;
  render(vnode, container);
  return vnode.component;
}
function unmountComponent(ComponnetInstance) {
  render(null, ComponnetInstance == null ? void 0 : ComponnetInstance.vnode[COMPONENT_CONTAINER_SYMBOL]);
}
class View {
  constructor() {
    __publicField(this, "top", "50%");
    __publicField(this, "left", "50%");
  }
}
const loadingProps = {
  message: String,
  backdrop: Boolean,
  view: {
    type: Object,
    default: () => new View()
  },
  zIndex: Number,
  isFull: {
    type: Boolean,
    default: false
  }
};
class LoadingOptions {
  constructor() {
    __publicField(this, "target");
    __publicField(this, "message");
    __publicField(this, "loadingTemplateRef");
    __publicField(this, "backdrop", true);
    __publicField(this, "positionType", "relative");
    __publicField(this, "view", new View());
    __publicField(this, "zIndex");
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
var loading$1 = "";
var Loading = defineComponent({
  name: "Loading",
  inheritAttrs: false,
  props: loadingProps,
  setup(props) {
    const style = {
      top: props.view.top,
      left: props.view.left,
      zIndex: props.zIndex
    };
    if (!props.message) {
      style.background = "none";
    }
    const isShow = ref(false);
    const open = () => {
      isShow.value = true;
    };
    const close = () => {
      isShow.value = false;
    };
    return {
      style,
      isShow,
      open,
      close
    };
  },
  render() {
    var _a;
    const {
      isShow,
      isFull,
      backdrop,
      style,
      message,
      $slots
    } = this;
    const ns = useNamespace("loading");
    return isShow && createVNode("div", {
      "class": [ns.b(), isFull ? ns.m("full") : ""]
    }, [((_a = $slots.default) == null ? void 0 : _a.call($slots)) || createVNode("div", {
      "class": ns.e("wrapper")
    }, [backdrop ? createVNode("div", {
      "class": ns.e("mask")
    }, null) : null, createVNode("div", {
      "style": style,
      "class": ns.e("area")
    }, [createVNode("div", {
      "class": ns.e("busy-default-spinner")
    }, [createVNode("div", {
      "class": ns.e("bar1")
    }, null), createVNode("div", {
      "class": ns.e("bar2")
    }, null), createVNode("div", {
      "class": ns.e("bar3")
    }, null), createVNode("div", {
      "class": ns.e("bar4")
    }, null)]), message ? createVNode("span", {
      "class": ns.e("text")
    }, [message]) : null])])]);
  }
});
const loadingConstructor$1 = defineComponent(Loading);
const cacheTarget = /* @__PURE__ */ new WeakMap();
const loading = {
  open(options = {}) {
    var _a, _b, _c;
    const parent = options.target || document.body;
    if (cacheTarget.has(parent)) {
      return cacheTarget.get(parent);
    }
    if (parent.style) {
      parent.style.position = options.positionType;
    }
    const isFull = document.body === parent;
    options = __spreadValues(__spreadValues({}, new LoadingOptions()), options);
    const instance = createComponent(loadingConstructor$1, __spreadProps(__spreadValues({}, options), {
      isFull
    }), options.loadingTemplateRef ? () => options.loadingTemplateRef : null);
    cacheTarget.set(parent, instance);
    (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.open();
    parent.appendChild((_b = instance == null ? void 0 : instance.proxy) == null ? void 0 : _b.$el);
    const close = (_c = instance == null ? void 0 : instance.proxy) == null ? void 0 : _c.close;
    if (instance) {
      instance.loadingInstance = instance == null ? void 0 : instance.proxy;
      if (instance.loadingInstance) {
        instance.loadingInstance.close = (...args) => {
          cacheTarget.delete(parent);
          close == null ? void 0 : close(...args);
        };
      }
    }
    return instance;
  }
};
const loadingConstructor = defineComponent(Loading);
const cacheInstance = /* @__PURE__ */ new WeakSet();
const isEmpty = (val) => {
  if (!val) {
    return true;
  }
  if (Array.isArray(val)) {
    return val.length === 0;
  }
  if (val instanceof Set || val instanceof Map) {
    return val.size === 0;
  }
  if (val instanceof Promise) {
    return false;
  }
  if (typeof val === "object") {
    try {
      return Object.keys(val).length === 0;
    } catch (e) {
      return false;
    }
  }
  return false;
};
const getType = (vari) => {
  return Object.prototype.toString.call(vari).slice(8, -1).toLowerCase();
};
const isPromise = (value) => {
  const type = getType(value);
  switch (type) {
    case "promise":
      return [value];
    case "array":
      if (value.some((val) => getType(val) !== "promise")) {
        console.error(new TypeError("Binding values should all be of type Promise"));
        return "error";
      }
      return value;
    default:
      return false;
  }
};
const unmount = (el) => {
  cacheInstance.delete(el);
  el.instance.proxy.close();
  unmountComponent(el.instance);
};
const toggleLoading = (el, binding) => {
  var _a, _b, _c;
  if (binding.value) {
    const vals = isPromise(binding.value);
    if (vals === "error") {
      return;
    }
    (_c = (_b = (_a = el == null ? void 0 : el.instance) == null ? void 0 : _a.proxy) == null ? void 0 : _b.open) == null ? void 0 : _c.call(_b);
    el.appendChild(el.mask);
    cacheInstance.add(el);
    if (vals) {
      Promise.all(vals).catch((err) => {
        console.error(new Error("Promise handling errors"), err);
      }).finally(() => {
        unmount(el);
      });
    }
  } else {
    unmount(el);
  }
};
const removeAttribute = (el) => {
  el.removeAttribute("zindex");
  el.removeAttribute("positiontype");
  el.removeAttribute("backdrop");
  el.removeAttribute("message");
  el.removeAttribute("view");
  el.removeAttribute("loadingtemplateref");
};
const handleProps = (el, vprops) => {
  var _a;
  const props = __spreadValues(__spreadValues({}, new LoadingOptions()), vprops);
  const loadingTemplateRef = props.loadingTemplateRef;
  const loadingInstance = createComponent(loadingConstructor, __spreadValues({}, props), loadingTemplateRef ? () => loadingTemplateRef : null);
  el.style.position = props.positionType || "relative";
  el.options = props;
  el.instance = loadingInstance;
  el.mask = (_a = loadingInstance == null ? void 0 : loadingInstance.proxy) == null ? void 0 : _a.$el;
};
const LoadingDirective = {
  mounted: function(el, binding, vnode) {
    handleProps(el, vnode.props);
    removeAttribute(el);
    !isEmpty(binding.value) && toggleLoading(el, binding);
  },
  updated: function(el, binding, vnode) {
    if (!isEmpty(binding.value) && cacheInstance.has(el) || isEmpty(binding.value) && !cacheInstance.has(el)) {
      return;
    }
    !cacheInstance.has(el) && handleProps(el, vnode.props);
    removeAttribute(el);
    toggleLoading(el, binding);
  }
};
var index = {
  title: "Loading \u52A0\u8F7D\u63D0\u793A",
  category: "\u53CD\u9988",
  status: "100%",
  install(app) {
    app.directive("loading", LoadingDirective);
    app.config.globalProperties.$loadingService = loading;
  }
};
export { LoadingDirective, LoadingOptions, loading as LoadingService, index as default, loadingProps };
