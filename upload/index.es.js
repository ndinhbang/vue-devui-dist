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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, toRefs, computed, createVNode, resolveDynamicComponent, mergeProps, watch, Transition, withModifiers, reactive, createApp, onUnmounted, isVNode, ref, getCurrentInstance, withDirectives, resolveComponent, resolveDirective } from "vue";
const notificationProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "normal"
  },
  duration: {
    type: Number,
    default: 3e3
  },
  onClose: {
    type: Function
  }
};
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
    const ns2 = useNamespace("svg-icon");
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
        "class": ns2.b(),
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
  const ns2 = useNamespace("icon");
  const iconSize = computed(() => {
    return typeof size.value === "number" ? `${size.value}px` : size.value;
  });
  const IconComponent = component.value ? resolveDynamicComponent(component.value) : resolveDynamicComponent(svgIcon);
  const imgIconDom = () => {
    return createVNode("img", mergeProps({
      "src": name.value,
      "alt": name.value.split("/")[name.value.split("/").length - 1],
      "class": [(rotate == null ? void 0 : rotate.value) === "infinite" && ns2.m("spin")],
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
      "class": [(rotate == null ? void 0 : rotate.value) === "infinite" && ns2.m("spin")],
      "style": {
        transform: `rotate(${rotate == null ? void 0 : rotate.value}deg)`
      }
    }, ctx.attrs), null);
  };
  const fontIconDom = () => {
    const fontIconClass = /^icon-/.test(name.value) ? name.value : `${classPrefix.value}-${name.value}`;
    return createVNode("i", mergeProps({
      "class": [classPrefix.value, fontIconClass, (rotate == null ? void 0 : rotate.value) === "infinite" && ns2.m("spin")],
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
    const ns2 = useNamespace("icon");
    const wrapClassed = computed(() => ({
      [ns2.e("container")]: true,
      [ns2.m("disabled")]: disabled.value,
      [ns2.m("operable")]: operable.value,
      [ns2.m("no-slots")]: !Object.keys(ctx.slots).length
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
defineComponent({
  name: "DIconGroup",
  setup(_, ctx) {
    const ns2 = useNamespace("icon-group");
    return () => {
      var _a, _b;
      return createVNode("div", {
        "class": ns2.b()
      }, [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)]);
    };
  }
});
var Close = defineComponent({
  emits: ["click"],
  setup(props, {
    emit
  }) {
    const ns2 = useNamespace("notification");
    return () => createVNode("div", {
      "class": ns2.e("icon-close"),
      "onClick": (e) => emit("click", e)
    }, [createVNode(Icon, {
      "name": "close",
      "size": "14px"
    }, null)]);
  }
});
const ns = useNamespace("notification");
const XLINK = {
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
const XLINK_HREF = {
  "xlink:href": "#path-s"
};
function SuccessIcon() {
  return createVNode("svg", mergeProps({
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg"
  }, XLINK), [createVNode("defs", null, [createVNode("polygon", {
    "id": "path-s",
    "points": "6.53553391 9.77817459 12.1923882 4.12132034 13.6066017 5.53553391            6.53553391 12.6066017 3 9.07106781 4.41421356 7.65685425 6.53553391 9.77817459"
  }, null)]), createVNode("g", {
    "id": "correct",
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("mask", {
    "id": "mask-2",
    "fill": "white"
  }, [createVNode("use", XLINK_HREF, null)]), createVNode("use", mergeProps({
    "id": "Mask",
    "class": ns.e("image-success-path")
  }, XLINK_HREF), null)])]);
}
function WarningIcon() {
  return createVNode("svg", mergeProps({
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg"
  }, XLINK), [createVNode("g", {
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("path", {
    "class": ns.e("warning-outer"),
    "d": "M8.96244623,0.57254229 L15.8714442,13.4101975 C16.1549662,13.9370117            15.9538562,14.5918482 15.4222523,14.8728158 C15.2642579,14.9563203 15.0879506,           15 14.9088903,15 L1.09089441,15 C0.488410063,15 0,14.5159904 0,13.9189343 C0,13.7414873            0.0440768395,13.5667684 0.128340519,13.4101975 L7.03733844,0.57254229 C7.32086049,           0.0457280838 7.98165058,-0.153569987 8.51325441,0.127397589 C8.70423071,           0.228333932 8.8605922,0.383286648 8.96244623,0.57254229 Z"
  }, null), createVNode("path", {
    "class": ns.e("warning-inner"),
    "stroke-width": "0.3",
    "fill-rule": "nonzero",
    "d": "M8.87894737,13 L7.08947368,13 L7.08947368,11.2105263 L8.87894737,11.2105263 L8.87894737,13 Z M8.62102372,9.86842105            L7.32800539,9.86842105 L7,4.5 L8.96842105,4.5 L8.62102372,9.86842105 Z"
  }, null)])]);
}
function InfoIcon() {
  return createVNode("svg", mergeProps({
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg"
  }, XLINK), [createVNode("g", {
    "id": "info",
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("path", {
    "class": ns.e("image-info-path"),
    "d": "M7,13 L7,6 L9,6 L9,13 L7,13 Z M7,5 L7,3 L9,3 L9,5 L7,5 Z",
    "id": "info"
  }, null)])]);
}
function ErrorIcon() {
  return createVNode("svg", mergeProps({
    "width": "16px",
    "height": "16px",
    "viewBox": "0 0 16 16",
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg"
  }, XLINK), [createVNode("defs", null, [createVNode("polygon", {
    "id": "path-e",
    "points": "8.07106781 6.65685425 10.8994949 3.82842712 12.3137085 5.24264069 9.48528137 8.07106781 12.3137085            10.8994949 10.8994949 12.3137085 8.07106781 9.48528137 5.24264069 12.3137085 3.82842712 10.8994949 6.65685425            8.07106781 3.82842712 5.24264069 5.24264069 3.82842712"
  }, null)]), createVNode("g", {
    "id": "error",
    "stroke": "none",
    "stroke-width": "1",
    "fill": "none",
    "fill-rule": "evenodd"
  }, [createVNode("mask", {
    "id": "mask-2",
    "fill": "white"
  }, [createVNode("use", XLINK_HREF, null)]), createVNode("use", mergeProps({
    "id": "Mask",
    "class": ns.e("image-error-path")
  }, XLINK_HREF), null)])]);
}
var TypeIcon = defineComponent({
  props: {
    type: {
      type: String,
      default: "normal"
    }
  },
  setup(props) {
    const {
      type
    } = toRefs(props);
    const ns2 = useNamespace("notification");
    const classes = computed(() => ({
      [ns2.e("image")]: true,
      [ns2.em("image", type.value)]: true
    }));
    return () => createVNode("span", {
      "class": classes.value
    }, [type.value && type.value !== "normal" && (type.value === "success" && createVNode(SuccessIcon, null, null) || type.value === "info" && createVNode(InfoIcon, null, null) || type.value === "warning" && createVNode(WarningIcon, null, null) || type.value === "error" && createVNode(ErrorIcon, null, null))]);
  }
});
function useNotification(props) {
  const classes = computed(() => ({
    "devui-notification-item-container": true,
    [`devui-notification-message-${props.type}`]: true
  }));
  return { classes };
}
function useEvent(props, emit) {
  let timer = null;
  let timestamp;
  const close2 = () => {
    var _a;
    timer && clearTimeout(timer);
    timer = null;
    (_a = props.onClose) == null ? void 0 : _a.call(props);
    emit("update:modelValue", false);
  };
  const interrupt = () => {
    if (timer && props.duration) {
      clearTimeout(timer);
      timer = null;
    }
  };
  const removeReset = () => {
    if (props.modelValue && props.duration) {
      const remainTime = props.duration - (Date.now() - timestamp);
      timer = setTimeout(close2, remainTime);
    }
  };
  const handleDestroy = () => {
    emit("destroy");
  };
  watch(() => props.modelValue, (val) => {
    if (val) {
      timestamp = Date.now();
      if (props.duration) {
        timer = setTimeout(close2, props.duration);
      }
    }
  });
  return { interrupt, removeReset, close: close2, handleDestroy };
}
var notification = "";
var Notification = defineComponent({
  name: "DNotification",
  props: notificationProps,
  emits: ["update:modelValue", "destroy"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      modelValue,
      title,
      type
    } = toRefs(props);
    const {
      classes
    } = useNotification(props);
    const {
      interrupt,
      removeReset,
      close: close2,
      handleDestroy
    } = useEvent(props, emit);
    const ns2 = useNamespace("notification");
    return () => createVNode(Transition, {
      "name": "notification-fade",
      "onAfterLeave": handleDestroy
    }, {
      default: () => {
        var _a;
        return [modelValue.value && createVNode("div", {
          "class": ns2.b(),
          "onClick": withModifiers(() => ({}), ["stop"]),
          "onPointerup": withModifiers(() => ({}), ["stop"])
        }, [createVNode("div", {
          "class": classes.value,
          "onMouseenter": interrupt,
          "onMouseleave": removeReset
        }, [createVNode("div", {
          "class": ns2.e("item")
        }, [createVNode(Close, {
          "onClick": close2
        }, null), title.value && createVNode(TypeIcon, {
          "type": type.value
        }, null), createVNode("div", {
          "class": ns2.e("message")
        }, [createVNode("span", {
          "class": ns2.e("title")
        }, [title.value]), createVNode("span", {
          "class": ns2.e("content")
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])])])])])];
      }
    });
  }
});
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const defaultOptions = {
  modelValue: false,
  duration: 3e3,
  type: "normal"
};
function initInstance(props, content) {
  const container = document.createElement("div");
  container.classList.add("notification__warpper");
  const lastChild = document.body.lastElementChild;
  let offset_Top = 50;
  if (lastChild == null ? void 0 : lastChild.classList.contains("notification__warpper")) {
    const notification2 = lastChild.lastElementChild;
    const rects = notification2.getBoundingClientRect();
    const height = rects.height;
    const top = rects.top;
    offset_Top = height + top;
  }
  const app = createApp({
    setup() {
      onUnmounted(() => {
        document.body.removeChild(container);
      });
      return () => createVNode(Notification, mergeProps(props, {
        "onDestroy": app.unmount,
        "style": [`top: ${offset_Top}px`]
      }), _isSlot(content) ? content : {
        default: () => [content]
      });
    }
  });
  document.body.appendChild(container);
  app.mount(container);
  return app;
}
function close(props, originOnClose) {
  props.modelValue = false;
  originOnClose == null ? void 0 : originOnClose();
}
class NotificationService {
  static open(options) {
    const originOnClose = options.onClose || null;
    const content = options.content;
    delete options.content;
    const props = reactive(__spreadProps(__spreadValues(__spreadValues({}, defaultOptions), options), {
      onClose: () => {
        close(props, originOnClose);
      }
    }));
    initInstance(props, content);
    props.modelValue = true;
  }
}
class IUploadOptions {
  constructor() {
    __publicField(this, "uri");
    __publicField(this, "method");
    __publicField(this, "maximumSize");
    __publicField(this, "headers");
    __publicField(this, "authToken");
    __publicField(this, "authTokenHeader");
    __publicField(this, "additionalParameter");
    __publicField(this, "fileFieldName");
    __publicField(this, "checkSameName");
    __publicField(this, "withCredentials");
    __publicField(this, "responseType");
  }
}
class IFileOptions {
  constructor() {
    __publicField(this, "accept");
    __publicField(this, "multiple");
    __publicField(this, "webkitdirectory");
  }
}
var UploadStatus = /* @__PURE__ */ ((UploadStatus2) => {
  UploadStatus2[UploadStatus2["preLoad"] = 0] = "preLoad";
  UploadStatus2[UploadStatus2["uploading"] = 1] = "uploading";
  UploadStatus2[UploadStatus2["uploaded"] = 2] = "uploaded";
  UploadStatus2[UploadStatus2["failed"] = 3] = "failed";
  return UploadStatus2;
})(UploadStatus || {});
const uploadProps = {
  accept: {
    type: String
  },
  webkitdirectory: {
    type: Boolean,
    default: false
  },
  uploadOptions: {
    type: Object
  },
  multiple: {
    type: Boolean,
    default: false
  },
  autoUpload: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: ""
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  droppable: {
    type: Boolean,
    default: false
  },
  beforeUpload: {
    type: Function
  },
  dynamicUploadOptionsFn: {
    type: Function
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onChange: {
    type: Function
  },
  fileDrop: {
    type: Function,
    default: void 0
  },
  fileOver: {
    type: Function,
    default: void 0
  },
  fileSelect: {
    type: Function,
    default: void 0
  },
  deleteUploadedFile: {
    type: Function,
    default: void 0
  },
  onError: {
    type: Function,
    default: void 0
  },
  onSuccess: {
    type: Function,
    default: void 0
  },
  onExceed: {
    type: Function,
    default: void 0
  },
  onProgress: {
    type: Function,
    default: void 0
  },
  onPreview: {
    type: Function,
    default: void 0
  },
  oneTimeUpload: {
    type: Boolean,
    default: false
  },
  limit: {
    type: Number,
    default: 0
  },
  httpRequest: {
    type: Function,
    default: void 0
  }
};
const useSelectFiles = (t) => {
  const BEYOND_MAXIMAL_FILE_SIZE_MSG = ref("");
  const simulateClickEvent = (input) => {
    const evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    input.dispatchEvent(evt);
  };
  const selectFiles = ({ multiple, accept, webkitdirectory }) => {
    return new Promise((resolve) => {
      const tempNode = document.getElementById("d-upload-temp");
      if (tempNode) {
        document.body.removeChild(tempNode);
      }
      const input = document.createElement("input");
      input.style.position = "fixed";
      input.style.left = "-2000px";
      input.style.top = "-2000px";
      input.setAttribute("id", "d-upload-temp");
      input.setAttribute("type", "file");
      if (multiple) {
        input.setAttribute("multiple", "");
      }
      if (accept) {
        input.setAttribute("accept", accept);
      }
      if (webkitdirectory) {
        input.setAttribute("webkitdirectory", "");
      }
      input.addEventListener("change", (event) => {
        resolve(Array.prototype.slice.call(event.target.files));
      });
      document.body.appendChild(input);
      simulateClickEvent(input);
    });
  };
  const isAllowedFileType = (accept, file) => {
    if (accept) {
      const acceptArr = accept.split(",");
      const baseMimeType = file.type.replace(/\/.*$/, "");
      return acceptArr.some((type) => {
        const validType = type.trim();
        if (validType.startsWith(".")) {
          return file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.toLowerCase().length - validType.toLowerCase().length) > -1;
        } else if (/\/\*$/.test(validType)) {
          return baseMimeType === validType.replace(/\/.*$/, "");
        }
        return file.type === validType;
      });
    }
    return true;
  };
  const beyondMaximalSize = (fileSize, maximumSize) => {
    if (maximumSize) {
      return fileSize > 1024 * 1024 * maximumSize;
    }
    return false;
  };
  const _validateFiles = (file, accept, uploadOptions) => {
    if (!isAllowedFileType(accept, file)) {
      return {
        checkError: true,
        errorMsg: t("getNotAllowedFileTypeMsg")(file.name, accept)
      };
    }
    if (uploadOptions && beyondMaximalSize(file.size, uploadOptions.maximumSize)) {
      return {
        checkError: true,
        errorMsg: t("getBeyondMaximalFileSizeMsg")(file.name, uploadOptions.maximumSize || 0)
      };
    }
    return { checkError: false, errorMsg: void 0 };
  };
  const triggerSelectFiles = (fileOptions) => {
    const { multiple, accept, webkitdirectory } = fileOptions;
    return selectFiles({ multiple, accept, webkitdirectory });
  };
  const triggerDropFiles = (files) => {
    return Promise.resolve(files);
  };
  const checkAllFilesSize = (fileSize, maximumSize) => {
    if (beyondMaximalSize(fileSize, maximumSize)) {
      BEYOND_MAXIMAL_FILE_SIZE_MSG.value = t("getAllFilesBeyondMaximalFileSizeMsg")(maximumSize);
      return { checkError: true, errorMsg: BEYOND_MAXIMAL_FILE_SIZE_MSG.value };
    }
  };
  return {
    triggerSelectFiles,
    _validateFiles,
    triggerDropFiles,
    checkAllFilesSize
  };
};
class FileUploader {
  constructor(file, uploadOptions) {
    __publicField(this, "xhr");
    __publicField(this, "status");
    __publicField(this, "response");
    __publicField(this, "percentage", 0);
    this.file = file;
    this.uploadOptions = uploadOptions;
    this.file = file;
    this.uploadOptions = uploadOptions;
    this.status = UploadStatus.preLoad;
  }
  send(uploadFiles) {
    return new Promise((resolve, reject) => {
      const { uri, method, headers, authToken, authTokenHeader, additionalParameter, fileFieldName, withCredentials, responseType } = this.uploadOptions || {};
      const authTokenHeader_ = authTokenHeader || "Authorization";
      const fileFieldName_ = fileFieldName || "file";
      this.xhr = new XMLHttpRequest();
      this.xhr.open(method || "POST", uri || "");
      if (withCredentials) {
        this.xhr.withCredentials = withCredentials;
      }
      if (responseType) {
        this.xhr.responseType = responseType;
      }
      if (authToken) {
        this.xhr.setRequestHeader(authTokenHeader_, authToken);
      }
      if (headers) {
        Object.keys(headers).forEach((key) => {
          var _a;
          (_a = this.xhr) == null ? void 0 : _a.setRequestHeader(key, headers[key]);
        });
      }
      this.xhr.upload.onprogress = (e) => {
        this.percentage = Math.round(e.loaded * 100 / e.total);
      };
      const formData = uploadFiles && uploadFiles.length ? this.oneTimeUploadFiles(fileFieldName_, additionalParameter, uploadFiles) : this.parallelUploadFiles(fileFieldName_, additionalParameter);
      this.xhr.send(formData);
      this.status = UploadStatus.uploading;
      this.xhr.onabort = () => {
        this.status = UploadStatus.preLoad;
        this.xhr = null;
      };
      this.xhr.onerror = () => {
        var _a, _b;
        this.response = (_a = this.xhr) == null ? void 0 : _a.response;
        this.status = UploadStatus.failed;
        reject({ file: this.file, response: (_b = this.xhr) == null ? void 0 : _b.response });
      };
      this.xhr.onload = () => {
        var _a, _b, _c;
        if (((_a = this.xhr) == null ? void 0 : _a.readyState) === 4 && this.xhr.status >= 200 && this.xhr.status < 300) {
          this.response = this.xhr.response;
          this.status = UploadStatus.uploaded;
          resolve({ file: this.file, response: this.xhr.response });
        } else {
          this.response = (_b = this.xhr) == null ? void 0 : _b.response;
          this.status = UploadStatus.failed;
          reject({ file: this.file, response: (_c = this.xhr) == null ? void 0 : _c.response });
        }
      };
    });
  }
  parallelUploadFiles(fileFieldName_, additionalParameter) {
    const formData = new FormData();
    formData.append(fileFieldName_, this.file, this.file.name);
    if (additionalParameter) {
      Object.keys(additionalParameter).forEach((key) => {
        formData.append(key, additionalParameter[key]);
      });
    }
    return formData;
  }
  oneTimeUploadFiles(fileFieldName_, additionalParameter, uploadFiles) {
    const formData = new FormData();
    uploadFiles.forEach((element) => {
      formData.append(fileFieldName_, element.file, element.file.name);
      if (additionalParameter) {
        Object.keys(additionalParameter).forEach((key) => {
          formData.append(key, additionalParameter[key]);
        });
      }
    });
    return formData;
  }
  cancel() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }
}
const useUpload = () => {
  const fileUploaders = ref([]);
  const filesWithSameName = ref([]);
  const checkFileSame = (fileName) => {
    let checkRel = true;
    for (let i = 0; i < fileUploaders.value.length; i++) {
      if (fileName === fileUploaders.value[i].file.name) {
        checkRel = false;
        if (filesWithSameName.value.indexOf(fileName) === -1) {
          filesWithSameName.value.push(fileName);
        }
        break;
      }
    }
    return checkRel;
  };
  const addFile = (file, options) => {
    if (options && options.checkSameName) {
      if (checkFileSame(file.name)) {
        fileUploaders.value.push(new FileUploader(file, options));
      }
    } else {
      fileUploaders.value.push(new FileUploader(file, options));
    }
  };
  const getFiles = () => {
    return fileUploaders.value.map((fileUploader) => {
      return fileUploader.file;
    });
  };
  const getFullFiles = () => {
    return fileUploaders.value.map((fileUploader) => {
      return fileUploader;
    });
  };
  const dealOneTimeUploadFiles = async (uploads) => {
    if (!uploads || !uploads.length) {
      return Promise.reject("no files");
    }
    let finalUploads = [];
    await uploads[0].send(uploads).finally(() => finalUploads = uploads.map((file) => {
      file.status = uploads[0].status;
      file.percentage = uploads[0].percentage;
      return { file: file.file, response: uploads[0].response };
    }));
    return finalUploads;
  };
  const upload2 = async (oneFile) => {
    let uploads = [];
    if (oneFile) {
      oneFile.percentage = 0;
      const uploadedFile = await oneFile.send();
      uploads.push(uploadedFile);
    } else {
      const preFiles = fileUploaders.value.filter((fileUploader) => fileUploader.status === UploadStatus.preLoad);
      const failedFiles = fileUploaders.value.filter((fileUploader) => fileUploader.status === UploadStatus.failed);
      const uploadFiles = preFiles.length > 0 ? preFiles : failedFiles;
      uploads = await Promise.all(uploadFiles.map(async (fileUploader) => {
        fileUploader.percentage = 0;
        const uploadedFile = await fileUploader.send();
        return uploadedFile;
      }));
    }
    if (uploads.length > 0) {
      return Promise.resolve(uploads);
    }
    return Promise.reject("no files");
  };
  const _oneTimeUpload = () => {
    const uploads = fileUploaders.value.filter((fileUploader) => fileUploader.status !== UploadStatus.uploaded);
    return dealOneTimeUploadFiles(uploads);
  };
  const deleteFile = (file) => {
    const deleteUploadFile = fileUploaders.value.find((fileUploader) => fileUploader.file === file);
    deleteUploadFile == null ? void 0 : deleteUploadFile.cancel();
    fileUploaders.value = fileUploaders.value.filter((fileUploader) => {
      return file !== fileUploader.file;
    });
  };
  const removeFiles = () => {
    fileUploaders.value = [];
    filesWithSameName.value = [];
  };
  const getSameNameFiles = () => {
    return filesWithSameName.value.join();
  };
  const resetSameNameFiles = () => {
    filesWithSameName.value = [];
  };
  return {
    fileUploaders,
    getFiles,
    addFile,
    getFullFiles,
    deleteFile,
    upload: upload2,
    removeFiles,
    getSameNameFiles,
    resetSameNameFiles,
    _oneTimeUpload
  };
};
var upload = "";
function deepAssign(...objects) {
  const isObject = (obj) => obj && typeof obj === "object";
  return objects.reduce((prev, from) => {
    Object.keys(from).forEach((key) => {
      const pVal = prev[key];
      const oVal = from[key];
      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = Array.from(/* @__PURE__ */ new Set([...oVal, ...pVal]));
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = deepAssign(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });
    return prev;
  }, {});
}
var zhCN = {
  pagination: {
    totalItemText: "\u6240\u6709\u6761\u76EE",
    goToText: "\u8DF3\u81F3",
    perPage: "\u6761/\u9875"
  },
  accordion: {
    loading: "\u52A0\u8F7D\u4E2D",
    noData: "\u6CA1\u6709\u6570\u636E"
  },
  autoCompleteDropdown: {
    latestInput: "\u6700\u8FD1\u8F93\u5165"
  },
  cascaderList: {
    noData: "\u6CA1\u6709\u6570\u636E"
  },
  colorPicker: {
    foundationPanel: "\u57FA\u7840\u9762\u677F",
    advancedPanel: "\u9AD8\u7EA7\u9762\u677F"
  },
  datePickerPro: {
    ok: "\u786E\u5B9A",
    placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
    month1: "1\u6708",
    month2: "2\u6708",
    month3: "3\u6708",
    month4: "4\u6708",
    month5: "5\u6708",
    month6: "6\u6708",
    month7: "7\u6708",
    month8: "8\u6708",
    month9: "9\u6708",
    month10: "10\u6708",
    month11: "11\u6708",
    month12: "12\u6708",
    year: "\u5E74",
    startPlaceholder: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F",
    endPlaceholder: "\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F",
    getWeekDays() {
      return ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
    },
    getTimeArr() {
      return ["\u65F6", "\u5206", "\u79D2"];
    },
    getYearMonthStr(year, month) {
      return `${year}\u5E74${month}\u6708`;
    }
  },
  editableSelect: {
    noRelatedRecords: "\u627E\u4E0D\u5230\u76F8\u5173\u8BB0\u5F55",
    noData: "\u6CA1\u6709\u6570\u636E"
  },
  input: {
    placeholder: "\u8BF7\u8F93\u5165"
  },
  splitterBar: {
    collapse: "\u6536\u8D77",
    expand: "\u5C55\u5F00"
  },
  stepsGuide: {
    previous: "\u4E0A\u4E00\u6B65",
    continue: "\u6211\u77E5\u9053\u5566\uFF0C\u7EE7\u7EED",
    ok: "\u6211\u77E5\u9053\u5566"
  },
  table: {
    selectAll: "\u5168\u9009",
    ok: "\u786E\u5B9A"
  },
  timePopup: {
    ok: "\u786E\u5B9A"
  },
  transfer: {
    unit: "\u9879",
    panelUnit: "\u9879",
    headerUnit: "\u9879",
    noData: "\u6682\u65E0\u6570\u636E",
    placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
  },
  tree: {
    loading: "\u52A0\u8F7D\u4E2D",
    newNode: "\u65B0\u8282\u70B9",
    selectPlaceholder: "\u8BF7\u9009\u62E9"
  },
  upload: {
    placeholder: "\u9009\u62E9\u6587\u4EF6",
    getExistSameNameFilesMsg(sameNames) {
      return `\u60A8\u4E0A\u4F20\u7684 "${sameNames}" \u5B58\u5728\u91CD\u540D\u6587\u4EF6, \u8BF7\u91CD\u65B0\u9009\u62E9\u6587\u4EF6`;
    },
    getAllFilesBeyondMaximalFileSizeMsg(maximalSize) {
      return `\u6700\u5927\u652F\u6301\u4E0A\u4F20${maximalSize}MB\u7684\u6587\u4EF6, \u60A8\u672C\u6B21\u4E0A\u4F20\u7684\u6240\u6709\u6587\u4EF6\u8D85\u8FC7\u53EF\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F`;
    },
    getBeyondMaximalFileSizeMsg(filename, maximalSize) {
      return `\u6700\u5927\u652F\u6301\u4E0A\u4F20${maximalSize}MB\u7684\u6587\u4EF6, \u60A8\u4E0A\u4F20\u7684\u6587\u4EF6"${filename}"\u8D85\u8FC7\u53EF\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F`;
    },
    getNotAllowedFileTypeMsg(filename, scope) {
      return `\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B: "${scope}", \u60A8\u4E0A\u4F20\u7684\u6587\u4EF6"${filename}"\u4E0D\u5728\u5141\u8BB8\u8303\u56F4\u5185\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u6587\u4EF6`;
    }
  },
  search: {
    placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57"
  },
  select: {
    placeholder: "\u8BF7\u9009\u62E9",
    noDataText: "\u65E0\u6570\u636E",
    noMatchText: "\u627E\u4E0D\u5230\u76F8\u5173\u8BB0\u5F55",
    loadingText: "\u52A0\u8F7D\u4E2D..."
  },
  tagInput: {
    maxTagsText: "\u5DF2\u8FBE\u5230\u6700\u5927\u4E2A\u6570\uFF1A"
  },
  timeSelect: {
    placeholder: "\u8BF7\u9009\u62E9\u65F6\u95F4"
  }
};
const lang = ref("zh-CN");
let langMessages = reactive({
  [lang.value]: zhCN
});
const Locale = {
  messages() {
    return langMessages[lang.value];
  },
  lang() {
    return lang.value;
  },
  use(newLang, newMessages) {
    lang.value = newLang;
    this.add({ [newLang]: newMessages });
  },
  add(newMessages = {}) {
    langMessages = deepAssign(langMessages, newMessages);
  }
};
const camelize = (name) => name.substring(1).replace(/^\S/, (s) => s.toLocaleLowerCase());
function get(object, path) {
  const keys = path.split(".");
  let result = object;
  keys.forEach((key) => {
    var _a;
    result = (_a = result[key]) != null ? _a : "";
  });
  return result;
}
function createI18nTranslate(name, app, newPrefix) {
  const prefix = newPrefix || camelize(name) + ".";
  return (path) => {
    var _a;
    const messages = ((_a = app == null ? void 0 : app.appContext.config.globalProperties.langMessages) == null ? void 0 : _a.value) || Locale.messages();
    const message = get(messages, prefix + path) || get(messages, path);
    return message;
  };
}
var Upload = defineComponent({
  name: "DUpload",
  props: uploadProps,
  emits: ["fileDrop", "fileOver", "fileSelect", "deleteUploadedFile", "update:modelValue"],
  setup(props, ctx) {
    const app = getCurrentInstance();
    const t = createI18nTranslate("DUpload", app);
    const {
      uploadOptions,
      placeholder,
      autoUpload,
      disabled,
      beforeUpload,
      droppable,
      oneTimeUpload,
      modelValue,
      multiple,
      accept,
      webkitdirectory,
      limit,
      httpRequest
    } = toRefs(props);
    const ns2 = useNamespace("upload");
    const inputGroupNs = useNamespace("input-group");
    const formControlNs = useNamespace("form-control");
    const inputGroupAddOnNs = useNamespace("input-group-addon");
    const {
      triggerSelectFiles,
      _validateFiles,
      triggerDropFiles,
      checkAllFilesSize
    } = useSelectFiles(t);
    const {
      fileUploaders,
      addFile,
      getFullFiles,
      deleteFile,
      upload: upload2,
      resetSameNameFiles,
      removeFiles,
      _oneTimeUpload,
      getSameNameFiles
    } = useUpload();
    const isDropOver = ref(false);
    const selectedFiles = ref([]);
    const alertMsg = (errorMsg) => {
      NotificationService.open({
        type: "warning",
        content: errorMsg
      });
    };
    const checkValid = () => {
      var _a;
      let totalFileSize = 0;
      fileUploaders.value.forEach((fileUploader) => {
        totalFileSize += fileUploader.file.size;
        const checkResult = _validateFiles(fileUploader.file, (accept == null ? void 0 : accept.value) || "", fileUploader.uploadOptions);
        if (checkResult && checkResult.checkError) {
          deleteFile(fileUploader.file);
          alertMsg(checkResult.errorMsg);
          return;
        }
      });
      if (oneTimeUpload.value) {
        const checkResult = checkAllFilesSize(totalFileSize, ((_a = uploadOptions == null ? void 0 : uploadOptions.value) == null ? void 0 : _a.maximumSize) || 0);
        if (checkResult && checkResult.checkError) {
          removeFiles();
          alertMsg(checkResult.errorMsg);
        }
      }
    };
    const onFileOver = (event) => {
      isDropOver.value = event;
      ctx.emit("fileOver", event);
    };
    const deleteUploadedFile = (file) => {
      const newUploadedFiles = modelValue.value.filter((uploadedFile) => {
        return uploadedFile.name !== file.name;
      });
      ctx.emit("deleteUploadedFile", file);
      ctx.emit("update:modelValue", newUploadedFiles);
    };
    const onDeleteFile = (event, file, status) => {
      event == null ? void 0 : event.stopPropagation();
      if (status === UploadStatus.uploaded) {
        deleteUploadedFile(file);
      }
      deleteFile(file);
    };
    const canUpload = () => {
      let uploadResult = Promise.resolve(true);
      if (beforeUpload == null ? void 0 : beforeUpload.value) {
        const result = beforeUpload == null ? void 0 : beforeUpload.value(getFullFiles());
        if (typeof result !== "undefined") {
          if (typeof result === "boolean") {
            uploadResult = Promise.resolve(result);
          } else {
            uploadResult = result;
          }
        }
      }
      return uploadResult;
    };
    const fileUpload = (event, fileUploader) => {
      if (event) {
        event.stopPropagation();
      }
      canUpload().then((_canUpload) => {
        if (!_canUpload) {
          removeFiles();
          return;
        }
        if (typeof (httpRequest == null ? void 0 : httpRequest.value) === "function") {
          const files = fileUploaders.value.map((tempFileUploader) => tempFileUploader.file);
          httpRequest.value(files);
          return;
        }
        const uploadObservable = oneTimeUpload.value ? _oneTimeUpload() : upload2(fileUploader);
        props.onProgress && props.onProgress(selectedFiles.value, modelValue.value);
        uploadObservable == null ? void 0 : uploadObservable.then((results) => {
          props.onSuccess && props.onSuccess(results);
          const newFiles = results.map((result) => result.file);
          const newUploadedFiles = [...newFiles, ...modelValue.value];
          ctx.emit("update:modelValue", newUploadedFiles);
          props.onChange && props.onChange(newFiles, newUploadedFiles);
        }).catch((error) => {
          props.onError && props.onError(error);
          props.onChange && props.onChange([error.file], modelValue.value);
        });
      });
    };
    const _dealFiles = (promise) => {
      resetSameNameFiles();
      promise.then((files) => {
        if (limit.value && modelValue.value.length + files.length > limit.value) {
          props.onExceed && props.onExceed(files, modelValue.value);
          return;
        }
        props.onChange && props.onChange(files, modelValue.value);
        files.forEach((file) => {
          if (!multiple.value) {
            removeFiles();
          }
          addFile(file, uploadOptions == null ? void 0 : uploadOptions.value);
        });
        checkValid();
        const sameNameFiles = getSameNameFiles();
        if ((uploadOptions == null ? void 0 : uploadOptions.value) && uploadOptions.value.checkSameName && sameNameFiles.length) {
          alertMsg(t("getExistSameNameFilesMsg")(sameNameFiles));
        }
        selectedFiles.value = fileUploaders.value.filter((fileUploader) => fileUploader.status === UploadStatus.preLoad).map((fileUploader) => fileUploader.file);
        ctx.emit("fileSelect", selectedFiles.value);
        if (autoUpload.value) {
          fileUpload();
        }
      }).catch((error) => {
        alertMsg(error.message);
      });
    };
    const handleClick = () => {
      if (disabled.value) {
        return;
      }
      _dealFiles(triggerSelectFiles({
        accept: accept == null ? void 0 : accept.value,
        multiple: multiple.value,
        webkitdirectory: webkitdirectory.value
      }));
    };
    const onFileDrop = (files) => {
      isDropOver.value = false;
      _dealFiles(triggerDropFiles(files));
      ctx.emit("fileDrop", files);
    };
    const submit = (event, fileUploader) => {
      fileUpload(event, fileUploader);
    };
    const clearFiles = (event) => {
      fileUploaders.value.forEach((fileUploader) => {
        onDeleteFile(event, fileUploader.file, fileUploader.status);
      });
    };
    const clickSelectedFile = (event, file) => {
      event == null ? void 0 : event.stopPropagation();
      props.onPreview && props.onPreview(file);
    };
    ctx.expose({
      submit,
      clearFiles
    });
    return () => {
      var _a, _b, _c, _d;
      return createVNode("div", null, [withDirectives(createVNode("div", {
        "class": ns2.b(),
        "style": `border: ${isDropOver.value ? "1px solid #15bf15" : "0"}`
      }, [((_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)) ? createVNode("div", {
        "onClick": handleClick
      }, [ctx.slots.default()]) : createVNode("div", {
        "class": [inputGroupNs.b(), disabled.value ? "disabled" : ""],
        "onClick": handleClick
      }, [fileUploaders.value.length === 0 && createVNode("div", {
        "class": [formControlNs.b(), ns2.e("placeholder")]
      }, [placeholder.value || t("placeholder")]), fileUploaders.value.length > 0 && createVNode("ul", {
        "class": [formControlNs.b(), ns2.e("files-list")]
      }, [fileUploaders.value.map((fileUploader, index2) => createVNode("li", {
        "key": index2,
        "class": [ns2.e("file-item"), ns2.e("file-tag")],
        "style": "display: inline-block;",
        "title": fileUploader.file.name,
        "onClick": (event) => clickSelectedFile(event, fileUploader.file)
      }, [createVNode("span", {
        "class": [ns2.e("filename"), fileUploader.status === UploadStatus.failed ? ns2.m("failed-color") : ""]
      }, [fileUploader.file.name]), createVNode(resolveComponent("d-icon"), {
        "name": "close",
        "class": [(fileUploader == null ? void 0 : fileUploader.status) === UploadStatus.failed ? ns2.e("delete-file-button") : "", (fileUploader == null ? void 0 : fileUploader.status) === UploadStatus.uploading || (fileUploader == null ? void 0 : fileUploader.status) === UploadStatus.uploaded ? ns2.e("delete") : ""],
        "onClick": (event) => onDeleteFile(event, fileUploader.file, fileUploader.status)
      }, null), fileUploader.status === UploadStatus.uploading && createVNode("div", {
        "class": ["icon", ns2.e("progress")]
      }, [createVNode(resolveComponent("d-progress"), {
        "isCircle": true,
        "percentage": fileUploader.percentage,
        "barbgcolor": "#50D4AB",
        "strokeWidth": 8,
        "showContent": false
      }, null)]), fileUploader.status === UploadStatus.failed && createVNode(resolveComponent("d-icon"), {
        "name": "running",
        "onClick": fileUpload
      }, null), fileUploader.status === UploadStatus.uploaded && createVNode(resolveComponent("d-icon"), {
        "name": "right",
        "color": "#50d4ab"
      }, null)]))]), createVNode("span", {
        "class": inputGroupAddOnNs.b()
      }, [createVNode(resolveComponent("d-icon"), {
        "name": "more-operate",
        "color": "#252b3a"
      }, null)])])]), [[resolveDirective("file-drop"), {
        droppable,
        isSingle: !multiple,
        onFileDrop,
        onFileOver
      }]]), createVNode("div", null, [(_d = (_c = ctx.slots)["uploaded-files"]) == null ? void 0 : _d.call(_c, {
        uploadedFiles: modelValue.value,
        deleteFile: deleteUploadedFile
      })])]);
    };
  }
});
const getTransfer = (event) => {
  var _a;
  return event.dataTransfer ? event.dataTransfer : (_a = event.originalEvent) == null ? void 0 : _a.dataTransfer;
};
const haveFiles = (types) => {
  if (!types) {
    return false;
  }
  if (types.indexOf) {
    return types.indexOf("Files") !== -1;
  } else if (types.contains) {
    return types.contains("Files");
  } else {
    return false;
  }
};
const preventAndStop = (event) => {
  event.preventDefault();
  event.stopPropagation();
};
const onDragOver = (el, binding) => {
  const { onFileOver } = binding.value;
  el.addEventListener("dragover", (event) => {
    const transfer = getTransfer(event);
    if (!haveFiles(transfer.types)) {
      return;
    }
    preventAndStop(event);
    onFileOver && onFileOver(true);
  });
};
const onDragLeave = (el, binding) => {
  const { onFileOver } = binding.value;
  el.addEventListener("dragleave", (event) => {
    if (event.currentTarget === el) {
      return;
    }
    preventAndStop(event);
    onFileOver && onFileOver(true);
  });
};
const onDrop = (el, binding) => {
  const { onFileDrop, isSingle } = binding.value;
  el.addEventListener("drop", (event) => {
    const transfer = getTransfer(event);
    if (!transfer) {
      return;
    }
    preventAndStop(event);
    if (isSingle) {
      onFileDrop && onFileDrop([transfer.files[0]]);
    } else {
      onFileDrop && onFileDrop(Array.from(transfer.files));
    }
  });
};
const fileDropDirective = {
  mounted: (el, binding) => {
    const { droppable } = binding.value;
    if (!droppable) {
      return;
    }
    onDragOver(el, binding);
    onDragLeave(el, binding);
    onDrop(el, binding);
  }
};
var index = {
  title: "Upload \u4E0A\u4F20",
  category: "\u6570\u636E\u5F55\u5165",
  status: "100%",
  install(app) {
    app.directive("file-drop", fileDropDirective);
    app.component(Upload.name, Upload);
  }
};
export { IFileOptions, IUploadOptions, Upload, UploadStatus, index as default, uploadProps };
