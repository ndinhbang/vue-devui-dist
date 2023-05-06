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
import { defineComponent, toRefs, computed, createVNode, resolveDynamicComponent, mergeProps, watch, Transition, shallowReactive, createApp, onUnmounted, isVNode, reactive } from "vue";
const isString = (val) => typeof val === "string";
const DEFAULT_PREFIX = "icon";
const iconProps = {
  name: {
    type: String,
    default: "",
    required: true
  },
  size: {
    type: [Number, String],
    default: "inherit"
  },
  color: {
    type: String,
    default: "inherit"
  },
  component: {
    type: Object,
    default: null
  },
  classPrefix: {
    type: String,
    default: DEFAULT_PREFIX
  },
  operable: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rotate: {
    type: [Number, String]
  }
};
const svgIconProps = {
  name: {
    type: String,
    default: "",
    required: true
  },
  color: {
    type: String,
    default: "inherit"
  },
  size: {
    type: [Number, String],
    default: "inherit"
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
var icon = "";
var svgIcon = defineComponent({
  name: "DSvgIcon",
  props: svgIconProps,
  setup(props) {
    const {
      name,
      color,
      size
    } = toRefs(props);
    const ns2 = useNamespace("svg-icon");
    const iconName = computed(() => `#icon-${name.value}`);
    const iconSize = computed(() => {
      return typeof size.value === "number" ? `${size.value}px` : size.value;
    });
    const styles = {
      width: iconSize.value,
      height: iconSize.value
    };
    return () => {
      return createVNode("svg", {
        "class": ns2.b(),
        "style": styles
      }, [createVNode("use", {
        "xlink:href": iconName.value,
        "fill": color.value
      }, null)]);
    };
  }
});
function isUrl(value) {
  return /^((http|https):)?\/\//.test(value);
}
function useIconDom(props, ctx) {
  const {
    component,
    name,
    size,
    color,
    classPrefix,
    rotate
  } = toRefs(props);
  const ns2 = useNamespace("icon");
  const iconSize = computed(() => {
    return typeof size.value === "number" ? `${size.value}px` : size.value;
  });
  const IconComponent = component.value ? resolveDynamicComponent(component.value) : resolveDynamicComponent(svgIcon);
  const imgIconDom = () => {
    return createVNode("img", mergeProps({
      "src": name.value,
      "alt": name.value.split("/")[name.value.split("/").length - 1],
      "class": [(rotate == null ? void 0 : rotate.value) === "infinite" && ns2.m("spin")],
      "style": {
        width: iconSize.value || "",
        transform: `rotate(${rotate == null ? void 0 : rotate.value}deg)`,
        verticalAlign: "middle"
      }
    }, ctx.attrs), null);
  };
  const svgIconDom = () => {
    return createVNode(IconComponent, mergeProps({
      "name": name.value,
      "color": color.value,
      "size": iconSize.value,
      "class": [(rotate == null ? void 0 : rotate.value) === "infinite" && ns2.m("spin")],
      "style": {
        transform: `rotate(${rotate == null ? void 0 : rotate.value}deg)`
      }
    }, ctx.attrs), null);
  };
  const fontIconDom = () => {
    const fontIconClass = /^icon-/.test(name.value) ? name.value : `${classPrefix.value}-${name.value}`;
    return createVNode("i", mergeProps({
      "class": [classPrefix.value, fontIconClass, (rotate == null ? void 0 : rotate.value) === "infinite" && ns2.m("spin")],
      "style": {
        fontSize: iconSize.value,
        color: color.value,
        transform: `rotate(${rotate == null ? void 0 : rotate.value}deg)`
      }
    }, ctx.attrs), null);
  };
  const iconDom = () => {
    return component.value ? svgIconDom() : isUrl(name.value) ? imgIconDom() : fontIconDom();
  };
  return {
    iconDom
  };
}
var Icon = defineComponent({
  name: "DIcon",
  props: iconProps,
  emits: ["click"],
  setup(props, ctx) {
    const {
      disabled,
      operable
    } = toRefs(props);
    const {
      iconDom
    } = useIconDom(props, ctx);
    const ns2 = useNamespace("icon");
    const wrapClassed = computed(() => ({
      [ns2.e("container")]: true,
      [ns2.m("disabled")]: disabled.value,
      [ns2.m("operable")]: operable.value,
      [ns2.m("no-slots")]: !Object.keys(ctx.slots).length
    }));
    const onClick = (e) => {
      if (disabled.value) {
        return;
      }
      ctx.emit("click", e);
    };
    return () => {
      var _a, _b, _c, _d;
      return createVNode("div", {
        "class": wrapClassed.value,
        "onClick": onClick
      }, [(_b = (_a = ctx.slots).prefix) == null ? void 0 : _b.call(_a), iconDom(), (_d = (_c = ctx.slots).suffix) == null ? void 0 : _d.call(_c)]);
    };
  }
});
var iconGroup = "";
defineComponent({
  name: "DIconGroup",
  setup(_, ctx) {
    const ns2 = useNamespace("icon-group");
    return () => {
      var _a, _b;
      return createVNode("div", {
        "class": ns2.b()
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
    };
  }
});
var Close = defineComponent({
  emits: ["click"],
  setup(props, {
    emit
  }) {
    const ns2 = useNamespace("message");
    return () => createVNode("div", {
      "class": ns2.e("icon-close"),
      "onClick": (e) => emit("click", e)
    }, [createVNode(Icon, {
      "name": "close",
      "size": "14px"
    }, null)]);
  }
});
const messageProps = {
  id: {
    type: String,
    default: ""
  },
  visible: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "normal"
  },
  bordered: {
    type: Boolean,
    default: true
  },
  shadow: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 3e3
  },
  showClose: {
    type: Boolean,
    default: false
  },
  onClose: {
    type: Function
  }
};
const ns = useNamespace("message");
function SuccessIcon() {
  return createVNode("svg", {
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg",
    "class": ns.e("icon")
  }, [createVNode("path", {
    "fill": "currentColor",
    "d": "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  }, null)]);
}
function WarningIcon() {
  return createVNode("svg", {
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg",
    "class": ns.e("icon")
  }, [createVNode("path", {
    "fill": "currentColor",
    "d": "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
  }, null)]);
}
function InfoIcon() {
  return createVNode("svg", {
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg",
    "class": ns.e("icon")
  }, [createVNode("path", {
    "fill": "currentColor",
    "d": "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
  }, null)]);
}
function ErrorIcon() {
  return createVNode("svg", {
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg",
    "class": ns.e("icon")
  }, [createVNode("path", {
    "fill": "currentColor",
    "d": "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
  }, null)]);
}
var message$1 = "";
var Message$1 = defineComponent({
  name: "DMessage",
  props: messageProps,
  emits: ["destroy", "close"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      visible,
      message: message2,
      type,
      bordered,
      shadow,
      showClose
    } = toRefs(props);
    const ns2 = useNamespace("message");
    let timer = null;
    let timestamp;
    const handleDestroy = () => {
      emit("destroy");
    };
    const close = () => {
      var _a;
      timer && clearTimeout(timer);
      timer = null;
      (_a = props.onClose) == null ? void 0 : _a.call(props);
    };
    const interrupt = () => {
      if (timer && props.duration) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const removeReset = () => {
      if (props.visible && props.duration) {
        const remainTime = props.duration - (Date.now() - timestamp);
        timer = setTimeout(close, remainTime);
      }
    };
    watch(() => props.visible, (val) => {
      if (val) {
        timestamp = Date.now();
        if (props.duration) {
          timer = setTimeout(close, props.duration);
        }
      }
    });
    const classes = computed(() => ({
      [ns2.b()]: true,
      [ns2.m(type.value)]: true
    }));
    const lastOffset = computed(() => getLastOffset(props.id));
    const styles = computed(() => {
      const messageStyles = {};
      if (!bordered.value) {
        messageStyles["border"] = "none";
      }
      if (!shadow.value) {
        messageStyles["box-shadow"] = "none";
      }
      return __spreadProps(__spreadValues({}, messageStyles), {
        top: `${lastOffset.value}px`
      });
    });
    const renderIcon = computed(() => {
      const iconClasses = computed(() => ({
        [ns2.e("image")]: true,
        [ns2.em("image", type.value)]: true
      }));
      return !(!type.value || type.value === "normal") && createVNode("span", {
        "class": iconClasses.value
      }, [type.value && (type.value === "success" && createVNode(SuccessIcon, null, null) || type.value === "info" && createVNode(InfoIcon, null, null) || type.value === "warning" && createVNode(WarningIcon, null, null) || type.value === "error" && createVNode(ErrorIcon, null, null))]);
    });
    const renderText = computed(() => {
      var _a;
      const textClasses = computed(() => ({
        [ns2.e("content")]: true,
        [ns2.em("content", type.value)]: true
      }));
      return createVNode("span", {
        "class": textClasses.value
      }, [message2.value ? message2.value : (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    const renderClose = computed(() => {
      return showClose.value && createVNode("span", {
        "class": [ns2.e("close")],
        "onClick": close
      }, [createVNode(Close, null, null)]);
    });
    return () => {
      return createVNode(Transition, {
        "name": "message-fade",
        "onAfterLeave": handleDestroy
      }, {
        default: () => [visible.value && createVNode("div", {
          "class": classes.value,
          "style": __spreadValues({}, styles.value),
          "onMouseenter": interrupt,
          "onMouseleave": removeReset
        }, [renderIcon.value, renderText.value, renderClose.value])]
      });
    };
  }
});
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const instances = shallowReactive([]);
const getLastOffset = (id) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  return idx * 65 + 80;
};
const deleteInstance = (id) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  if (idx !== -1) {
    instances.splice(idx, 1);
  }
  return idx;
};
const initInstance = (id, props, message2) => {
  const container = document.createElement("div");
  container.id = id;
  const app = createApp({
    setup() {
      onUnmounted(() => {
        document.body.removeChild(container);
      });
      return () => createVNode(Message$1, mergeProps(props, {
        "id": id,
        "onDestroy": app.unmount
      }), _isSlot(message2) ? message2 : {
        default: () => [message2]
      });
    }
  });
  document.body.appendChild(container);
  app.mount(container);
  return {
    id,
    props
  };
};
const defaultOptions = {
  duration: 3e3,
  type: "normal"
};
const normalizeOptions = (params) => {
  const options = !params || isString(params) ? {
    message: params
  } : params;
  const normalized = __spreadValues(__spreadValues({}, defaultOptions), options);
  return normalized;
};
let seed = 0;
function open(options) {
  const originOnClose = options.onClose || null;
  const messageContent = options.message;
  delete options.message;
  const props = reactive(__spreadProps(__spreadValues(__spreadValues({}, defaultOptions), options), {
    onClose: () => {
      props.visible = false;
      deleteInstance(props.id);
      originOnClose == null ? void 0 : originOnClose();
    }
  }));
  seed++;
  const id = `message_${seed}`;
  props.id = id;
  const messageContext = initInstance(id, props, messageContent);
  instances.push(messageContext);
  props.visible = true;
}
function message(params) {
  const options = normalizeOptions(params);
  open(__spreadValues({}, options));
}
function success(params) {
  const options = normalizeOptions(params);
  open(__spreadProps(__spreadValues({}, options), {
    type: "success"
  }));
}
function error(params) {
  const options = normalizeOptions(params);
  open(__spreadProps(__spreadValues({}, options), {
    type: "error"
  }));
}
function warning(params) {
  const options = normalizeOptions(params);
  open(__spreadProps(__spreadValues({}, options), {
    type: "warning"
  }));
}
function info(params) {
  const options = normalizeOptions(params);
  open(__spreadProps(__spreadValues({}, options), {
    type: "info"
  }));
}
const Message = Object.assign(message, {
  success,
  error,
  warning,
  info
});
var index = {
  title: "Message \u5168\u5C40\u63D0\u793A",
  category: "\u53CD\u9988",
  status: "100%",
  install(app) {
    app.config.globalProperties.$message = Message;
  }
};
export { Message, index as default, messageProps };
