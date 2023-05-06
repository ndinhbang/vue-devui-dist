import { defineComponent, toRefs, computed, createVNode, resolveDynamicComponent, mergeProps, inject, provide, ref, reactive, onMounted, watch, toRef, nextTick, Fragment } from "vue";
const timeAxisProps = {
  direction: {
    type: String,
    default: "vertical"
  },
  center: {
    type: Boolean,
    default: false
  },
  mode: {
    type: String,
    default: "normal"
  },
  timePosition: {
    type: String,
    default: "left"
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
var DIcon = defineComponent({
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
const timeAxisItemProps = {
  time: {
    type: String
  },
  dotColor: {
    type: String
  },
  lineStyle: {
    type: String,
    default: "solid"
  },
  lineColor: {
    type: String
  },
  position: {
    type: String
  },
  timePosition: {
    type: String,
    default: "left"
  },
  type: {
    type: String,
    default: "primary"
  }
};
var TimelineItem = defineComponent({
  name: "DTimelineItem",
  components: {
    DIcon
  },
  props: timeAxisItemProps,
  emits: [],
  setup(props, ctx) {
    const timeAxis = inject("timeAxis");
    const itemClass = "devui-timeline-item";
    const renderTime = () => {
      var _a, _b;
      return createVNode("div", {
        "class": `${itemClass}-time`
      }, [ctx.slots.time ? (_b = (_a = ctx.slots).time) == null ? void 0 : _b.call(_a) : props.time]);
    };
    const renderContent = () => {
      var _a, _b;
      return createVNode("div", {
        "class": `${itemClass}-content`
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a, props)]);
    };
    const renderPosition = (types) => {
      if (types.includes(props.position)) {
        return renderContent();
      } else {
        if (timeAxis.props.direction === "horizontal") {
          return renderTime();
        } else {
          return props.timePosition === "left" ? renderTime() : "";
        }
      }
    };
    const setTypeIcon = (type) => {
      if (type === "primary") {
        return "";
      }
      return createVNode("i", {
        "class": `icon-${type === "success" ? "right" : type}-o`
      }, null);
    };
    const renderDot = () => {
      var _a, _b;
      if (ctx.slots.dot) {
        return createVNode("div", {
          "style": {
            color: props.dotColor
          },
          "class": `${itemClass}-dot`
        }, [" ", (_b = (_a = ctx.slots).dot) == null ? void 0 : _b.call(_a)]);
      } else {
        return createVNode("div", {
          "class": `${itemClass}-dot ${itemClass}-type-${props.type}`,
          "style": {
            borderColor: props.dotColor
          }
        }, [setTypeIcon(props.type)]);
      }
    };
    return () => {
      return createVNode("div", {
        "class": itemClass
      }, [createVNode("div", {
        "class": `${itemClass}-data-left ${itemClass}-data-top`
      }, [renderPosition(["top", "left"])]), createVNode("div", {
        "class": `${itemClass}-axis`
      }, [renderDot(), timeAxis.props.direction === "vertical" && props.timePosition === "bottom" ? renderTime() : "", createVNode("div", {
        "class": `${itemClass}-line ${itemClass}-line-style-${props.lineStyle}`,
        "style": {
          borderColor: props.lineColor
        }
      }, [ctx.slots.extra ? createVNode("div", {
        "class": `${itemClass}-line-extra`
      }, [ctx.slots.extra()]) : ""])]), createVNode("div", {
        "class": `${itemClass}-data-right ${itemClass}-data-bottom`
      }, [renderPosition(["right", "bottom"])])]);
    };
  }
});
var timeline = "";
var Timeline = defineComponent({
  name: "DTimeline",
  components: {
    TimelineItem
  },
  props: timeAxisProps,
  emits: [],
  setup(props, ctx) {
    provide("timeAxis", {
      ctx,
      props
    });
    const timeAxis = ref();
    const style = reactive({
      marginLeft: "0px",
      height: "auto"
    });
    const setStyle = () => {
      style.height = "auto";
      style.marginLeft = "0px";
      if (props.direction === "horizontal") {
        nextTick(() => {
          var _a;
          const element = timeAxis.value;
          if (props.center) {
            style.marginLeft = (((_a = element == null ? void 0 : element.firstElementChild) == null ? void 0 : _a.clientWidth) || 0) / 2 + "px";
          }
          style.height = Math.max(...Array.from(element == null ? void 0 : element.querySelectorAll(".devui-timeline-item-data-top")).map((el) => el.clientHeight), ...Array.from(element == null ? void 0 : element.querySelectorAll(".devui-timeline-item-data-bottom")).map((el) => el.clientHeight)) * 2 + Math.max(...Array.from(element == null ? void 0 : element.querySelectorAll(".devui-timeline-item-axis")).map((el) => el.clientHeight)) + "px";
        });
      }
    };
    onMounted(() => {
      setStyle();
    });
    watch(toRef(props, "direction"), () => {
      setStyle();
    });
    return () => {
      const renderItemPosition = (item, position) => {
        return position ? createVNode(item, {
          "position": position
        }, null) : createVNode(item, null, null);
      };
      const renderItem = () => {
        var _a, _b, _c;
        const slots = (_c = (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)) != null ? _c : [];
        let children;
        if (slots.length === 1 && slots[0].type === Fragment) {
          children = slots[0].children || [];
        } else {
          children = slots;
        }
        return children.map((item, index2) => {
          var _a2, _b2, _c2, _d, _e, _f, _g, _h;
          if (index2 + 1 === children.length) {
            if (!((_a2 = item.props) == null ? void 0 : _a2.lineStyle) && !((_b2 = item.props) == null ? void 0 : _b2["line-style"])) {
              item = createVNode(item, {
                "line-style": "none"
              }, null);
            }
          }
          if (!((_c2 = item.props) == null ? void 0 : _c2.timePosition) && !((_d = item.props) == null ? void 0 : _d["time-position"])) {
            item = createVNode(item, {
              "time-position": props.timePosition ? props.timePosition : "left"
            }, null);
          }
          if (props.direction === "horizontal") {
            if (((_e = item.props) == null ? void 0 : _e.position) === "top" || ((_f = item.props) == null ? void 0 : _f.position) === "bottom") {
              return item;
            }
            if (props.mode === "alternative") {
              return renderItemPosition(item, index2 % 2 === 0 ? "bottom" : "top");
            } else {
              return renderItemPosition(item, "bottom");
            }
          } else {
            if (((_g = item.props) == null ? void 0 : _g.position) === "left" || ((_h = item.props) == null ? void 0 : _h.position) === "right") {
              return item;
            }
            if (props.mode === "alternative") {
              return renderItemPosition(item, index2 % 2 === 0 ? "left" : "right");
            } else {
              return renderItemPosition(item, "right");
            }
          }
        });
      };
      const getDirection = () => {
        return props.direction === "horizontal" ? "horizontal" : "vertical";
      };
      return createVNode("div", {
        "class": `devui-timeline devui-timeline-${getDirection()}  ${props.center ? "devui-timeline-" + getDirection() + "-center" : ""} `,
        "ref": timeAxis,
        "style": style
      }, [renderItem()]);
    };
  }
});
var index = {
  title: "Timeline \u65F6\u95F4\u8F74",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Timeline.name, Timeline);
    app.component(TimelineItem.name, TimelineItem);
  }
};
export { Timeline, TimelineItem, index as default, timeAxisProps };
