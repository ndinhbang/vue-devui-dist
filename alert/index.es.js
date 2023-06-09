import { createVNode, defineComponent, ref, onMounted, Transition, withDirectives, vShow } from "vue";
const AlertCloseIcon = () => createVNode("svg", {
  "width": "10px",
  "height": "10px",
  "viewBox": "0 0 10 10",
  "version": "1.1",
  "xmlns": "http://www.w3.org/2000/svg"
}, [createVNode("g", {
  "stroke": "none",
  "stroke-width": "1",
  "fill": "none",
  "fill-rule": "evenodd"
}, [createVNode("g", {
  "transform": "translate(-3.000000, -3.000000)",
  "fill-rule": "nonzero"
}, [createVNode("path", {
  "d": "M11.6426,3.19816936 C11.9239974,2.91574512 12.4131626,2.93784891         12.7352108,3.24751057 C13.0571998,3.5572302 13.0901298,4.03723416         12.8087324,4.31965839 L9.14064666,7.99900183 L12.8087324,11.6803416         C13.0645482,11.9370909 13.0605893,12.3571292 12.8158402,12.6640749         L12.7352108,12.7524894 C12.4131626,13.0621511 11.9239974,13.0842548         11.6426,12.8018306 L8,9.14489021 L4.35740003,12.8018306 C4.10158422,13.05858         3.6740594,13.0636532 3.35648225,12.8298003 L3.26478919,12.7524894         C2.94280021,12.4427698 2.90987023,11.9627658 3.19126762,11.6803416         L6.8583349,7.99900183 L3.19126762,4.31965839 C2.93545181,4.06290908         2.93941068,3.64287076 3.18415975,3.3359251 L3.26478919,3.24751057         C3.58683735,2.93784891 4.07600264,2.91574512 4.35740003,3.19816936         L8,6.85411161 L11.6426,3.19816936 Z"
}, null)])])]);
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
const ns = useNamespace("alert");
const AlertTypeIcon = (props) => createVNode("svg", {
  "width": "16px",
  "height": "16px",
  "viewBox": "0 0 16 16",
  "version": "1.1",
  "xmlns": "http://www.w3.org/2000/svg",
  "class": [ns.e("icon"), props.type === "danger" ? ns.em("icon", "error") : ns.em("icon", props.type)]
}, [(() => {
  switch (props.type) {
    case "success":
      return createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("path", {
        "fill-rule": "nonzero",
        "d": "M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z"
      }, null), createVNode("polygon", {
        "stroke-width": "0.3",
        "fill-rule": "nonzero",
        "points": "6.82767602 11.5282799 3 7.24668779 3.89864233 6.37912367 6.82767602 9.04910002 12.2964408 4 13 4.64144383"
      }, null)]);
    case "warning":
      return createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("path", {
        "class": "warning-outer",
        "d": "M8.96244623,0.57254229 L15.8714442,13.4101975 C16.1549662,13.9370117               15.9538562,14.5918482 15.4222523,14.8728158 C15.2642579,14.9563203 15.0879506,15               14.9088903,15 L1.09089441,15 C0.488410063,15 0,14.5159904 0,13.9189343 C0,13.7414873               0.0440768395,13.5667684 0.128340519,13.4101975 L7.03733844,0.57254229               C7.32086049,0.0457280838 7.98165058,-0.153569987 8.51325441,0.127397589               C8.70423071,0.228333932 8.8605922,0.383286648 8.96244623,0.57254229 Z"
      }, null), createVNode("path", {
        "class": "warning-inner",
        "stroke-width": "0.3",
        "fill-rule": "nonzero",
        "d": "M8.87894737,13 L7.08947368,13 L7.08947368,11.2105263 L8.87894737,11.2105263               L8.87894737,13 Z M8.62102372,9.86842105 L7.32800539,9.86842105 L7,4.5               L8.96842105,4.5 L8.62102372,9.86842105 Z"
      }, null)]);
    case "info":
      return createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("g", {
        "fill-rule": "nonzero"
      }, [createVNode("path", {
        "class": "info-outer",
        "d": "M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z"
      }, null), createVNode("path", {
        "class": "info-inner",
        "d": "M9.19008504,7 L8.79402696,13 L7.15622605,13 L6.73158434,7 L9.19008504,7 Z M9,3 L9,5 L7,5 L7,3 L9,3 Z",
        "stroke-width": "0.2"
      }, null)])]);
    case "danger":
      return createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("g", {
        "fill-rule": "nonzero"
      }, [createVNode("path", {
        "class": "error-outer",
        "d": "M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z"
      }, null), createVNode("path", {
        "class": "error-inner",
        "d": "M9,10.6 L9,12.6 L7,12.6 L7,10.6 L9,10.6 Z M9.1,3.1 L8.65924344,9.1 L7.28422786,9.1 L6.9,3.1 L9.1,3.1 Z",
        "stroke-width": "0.2"
      }, null)])]);
    default:
      return null;
  }
})()]);
const alertProps = {
  type: {
    type: String,
    default: "info"
  },
  cssClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  dismissTime: {
    type: Number,
    default: 0
  },
  center: {
    type: Boolean,
    default: false
  }
};
var alert = "";
var Alert = defineComponent({
  name: "DAlert",
  props: alertProps,
  emits: ["close"],
  setup(props, ctx) {
    const ns2 = useNamespace("alert");
    const hide = ref(false);
    const closing = ref(false);
    const alertEl = ref();
    let dismissTimer = void 0;
    const close = (event) => {
      dismissTimer && clearTimeout(dismissTimer);
      closing.value = true;
      ctx.emit("close", event);
    };
    const afterLeave = () => {
      dismissTimer = void 0;
      hide.value = true;
      closing.value = false;
    };
    onMounted(() => {
      if (props.dismissTime) {
        dismissTimer = window.setTimeout(() => {
          close();
        }, props.dismissTime);
      }
    });
    return () => {
      return !hide.value ? createVNode(Transition, {
        "name": ns2.b(),
        "onAfterLeave": afterLeave
      }, {
        default: () => {
          var _a, _b;
          return [withDirectives(createVNode("div", {
            "ref": alertEl,
            "class": [ns2.b(), ns2.m(props.type), props.cssClass, closing.value && ns2.m("close"), props.center && ns2.m("center")]
          }, [props.showIcon !== false && props.type !== "simple" ? createVNode("span", {
            "class": ns2.e("icon-wrap")
          }, [createVNode(AlertTypeIcon, {
            "type": props.type
          }, null)]) : null, createVNode("div", {
            "class": ns2.e("content")
          }, [createVNode("span", null, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]), props.closeable ? createVNode("div", {
            "class": ns2.e("close-icon"),
            "onClick": close
          }, [createVNode(AlertCloseIcon, null, null)]) : null])]), [[vShow, !closing.value]])];
        }
      }) : null;
    };
  }
});
var index = {
  title: "Alert \u8B66\u544A",
  category: "\u53CD\u9988",
  status: "100%",
  install(app) {
    app.component(Alert.name, Alert);
  }
};
export { Alert, alertProps, index as default };
