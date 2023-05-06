import { toRefs, inject, computed, createVNode, defineComponent, provide } from "vue";
const skeletonItemProps = {
  variant: {
    type: String,
    default: "square"
  },
  size: {
    type: String,
    default: "md"
  }
};
const skeletonProps = {
  rows: {
    type: Number,
    default: 3
  },
  round: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: true
  },
  showAnimation: {
    type: Boolean,
    default: true
  }
};
const roundInjectionKey = Symbol("round");
const animationInjectionKey = Symbol("showAnimation");
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
function useSkeletonItem(props) {
  const ns = useNamespace("skeleton-item");
  const { variant, size } = toRefs(props);
  const round = inject(roundInjectionKey, void 0);
  const showAnimation = inject(animationInjectionKey, void 0);
  const classes = computed(() => ({
    [ns.b()]: true,
    [ns.m(variant.value)]: true,
    [ns.m(size.value)]: variant.value !== "square",
    [ns.m("round")]: variant.value !== "circle" && Boolean(round == null ? void 0 : round.value),
    [ns.m("animation")]: Boolean(showAnimation == null ? void 0 : showAnimation.value)
  }));
  return { classes };
}
function ImageIcon() {
  return createVNode("svg", {
    "width": "24px",
    "height": "24px",
    "viewBox": "0 0 24 24",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode("g", {
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("g", null, [createVNode("rect", {
    "fill": "#d8d8d8",
    "opacity": "0",
    "x": "0",
    "y": "0",
    "width": "24",
    "height": "24"
  }, null), createVNode("path", {
    "d": "M17.9783341,3.022 C19.5705758,3.022 20.8816065,4.27616494 20.9732206,5.84628917 L20.9783341,6.022 L20.9783341,15.4777069           L20.9783775,15.4946187 C20.9778434,15.509964 20.9768409,15.525296 20.9753698,15.5405914 L20.9783341,15.4777069           C20.9783341,15.8919205 20.6425477,16.2277069 20.2283341,16.2277069 C19.9841207,16.2277069 19.7671693,16.1109847           19.630224,15.9302845 L16.3835041,12.6846982 C15.9279377,12.2291319 15.2084078,12.1987608 14.7176463,12.593585           L14.6161642,12.6846982 L9.05907272,18.2417898 C8.76083183,18.5400306 8.28304152,18.5577535 7.96352506,18.2824274           C7.67269311,18.0318186 7.64008582,17.5928941 7.89069464,17.3020621 L7.9253008,17.2647549 L7.9253008,17.2647549           L13.5555041,11.6240381 C14.5846517,10.5948904 16.2263561,10.5520093 17.3065502,11.4953946 L17.4441642,11.6240381           L19.4783341,13.658 L19.4783341,6.022 C19.4783341,5.24761276 18.8784495,4.6021759 18.1219124,4.52892169 L17.9783341,4.522           L6.02133414,4.522 C5.24694691,4.522 4.60151004,5.12188468 4.52825583,5.87842174 L4.52133414,6.022 L4.52133414,17.978           C4.52133414,18.7529555 5.12086774,19.397891 5.87769393,19.4710842 L6.02133414,19.478 L17.9783341,19.478 C18.7530944,19.478           19.3982021,18.8786501 19.4714163,18.1216726 L19.4783341,17.978 C19.4783341,17.5637864 19.8141206,17.208 20.2283341,17.228           C20.6425477,17.228 20.9783341,17.5637864 20.9783341,17.978 C20.9783341,19.5709231 19.724442,20.881321 18.1540742,20.9728891           L17.9783341,20.978 L6.02133414,20.978 C4.42880954,20.978 3.11804157,19.7244922 3.02644657,18.1537812 L3.02133414,17.978           L3.02133414,6.022 C3.02133414,4.42975835 4.27549908,3.11872764 5.84562331,3.02711351 L6.02133414,3.022 L17.9783341,3.022 Z           M8.99983414,7.7505 C9.6900477,7.7505 10.2498341,8.31028644 10.2498341,9.0005 C10.2498341,9.69071356 9.6900477,10.2505           8.99983414,10.3505 C8.30962058,10.2505 7.74983414,9.69071356 7.74983414,9.0005 C7.74983414,8.31028644 8.30962058,7.7505           8.99983414,7.7505 Z",
    "fill": "#bfbfbf"
  }, null)])])]);
}
var skeletonItem = "";
var SkeletonItem = defineComponent({
  name: "DSkeletonItem",
  props: skeletonItemProps,
  setup(props) {
    const {
      variant
    } = toRefs(props);
    const {
      classes
    } = useSkeletonItem(props);
    return () => createVNode("div", {
      "class": classes.value
    }, [variant.value === "image" && createVNode(ImageIcon, null, null)]);
  }
});
var skeleton = "";
var Skeleton = defineComponent({
  name: "DSkeleton",
  props: skeletonProps,
  setup(props, ctx) {
    const ns = useNamespace("skeleton");
    const {
      loading,
      rows,
      showAnimation,
      round
    } = toRefs(props);
    const paragraphs = computed(() => new Array(rows.value).fill(""));
    provide(animationInjectionKey, showAnimation);
    provide(roundInjectionKey, round);
    return () => {
      var _a, _b;
      return loading.value ? ctx.slots.placeholder ? ctx.slots.placeholder() : createVNode("div", {
        "class": ns.b()
      }, [createVNode(SkeletonItem, {
        "class": ns.e("title")
      }, null), paragraphs.value.map(() => createVNode(SkeletonItem, {
        "class": ns.e("paragraph")
      }, null))]) : (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
var index = {
  title: "Skeleton \u9AA8\u67B6\u5C4F",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Skeleton.name, Skeleton);
    app.component(SkeletonItem.name, SkeletonItem);
  }
};
export { Skeleton, SkeletonItem, animationInjectionKey, index as default, roundInjectionKey, skeletonItemProps, skeletonProps };
