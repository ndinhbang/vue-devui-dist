import { defineComponent, computed, createVNode } from "vue";
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
var status = "";
var Status = defineComponent({
  name: "DStatus",
  props: {
    type: {
      default: "invalid",
      type: String
    }
  },
  setup(props, ctx) {
    const ns = useNamespace("status");
    const typeClass = computed(() => {
      const {
        type
      } = props;
      const typeStatus = ["success", "error", "initial", "warning", "waiting", "running", "invalid"];
      let typeClassStr = `${ns.b()} ${ns.em("bg", "invalid")}`;
      if (typeStatus.includes(type)) {
        typeClassStr = `${ns.b()} ${ns.em("bg", type)}`;
      }
      return typeClassStr;
    });
    return () => {
      var _a, _b;
      return createVNode("span", {
        "class": typeClass.value
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
    };
  }
});
var index = {
  title: "Status \u72B6\u6001",
  category: "\u901A\u7528",
  status: "100%",
  deprecated: {
    value: true,
    reason: "Status \u662F\u65E0\u5185\u5BB9\u5305\u88F9\u72B6\u6001\u4E0B\u7684 Badge \u7EC4\u4EF6\uFF0C\u5E94\u8BE5\u4F7F\u7528 Badge \u66FF\u4EE3\u3002"
  },
  install(app) {
    app.component(Status.name, Status);
  }
};
export { Status, index as default };
