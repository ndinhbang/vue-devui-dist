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
import { defineComponent, createVNode, Transition, ref, computed, watch, onUnmounted, Teleport, mergeProps, reactive, createApp, isVNode } from "vue";
import { onClickOutside } from "@vueuse/core";
const drawerProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: Number,
    default: 1040
  },
  showOverlay: {
    type: Boolean,
    default: true
  },
  escKeyCloseable: {
    type: Boolean,
    default: true
  },
  position: {
    type: String,
    default: "right"
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  beforeClose: {
    type: Function
  }
};
const drawerOverlayProps = {
  visible: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function
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
var drawerOverlay = "";
var DrawerOverlay = defineComponent({
  name: "DDrawerOverlay",
  props: drawerOverlayProps,
  emits: ["click"],
  setup(props, ctx) {
    const ns = useNamespace("drawer");
    const handleClick = (e) => {
      ctx.emit("click", e);
    };
    return () => createVNode(Transition, {
      "name": "drawer-overlay-fade"
    }, {
      default: () => [props.visible && createVNode("div", {
        "class": ns.e("overlay"),
        "onClick": handleClick
      }, null)]
    });
  }
});
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
function useDrawer(props, emit) {
  const ns = useNamespace("drawer");
  const modalNs = useNamespace("modal", true);
  const drawerRef = ref();
  const overlayRef = ref();
  const drawerClasses = computed(() => ({
    [ns.b()]: true,
    [ns.m(props.position)]: true
  }));
  const close = () => {
    emit("update:modelValue", false);
    emit("close");
  };
  let lockScrollCb;
  const execClose = () => {
    props.beforeClose ? props.beforeClose(close) : close();
  };
  const handleOverlayClick = () => {
    props.closeOnClickOverlay && execClose();
  };
  const handleEscClose = (e) => {
    e.code === "Escape" && execClose();
  };
  const handleClickOutside = (e) => {
    const composedPath = e.composedPath();
    const modalOverlay = document.querySelectorAll(modalNs.e("overlay"));
    const modal = document.querySelectorAll(modalNs.b());
    const isClickModalOverlay = Array.from(modalOverlay).filter((item) => composedPath.includes(item));
    const isClickModal = Array.from(modal).filter((item) => composedPath.includes(item));
    if (isClickModalOverlay.length || isClickModal.length) {
      return;
    }
    execClose();
  };
  setTimeout(() => {
    onClickOutside(drawerRef, handleClickOutside, { capture: false, ignore: [overlayRef] });
  });
  const removeBodyAdditions = () => {
    lockScrollCb == null ? void 0 : lockScrollCb();
    document.removeEventListener("keyup", handleEscClose);
  };
  watch(() => props.modelValue, (val) => {
    if (val) {
      emit("open");
      props.lockScroll && (lockScrollCb = lockScroll());
      props.escKeyCloseable && document.addEventListener("keyup", handleEscClose);
    } else {
      removeBodyAdditions();
    }
  });
  onUnmounted(removeBodyAdditions);
  return { overlayRef, drawerRef, drawerClasses, handleOverlayClick };
}
var drawer = "";
var Drawer = defineComponent({
  name: "DDrawer",
  inheritAttrs: false,
  props: drawerProps,
  emits: ["close", "update:modelValue", "open"],
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      overlayRef,
      drawerRef,
      drawerClasses,
      handleOverlayClick
    } = useDrawer(props, emit);
    return () => createVNode(Teleport, {
      "to": "body"
    }, {
      default: () => [props.showOverlay && createVNode(DrawerOverlay, {
        "ref": overlayRef,
        "visible": props.modelValue,
        "style": {
          zIndex: props.zIndex - 1
        },
        "onClick": handleOverlayClick
      }, null), createVNode(Transition, {
        "name": `drawer-fly-${props.position}`
      }, {
        default: () => {
          var _a;
          return [props.modelValue && createVNode("div", mergeProps({
            "ref": drawerRef,
            "class": drawerClasses.value,
            "style": {
              zIndex: props.zIndex
            }
          }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots)])];
        }
      })]
    });
  }
});
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const defaultOptions = {
  modelValue: false,
  content: "",
  zIndex: 1e3,
  showOverlay: true,
  escKeyCloseable: true,
  position: "right",
  lockScroll: true,
  closeOnClickOverlay: true
};
function initInstance(state) {
  const container = document.createElement("div");
  const content = state.content;
  delete state.content;
  const app = createApp({
    setup() {
      const handleVisibleChange = () => {
        state.modelValue = false;
      };
      onUnmounted(() => {
        document.body.removeChild(container);
      });
      return () => createVNode(Drawer, mergeProps(state, {
        "onUpdate:modelValue": handleVisibleChange
      }), _isSlot(content) ? content : {
        default: () => [content]
      });
    }
  });
  document.body.appendChild(container);
  app.mount(container);
  return app;
}
class DrawerService {
  open(options) {
    const state = reactive(__spreadValues(__spreadValues({}, defaultOptions), options));
    const app = initInstance(state);
    state.modelValue = true;
    return {
      close: () => {
        state.modelValue = false;
        app.unmount();
      }
    };
  }
}
var index = {
  title: "Drawer \u62BD\u5C49\u677F",
  category: "\u53CD\u9988",
  status: "75%",
  install(app) {
    app.component(Drawer.name, Drawer);
    app.config.globalProperties.$drawerService = new DrawerService();
  }
};
export { Drawer, DrawerService, index as default };
