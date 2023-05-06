import { defineComponent, toRefs, ref, provide, watch, computed, createVNode, resolveDynamicComponent, mergeProps, getCurrentInstance, inject, Fragment } from "vue";
const stepsProps = {
  modelValue: {
    type: Number,
    default: 0
  },
  space: {
    type: Number
  },
  alignCenter: {
    type: Boolean,
    default: false
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  simple: {
    type: Boolean,
    default: false
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
var steps = "";
const ACTIVE_STEP = "active-step";
const STEPS = "steps";
const STEPS_PROPS = "steps-props";
var Steps = defineComponent({
  name: "DSteps",
  props: stepsProps,
  emits: ["update:modelValue"],
  setup(props, {
    slots
  }) {
    const {
      modelValue,
      direction,
      simple
    } = toRefs(props);
    const ns = useNamespace("steps");
    const activeStep = ref(modelValue.value);
    provide(ACTIVE_STEP, activeStep);
    provide(STEPS_PROPS, props);
    const steps2 = ref([]);
    provide(STEPS, steps2);
    watch(modelValue, (newVal) => {
      activeStep.value = newVal;
    });
    const stepsClass = computed(() => {
      const directionClass = direction.value === "vertical" ? " vertical" : "";
      const simpleClass = simple.value ? " simple" : "";
      return `${ns.b()}${directionClass}${simpleClass}`;
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": stepsClass.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
const stepProps = {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  icon: {
    type: String
  },
  status: {
    type: String
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
var step = "";
var Step = defineComponent({
  name: "DStep",
  props: stepProps,
  setup(props, {
    slots
  }) {
    const {
      title,
      description,
      icon: icon2,
      status
    } = toRefs(props);
    const ns = useNamespace("step");
    const instance = getCurrentInstance();
    const activeStep = inject(ACTIVE_STEP);
    const steps2 = inject(STEPS);
    steps2.value.push(instance);
    const stepsProps2 = inject(STEPS_PROPS);
    const currentStepIndex = steps2.value.indexOf(instance);
    const stepClass = computed(() => {
      const activeClass = activeStep.value === currentStepIndex ? " active" : "";
      const finishedClass = activeStep.value > currentStepIndex ? " finished" : "";
      const centerClass = stepsProps2.alignCenter ? " center" : "";
      const statusClass = (status == null ? void 0 : status.value) ? ` ${status == null ? void 0 : status.value}` : "";
      const simpleClass = stepsProps2.simple ? ` ${ns.m("simple")}` : "";
      return `${ns.b()}${activeClass}${finishedClass}${centerClass}${statusClass}${simpleClass}`;
    });
    const stepStyle = computed(() => {
      const styleObj = {};
      if (stepsProps2.space) {
        styleObj.width = `${stepsProps2.space}px`;
      } else {
        styleObj.flexBasis = stepsProps2.alignCenter || stepsProps2.simple ? `${100 / steps2.value.length}%` : `${100 / (steps2.value.length - 1)}%`;
      }
      return styleObj;
    });
    const iconColor = computed(() => {
      const isActive = activeStep.value === currentStepIndex;
      const isFinished = activeStep.value > currentStepIndex;
      return isActive ? "var(--devui-brand)" : isFinished ? "var(--devui-success)" : "var(--devui-placeholder)";
    });
    const statusMap = {
      finish: createVNode(Icon, {
        "name": "right-o",
        "color": "var(--devui-success)",
        "size": "24px"
      }, null),
      success: createVNode(Icon, {
        "name": "right-o",
        "color": "var(--devui-success)",
        "size": "24px"
      }, null),
      error: createVNode(Icon, {
        "name": "error-o",
        "color": "var(--devui-danger)",
        "size": "24px"
      }, null)
    };
    const renderDot = () => {
      var _a;
      return slots.icon ? (_a = slots.icon) == null ? void 0 : _a.call(slots, iconColor.value) : icon2.value ? createVNode(Icon, {
        "name": icon2.value,
        "color": iconColor.value,
        "size": "24px"
      }, null) : status.value && statusMap[status.value] ? statusMap[status.value] : activeStep.value > steps2.value.indexOf(instance) ? createVNode(Icon, {
        "name": "right-o",
        "color": "var(--devui-success)",
        "size": "24px"
      }, null) : createVNode("span", {
        "class": ns.e("dot")
      }, [currentStepIndex + 1]);
    };
    return () => {
      return createVNode(Fragment, null, [stepsProps2.simple ? createVNode("div", {
        "class": stepClass.value,
        "style": stepStyle.value
      }, [title.value]) : createVNode("div", {
        "class": stepClass.value,
        "style": stepStyle.value
      }, [createVNode("div", {
        "class": ns.e("dot-container")
      }, [renderDot(), createVNode("div", {
        "class": ns.e("line")
      }, null)]), createVNode("div", {
        "class": ns.e("content")
      }, [createVNode("span", {
        "class": ns.e("title")
      }, [title.value]), description.value && createVNode("span", {
        "class": ns.e("description")
      }, [description.value])])])]);
    };
  }
});
var index = {
  title: "Steps \u6B65\u9AA4\u6761",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Steps.name, Steps);
    app.component(Step.name, Step);
  }
};
export { Step, Steps, index as default, stepProps, stepsProps };
