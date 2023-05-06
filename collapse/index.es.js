var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, provide, reactive, toRefs, createVNode, shallowRef, inject, computed, onMounted, Transition } from "vue";
const SELECT_TOKEN = Symbol("dCollapse");
const collapseProps = {
  modelValue: {
    type: [String, Number, Array],
    default: "",
    required: true
  },
  accordion: {
    type: Boolean,
    default: false
  }
};
const collapseItemProps = {
  name: {
    type: [String, Number],
    default: "",
    required: true
  },
  title: {
    type: String,
    default: ""
  },
  disabled: {
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
var collapse = "";
var Collapse = defineComponent({
  name: "DCollapse",
  props: collapseProps,
  emits: ["change", "update:modelValue"],
  setup(props, ctx) {
    const ns = useNamespace("collapse");
    const scrollbarNs = useNamespace("scrollbar");
    const getLists = (data) => {
      if (!data && data !== 0) {
        return [];
      }
      return Array.isArray(data) ? data : [data];
    };
    const collapseItemClick = (name) => {
      const activeLists = [...getLists(props.modelValue)];
      const itemIndex = activeLists.indexOf(name);
      if (props.accordion) {
        let activeName = name;
        if ((activeLists[0] || activeLists[0] === 0) && activeLists[0] === name) {
          activeName = "";
        }
        ctx.emit("update:modelValue", activeName);
        ctx.emit("change", activeName);
      } else {
        if (itemIndex > -1) {
          activeLists.splice(itemIndex, 1);
        } else {
          activeLists.push(name);
        }
        ctx.emit("update:modelValue", activeLists);
        ctx.emit("change", activeLists);
      }
    };
    provide(SELECT_TOKEN, reactive(__spreadProps(__spreadValues({}, toRefs(props)), {
      collapseItemClick
    })));
    return () => {
      var _a, _b;
      return createVNode("div", {
        "class": [ns.b(), scrollbarNs.b()]
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
    };
  }
});
const OpenIcon = () => {
  const svgProps = {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  };
  return createVNode("svg", svgProps, [createVNode("g", {
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("path", {
    "d": "M12.1464466,6.85355339 L8.35355339,10.6464466 C8.15829124,10.8417088           7.84170876,10.8417088 7.64644661,10.6464466 L3.85355339,6.85355339 C3.65829124,6.65829124           3.65829124,6.34170876 3.85355339,6.14644661 C3.94732158,6.05267842 4.07449854,6 4.20710678,6           L11.7928932,6 C12.0690356,6 12.2928932,6.22385763 12.2928932,6.5 C12.2928932,6.63260824           12.2402148,6.7597852 12.1464466,6.85355339 Z",
    "fill-rule": "nonzero"
  }, null)])]);
};
var CollapseItem = defineComponent({
  name: "DCollapseItem",
  props: collapseItemProps,
  setup(props, ctx) {
    const ns = useNamespace("collapse");
    const transitionNs = useNamespace("collapse-transition");
    const collapseContent = shallowRef();
    const collapse2 = inject(SELECT_TOKEN, null);
    const isOpen = computed(() => {
      if (props.disabled) {
        return false;
      }
      if (Array.isArray(collapse2 == null ? void 0 : collapse2.modelValue)) {
        return Boolean(collapse2 == null ? void 0 : collapse2.modelValue.length) && (collapse2 == null ? void 0 : collapse2.modelValue.includes(props.name));
      } else {
        return Boolean(collapse2 == null ? void 0 : collapse2.modelValue) && (collapse2 == null ? void 0 : collapse2.modelValue) === props.name;
      }
    });
    const handlerTitleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!props.disabled) {
        collapse2 == null ? void 0 : collapse2.collapseItemClick(props.name);
      }
    };
    onMounted(() => {
      if (collapseContent.value) {
        const dom = collapseContent.value;
        if (isOpen.value) {
          dom.style.height = `${dom.offsetHeight}px`;
        }
      }
    });
    const enter = (element) => {
      const el = element;
      el.style.height = "";
      const height = el.offsetHeight;
      el.style.height = "0px";
      el.offsetHeight;
      el.style.height = `${height}px`;
    };
    const leave = (element) => {
      const el = element;
      el.style.height = "0px";
    };
    return () => {
      return createVNode("div", {
        "class": ns.e("item")
      }, [createVNode("div", {
        "class": [ns.e("item-title"), ns.m("overflow-ellipsis"), isOpen.value && ns.m("open"), props.disabled && ns.em("item", "disabled")],
        "onClick": handlerTitleClick
      }, [ctx.slots.title ? ctx.slots.title() : props.title, createVNode("span", {
        "class": ns.e("open-icon")
      }, [createVNode(OpenIcon, null, null)])]), createVNode(Transition, {
        "name": transitionNs.b(),
        "onEnter": enter,
        "onLeave": leave
      }, {
        default: () => {
          var _a, _b;
          return [isOpen.value && createVNode("div", {
            "ref": collapseContent,
            "class": ns.e("item-content")
          }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)])];
        }
      })]);
    };
  }
});
var index = {
  title: "Collapse \u6298\u53E0\u9762\u677F",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Collapse.name, Collapse);
    app.component(CollapseItem.name, CollapseItem);
  }
};
export { Collapse, CollapseItem, collapseItemProps, collapseProps, index as default };
