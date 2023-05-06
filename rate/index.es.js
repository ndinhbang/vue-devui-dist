import { defineComponent, ref, watch, onMounted, createVNode, resolveComponent } from "vue";
const rateProps = {
  modelValue: {
    type: Number,
    default: 0
  },
  read: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    default: 5
  },
  type: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: ""
  },
  character: {
    type: String,
    default: ""
  },
  allowHalf: {
    type: Boolean,
    default: false
  },
  onChange: {
    type: Function,
    default: void 0
  },
  onTouched: {
    type: Function,
    default: void 0
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
var rate = "";
var Rate = defineComponent({
  name: "DRate",
  props: rateProps,
  emits: ["change", "update:modelValue"],
  setup(props, ctx) {
    const totalLevelArray = ref([]);
    const chooseValue = ref(0);
    const setChange = (start, end, width) => {
      for (let i = start; i < end; i++) {
        totalLevelArray.value[i]["width"] = width;
      }
    };
    const initRating = () => {
      chooseValue.value = props.modelValue;
      const halfStar = chooseValue.value % 1;
      const intCurrentLevel = Math.floor(chooseValue.value);
      setChange(0, intCurrentLevel, "100%");
      if (halfStar > 0) {
        totalLevelArray.value[intCurrentLevel]["width"] = halfStar * 100 + "%";
        setChange(intCurrentLevel + 1, props.count, "0");
      } else {
        setChange(intCurrentLevel, props.count, "0");
      }
    };
    const initLevelArray = () => {
      totalLevelArray.value = [];
      for (let i = 0; i < props.count; i++) {
        totalLevelArray.value.push({
          width: "0"
        });
      }
    };
    watch([() => props.modelValue, () => props.count], () => {
      initLevelArray();
      initRating();
    });
    onMounted(() => {
      initLevelArray();
      initRating();
    });
    const isSemiSelected = (e) => {
      const target = e.target;
      return props.allowHalf && e.offsetX * 2 <= target.clientWidth;
    };
    const hoverToggle = (e, index2) => {
      if (props.read) {
        return;
      }
      setChange(0, index2 + 1, "100%");
      const width = isSemiSelected(e) ? "50%" : "100%";
      setChange(index2, index2 + 1, width);
      setChange(index2 + 1, props.count, "0");
    };
    const onMouseleave = () => {
      initRating();
    };
    const selectValue = (e, index2) => {
      if (props.read) {
        return;
      }
      setChange(0, index2, "100%");
      if (isSemiSelected(e)) {
        setChange(index2, index2 + 1, "50%");
        chooseValue.value = index2 - 0.5;
      } else {
        setChange(index2, index2 + 1, "100%");
        chooseValue.value = index2;
      }
      setChange(index2 + 1, props.count, "0");
      props.onChange && props.onChange(chooseValue.value + 1);
      props.onTouched && props.onTouched();
      ctx.emit("update:modelValue", chooseValue.value + 1);
    };
    return {
      totalLevelArray,
      chooseValue,
      hoverToggle,
      selectValue,
      onMouseleave
    };
  },
  render() {
    const {
      totalLevelArray,
      icon,
      character,
      read,
      type,
      color,
      hoverToggle,
      selectValue,
      onMouseleave
    } = this;
    const ns = useNamespace("rate");
    return createVNode("div", {
      "class": ns.b(),
      "onMouseleave": onMouseleave,
      "style": `--star-color: ${color}`
    }, [totalLevelArray.map((item, index2) => createVNode("div", {
      "class": [ns.m("align"), ns.m("pointer"), read ? ns.m("only-read") : ""],
      "key": index2,
      "onMouseover": (e) => hoverToggle(e, index2),
      "onClick": (e) => selectValue(e, index2)
    }, [icon && !character && createVNode("span", {
      "class": ns.e("color")
    }, [createVNode(resolveComponent("d-icon"), {
      "name": icon
    }, null)]), character && !icon && createVNode("span", {
      "class": ns.e("color")
    }, [character]), !icon && !character && createVNode("span", {
      "class": ns.e("color")
    }, [createVNode("svg", {
      "width": "16px",
      "height": "16px",
      "viewBox": "0 0 16 16",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns-xlink": "http://www.w3.org/1999/xlink"
    }, [createVNode("g", {
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("g", {
      "fill": "#E3E5E9",
      "id": "Mask"
    }, [createVNode("polygon", {
      "points": "8 12.7603585 3.67376208 14.3147912 3.81523437 9.71994835                       1 6.0857977 5.41367261 4.80046131 8 1 10.5863274 4.80046131 15 6.0857977                       12.1847656 9.71994835 12.3262379 14.3147912"
    }, null)])])])]), icon && !character && createVNode("span", {
      "class": [ns.e("color-active"), ns.e("active-star"), ns.em("color", type)],
      "style": {
        width: item.width
      }
    }, [createVNode(resolveComponent("d-icon"), {
      "name": icon,
      "color": color
    }, null)]), character && !icon && createVNode("span", {
      "class": [ns.e("color-active"), ns.e("active-star"), ns.em("color", type)],
      "style": {
        color,
        width: item.width
      }
    }, [character]), !character && !icon && createVNode("span", {
      "class": [ns.e("color-active"), ns.e("active-star"), !color ? ns.em("color", type) : ns.em("color", "customize")],
      "style": {
        width: item.width
      }
    }, [createVNode("svg", {
      "width": "16px",
      "height": "16px",
      "viewBox": "0 0 16 16",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns-xlink": "http://www.w3.org/1999/xlink"
    }, [createVNode("g", {
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("g", {
      "id": "Mask"
    }, [createVNode("polygon", {
      "points": "8 12.7603585 3.67376208 14.3147912 3.81523437 9.71994835 1                       6.0857977 5.41367261 4.80046131 8 1 10.5863274 4.80046131 15 6.0857977                       12.1847656 9.71994835 12.3262379 14.3147912"
    }, null)])])])])]))]);
  }
});
var index = {
  title: "Rate \u8BC4\u5206",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Rate.name, Rate);
  }
};
export { Rate, index as default, rateProps };
