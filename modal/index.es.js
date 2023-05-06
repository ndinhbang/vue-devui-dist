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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, toRefs, computed, createVNode, resolveDynamicComponent, mergeProps, watch, onUnmounted, Transition, ref, unref, nextTick, withModifiers, onMounted, watchEffect, onBeforeUnmount, Teleport, h, render } from "vue";
import { offset, autoPlacement, arrow, shift, computePosition } from "@floating-ui/dom";
const modalProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ""
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  draggable: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  beforeClose: {
    type: Function
  },
  escapable: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  showAnimation: {
    type: Boolean,
    default: true
  },
  showOverlay: {
    type: Boolean,
    default: true
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: ""
  },
  keepLast: {
    type: Boolean,
    default: false
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
    const ns = useNamespace("svg-icon");
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
        "class": ns.b(),
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
  const ns = useNamespace("icon");
  const iconSize = computed(() => {
    return typeof size.value === "number" ? `${size.value}px` : size.value;
  });
  const IconComponent = component.value ? resolveDynamicComponent(component.value) : resolveDynamicComponent(svgIcon);
  const imgIconDom = () => {
    return createVNode("img", mergeProps({
      "src": name.value,
      "alt": name.value.split("/")[name.value.split("/").length - 1],
      "class": [(rotate == null ? void 0 : rotate.value) === "infinite" && ns.m("spin")],
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
      "class": [(rotate == null ? void 0 : rotate.value) === "infinite" && ns.m("spin")],
      "style": {
        transform: `rotate(${rotate == null ? void 0 : rotate.value}deg)`
      }
    }, ctx.attrs), null);
  };
  const fontIconDom = () => {
    const fontIconClass = /^icon-/.test(name.value) ? name.value : `${classPrefix.value}-${name.value}`;
    return createVNode("i", mergeProps({
      "class": [classPrefix.value, fontIconClass, (rotate == null ? void 0 : rotate.value) === "infinite" && ns.m("spin")],
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
    const ns = useNamespace("icon");
    const wrapClassed = computed(() => ({
      [ns.e("container")]: true,
      [ns.m("disabled")]: disabled.value,
      [ns.m("operable")]: operable.value,
      [ns.m("no-slots")]: !Object.keys(ctx.slots).length
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
    const ns = useNamespace("icon-group");
    return () => {
      var _a, _b;
      return createVNode("div", {
        "class": ns.b()
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
    };
  }
});
const fixedOverlayProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
};
function lockScroll() {
  if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
    const scrollTop = document.documentElement.scrollTop;
    const style = document.documentElement.getAttribute("style");
    document.documentElement.style.position = "fixed";
    document.documentElement.style.top = `-${scrollTop}px`;
    document.documentElement.style.width = document.documentElement.style.width || "100%";
    document.documentElement.style.overflowY = "scroll";
    return () => {
      if (style) {
        document.documentElement.setAttribute("style", style);
      } else {
        document.documentElement.removeAttribute("style");
      }
      document.documentElement.scrollTop = scrollTop;
    };
  }
  return;
}
function useFixedOverlay(props, ctx) {
  let lockScrollCb;
  const onClick = (event) => {
    event.preventDefault();
    ctx.emit("click", event);
    if (props.closeOnClickOverlay) {
      ctx.emit("update:modelValue", false);
    }
  };
  const removeBodyAdditions = () => {
    lockScrollCb == null ? void 0 : lockScrollCb();
  };
  watch(() => props.modelValue, (val) => {
    if (val) {
      props.lockScroll && (lockScrollCb = lockScroll());
    } else {
      removeBodyAdditions();
    }
  });
  onUnmounted(removeBodyAdditions);
  return { onClick };
}
var fixedOverlay = "";
const FixedOverlay = defineComponent({
  name: "DFixedOverlay",
  inheritAttrs: false,
  props: fixedOverlayProps,
  emits: ["update:modelValue", "click"],
  setup(props, ctx) {
    const {
      modelValue
    } = toRefs(props);
    const ns = useNamespace("fixed-overlay");
    const {
      onClick
    } = useFixedOverlay(props, ctx);
    return () => createVNode(Transition, {
      "name": ns.m("fade")
    }, {
      default: () => {
        var _a, _b;
        return [modelValue.value && createVNode("div", mergeProps({
          "class": ns.b()
        }, ctx.attrs, {
          "onClick": onClick
        }), [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)])];
      }
    });
  }
});
const flexibleOverlayProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  origin: {
    type: Object,
    require: true
  },
  position: {
    type: Array,
    default: ["bottom"]
  },
  offset: {
    type: [Number, Object],
    default: 8
  },
  shiftOffset: {
    type: Number
  },
  align: {
    type: String,
    default: null
  },
  showArrow: {
    type: Boolean,
    default: false
  },
  isArrowCenter: {
    type: Boolean,
    default: true
  },
  clickEventBubble: {
    type: Boolean,
    default: false
  }
};
function getScrollParent(element) {
  const overflowRegex = /(auto|scroll|hidden)/;
  for (let parent = element; parent = parent.parentElement; parent.parentElement !== document.body) {
    const style = window.getComputedStyle(parent);
    if (overflowRegex.test(style.overflow + style.overflowX + style.overflowY)) {
      return parent;
    }
  }
  return window;
}
function adjustArrowPosition(isArrowCenter, point, placement, originRect) {
  let { x, y } = point;
  if (!isArrowCenter) {
    const { width, height } = originRect;
    if (x && placement.includes("start")) {
      x = 12;
    }
    if (x && placement.includes("end")) {
      x = Math.round(width - 24);
    }
    if (y && placement.includes("start")) {
      y = 10;
    }
    if (y && placement.includes("end")) {
      y = height - 14;
    }
  }
  return { x, y };
}
function useOverlay(props, emit) {
  const overlayRef = ref();
  const arrowRef = ref();
  let originParent = null;
  const updateArrowPosition = (arrowEl, placement, point, overlayEl) => {
    const { x, y } = adjustArrowPosition(props.isArrowCenter, point, placement, overlayEl.getBoundingClientRect());
    const staticSide = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    }[placement.split("-")[0]];
    Object.assign(arrowEl.style, {
      left: x ? `${x}px` : "",
      top: y ? `${y}px` : "",
      right: "",
      bottom: "",
      [staticSide]: "-4px"
    });
  };
  const updatePosition = async () => {
    const hostEl = props.origin;
    const overlayEl = unref(overlayRef.value);
    const arrowEl = unref(arrowRef.value);
    const middleware = [
      offset(props.offset),
      autoPlacement({
        alignment: props.align,
        allowedPlacements: props.position
      })
    ];
    props.showArrow && middleware.push(arrow({ element: arrowEl }));
    props.shiftOffset !== void 0 && middleware.push(shift());
    const { x, y, placement, middlewareData } = await computePosition(hostEl, overlayEl, {
      strategy: "fixed",
      middleware
    });
    let applyX = x;
    let applyY = y;
    if (props.shiftOffset !== void 0) {
      const { x: shiftX, y: shiftY } = middlewareData.shift;
      shiftX < 0 && (applyX -= props.shiftOffset);
      shiftX > 0 && (applyX += props.shiftOffset);
      shiftY < 0 && (applyY -= props.shiftOffset);
      shiftY > 0 && (applyY += props.shiftOffset);
    }
    emit("positionChange", placement);
    Object.assign(overlayEl.style, { top: `${applyY}px`, left: `${applyX}px` });
    props.showArrow && updateArrowPosition(arrowEl, placement, middlewareData.arrow, overlayEl);
  };
  watch(() => props.modelValue, () => {
    if (props.modelValue && props.origin) {
      originParent = getScrollParent(props.origin);
      nextTick(updatePosition);
      originParent == null ? void 0 : originParent.addEventListener("scroll", updatePosition);
      originParent !== window && window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    } else {
      originParent == null ? void 0 : originParent.removeEventListener("scroll", updatePosition);
      originParent !== window && window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    }
  });
  onUnmounted(() => {
    originParent == null ? void 0 : originParent.removeEventListener("scroll", updatePosition);
    originParent !== window && window.removeEventListener("scroll", updatePosition);
    window.removeEventListener("resize", updatePosition);
  });
  return { arrowRef, overlayRef, updatePosition };
}
var flexibleOverlay = "";
defineComponent({
  name: "DFlexibleOverlay",
  inheritAttrs: false,
  props: flexibleOverlayProps,
  emits: ["update:modelValue", "positionChange"],
  setup(props, {
    slots,
    attrs,
    emit,
    expose
  }) {
    const ns = useNamespace("flexible-overlay");
    const {
      clickEventBubble
    } = toRefs(props);
    const {
      arrowRef,
      overlayRef,
      updatePosition
    } = useOverlay(props, emit);
    expose({
      updatePosition
    });
    return () => {
      var _a;
      return props.modelValue && createVNode("div", mergeProps({
        "ref": overlayRef,
        "class": ns.b()
      }, attrs, {
        "onClick": withModifiers(() => ({}), [clickEventBubble.value ? "" : "stop"]),
        "onPointerup": withModifiers(() => ({}), ["stop"])
      }), [(_a = slots.default) == null ? void 0 : _a.call(slots), props.showArrow && createVNode("div", {
        "ref": arrowRef,
        "class": ns.e("arrow")
      }, null)]);
    };
  }
});
const inBrowser = typeof window !== "undefined";
function useModal(props, emit) {
  function close() {
    emit("update:modelValue", false);
  }
  function execClose() {
    props.beforeClose ? props.beforeClose(close) : close();
  }
  function onKeydown(event) {
    if (event.code === "Escape") {
      execClose();
    }
  }
  onMounted(() => {
    if (props.escapable) {
      window.addEventListener("keydown", onKeydown);
    }
  });
  onUnmounted(() => {
    if (props.escapable) {
      window.addEventListener("keydown", onKeydown);
    }
  });
  return { execClose };
}
function useModalRender(props) {
  let lockScrollCb;
  const removeBodyAdditions = () => {
    lockScrollCb == null ? void 0 : lockScrollCb();
  };
  watch(() => props.modelValue, (val) => {
    if (val) {
      props.lockScroll && (lockScrollCb = lockScroll());
    } else {
      removeBodyAdditions();
    }
  }, {
    immediate: true
  });
  onUnmounted(removeBodyAdditions);
}
function addUnit(value, defaultUnit = "px") {
  if (!value) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  } else if (typeof value === "number") {
    return `${value}${defaultUnit}`;
  } else {
    return "";
  }
}
const useDraggable = (targetRef, dragRef, draggable) => {
  const modalPosition = ref("translate(-50%, -50%)");
  let transform = {
    offsetX: 0,
    offsetY: 0
  };
  const onMousedown = (e) => {
    const downX = e.clientX;
    const downY = e.clientY;
    const { offsetX, offsetY } = transform;
    const targetRect = targetRef.value.getBoundingClientRect();
    const targetLeft = targetRect.left;
    const targetTop = targetRect.top;
    const targetWidth = targetRect.width;
    const targetHeight = targetRect.height;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    const minLeft = -targetLeft + offsetX;
    const minTop = -targetTop + offsetY;
    const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
    const maxTop = clientHeight - targetTop - targetHeight + offsetY;
    const onMousemove = (ev) => {
      const moveX = Math.min(Math.max(offsetX + ev.clientX - downX, minLeft), maxLeft);
      const moveY = Math.min(Math.max(offsetY + ev.clientY - downY, minTop), maxTop);
      transform = {
        offsetX: moveX,
        offsetY: moveY
      };
      modalPosition.value = `translate(calc(-50% + ${addUnit(moveX)}), calc(-50% + ${addUnit(moveY)}))`;
    };
    const onMouseup = () => {
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("mouseup", onMouseup);
    };
    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseup);
  };
  const onDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.addEventListener("mousedown", onMousedown);
    }
  };
  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener("mousedown", onMousedown);
    }
  };
  onMounted(() => {
    watchEffect(() => {
      if (draggable.value) {
        onDraggable();
      } else {
        offDraggable();
      }
    });
  });
  onBeforeUnmount(() => {
    offDraggable();
  });
  const clearPosition = () => {
    transform = {
      offsetX: 0,
      offsetY: 0
    };
    modalPosition.value = "translate(-50%, -50%)";
  };
  return {
    clearPosition,
    modalPosition
  };
};
var Header = defineComponent({
  name: "DModalHeader",
  setup(props, {
    slots
  }) {
    const ns = useNamespace("modal");
    return () => {
      var _a;
      return createVNode("div", {
        "class": ns.e("header")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
var Body = defineComponent({
  name: "DModalBody",
  setup(props, {
    slots
  }) {
    const ns = useNamespace("modal");
    return () => {
      var _a;
      return createVNode("div", {
        "class": ns.e("body")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
var modal = "";
var Modal = defineComponent({
  name: "DModal",
  inheritAttrs: false,
  props: modalProps,
  emits: ["update:modelValue"],
  setup(props, {
    slots,
    attrs,
    emit
  }) {
    const ns = useNamespace("modal");
    const {
      modelValue,
      title,
      showClose,
      showOverlay,
      appendToBody,
      closeOnClickOverlay,
      keepLast
    } = toRefs(props);
    const {
      execClose
    } = useModal(props, emit);
    useModalRender(props);
    const dialogRef = ref();
    const headerRef = ref();
    const draggable = computed(() => props.draggable);
    const {
      clearPosition,
      modalPosition
    } = useDraggable(dialogRef, headerRef, draggable);
    watch(modelValue, (val) => {
      if (val && !keepLast.value) {
        clearPosition();
        nextTick(() => {
          const autofocus = document == null ? void 0 : document.querySelector("[autofocus]");
          if (autofocus) {
            autofocus.focus();
          }
        });
      }
    });
    const renderType = () => {
      const typeList = [{
        type: "success",
        text: "\u6210\u529F",
        icon: "right-o",
        color: "var(--devui-success)"
      }, {
        type: "failed",
        text: "\u9519\u8BEF",
        icon: "error-o",
        color: "var(--devui-danger)"
      }, {
        type: "warning",
        text: "\u8B66\u544A",
        icon: "warning-o",
        color: "var(--devui-warning)"
      }, {
        type: "info",
        text: "\u4FE1\u606F",
        icon: "info-o",
        color: "var(--devui-info)"
      }];
      const item = typeList.find((i) => i.type === props.type);
      return createVNode("div", {
        "style": {
          cursor: props.draggable ? "move" : "default"
        },
        "ref": headerRef
      }, [createVNode(Header, null, {
        default: () => [createVNode("div", {
          "class": "type-content"
        }, [createVNode("div", {
          "class": "type-content-icon"
        }, [createVNode(Icon, {
          "name": item == null ? void 0 : item.icon,
          "color": item == null ? void 0 : item.color
        }, null)]), createVNode("div", {
          "class": "type-content-text"
        }, [item == null ? void 0 : item.text])])]
      })]);
    };
    return () => createVNode(Teleport, {
      "to": "body",
      "disabled": !appendToBody.value
    }, {
      default: () => [showOverlay.value && createVNode(FixedOverlay, mergeProps({
        "modelValue": modelValue.value
      }, {
        "onUpdate:modelValue": execClose
      }, {
        "class": ns.e("overlay"),
        "lock-scroll": false,
        "close-on-click-overlay": closeOnClickOverlay.value,
        "style": {
          zIndex: "calc(var(--devui-z-index-modal, 1050) - 1)"
        }
      }), null), createVNode(Transition, {
        "name": props.showAnimation ? ns.m("wipe") : ""
      }, {
        default: () => {
          var _a;
          return [modelValue.value && createVNode("div", mergeProps({
            "ref": dialogRef,
            "class": ns.b()
          }, attrs, {
            "onClick": (e) => e.stopPropagation(),
            "style": {
              transform: modalPosition.value
            }
          }), [showClose.value && createVNode("div", {
            "onClick": execClose,
            "class": "btn-close"
          }, [createVNode(Icon, {
            "name": "close",
            "size": "20px"
          }, null)]), props.type ? renderType() : createVNode("div", {
            "style": {
              cursor: props.draggable ? "move" : "default"
            },
            "ref": headerRef
          }, [slots.header ? slots.header() : title.value && createVNode(Header, null, {
            default: () => [title.value]
          })]), createVNode(Body, null, {
            default: () => {
              var _a2;
              return [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)];
            }
          }), (_a = slots.footer) == null ? void 0 : _a.call(slots)])];
        }
      })]
    });
  }
});
var Footer = defineComponent({
  name: "DModalFooter",
  setup(props, {
    slots
  }) {
    const ns = useNamespace("modal");
    return () => {
      var _a;
      return createVNode("div", {
        "class": ns.e("footer")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
class CommonModalService {
  constructor(anchorContainer) {
    this.anchorContainer = anchorContainer;
  }
  renderModal(anchor, props, children) {
    const vnode = h(this.component(), props, children);
    render(vnode, anchor);
    return vnode;
  }
  renderNull(anchor) {
    setTimeout(() => {
      render(null, anchor);
    }, 500);
  }
}
let vm;
class ModalService extends CommonModalService {
  component() {
    return Modal;
  }
  open(props = {}) {
    const anchor = document.createElement("div");
    this.anchorContainer.appendChild(anchor);
    const _a = props, { header, content, footer } = _a, resProps = __objRest(_a, ["header", "content", "footer"]);
    const renderOrigin = (propsValue, onUpdateModelValue) => {
      return this.renderModal(anchor, __spreadProps(__spreadValues({}, propsValue), {
        modelValue: true,
        "onUpdate:modelValue": onUpdateModelValue
      }), { header, default: content, footer });
    };
    const hide = () => {
      var _a2, _b, _c;
      const innerNeedHideOrNot = (value) => {
        if (!value) {
          hide();
        }
      };
      renderOrigin(resProps, (value) => {
        if (!value) {
          this.renderModal(anchor, __spreadProps(__spreadValues({}, resProps), { modelValue: false }));
          this.renderNull(anchor);
        } else {
          renderOrigin(resProps, innerNeedHideOrNot);
        }
      });
      (_c = (_b = (_a2 = vm == null ? void 0 : vm.component) == null ? void 0 : _a2.exposed) == null ? void 0 : _b.handleVisibleChange) == null ? void 0 : _c.call(_b, false);
    };
    const needHideOrNot = (value) => {
      if (!value) {
        hide();
      }
    };
    this.renderModal(anchor, { modelValue: false });
    vm = renderOrigin(resProps, needHideOrNot);
    return { hide };
  }
}
__publicField(ModalService, "token", "MODAL_SERVICE_TOKEN");
var index = {
  title: "Modal \u5F39\u7A97",
  category: "\u53CD\u9988",
  status: "100%",
  install(app) {
    app.component(Modal.name, Modal);
    app.component(Header.name, Header);
    app.component(Body.name, Body);
    app.component(Footer.name, Footer);
    if (!inBrowser) {
      return;
    }
    let anchorsContainer = document.getElementById("d-modal-anchors-container");
    if (!anchorsContainer) {
      anchorsContainer = document.createElement("div");
      anchorsContainer.setAttribute("id", "d-modal-anchors-container");
      document.body.appendChild(anchorsContainer);
    }
    app.provide(ModalService.token, new ModalService(anchorsContainer));
  }
};
export { Modal, index as default, modalProps };
