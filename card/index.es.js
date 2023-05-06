import { defineComponent, toRefs, computed, createVNode } from "vue";
const cardProps = {
  align: {
    type: String,
    default: "start"
  },
  src: {
    type: String,
    default: ""
  },
  shadow: {
    type: String,
    default: "hover"
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
var card = "";
var Card = defineComponent({
  name: "DCard",
  props: cardProps,
  setup(props, {
    slots
  }) {
    const {
      align,
      src
    } = toRefs(props);
    const ns = useNamespace("card");
    const alignClass = computed(() => {
      return {
        [ns.e("actions")]: true,
        [ns.em("actions", `align-${align.value}`)]: align.value !== "start"
      };
    });
    return () => {
      var _a, _b, _c, _d, _e, _f, _g;
      return createVNode("div", {
        "class": ["card-container", ns.b(), ns.em("shadow", props.shadow)]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots), createVNode("div", {
        "class": ns.e("header")
      }, [((_b = slots.avatar) == null ? void 0 : _b.call(slots)) ? createVNode("div", {
        "class": ns.e("avatar")
      }, [(_c = slots.avatar) == null ? void 0 : _c.call(slots)]) : "", createVNode("div", null, [createVNode("div", {
        "class": ns.e("title")
      }, [(_d = slots.title) == null ? void 0 : _d.call(slots)]), createVNode("div", {
        "class": ns.e("subtitle")
      }, [(_e = slots.subtitle) == null ? void 0 : _e.call(slots)])])]), src.value !== "" ? createVNode("img", {
        "src": src.value,
        "alt": "",
        "class": ns.e("meta")
      }, null) : "", createVNode("div", {
        "class": ns.e("content")
      }, [(_f = slots.content) == null ? void 0 : _f.call(slots)]), createVNode("div", {
        "class": alignClass.value
      }, [slots.actions ? (_g = slots.actions) == null ? void 0 : _g.call(slots) : ""])]);
    };
  }
});
var index = {
  title: "Card \u5361\u7247",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Card.name, Card);
  }
};
export { Card, cardProps, index as default };
