import { defineComponent, createVNode } from "vue";
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
var layout = "";
var Layout = defineComponent({
  name: "DLayout",
  emits: [],
  setup(props, {
    slots
  }) {
    const ns = useNamespace("layout");
    return () => {
      var _a;
      const slotDefault = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const isAside = slotDefault.some((item) => item.type.name === "DAside");
      const classNames = `${isAside ? ns.e("aside") : ""} ${ns.b()}`;
      return createVNode("div", {
        "class": classNames
      }, [slotDefault]);
    };
  }
});
var content = "";
var Content = defineComponent({
  name: "DContent",
  setup(props, {
    slots
  }) {
    const ns = useNamespace("layout");
    return () => {
      var _a;
      return createVNode("div", {
        "class": ns.e("content")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
var header = "";
var Header = defineComponent({
  name: "DHeader",
  setup(props, {
    slots
  }) {
    const ns = useNamespace("layout");
    return () => {
      var _a;
      return createVNode("div", {
        "class": ns.e("header")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
var footer = "";
var Footer = defineComponent({
  name: "DFooter",
  setup(props, {
    slots
  }) {
    const ns = useNamespace("layout");
    return () => {
      var _a;
      return createVNode("div", {
        "class": ns.e("footer")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
var Aside = defineComponent({
  name: "DAside",
  setup(props, {
    slots
  }) {
    const ns = useNamespace("layout");
    return () => {
      var _a;
      return createVNode("div", {
        "class": ns.em("aside", "inner")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
var index = {
  title: "Layout \u5E03\u5C40",
  category: "\u5E03\u5C40",
  status: "100%",
  install(app) {
    app.component(Layout.name, Layout);
    app.component(Content.name, Content);
    app.component(Header.name, Header);
    app.component(Footer.name, Footer);
    app.component(Aside.name, Aside);
  }
};
export { Aside, Content, Footer, Header, Layout, index as default };
