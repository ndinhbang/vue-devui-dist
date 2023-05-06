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
import { toRefs, watch, onMounted, onUnmounted, ref, computed, defineComponent, createVNode, Transition, mergeProps, unref, nextTick, withModifiers, Comment, Text, h, Fragment, inject, withDirectives, cloneVNode, provide, Teleport, vShow } from "vue";
import { offset, autoPlacement, arrow, shift, computePosition } from "@floating-ui/dom";
import { onClickOutside } from "@vueuse/core";
const dropdownProps = {
  visible: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: String,
    default: "click"
  },
  closeScope: {
    type: String,
    default: "all"
  },
  position: {
    type: Array,
    default: ["bottom"]
  },
  align: {
    type: String,
    default: null
  },
  offset: {
    type: [Number, Object],
    default: 4
  },
  shiftOffset: {
    type: Number
  },
  closeOnMouseLeaveMenu: {
    type: Boolean,
    default: false
  },
  showAnimation: {
    type: Boolean,
    default: true
  },
  overlayClass: {
    type: String,
    default: ""
  },
  destroyOnHide: {
    type: Boolean,
    default: true
  }
};
const POPPER_TRIGGER_TOKEN = Symbol("popper-trigger");
function getElement(element) {
  if (element instanceof Element) {
    return element;
  }
  if (element && typeof element === "object" && element.$el instanceof Element) {
    return element.$el;
  }
  return null;
}
const dropdownMap = /* @__PURE__ */ new Map();
function subscribeEvent(dom, type, callback) {
  dom == null ? void 0 : dom.addEventListener(type, callback);
  return () => {
    dom == null ? void 0 : dom.removeEventListener(type, callback);
  };
}
const useDropdownEvent = ({ id, isOpen, origin, dropdownRef, props, emit }) => {
  let overlayEnter = false;
  let originEnter = false;
  const { trigger, closeScope, closeOnMouseLeaveMenu } = toRefs(props);
  const toggle = (status) => {
    isOpen.value = status;
    emit("toggle", isOpen.value);
  };
  const handleLeave = async (elementType, closeAll) => {
    await new Promise((resolve) => setTimeout(resolve, 50));
    if (elementType === "origin" && overlayEnter || elementType === "dropdown" && originEnter) {
      return;
    }
    if (closeAll) {
      [...dropdownMap.values()].reverse().forEach((item) => {
        setTimeout(() => {
          var _a;
          (_a = item.toggle) == null ? void 0 : _a.call(item);
        }, 0);
      });
    }
    toggle(false);
  };
  watch([trigger, origin, dropdownRef], ([triggerVal, originVal, dropdownEl], ov, onInvalidate) => {
    const originEl = getElement(originVal);
    const subscriptions = [];
    setTimeout(() => {
      subscriptions.push(subscribeEvent(document, "click", (e) => {
        e.stopPropagation();
        const dropdownValues = [...dropdownMap.values()];
        if (!isOpen.value || closeScope.value === "none" || (dropdownEl == null ? void 0 : dropdownEl.contains(e.target)) && closeScope.value === "blank" || dropdownValues.some((item) => {
          var _a;
          return (_a = item.toggleEl) == null ? void 0 : _a.contains(e.target);
        }) && dropdownValues.some((item) => {
          var _a;
          return (_a = item.menuEl) == null ? void 0 : _a.contains(e.target);
        })) {
          return;
        }
        [...dropdownMap.values()].reverse().forEach((item) => {
          setTimeout(() => {
            var _a, _b;
            if (!((_a = item.toggleEl) == null ? void 0 : _a.contains(e.target))) {
              (_b = item.toggle) == null ? void 0 : _b.call(item);
            }
          }, 0);
        });
        overlayEnter = false;
      }));
    }, 0);
    if (triggerVal === "click") {
      subscriptions.push(subscribeEvent(originEl, "click", () => toggle(!isOpen.value)), subscribeEvent(dropdownEl, "mouseleave", (e) => {
        var _a;
        if (closeOnMouseLeaveMenu.value && !((_a = dropdownMap.get(id).child) == null ? void 0 : _a.contains(e.relatedTarget))) {
          handleLeave("dropdown", true);
        }
      }));
    } else if (triggerVal === "hover") {
      subscriptions.push(subscribeEvent(originEl, "mouseenter", () => {
        originEnter = true;
        toggle(true);
      }), subscribeEvent(originEl, "mouseleave", () => {
        originEnter = false;
        handleLeave("origin");
      }), subscribeEvent(dropdownEl, "mouseenter", () => {
        overlayEnter = true;
        isOpen.value = true;
      }), subscribeEvent(dropdownEl, "mouseleave", (e) => {
        var _a;
        overlayEnter = false;
        if (e.relatedTarget && ((originEl == null ? void 0 : originEl.contains(e.relatedTarget)) || ((_a = dropdownMap.get(id).child) == null ? void 0 : _a.contains(e.relatedTarget)))) {
          return;
        }
        handleLeave("dropdown", true);
      }));
    }
    onInvalidate(() => subscriptions.forEach((v) => v()));
  });
};
function useDropdown(id, visible, isOpen, origin, dropdownRef, popDirection, emit) {
  const calcPopDirection = (dropdownEl) => {
    const elementHeight = dropdownEl.offsetHeight;
    const bottomDistance = window.innerHeight - origin.value.getBoundingClientRect().bottom;
    const isBottomEnough = bottomDistance >= elementHeight;
    if (!isBottomEnough) {
      popDirection.value = "top";
    } else {
      popDirection.value = "bottom";
    }
  };
  watch(visible, (newVal, oldVal) => {
    if (oldVal === void 0) {
      return;
    }
    isOpen.value = newVal;
    emit("toggle", isOpen.value);
  }, { immediate: true });
  watch([isOpen, dropdownRef], ([isOpenVal, dropdownEl]) => {
    var _a;
    if (isOpenVal) {
      dropdownMap.set(id, __spreadProps(__spreadValues({}, dropdownMap.get(id)), {
        menuEl: dropdownEl,
        toggle: () => {
          isOpen.value = false;
          emit("toggle", isOpen.value);
        }
      }));
      for (const value of dropdownMap.values()) {
        if ((_a = value.menuEl) == null ? void 0 : _a.contains(origin.value)) {
          value.child = dropdownEl;
        }
      }
    }
    if (dropdownEl) {
      calcPopDirection(dropdownEl);
    }
  });
  onMounted(() => {
    dropdownMap.set(id, { toggleEl: origin.value });
  });
  onUnmounted(() => {
    dropdownMap.delete(id);
  });
}
function useOverlayProps(props, currentPosition, isOpen) {
  const { showAnimation, overlayClass, destroyOnHide } = toRefs(props);
  const overlayModelValue = ref(false);
  const overlayShowValue = ref(false);
  const styles = computed(() => ({
    transformOrigin: currentPosition.value === "top" ? "0% 100%" : "0% 0%",
    zIndex: "var(--devui-z-index-dropdown, 1052)"
  }));
  const classes = computed(() => ({
    "fade-in-bottom": showAnimation.value && isOpen.value && currentPosition.value === "bottom",
    "fade-in-top": showAnimation.value && isOpen.value && currentPosition.value === "top",
    [`${overlayClass.value}`]: true
  }));
  const handlePositionChange = (pos) => {
    currentPosition.value = pos.includes("top") || pos.includes("right-end") || pos.includes("left-end") ? "top" : "bottom";
  };
  watch(isOpen, (isOpenVal) => {
    overlayModelValue.value = destroyOnHide.value ? isOpenVal : true;
    overlayShowValue.value = isOpenVal;
  });
  return { overlayModelValue, overlayShowValue, styles, classes, handlePositionChange };
}
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
defineComponent({
  name: "DFixedOverlay",
  inheritAttrs: false,
  props: fixedOverlayProps,
  emits: ["update:modelValue", "click"],
  setup(props, ctx) {
    const {
      modelValue
    } = toRefs(props);
    const ns2 = useNamespace("fixed-overlay");
    const {
      onClick
    } = useFixedOverlay(props, ctx);
    return () => createVNode(Transition, {
      "name": ns2.m("fade")
    }, {
      default: () => {
        var _a, _b;
        return [modelValue.value && createVNode("div", mergeProps({
          "class": ns2.b()
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
    const ns2 = useNamespace("flexible-overlay");
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
        "class": ns2.b()
      }, attrs, {
        "onClick": withModifiers(() => ({}), [clickEventBubble.value ? "" : "stop"]),
        "onPointerup": withModifiers(() => ({}), ["stop"])
      }), [(_a = slots.default) == null ? void 0 : _a.call(slots), props.showArrow && createVNode("div", {
        "ref": arrowRef,
        "class": ns2.e("arrow")
      }, null)]);
    };
  }
});
const isObject = (val) => val !== null && typeof val === "object";
const ns = useNamespace("popper-trigger");
function wrapContent(content) {
  return h("span", { class: ns.b() }, content);
}
function getFirstValidChild(nodes) {
  for (const child of nodes) {
    if (isObject(child)) {
      if (child.type === Comment) {
        continue;
      }
      if (child.type === "svg" || child.type === Text) {
        return wrapContent(child);
      }
      if (child.type === Fragment) {
        return getFirstValidChild(child.children);
      }
      return child;
    }
    return wrapContent(child);
  }
  return null;
}
var PopperTrigger = defineComponent({
  name: "DPopperTrigger",
  setup(_, ctx) {
    const {
      slots,
      attrs
    } = ctx;
    return () => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots, attrs);
      const triggerRef = inject(POPPER_TRIGGER_TOKEN);
      if (!defaultSlot) {
        return null;
      }
      const firstValidChild = getFirstValidChild(defaultSlot);
      if (!firstValidChild) {
        return null;
      }
      return withDirectives(cloneVNode(firstValidChild, attrs), [[{
        mounted(el) {
          triggerRef.value = el;
        },
        updated(el) {
          triggerRef.value = el;
        },
        unmounted() {
          triggerRef.value = null;
        }
      }]]);
    };
  }
});
var dropdown = "";
let dropdownId = 1;
var Dropdown = defineComponent({
  name: "DDropdown",
  inheritAttrs: false,
  props: dropdownProps,
  emits: ["toggle"],
  setup(props, {
    slots,
    attrs,
    emit,
    expose
  }) {
    const {
      visible,
      position,
      align,
      offset: offset2,
      destroyOnHide,
      shiftOffset,
      showAnimation
    } = toRefs(props);
    const origin = ref();
    const dropdownRef = ref();
    const overlayRef = ref();
    const id = `dropdown_${dropdownId++}`;
    const isOpen = ref(false);
    const currentPosition = ref("bottom");
    const ns2 = useNamespace("dropdown");
    provide(POPPER_TRIGGER_TOKEN, origin);
    useDropdownEvent({
      id,
      isOpen,
      origin,
      dropdownRef,
      props,
      emit
    });
    useDropdown(id, visible, isOpen, origin, dropdownRef, currentPosition, emit);
    const {
      overlayModelValue,
      overlayShowValue,
      styles,
      classes,
      handlePositionChange
    } = useOverlayProps(props, currentPosition, isOpen);
    watch(overlayShowValue, (overlayShowValueVal) => {
      nextTick(() => {
        if (!destroyOnHide.value && overlayShowValueVal) {
          overlayRef.value.updatePosition();
        }
      });
    });
    expose({
      updatePosition: () => overlayRef.value.updatePosition()
    });
    return () => createVNode(Fragment, null, [createVNode(PopperTrigger, null, {
      default: () => {
        var _a;
        return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
      }
    }), createVNode(Teleport, {
      "to": "body"
    }, {
      default: () => [createVNode(Transition, {
        "name": showAnimation.value ? ns2.m(`fade-${currentPosition.value}`) : ""
      }, {
        default: () => [withDirectives(createVNode(FlexibleOverlay, {
          "modelValue": overlayModelValue.value,
          "onUpdate:modelValue": ($event) => overlayModelValue.value = $event,
          "ref": overlayRef,
          "origin": origin.value,
          "position": position.value,
          "align": align.value,
          "offset": offset2.value,
          "shiftOffset": shiftOffset == null ? void 0 : shiftOffset.value,
          "onPositionChange": handlePositionChange,
          "click-event-bubble": true,
          "class": classes.value,
          "style": styles.value
        }, {
          default: () => {
            var _a;
            return [createVNode("div", mergeProps({
              "ref": dropdownRef,
              "class": ns2.e("menu-wrap")
            }, attrs), [(_a = slots.menu) == null ? void 0 : _a.call(slots)])];
          }
        }), [[vShow, overlayShowValue.value]])]
      })]
    })]);
  }
});
const dropdownMenuProps = {
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
  align: {
    type: String,
    default: null
  },
  offset: {
    type: [Number, Object],
    default: 4
  },
  clickOutside: {
    type: Function,
    default: () => true
  },
  showAnimation: {
    type: Boolean,
    default: true
  },
  overlayClass: {
    type: String,
    default: ""
  }
};
var DropdownMenu = defineComponent({
  name: "DDropdownMenu",
  inheritAttrs: false,
  props: dropdownMenuProps,
  emits: ["update:modelValue"],
  setup(props, {
    slots,
    attrs,
    emit
  }) {
    const {
      modelValue,
      origin,
      position,
      align,
      offset: offset2,
      clickOutside,
      showAnimation,
      overlayClass
    } = toRefs(props);
    const dropdownMenuRef = ref(null);
    const ns2 = useNamespace("dropdown");
    onClickOutside(dropdownMenuRef, (value) => {
      var _a, _b;
      if (((_a = clickOutside.value) == null ? void 0 : _a.call(clickOutside)) && !((_b = origin == null ? void 0 : origin.value) == null ? void 0 : _b.contains(value.target))) {
        emit("update:modelValue", false);
      }
    });
    const currentPosition = ref("bottom");
    const handlePositionChange = (pos) => {
      currentPosition.value = pos.split("-")[0] === "top" ? "top" : "bottom";
    };
    const styles = computed(() => ({
      transformOrigin: currentPosition.value === "top" ? "0% 100%" : "0% 0%"
    }));
    return () => createVNode(Teleport, {
      "to": "body"
    }, {
      default: () => [createVNode(Transition, {
        "name": showAnimation.value ? ns2.m(`fade-${currentPosition.value}`) : ""
      }, {
        default: () => [createVNode(FlexibleOverlay, {
          "modelValue": modelValue.value,
          "onUpdate:modelValue": ($event) => modelValue.value = $event,
          "origin": origin == null ? void 0 : origin.value,
          "position": position.value,
          "align": align.value,
          "offset": offset2.value,
          "onPositionChange": handlePositionChange,
          "class": overlayClass.value,
          "style": styles.value
        }, {
          default: () => {
            var _a;
            return [createVNode("div", mergeProps({
              "ref": dropdownMenuRef,
              "class": ns2.e("menu-wrap")
            }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots)])];
          }
        })]
      })]
    });
  }
});
var index = {
  title: "Dropdown \u4E0B\u62C9\u83DC\u5355",
  category: "\u5BFC\u822A",
  status: "50%",
  install(app) {
    app.component(Dropdown.name, Dropdown);
    app.component(DropdownMenu.name, DropdownMenu);
  }
};
export { Dropdown, DropdownMenu, index as default, dropdownMenuProps };
