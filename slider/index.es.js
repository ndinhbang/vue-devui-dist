import { ref, watch, onMounted, defineComponent, computed, createVNode } from "vue";
const sliderProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  max: {
    type: Number,
    default: 100
  },
  min: {
    type: Number,
    default: 0
  },
  modelValue: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  tipsRenderer: {
    type: [Function, null],
    default: () => (value) => `${value}`
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
const isFunction = (value) => Object.prototype.toString.call(value) === "[object Function]";
function useSliderEvent(props, ctx) {
  let isClick = true;
  let startPosition = 0;
  let startX = 0;
  const sliderRunway = ref();
  const currentValue = ref(Number(props.modelValue));
  const currentPosition = ref(0);
  const percentDisplay = ref("");
  const popoverShow = ref(false);
  const newPosition = ref(0);
  function getSliderWidth() {
    var _a;
    return Boolean(sliderRunway.value) ? ((_a = sliderRunway.value) == null ? void 0 : _a.clientWidth) || 0 : 0;
  }
  function initCurrentPosition() {
    const sliderWidth = getSliderWidth();
    currentPosition.value = sliderWidth * (currentValue.value - props.min) / (props.max - props.min);
  }
  function setPosition(position) {
    const clientWidth = getSliderWidth();
    const sliderWidth = Math.round(clientWidth);
    if (position < 0) {
      position = 0;
    }
    const LengthPerStep = sliderWidth / ((props.max - props.min) / props.step);
    const steps = Math.round(position / LengthPerStep);
    const value = steps * LengthPerStep;
    if (Math.round(value) >= sliderWidth) {
      currentPosition.value = sliderWidth;
      currentValue.value = props.max;
      percentDisplay.value = "100%";
      ctx.emit("update:modelValue", props.max);
      return;
    }
    percentDisplay.value = Math.round(value * 100 / sliderWidth) + "%";
    currentValue.value = Math.round(value * (props.max - props.min) / sliderWidth) + props.min;
    currentPosition.value = position;
    ctx.emit("update:modelValue", currentValue.value);
  }
  function dragStart(event) {
    isClick = false;
    startX = event.clientX;
    startPosition = currentPosition.value;
    newPosition.value = startPosition;
  }
  function onDragging(event) {
    popoverShow.value = true;
    const currentX = event.clientX;
    const pxOffset = currentX - startX;
    newPosition.value = startPosition + pxOffset;
    setPosition(newPosition.value);
  }
  function onDragEnd() {
    popoverShow.value = false;
    setTimeout(() => {
      isClick = true;
    }, 100);
    window.removeEventListener("mousemove", onDragging);
    window.removeEventListener("mouseup", onDragEnd);
  }
  function handleButtonMousedown(event) {
    popoverShow.value = true;
    if (!props.disabled) {
      event.preventDefault();
      dragStart(event);
      window.addEventListener("mousemove", onDragging);
      window.addEventListener("mouseup", onDragEnd);
    }
  }
  function handleRunwayMousedown(event) {
    if (!props.disabled && isClick) {
      const _e = event.target;
      startX = _e.getBoundingClientRect().left;
      const currentX = event.clientX;
      setPosition(currentX - startX);
      handleButtonMousedown(event);
    }
  }
  watch(() => props.modelValue, () => {
    currentValue.value = Number(props.modelValue);
    if (currentValue.value > props.max) {
      percentDisplay.value = "100%";
    } else if (currentValue.value < props.min) {
      percentDisplay.value = "0%";
    } else {
      percentDisplay.value = (currentValue.value - props.min) * 100 / (props.max - props.min) + "%";
    }
    initCurrentPosition();
  }, { immediate: true });
  onMounted(initCurrentPosition);
  return { sliderRunway, popoverShow, percentDisplay, currentValue, handleRunwayMousedown, handleButtonMousedown };
}
var slider = "";
var Slider = defineComponent({
  name: "DSlider",
  props: sliderProps,
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const ns = useNamespace("slider");
    const {
      sliderRunway,
      popoverShow,
      percentDisplay,
      currentValue,
      handleRunwayMousedown,
      handleButtonMousedown
    } = useSliderEvent(props, ctx);
    const disableClass = computed(() => {
      return props.disabled ? " disabled" : "";
    });
    const tipsContent = computed(() => isFunction(props.tipsRenderer) ? props.tipsRenderer(currentValue.value) : "");
    return () => createVNode("div", {
      "class": ns.b()
    }, [createVNode("div", {
      "ref": sliderRunway,
      "class": [ns.e("runway"), disableClass.value],
      "onMousedown": handleRunwayMousedown,
      "onMouseout": () => popoverShow.value = false
    }, [createVNode("div", {
      "class": [ns.e("bar"), disableClass.value],
      "style": {
        width: percentDisplay.value
      }
    }, null), createVNode("div", {
      "class": [ns.e("button"), disableClass.value],
      "style": {
        left: percentDisplay.value
      },
      "onMousedown": handleButtonMousedown,
      "onMouseenter": () => popoverShow.value = true,
      "onMouseout": () => popoverShow.value = false
    }, null), props.tipsRenderer === null ? null : popoverShow.value ? createVNode("div", {
      "class": ns.e("popover"),
      "style": {
        left: percentDisplay.value
      }
    }, [createVNode("div", {
      "class": ns.e("popover-arrow")
    }, null), createVNode("div", {
      "class": ns.e("popover-content")
    }, [tipsContent.value])]) : null])]);
  }
});
var index = {
  title: "Slider \u6ED1\u5757",
  category: "\u6570\u636E\u5F55\u5165",
  status: "100%",
  install(app) {
    app.component(Slider.name, Slider);
  }
};
export { Slider, index as default, sliderProps };
