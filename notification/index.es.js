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
import { defineComponent, toRefs, computed, createVNode, resolveDynamicComponent, mergeProps, watch, Transition, withModifiers, reactive, createApp, onUnmounted, isVNode } from "vue";
const notificationProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "normal"
  },
  duration: {
    type: Number,
    default: 3e3
  },
  onClose: {
    type: Function
  }
};
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
    const ns2 = useNamespace("notification");
    return () => createVNode("div", {
      "class": ns2.e("icon-close"),
      "onClick": (e) => emit("click", e)
    }, [createVNode(Icon, {
      "name": "close",
      "size": "14px"
    }, null)]);
  }
});
const ns = useNamespace("notification");
const XLINK = {
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
const XLINK_HREF = {
  "xlink:href": "#path-s"
};
function SuccessIcon() {
  return createVNode("svg", mergeProps({
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg"
  }, XLINK), [createVNode("defs", null, [createVNode("polygon", {
    "id": "path-s",
    "points": "6.53553391 9.77817459 12.1923882 4.12132034 13.6066017 5.53553391            6.53553391 12.6066017 3 9.07106781 4.41421356 7.65685425 6.53553391 9.77817459"
  }, null)]), createVNode("g", {
    "id": "correct",
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("mask", {
    "id": "mask-2",
    "fill": "white"
  }, [createVNode("use", XLINK_HREF, null)]), createVNode("use", mergeProps({
    "id": "Mask",
    "class": ns.e("image-success-path")
  }, XLINK_HREF), null)])]);
}
function WarningIcon() {
  return createVNode("svg", mergeProps({
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg"
  }, XLINK), [createVNode("g", {
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("path", {
    "class": ns.e("warning-outer"),
    "d": "M8.96244623,0.57254229 L15.8714442,13.4101975 C16.1549662,13.9370117            15.9538562,14.5918482 15.4222523,14.8728158 C15.2642579,14.9563203 15.0879506,           15 14.9088903,15 L1.09089441,15 C0.488410063,15 0,14.5159904 0,13.9189343 C0,13.7414873            0.0440768395,13.5667684 0.128340519,13.4101975 L7.03733844,0.57254229 C7.32086049,           0.0457280838 7.98165058,-0.153569987 8.51325441,0.127397589 C8.70423071,           0.228333932 8.8605922,0.383286648 8.96244623,0.57254229 Z"
  }, null), createVNode("path", {
    "class": ns.e("warning-inner"),
    "stroke-width": "0.3",
    "fill-rule": "nonzero",
    "d": "M8.87894737,13 L7.08947368,13 L7.08947368,11.2105263 L8.87894737,11.2105263 L8.87894737,13 Z M8.62102372,9.86842105            L7.32800539,9.86842105 L7,4.5 L8.96842105,4.5 L8.62102372,9.86842105 Z"
  }, null)])]);
}
function InfoIcon() {
  return createVNode("svg", mergeProps({
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg"
  }, XLINK), [createVNode("g", {
    "id": "info",
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("path", {
    "class": ns.e("image-info-path"),
    "d": "M7,13 L7,6 L9,6 L9,13 L7,13 Z M7,5 L7,3 L9,3 L9,5 L7,5 Z",
    "id": "info"
  }, null)])]);
}
function ErrorIcon() {
  return createVNode("svg", mergeProps({
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg"
  }, XLINK), [createVNode("defs", null, [createVNode("polygon", {
    "id": "path-e",
    "points": "8.07106781 6.65685425 10.8994949 3.82842712 12.3137085 5.24264069 9.48528137 8.07106781 12.3137085            10.8994949 10.8994949 12.3137085 8.07106781 9.48528137 5.24264069 12.3137085 3.82842712 10.8994949 6.65685425            8.07106781 3.82842712 5.24264069 5.24264069 3.82842712"
  }, null)]), createVNode("g", {
    "id": "error",
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("mask", {
    "id": "mask-2",
    "fill": "white"
  }, [createVNode("use", XLINK_HREF, null)]), createVNode("use", mergeProps({
    "id": "Mask",
    "class": ns.e("image-error-path")
  }, XLINK_HREF), null)])]);
}
var TypeIcon = defineComponent({
  props: {
    type: {
      type: String,
      default: "normal"
    }
  },
  setup(props) {
    const {
      type
    } = toRefs(props);
    const ns2 = useNamespace("notification");
    const classes = computed(() => ({
      [ns2.e("image")]: true,
      [ns2.em("image", type.value)]: true
    }));
    return () => createVNode("span", {
      "class": classes.value
    }, [type.value && type.value !== "normal" && (type.value === "success" && createVNode(SuccessIcon, null, null) || type.value === "info" && createVNode(InfoIcon, null, null) || type.value === "warning" && createVNode(WarningIcon, null, null) || type.value === "error" && createVNode(ErrorIcon, null, null))]);
  }
});
function useNotification(props) {
  const classes = computed(() => ({
    "devui-notification-item-container": true,
    [`devui-notification-message-${props.type}`]: true
  }));
  return { classes };
}
function useEvent(props, emit) {
  let timer = null;
  let timestamp;
  const close2 = () => {
    var _a;
    timer && clearTimeout(timer);
    timer = null;
    (_a = props.onClose) == null ? void 0 : _a.call(props);
    emit("update:modelValue", false);
  };
  const interrupt = () => {
    if (timer && props.duration) {
      clearTimeout(timer);
      timer = null;
    }
  };
  const removeReset = () => {
    if (props.modelValue && props.duration) {
      const remainTime = props.duration - (Date.now() - timestamp);
      timer = setTimeout(close2, remainTime);
    }
  };
  const handleDestroy = () => {
    emit("destroy");
  };
  watch(() => props.modelValue, (val) => {
    if (val) {
      timestamp = Date.now();
      if (props.duration) {
        timer = setTimeout(close2, props.duration);
      }
    }
  });
  return { interrupt, removeReset, close: close2, handleDestroy };
}
var notification = "";
var Notification = defineComponent({
  name: "DNotification",
  props: notificationProps,
  emits: ["update:modelValue", "destroy"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      modelValue,
      title,
      type
    } = toRefs(props);
    const {
      classes
    } = useNotification(props);
    const {
      interrupt,
      removeReset,
      close: close2,
      handleDestroy
    } = useEvent(props, emit);
    const ns2 = useNamespace("notification");
    return () => createVNode(Transition, {
      "name": "notification-fade",
      "onAfterLeave": handleDestroy
    }, {
      default: () => {
        var _a;
        return [modelValue.value && createVNode("div", {
          "class": ns2.b(),
          "onClick": withModifiers(() => ({}), ["stop"]),
          "onPointerup": withModifiers(() => ({}), ["stop"])
        }, [createVNode("div", {
          "class": classes.value,
          "onMouseenter": interrupt,
          "onMouseleave": removeReset
        }, [createVNode("div", {
          "class": ns2.e("item")
        }, [createVNode(Close, {
          "onClick": close2
        }, null), title.value && createVNode(TypeIcon, {
          "type": type.value
        }, null), createVNode("div", {
          "class": ns2.e("message")
        }, [createVNode("span", {
          "class": ns2.e("title")
        }, [title.value]), createVNode("span", {
          "class": ns2.e("content")
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])])])])])];
      }
    });
  }
});
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const defaultOptions = {
  modelValue: false,
  duration: 3e3,
  type: "normal"
};
function initInstance(props, content) {
  const container = document.createElement("div");
  container.classList.add("notification__warpper");
  const lastChild = document.body.lastElementChild;
  let offset_Top = 50;
  if (lastChild == null ? void 0 : lastChild.classList.contains("notification__warpper")) {
    const notification2 = lastChild.lastElementChild;
    const rects = notification2.getBoundingClientRect();
    const height = rects.height;
    const top = rects.top;
    offset_Top = height + top;
  }
  const app = createApp({
    setup() {
      onUnmounted(() => {
        document.body.removeChild(container);
      });
      return () => createVNode(Notification, mergeProps(props, {
        "onDestroy": app.unmount,
        "style": [`top: ${offset_Top}px`]
      }), _isSlot(content) ? content : {
        default: () => [content]
      });
    }
  });
  document.body.appendChild(container);
  app.mount(container);
  return app;
}
function close(props, originOnClose) {
  props.modelValue = false;
  originOnClose == null ? void 0 : originOnClose();
}
class NotificationService {
  static open(options) {
    const originOnClose = options.onClose || null;
    const content = options.content;
    delete options.content;
    const props = reactive(__spreadProps(__spreadValues(__spreadValues({}, defaultOptions), options), {
      onClose: () => {
        close(props, originOnClose);
      }
    }));
    initInstance(props, content);
    props.modelValue = true;
  }
}
var index = {
  title: "Notification \u5168\u5C40\u901A\u77E5",
  category: "\u53CD\u9988",
  status: "100%",
  install(app) {
    app.component(Notification.name, Notification);
    app.config.globalProperties.$notificationService = NotificationService;
  }
};
export { Notification, NotificationService, index as default, notificationProps };
