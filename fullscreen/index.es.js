import { toRefs, onMounted, onUnmounted, watch, defineComponent, ref, renderSlot, useSlots, createVNode } from "vue";
const fullscreenProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  mode: {
    type: String,
    default: "normal"
  },
  zIndex: {
    type: Number,
    default: 10
  }
};
const ESC_KEY_CODE = 27;
function useKeydown(props, ctx) {
  const { modelValue } = toRefs(props);
  const handleKeydown = (event) => {
    if (event.keyCode === ESC_KEY_CODE && modelValue) {
      ctx.emit("update:modelValue", false);
    }
  };
  onMounted(() => {
    document.addEventListener("keydown", handleKeydown);
  });
  onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydown);
  });
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
const ns = useNamespace("fullscreen");
const launchNormalFullscreen = (targetElement, props) => {
  targetElement.classList.add(ns.b());
  if (props.zIndex) {
    targetElement.setAttribute("style", `z-index: ${props.zIndex}`);
  }
};
const exitNormalFullscreen = (targetElement) => {
  targetElement.classList.remove(ns.b());
  targetElement.style.zIndex = "";
};
const launchImmersiveFullScreen = async (docElement) => {
  let fullscreenLaunch = null;
  if (docElement.requestFullscreen) {
    fullscreenLaunch = docElement.requestFullscreen();
  } else if (docElement.mozRequestFullScreen) {
    fullscreenLaunch = docElement.mozRequestFullScreen();
  } else if (docElement.webkitRequestFullScreen) {
    fullscreenLaunch = Promise.resolve(docElement.webkitRequestFullScreen());
  } else if (docElement.msRequestFullscreen) {
    fullscreenLaunch = Promise.resolve(docElement.msRequestFullscreen());
  }
  return await (fullscreenLaunch == null ? void 0 : fullscreenLaunch.then(() => !!document.fullscreenElement));
};
const exitImmersiveFullScreen = async (doc) => {
  let fullscreenExit = null;
  if (doc.exitFullscreen) {
    fullscreenExit = doc.exitFullscreen();
  } else if (doc.mozCancelFullScreen) {
    fullscreenExit = doc.mozCancelFullScreen();
  } else if (doc.webkitCancelFullScreen) {
    fullscreenExit = Promise.resolve(doc.webkitCancelFullScreen());
  } else if (doc.msExitFullscreen) {
    fullscreenExit = Promise.resolve(doc.msExitFullscreen());
  }
  return await (fullscreenExit == null ? void 0 : fullscreenExit.then(() => !!document.fullscreenElement));
};
const addFullScreenStyle = () => {
  document.getElementsByTagName("html")[0].classList.add(ns.e("html"));
};
const removeFullScreenStyle = () => {
  document.getElementsByTagName("html")[0].classList.remove(ns.e("html"));
};
function useFullscreen(props, slotElement, ctx) {
  const { modelValue, mode } = toRefs(props);
  let exitByKeydown = false;
  const handleNormalFullscreen = (isOpen) => {
    if (isOpen) {
      launchNormalFullscreen(slotElement.value, props);
      addFullScreenStyle();
    } else {
      exitNormalFullscreen(slotElement.value);
      removeFullScreenStyle();
    }
  };
  const handleImmersiveFullscreen = (isOpen) => {
    if (isOpen) {
      launchImmersiveFullScreen(slotElement.value);
    } else {
      if (!exitByKeydown) {
        exitImmersiveFullScreen(document);
      }
    }
  };
  watch(modelValue, (newVal) => {
    if (mode.value === "normal") {
      handleNormalFullscreen(newVal);
    }
    if (mode.value === "immersive") {
      handleImmersiveFullscreen(newVal);
    }
  });
  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      ctx.emit("update:modelValue");
      exitByKeydown = true;
    } else {
      exitByKeydown = false;
    }
  };
  onMounted(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
  });
  onUnmounted(() => {
    document.removeEventListener("fullscreenchange", handleFullscreenChange);
  });
}
var fullscreen = "";
var Fullscreen = defineComponent({
  name: "DFullscreen",
  props: fullscreenProps,
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const slotElement = ref();
    useFullscreen(props, slotElement, ctx);
    useKeydown(props, ctx);
    return () => {
      const defaultSlot = renderSlot(useSlots(), "default");
      return createVNode("div", {
        "ref": slotElement
      }, [defaultSlot]);
    };
  }
});
var index = {
  title: "Fullscreen \u5168\u5C4F",
  category: "\u901A\u7528",
  status: "100%",
  install(app) {
    app.component(Fullscreen.name, Fullscreen);
  }
};
export { Fullscreen, index as default, fullscreenProps };
