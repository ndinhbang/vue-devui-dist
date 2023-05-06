import { computed, defineComponent, toRefs, watch, onUnmounted, createVNode, resolveComponent } from "vue";
const tagProps = {
  type: {
    type: String,
    default: ""
  },
  color: {
    type: String,
    default: ""
  },
  titleContent: {
    type: String,
    default: ""
  },
  checked: {
    type: Boolean,
    default: false
  },
  deletable: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: "md"
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
function useClass(props) {
  const ns = useNamespace("tag");
  return computed(() => {
    const { type, color, deletable } = props;
    return `${ns.e("item")} ${ns.m(type || (color ? "colorful" : "") || "default")} ${deletable ? ns.m("deletable") : ""} ${ns.m(props.size)}`;
  });
}
function useColor(props) {
  return computed(() => {
    const { color, type } = props;
    const typeMap = {
      primary: "var(--b-primary, #5e7ce0)",
      success: "var(--b-success, #50d4ab)",
      warning: "var(--b-warning, #fac20a)",
      danger: "var(--b-danger, #f66f6a)"
    };
    const colorMap = {
      "blue-w98": "#3383ff",
      "aqua-w98": "#39afcc",
      "olivine-w98": "#2fa898",
      "green-w98": "#4eb15e",
      "yellow-w98": "#b08d1a",
      "orange-w98": "#d47f35",
      "red-w98": "#f66f6a",
      "pink-w98": "#f3689a",
      "purple-w98": "#a97af8"
    };
    if (!color && type) {
      return typeMap[type];
    }
    const themeColor = colorMap[color] || color;
    return themeColor;
  });
}
var tag = "";
var Tag = defineComponent({
  name: "DTag",
  props: tagProps,
  emits: ["click", "tagDelete", "checkedChange"],
  setup(props, {
    slots,
    emit
  }) {
    const ns = useNamespace("tag");
    const {
      type,
      color,
      checked,
      titleContent,
      deletable
    } = toRefs(props);
    const tagClass = useClass(props);
    const themeColor = useColor(props);
    const tagTitle = titleContent.value || "";
    const isDefaultTag = () => !type.value && !color.value;
    const handleClick = (e) => {
      emit("click", e);
    };
    const handleDelete = (e) => {
      e.stopPropagation();
      emit("tagDelete", e);
    };
    const contentColor = computed(() => {
      return isDefaultTag() ? "" : checked.value ? "#fff" : themeColor.value;
    });
    const closeIconEl = () => {
      const iconName = isDefaultTag() ? "error-o" : "close";
      return deletable.value ? createVNode("a", {
        "class": "remove-button",
        "onClick": handleDelete
      }, [createVNode(resolveComponent("d-icon"), {
        "size": "12px",
        "name": iconName,
        "color": contentColor.value
      }, null)]) : null;
    };
    const unWatch = watch(checked, (newVal) => {
      emit("checkedChange", newVal);
    });
    onUnmounted(() => unWatch());
    return () => {
      var _a;
      return createVNode("div", {
        "class": ns.b(),
        "onClick": handleClick
      }, [createVNode("span", {
        "class": tagClass.value,
        "style": {
          display: "block",
          color: contentColor.value,
          backgroundColor: checked.value ? themeColor.value : !color.value ? "" : "var(--b-base-bg, #ffffff)"
        },
        "title": tagTitle
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots), closeIconEl()])]);
    };
  }
});
var index = {
  title: "Tag \u6807\u7B7E",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Tag.name, Tag);
  }
};
export { Tag, index as default, tagProps };
