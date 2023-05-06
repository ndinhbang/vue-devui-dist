import { defineComponent, computed, createVNode } from "vue";
const badgeStatusType = ["danger", "warning", "waiting", "success", "info", "common"];
const badgePositionType = ["top-left", "top-right", "bottom-left", "bottom-right"];
const badgeProps = {
  count: {
    type: [Number, String]
  },
  maxCount: {
    type: Number,
    default: 99
  },
  showDot: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    validator: (val) => badgeStatusType.includes(val),
    default: "info"
  },
  position: {
    type: String,
    default: "top-right",
    validator: (val) => badgePositionType.includes(val)
  },
  offset: {
    type: Array
  },
  bgColor: {
    type: String
  },
  textColor: {
    type: String
  },
  hidden: {
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
var badge = "";
var Badge = defineComponent({
  name: "DBadge",
  props: badgeProps,
  setup(props, ctx) {
    const ns = useNamespace("badge");
    const className = computed(() => {
      const base = ns.e("content");
      return [base, props.showDot ? ns.m("dot") : ns.m("count"), props.status && ns.m(props.status), ctx.slots.default && props.position && ns.m(props.position), ctx.slots.default && ns.m("fixed"), props.hidden ? ns.m("hidden") : ns.m("show")].join(" ");
    });
    const style = computed(() => {
      const styleMap = {
        bgColor: "background",
        textColor: "color"
      };
      const ret = Object.keys(styleMap).reduce((result, key) => {
        if (props[key]) {
          result[styleMap[key]] = props[key];
        }
        return result;
      }, {});
      if (ctx.slots.default && props.offset) {
        const [x, y] = props.offset;
        const [yName, xName] = props.position.split("-");
        ret[yName] = y + "px";
        ret[xName] = x + "px";
      }
      return ret;
    });
    const text = computed(() => {
      if (props.showDot) {
        return;
      }
      if (typeof props.count === "number" && typeof props.maxCount === "number") {
        return props.count > props.maxCount ? `${props.maxCount}+` : props.count;
      }
      return props.count;
    });
    return () => {
      var _a, _b;
      return createVNode("div", {
        "class": ns.b()
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a), createVNode("div", {
        "class": className.value,
        "style": style.value
      }, [text.value])]);
    };
  }
});
var index = {
  title: "Badge \u5FBD\u6807",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Badge.name, Badge);
  }
};
export { Badge, badgeProps, index as default };
