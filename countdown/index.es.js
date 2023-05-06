import { defineComponent, ref, onMounted, onUnmounted, createVNode } from "vue";
const countdownProps = {
  value: {
    type: Number,
    required: true
  },
  format: {
    type: String,
    default: "HH:mm:ss"
  },
  prefix: {
    type: String,
    default: ""
  },
  suffix: {
    type: String,
    default: ""
  },
  valueStyle: {
    type: Object,
    default: () => {
      return {};
    }
  }
};
const getFormatTime = (leftTime) => {
  const timeformat = /* @__PURE__ */ new Map([
    ["Y", 0],
    ["M", 0],
    ["D", 0],
    ["H", 0],
    ["m", 0],
    ["s", 0],
    ["S", 0]
  ]);
  const year = Math.floor(leftTime / (365 * 24 * 60 * 60 * 1e3));
  const month = Math.floor(leftTime / (30 * 24 * 60 * 60 * 1e3) % 12);
  const day = Math.floor(leftTime / (24 * 60 * 60 * 1e3) % 30);
  const hour = Math.floor(leftTime / (60 * 60 * 1e3) % 24);
  const minute = Math.floor(leftTime / (60 * 1e3) % 60);
  const second = Math.floor(leftTime / 1e3 % 60);
  const millsecond = leftTime % 1e3;
  timeformat.set("Y", year);
  timeformat.set("M", month);
  timeformat.set("D", day);
  timeformat.set("H", hour);
  timeformat.set("m", minute);
  timeformat.set("s", second);
  timeformat.set("S", millsecond);
  return timeformat;
};
const getLegalTime = (s, timeformat) => {
  const dateValue = /* @__PURE__ */ new Map([
    ["Y", 0],
    ["M", 0],
    ["D", 0],
    ["H", 0],
    ["m", 0],
    ["s", 0],
    ["S", 0]
  ]);
  const m = /* @__PURE__ */ new Map([
    ["Y", 12],
    ["M", 30],
    ["D", 24],
    ["H", 60],
    ["m", 60],
    ["s", 1e3],
    ["S", 1]
  ]);
  let storage = 0;
  for (const k of dateValue.keys()) {
    if (s.has(k)) {
      dateValue.set(k, (timeformat.get(k) || 0) + storage);
      storage = 0;
    } else {
      storage += (timeformat.get(k) || 0) * (m.get(k) || 0);
    }
  }
  if (!s.has("S") && (timeformat.get("S") || 0) > 500) {
    dateValue.set("s", (dateValue.get("s") || 0) + 1);
  }
  return dateValue;
};
const getTimeSplit = (format) => {
  const fomatMap = /* @__PURE__ */ new Set(["Y", "M", "D", "H", "m", "s", "S"]);
  const m = [];
  for (let i = 0; i < format.length; i++) {
    const k = format[i];
    if (m.length === 0 || m[m.length - 1].k !== k || !fomatMap.has(k)) {
      m.push({ k, n: 1 });
    } else {
      m[m.length - 1].n++;
    }
  }
  return m;
};
const getDeduplication = (format) => {
  const fomatMap = /* @__PURE__ */ new Set(["Y", "M", "D", "H", "m", "s", "S"]);
  const s = /* @__PURE__ */ new Set();
  for (let i = 0; i < format.length; i++) {
    const k = format[i];
    if (fomatMap.has(k)) {
      s.add(k);
    }
  }
  return s;
};
const numFormat = (n, len) => {
  const maxNum = 10 ** len - 1;
  if (n >= maxNum) {
    return n;
  } else {
    const carryLen = len - n.toString().length;
    let str = "";
    for (let i = 0; i < carryLen; i++) {
      str += "0";
    }
    return str + n;
  }
};
const intervalTimer = (callback, interval = 0) => {
  let counter = 1;
  let timeoutId;
  const startTime = Date.now();
  function main() {
    const nowTime = Date.now();
    const nextTime = startTime + counter * interval;
    timeoutId = setTimeout(main, interval - (nowTime - nextTime));
    counter += 1;
    callback();
  }
  timeoutId = setTimeout(main, interval);
  return () => {
    clearTimeout(timeoutId);
  };
};
var countdown = "";
var Countdown = defineComponent({
  name: "DCountdown",
  props: countdownProps,
  emits: ["onChange", "onFinish"],
  setup(props, ctx) {
    const timerCleaner = ref();
    const s = getDeduplication(props.format);
    const timeFormat = getTimeSplit(props.format);
    const timeStr = ref("");
    const getTimeStr = (legalTime) => {
      const fomatMap = /* @__PURE__ */ new Set(["Y", "M", "D", "H", "m", "s", "S"]);
      const t = timeFormat.reduce((pre, cur) => {
        if (fomatMap.has(cur.k)) {
          return pre + numFormat(legalTime.get(cur.k) || 0, cur.n);
        }
        return pre + cur.k;
      }, "");
      timeStr.value = t;
    };
    const getTime = () => {
      const value = new Date(props.value).getTime();
      const leftTime = value > new Date().getTime() ? value - new Date().getTime() : 0;
      const formatTime = getFormatTime(leftTime);
      const legalTime = getLegalTime(s, formatTime);
      !ctx.slots.default && getTimeStr(legalTime);
      ctx.emit("onChange", {
        leftTime,
        formatTime,
        legalTime
      });
      return leftTime;
    };
    const startTime = () => {
      getTime();
      if (timerCleaner.value) {
        return;
      }
      timerCleaner.value = intervalTimer(() => {
        var _a;
        const t = getTime();
        if (t === 0) {
          ctx.emit("onFinish");
          (_a = timerCleaner.value) == null ? void 0 : _a.call(timerCleaner);
          timerCleaner.value = null;
        }
      }, s.has("S") ? 100 : 1e3);
    };
    onMounted(() => {
      startTime();
    });
    onUnmounted(() => {
      var _a;
      (_a = timerCleaner.value) == null ? void 0 : _a.call(timerCleaner);
    });
    return () => {
      return createVNode("div", {
        "class": "devui-countdown"
      }, [ctx.slots.default ? ctx.slots.default() : createVNode("div", {
        "class": "countdown-content",
        "style": props.valueStyle
      }, [createVNode("span", {
        "class": "countdown-prefix"
      }, [props.prefix]), createVNode("span", {
        "class": "countdown-value"
      }, [timeStr.value]), createVNode("span", {
        "class": "countdown-suffix"
      }, [props.suffix])])]);
    };
  }
});
var index = {
  title: "Countdown \u5012\u8BA1\u65F6",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.component(Countdown.name, Countdown);
  }
};
export { Countdown, countdownProps, index as default };
