var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, ref, computed, onMounted, watch, createVNode, createTextVNode } from "vue";
const statisticProps = {
  title: {
    type: String,
    default: ""
  },
  value: {
    type: [Number, String]
  },
  prefix: {
    type: String
  },
  suffix: {
    type: String
  },
  precision: {
    type: Number
  },
  groupSeparator: {
    type: String,
    default: ""
  },
  animationDuration: {
    type: Number,
    default: 2e3
  },
  valueFrom: {
    type: Number
  },
  animation: {
    type: Boolean,
    default: false
  },
  start: {
    type: Boolean,
    default: true
  },
  extra: {
    type: String,
    default: ""
  }
};
const separator = (SeparatorString, groupSeparator) => {
  const res = SeparatorString.replace(/\d+/, function(n) {
    return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
      return $1 + `${groupSeparator}`;
    });
  });
  return res;
};
const isHasDot = (value) => {
  if (!isNaN(value)) {
    return (value + "").indexOf(".") !== -1;
  }
  return false;
};
const analysisValueType = (value, propsValue, groupSeparator, splitPrecisionNumber) => {
  const fixedNumber = (propsValue == null ? void 0 : propsValue.toString().indexOf(".")) !== -1 ? (propsValue == null ? void 0 : propsValue.toString().length) - (propsValue == null ? void 0 : propsValue.toString().indexOf(".")) - 1 : 0;
  if (typeof value === "number") {
    if (isHasDot(value)) {
      return splitPrecisionNumber ? separator(value.toFixed(splitPrecisionNumber).toString(), groupSeparator) : separator(value.toFixed(fixedNumber).toString(), groupSeparator);
    } else {
      return splitPrecisionNumber ? separator(value.toFixed(splitPrecisionNumber).toString(), groupSeparator) : separator(value.toString(), groupSeparator);
    }
  } else {
    return value;
  }
};
const pow = Math.pow;
const sqrt = Math.sqrt;
const easeOutCubic = function(x) {
  return 1 - pow(1 - x, 3);
};
const linear = (x) => x;
const easeOutExpo = function(x) {
  return x === 1 ? 1 : 1 - pow(2, -10 * x);
};
const easeInOutExpo = function(x) {
  return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
};
const easeInExpo = function(x) {
  return x === 0 ? 0 : pow(2, 10 * x - 10);
};
const easeInOutCirc = function(x) {
  return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
};
var easing = { easeOutCubic, linear, easeOutExpo, easeInOutExpo, easeInExpo, easeInOutCirc };
class Tween {
  constructor(options) {
    __publicField(this, "from");
    __publicField(this, "to");
    __publicField(this, "duration");
    __publicField(this, "delay");
    __publicField(this, "easing");
    __publicField(this, "onStart");
    __publicField(this, "onUpdate");
    __publicField(this, "onFinish");
    __publicField(this, "startTime");
    __publicField(this, "started");
    __publicField(this, "finished");
    __publicField(this, "timer");
    __publicField(this, "time");
    __publicField(this, "elapsed");
    __publicField(this, "keys");
    const { from, to, duration, delay, easing: easingValue, onStart, onUpdate, onFinish } = options;
    for (const key in from) {
      if (to[key] === void 0) {
        to[key] = from[key];
      }
    }
    for (const key in to) {
      if (from[key] === void 0) {
        from[key] = to[key];
      }
    }
    this.from = from;
    this.to = to;
    this.duration = duration;
    this.delay = delay;
    this.easing = easingValue;
    this.onStart = onStart;
    this.onUpdate = onUpdate;
    this.onFinish = onFinish;
    this.startTime = Date.now() + this.delay;
    this.started = false;
    this.finished = false;
    this.timer = null;
    this.keys = {};
  }
  update() {
    this.time = Date.now();
    if (this.time < this.startTime) {
      return;
    }
    if (this.finished) {
      return;
    }
    if (this.elapsed === this.duration) {
      if (!this.finished) {
        this.finished = true;
        this.onFinish && this.onFinish(this.keys);
      }
      return;
    }
    this.elapsed = this.time - this.startTime;
    this.elapsed = this.elapsed > this.duration ? this.duration : this.elapsed;
    for (const key in this.to) {
      this.keys[key] = this.from[key] + (this.to[key] - this.from[key]) * easing[this.easing](this.elapsed / this.duration);
    }
    if (!this.started) {
      this.onStart && this.onStart(this.keys);
      this.started = true;
    }
    this.onUpdate(this.keys);
  }
  start() {
    this.startTime = Date.now() + this.delay;
    const tick = () => {
      this.update();
      this.timer = requestAnimationFrame(tick);
      if (this.finished) {
        cancelAnimationFrame(this.timer);
        this.timer = null;
      }
    };
    tick();
  }
  stop() {
    cancelAnimationFrame(this.timer);
    this.timer = null;
  }
}
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
var statistic = "";
var Statistic = defineComponent({
  name: "DStatistic",
  props: statisticProps,
  setup(props, ctx) {
    var _a;
    const innerValue = ref((_a = props.valueFrom) != null ? _a : props.value);
    const tween = ref(null);
    const ns = useNamespace("statistic");
    const animation = (from = ((_b) => (_b = props.valueFrom) != null ? _b : 0)(), to = typeof props.value === "number" ? props.value : Number(props.value)) => {
      if (from !== to) {
        tween.value = new Tween({
          from: {
            value: from
          },
          to: {
            value: to
          },
          delay: 0,
          duration: props.animationDuration,
          easing: "easeOutCubic",
          onUpdate: (keys) => {
            innerValue.value = keys.value;
          },
          onFinish: () => {
            innerValue.value = to;
          }
        });
        tween.value.start();
      }
    };
    const statisticValue = computed(() => {
      return analysisValueType(innerValue.value, props.value, props.groupSeparator, props.precision);
    });
    onMounted(() => {
      if (props.animation && props.start) {
        animation();
      }
    });
    watch(() => props.start, (value) => {
      if (value && !tween.value) {
        animation();
      }
    });
    return () => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      return createVNode("div", {
        "class": ns.b()
      }, [createVNode("div", {
        "class": ns.e("title")
      }, [((_b = (_a2 = ctx.slots).title) == null ? void 0 : _b.call(_a2)) || props.title]), createVNode("div", {
        "class": ns.e("content")
      }, [props.prefix || ((_d = (_c = ctx.slots).prefix) == null ? void 0 : _d.call(_c)) ? createVNode("span", {
        "class": ns.e("prefix")
      }, [((_f = (_e = ctx.slots).prefix) == null ? void 0 : _f.call(_e)) || props.prefix]) : null, createVNode("span", {
        "class": ns.e("value")
      }, [statisticValue.value]), props.suffix || ((_h = (_g = ctx.slots).suffix) == null ? void 0 : _h.call(_g)) ? createVNode("span", {
        "class": ns.e("suffix")
      }, [((_j = (_i = ctx.slots).suffix) == null ? void 0 : _j.call(_i)) || props.suffix]) : null]), props.extra || ((_l = (_k = ctx.slots).extra) == null ? void 0 : _l.call(_k)) ? createVNode("div", {
        "class": ns.e("extra")
      }, [createTextVNode(" "), ((_n = (_m = ctx.slots).extra) == null ? void 0 : _n.call(_m)) || props.extra]) : null]);
    };
  }
});
var index = {
  title: "Statistic \u7EDF\u8BA1\u6570\u503C",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Statistic.name, Statistic);
  }
};
export { Statistic, index as default, statisticProps };
