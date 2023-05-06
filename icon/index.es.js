import { defineComponent, toRefs, computed, createVNode, resolveDynamicComponent, mergeProps } from "vue";
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
var IconGroup = defineComponent({
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
var index = {
  title: "Icon \u56FE\u6807",
  category: "\u901A\u7528",
  status: "100%",
  install(app) {
    app.component(Icon.name, Icon);
    app.component(IconGroup.name, IconGroup);
  }
};
export { Icon, IconGroup, index as default, iconProps, svgIconProps };
