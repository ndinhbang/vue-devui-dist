import { watch, onUnmounted, defineComponent, toRefs, createVNode, Transition, mergeProps, ref, unref, nextTick, withModifiers } from "vue";
import { offset, autoPlacement, arrow, shift, computePosition } from "@floating-ui/dom";
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
const FlexibleOverlay = defineComponent({
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
var index = {
  title: "Overlay \u906E\u7F69\u5C42",
  category: "\u901A\u7528",
  status: "100%",
  install(app) {
    app.component(FixedOverlay.name, FixedOverlay);
    app.component(FlexibleOverlay.name, FlexibleOverlay);
    if (inBrowser && !document.getElementById("d-overlay-anchor")) {
      const overlayAnchor = document.createElement("div");
      overlayAnchor.setAttribute("id", "d-overlay-anchor");
      overlayAnchor.style.position = "fixed";
      overlayAnchor.style.left = "0";
      overlayAnchor.style.top = "0";
      overlayAnchor.style.zIndex = "1000";
      document.body.appendChild(overlayAnchor);
    }
  }
};
export { FixedOverlay, FlexibleOverlay, index as default, fixedOverlayProps, flexibleOverlayProps };
