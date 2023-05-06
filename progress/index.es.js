import { defineComponent, toRefs, ref, effect, reactive, watch, createVNode, createTextVNode } from "vue";
function middleNum(num, min = 0, max = 100) {
  let middle = 0;
  middle = Math.min(num, max);
  middle = Math.max(middle, min);
  return middle;
}
const progressProps = {
  height: {
    type: String,
    default: "20px"
  },
  percentage: {
    type: Number,
    default: 0
  },
  percentageText: {
    type: String,
    default: ""
  },
  barBgColor: {
    type: String,
    default: "#5170ff"
  },
  isCircle: {
    type: Boolean,
    default: false
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  showContent: {
    type: Boolean,
    default: true
  },
  percentageTextPlacement: {
    type: String,
    default: "inside"
  },
  percentageTextColor: {
    type: String,
    default: ""
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
var progress = "";
var Progress = defineComponent({
  name: "DProgress",
  props: progressProps,
  setup(props) {
    const {
      height,
      percentage,
      percentageText,
      percentageTextPlacement,
      percentageTextColor,
      barBgColor,
      isCircle,
      strokeWidth,
      showContent
    } = toRefs(props);
    const normalPercentage = ref(0);
    effect(() => {
      normalPercentage.value = middleNum(percentage.value);
    });
    const data = reactive({
      pathString: "",
      trailPath: null,
      strokePath: null
    });
    const setCircleProgress = () => {
      if (!isCircle) {
        return;
      }
      const radius = 50 - strokeWidth.value / 2;
      const beginPositionY = -radius;
      const endPositionY = radius * -2;
      data.pathString = `M 50,50 m 0,${beginPositionY}
      a ${radius},${radius} 0 1 1 0,${-endPositionY}
      a ${radius},${radius} 0 1 1 0,${endPositionY}`;
      const len = Math.PI * 2 * radius;
      data.trailPath = {
        stroke: "var(--devui-dividing-line, #dfe1e6)",
        strokeDasharray: `${len}px ${len}px`,
        strokeDashoffset: `0`,
        transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"
      };
      data.strokePath = {
        stroke: barBgColor || null,
        strokeDasharray: `${normalPercentage.value / 100 * len}px ${len}px`,
        strokeDashoffset: `0`,
        transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s"
      };
    };
    setCircleProgress();
    watch([height, normalPercentage, percentageText, percentageTextPlacement, percentageTextColor, barBgColor, isCircle, strokeWidth, showContent], () => {
      setCircleProgress();
    });
    return {
      data,
      normalPercentage
    };
  },
  render() {
    var _a;
    const {
      height,
      normalPercentage,
      percentageText,
      percentageTextPlacement,
      percentageTextColor,
      barBgColor,
      isCircle,
      strokeWidth,
      showContent,
      data,
      $slots
    } = this;
    const ns = useNamespace("progress");
    const isOutside = percentageTextPlacement === "outside";
    const isInsideBg = percentageTextPlacement === "insideBg";
    const createPercentageText = () => {
      return createVNode("span", {
        "style": {
          lineHeight: height,
          color: percentageTextColor
        }
      }, [percentageText]);
    };
    const progressLine = createVNode("div", {
      "class": ns.e("content")
    }, [createVNode("div", {
      "class": ns.e("line"),
      "style": {
        height,
        borderRadius: height
      }
    }, [createVNode("div", {
      "class": [ns.e("bar"), percentageTextPlacement],
      "style": {
        height,
        borderRadius: height,
        width: `${normalPercentage}%`,
        backgroundColor: barBgColor
      }
    }, [!isOutside && !isInsideBg ? createPercentageText() : null]), isInsideBg ? createPercentageText() : null]), isOutside && !!percentageText ? createPercentageText() : null]);
    const textElement = createVNode("span", {
      "class": ns.e("circle-text"),
      "style": {
        color: percentageTextColor
      }
    }, [normalPercentage, createTextVNode("%")]);
    const progressCircle = createVNode("div", {
      "class": ns.e("circle")
    }, [createVNode("svg", {
      "class": ns.e("circle"),
      "viewBox": "0 0 100 100"
    }, [createVNode("path", {
      "fill-opacity": "0",
      "stroke-width": strokeWidth,
      "style": data.trailPath,
      "d": data.pathString
    }, null), createVNode("path", {
      "d": data.pathString,
      "stroke-linecap": "round",
      "fill-opacity": "0",
      "stroke": barBgColor,
      "stroke-width": normalPercentage ? strokeWidth : 0,
      "style": data.strokePath
    }, null)]), showContent && ((_a = $slots.default) == null ? void 0 : _a.call($slots)), showContent && !$slots.default && textElement]);
    return createVNode("div", {
      "class": ns.b()
    }, [!isCircle ? progressLine : progressCircle]);
  }
});
var index = {
  title: "Progress \u8FDB\u5EA6\u6761",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Progress.name, Progress);
  }
};
export { Progress, index as default, progressProps };
