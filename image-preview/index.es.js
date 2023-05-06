var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, ref, computed, onMounted, onUnmounted, createVNode, Fragment, createTextVNode, createApp } from "vue";
const imagePreviewProps = {
  url: {
    type: String,
    default: "",
    required: true
  },
  previewUrlList: {
    type: Array,
    default: () => [],
    required: true
  },
  zIndex: {
    type: Number,
    required: false
  },
  backDropZIndex: {
    type: Number,
    required: false
  }
};
class Transform {
  constructor(el, options = {}) {
    __publicField(this, "el");
    __publicField(this, "oTransformX", 0);
    __publicField(this, "oTransformY", 0);
    __publicField(this, "transformX");
    __publicField(this, "transformY");
    __publicField(this, "zoom");
    __publicField(this, "rotate");
    __publicField(this, "STEP", 0.25);
    __publicField(this, "MIN_SCALE", 0.2);
    __publicField(this, "MAX_SCALE", 2.5);
    __publicField(this, "TRANSFORMX", 0);
    __publicField(this, "TRANSFORMY", 0);
    __publicField(this, "ZOOM", 1);
    __publicField(this, "ROTATE", 0);
    this.el = el;
    this.transformX = options.transformX || this.TRANSFORMX;
    this.transformY = options.transformY || this.TRANSFORMY;
    this.zoom = options.zoom || this.ZOOM;
    this.rotate = options.rotate || this.ROTATE;
    this.handleDefaultDraggable();
    this.onDraggable();
    this.onMouseWheel();
  }
  handleDefaultDraggable() {
    document.body.ondragstart = () => {
      window.event.returnValue = false;
      return false;
    };
  }
  onDraggable() {
    this.el.onmousedown = (e) => {
      const ox = e.clientX;
      const oy = e.clientY;
      document.onmousemove = (e1) => {
        const disX = e1.clientX - ox;
        const disY = e1.clientY - oy;
        this.transformX = this.oTransformX + disX;
        this.transformY = this.oTransformY + disY;
        this.el.style.cursor = "grabbing";
        this.setPosition();
      };
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      this.oTransformX = this.transformX;
      this.oTransformY = this.transformY;
      this.el.style.cursor = "grab";
    };
  }
  onMouseWheel() {
    const handleWheel = this.throttle(this.setMouseWheel, 100);
    this.el.onmousewheel = (e) => {
      const value = -e.wheelDelta || e.deltaY || e.detail;
      handleWheel(value);
    };
  }
  throttle(fn, t) {
    let timer = null;
    return (...args) => {
      if (!timer) {
        setTimeout(() => {
          timer = null;
          fn.apply(this, args);
        }, t);
      }
    };
  }
  setMouseWheel(value) {
    if (value < 0) {
      if (this.zoom >= this.MAX_SCALE) {
        this.el.style.cursor = "not-allowed";
        return;
      }
      this.el.style.cursor = "zoom-in";
      this.setZoomIn(this.STEP);
    } else {
      if (this.zoom <= this.MIN_SCALE) {
        this.el.style.cursor = "not-allowed";
        return;
      }
      this.el.style.cursor = "zoom-out";
      this.setZoomOut(this.STEP);
    }
    this.setPosition();
  }
  setZoomIn(step = this.STEP) {
    this.zoom = Math.min(this.MAX_SCALE, this.zoom + step);
    this.setPosition();
  }
  setZoomOut(step = this.STEP) {
    this.zoom = Math.max(this.MIN_SCALE, this.zoom - step);
    this.setPosition();
  }
  setZoomBest() {
    this.reset();
    this.setPosition();
  }
  setZoomOriginal() {
    this.reset();
    this.setPosition();
  }
  setRotate() {
    this.rotate += 0.25;
    this.setPosition();
  }
  reset() {
    this.transformX = this.TRANSFORMX;
    this.transformY = this.TRANSFORMY;
    this.oTransformX = this.transformX;
    this.oTransformY = this.transformY;
    this.zoom = this.ZOOM;
  }
  setPosition() {
    this.el.style.transform = `translate(${this.transformX}px, ${this.transformY}px) scale(${this.zoom}) rotate(${this.rotate}turn)`;
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
var imagePreview$1 = "";
var imagePreview = defineComponent({
  name: "DImagePreview",
  props: imagePreviewProps,
  emits: [],
  setup(props) {
    const ns = useNamespace("image-preview");
    let transform = null;
    const index2 = ref(0);
    const url = computed(() => props.previewUrlList[index2.value]);
    const imageStyle = props.zIndex ? {
      zIndex: props.zIndex
    } : {};
    const bgStyle = props.backDropZIndex ? {
      zIndex: props.backDropZIndex
    } : {};
    function initTransform() {
      const imageElement = document.querySelector(`.${ns.e("main-image")}`);
      transform = new Transform(imageElement);
    }
    function initIndex() {
      index2.value = props.previewUrlList.findIndex((curUrl) => curUrl === props.url);
    }
    function onPrev() {
      index2.value = index2.value <= 0 ? props.previewUrlList.length - 1 : index2.value - 1;
    }
    function onNext() {
      index2.value = index2.value >= props.previewUrlList.length - 1 ? 0 : index2.value + 1;
    }
    function onClose() {
      ImagePreviewService.close();
    }
    function onZoomIn() {
      transform.setZoomIn();
    }
    function onZoomOut() {
      transform.setZoomOut();
    }
    function onRotate() {
      transform.setRotate();
    }
    function onZoomBest() {
      transform.setZoomBest();
    }
    function onZoomOriginal() {
      transform.setZoomOriginal();
    }
    function onKeyDown(event) {
      if (event.defaultPrevented) {
        return;
      }
      if (event.code === "Escape") {
        onClose();
      } else if (event.code === "ArrowLeft") {
        onPrev();
      } else if (event.code === "ArrowRight") {
        onNext();
      }
    }
    function initKeyboard() {
      document.addEventListener("keydown", onKeyDown, false);
    }
    function unKeyBoard() {
      document.removeEventListener("keydown", onKeyDown, false);
    }
    onMounted(() => {
      initIndex();
      initTransform();
      initKeyboard();
    });
    onUnmounted(() => {
      unKeyBoard();
    });
    return () => {
      return createVNode(Fragment, null, [createVNode("div", {
        "class": ns.b(),
        "style": imageStyle
      }, [createVNode("img", {
        "class": ns.e("main-image"),
        "src": url.value
      }, null), createVNode("button", {
        "class": ns.e("close-btn"),
        "onClick": onClose
      }, [createVNode("svg", {
        "width": "16px",
        "height": "16px",
        "viewBox": "0 0 16 16",
        "version": "1.1"
      }, [createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("polygon", {
        "fill": "#293040",
        "fill-rule": "nonzero",
        "points": "8 6.58578644 12.2426407 2.34314575 13.6568542 3.75735931 9.41421356 8                     13.6568542 12.2426407 12.2426407 13.6568542 8 9.41421356 3.75735931 13.6568542                      2.34314575 12.2426407 6.58578644 8 2.34314575 3.75735931 3.75735931 2.34314575"
      }, null)])])]), createVNode("button", {
        "class": ns.e("arrow-left"),
        "onClick": onPrev
      }, [createVNode("svg", {
        "width": "18px",
        "height": "18px",
        "viewBox": "0 0 16 16",
        "version": "1.1"
      }, [createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("polygon", {
        "fill": "#293040",
        "fill-rule": "nonzero",
        "points": "10.7071068 12.2928932 9.29289322 13.7071068 3.58578644 8 9.29289322                     2.29289322 10.7071068 3.70710678 6.41421356 8"
      }, null)])])]), createVNode("button", {
        "class": ns.e("arrow-right"),
        "onClick": onNext
      }, [createVNode("svg", {
        "width": "18px",
        "height": "18px",
        "viewBox": "0 0 16 16",
        "version": "1.1"
      }, [createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("polygon", {
        "fill": "#293040",
        "fill-rule": "nonzero",
        "transform": "translate(8.146447, 8.000000) scale(-1, 1) translate(-8.146447, -8.000000) ",
        "points": "11.7071068 12.2928932 10.2928932 13.7071068 4.58578644 8 10.2928932 2.29289322                     11.7071068 3.70710678 7.41421356 8"
      }, null)])])]), createVNode("div", {
        "class": ns.e("toolbar")
      }, [createVNode("button", {
        "onClick": onZoomIn
      }, [createVNode("svg", {
        "width": "18px",
        "height": "18px",
        "viewBox": "0 0 16 16"
      }, [createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("g", {
        "fill": "#293040",
        "fill-rule": "nonzero"
      }, [createVNode("path", {
        "d": "M6,6 L6,4 L8,4 L8,6 L10,6 L10,8 L8,8 L8,10 L6,10 L6,8 L4,8 L4,6 L6,6 Z                       M12.6063847,11.1921711 L15.6568542,14.2426407 L14.2426407,15.6568542 L11.1921711,12.6063847                       C10.0235906,13.4815965 8.5723351,14 7,14 C3.13400675,14 0,10.8659932 0,7 C0,3.13400675                        3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,8.5723351 13.4815965,10.0235906                         12.6063847,11.1921711 L12.6063847,11.1921711 Z M7,12 C9.76142375,12 12,9.76142375                          12,7 C12,4.23857625 9.76142375,2 7,2 C4.23857625,2 2,4.23857625 2,7 C2,9.76142375                           4.23857625,12 7,12 Z"
      }, null)])])])]), createVNode("button", {
        "onClick": onZoomOut
      }, [createVNode("svg", {
        "width": "18px",
        "height": "18px",
        "viewBox": "0 0 16 16"
      }, [createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("g", {
        "fill": "#293040",
        "fill-rule": "nonzero"
      }, [createVNode("path", {
        "d": "M12.6063847,11.1921711 L15.6568542,14.2426407 L14.2426407,15.6568542                       L11.1921711,12.6063847 C10.0235906,13.4815965 8.5723351,14 7,14 C3.13400675,14 0,10.8659932                        0,7 C0,3.13400675 3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,8.5723351                         13.4815965,10.0235906 12.6063847,11.1921711 L12.6063847,11.1921711 Z M7,12 C9.76142375,12                          12,9.76142375 12,7 C12,4.23857625 9.76142375,2 7,2 C4.23857625,2 2,4.23857625 2,7 C2,9.76142375                           4.23857625,12 7,12 Z M4,6 L10,6 L10,8 L4,8 L4,6 Z"
      }, null)])])])]), createVNode("button", {
        "onClick": onRotate
      }, [createVNode("svg", {
        "width": "18px",
        "height": "18px",
        "viewBox": "0 0 16 16",
        "version": "1.1"
      }, [createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("path", {
        "d": "M7.5,3.02242151 L7.5,4 L4.5,2 L7.5,0 L7.5,1.01640228 C7.66526181,1.00552468                       7.83198572,1 8,1 C12.1421356,1 15.5,4.35786438 15.5,8.5 C15.5,12.6421356                        12.1421356,16 8,16 C3.85786438,16 0.5,12.6421356 0.5,8.5 C0.5,6.9828355                         0.950484514,5.5708873 1.72499011,4.39061882 L3.42173231,5.4510827 C2.83944149,6.32371289                          2.5,7.37221604 2.5,8.5 C2.5,11.5375661 4.96243388,14 8,14 C11.0375661,14 13.5,11.5375661                           13.5,8.5 C13.5,5.46243388 11.0375661,3 8,3 C7.83145515,3 7.66468102,3.00758131 7.5,3.02242151                            Z M8,11 C6.61928813,11 5.5,9.88071187 5.5,8.5 C5.5,7.11928813 6.61928813,6 8,6 C9.38071187,6                             10.5,7.11928813 10.5,8.5 C10.5,9.88071187 9.38071187,11 8,11 Z M8,10 C8.82842712,10 9.5,9.32842712                              9.5,8.5 C9.5,7.67157288 8.82842712,7 8,7 C7.17157288,7 6.5,7.67157288 6.5,8.5 C6.5,9.32842712                               7.17157288,10 8,10 Z",
        "fill": "#293040"
      }, null)])])]), createVNode("button", {
        "onClick": onPrev
      }, [createVNode("svg", {
        "width": "16px",
        "height": "16px",
        "viewBox": "0 0 16 16",
        "version": "1.1"
      }, [createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("polygon", {
        "fill": "#293040",
        "fill-rule": "nonzero",
        "points": "10.7071068 12.2928932 9.29289322 13.7071068 3.58578644 8 9.29289322 2.29289322                       10.7071068 3.70710678 6.41421356 8"
      }, null)])])]), createVNode("span", {
        "class": ns.e("index")
      }, [index2.value + 1, createTextVNode(":"), props.previewUrlList.length]), createVNode("button", {
        "onClick": onNext
      }, [createVNode("svg", {
        "width": "16px",
        "height": "16px",
        "viewBox": "0 0 16 16",
        "version": "1.1"
      }, [createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("polygon", {
        "fill": "#293040",
        "fill-rule": "nonzero",
        "transform": "translate(8.146447, 8.000000) scale(-1, 1) translate(-8.146447, -8.000000) ",
        "points": "11.7071068 12.2928932 10.2928932 13.7071068 4.58578644 8 10.2928932 2.29289322                       11.7071068 3.70710678 7.41421356 8"
      }, null)])])]), createVNode("button", {
        "onClick": onZoomBest
      }, [createVNode("svg", {
        "width": "18px",
        "height": "18px",
        "viewBox": "0 0 16 16"
      }, [createVNode("g", {
        "stroke": "none",
        "stroke-width": "1",
        "fill": "none",
        "fill-rule": "evenodd"
      }, [createVNode("path", {
        "d": "M16,16 L11.429,16 L11.429,15 L14.456,15 L11.006,11.226 L11.652,10.519 L15.086,14.275                       L15.086,11 L16,11 L16,16 Z M15.164,1.544 L12.009,4.994 L11.418,4.348 L14.558,0.914                        L11.82,0.914 L11.82,0 L16,0 L16,4.571 L15.164,4.571 L15.164,1.544 Z M5,15 L5,16                         L0,16 L0,11 L1,11 L1,14.275 L4.756,10.519 L5.463,11.226 L1.689,15 L5,15 Z M4.365,4.994                          L0.914,1.544 L0.914,4.571 L3.41060513e-13,4.571 L3.41060513e-13,0 L4.571,0 L4.571,0.914                           L1.578,0.914 L5.011,4.348 L4.365,4.994 Z",
        "fill": "#293040",
        "fill-rule": "nonzero"
      }, null)])])]), createVNode("button", {
        "onClick": onZoomOriginal
      }, [createVNode("span", null, [createTextVNode("1:1")])])])]), createVNode("div", {
        "class": ns.e("bg"),
        "style": bgStyle
      }, null)]);
    };
  }
});
function createComponent(props) {
  return createApp(imagePreview, props);
}
class ImagePreviewService {
  static open(props) {
    this.$body = document.body;
    this.$div = document.createElement("div");
    this.$overflow = this.$body.style.overflow;
    this.$body.appendChild(this.$div);
    createComponent(props).mount(this.$div);
    this.$body.style.setProperty("overflow", "hidden", "important");
  }
  static close() {
    var _a, _b;
    (_a = this.$body) == null ? void 0 : _a.style.setProperty("overflow", this.$overflow);
    this.$overflow = null;
    this.$div && ((_b = this.$body) == null ? void 0 : _b.removeChild(this.$div));
    this.$body = null;
    this.$div = null;
  }
}
__publicField(ImagePreviewService, "$body", null);
__publicField(ImagePreviewService, "$div", null);
__publicField(ImagePreviewService, "$overflow", "");
function mountedPreviewImages(props) {
  ImagePreviewService.open({
    url: props.url,
    previewUrlList: props.previewUrlList,
    zIndex: props.zIndex,
    backDropZIndex: props.backDropZIndex
  });
}
function unmountedPreviewImages() {
  ImagePreviewService.close();
}
function getImgByEl(el) {
  const imgs = [...el.querySelectorAll("img")];
  const urlList = imgs.map((item) => {
    var _a;
    return (_a = item.getAttribute("preview-src") || item.getAttribute("src")) != null ? _a : "";
  });
  return urlList;
}
function handleImg(e) {
  var _a;
  e.stopPropagation();
  const el = e.currentTarget;
  const target = e.target;
  if (((_a = target == null ? void 0 : target.nodeName) == null ? void 0 : _a.toLowerCase()) === "img") {
    const urlList = getImgByEl(el);
    const url = target.getAttribute("src");
    if (!url) {
      return console.error("attribute is not exist");
    }
    mountedPreviewImages({
      url,
      previewUrlList: urlList,
      zIndex: el == null ? void 0 : el.zIndex,
      backDropZIndex: el == null ? void 0 : el.backDropZIndex
    });
  }
}
function handleImgByEl(el) {
  el.addEventListener("click", handleImg);
}
function removeHandle(el) {
  el.removeEventListener("click", handleImg);
}
var ImagePreviewDirective = {
  mounted(el, binding) {
    if (!(binding == null ? void 0 : binding.value)) {
      return handleImgByEl(el);
    }
    const { custom, disableDefault } = binding.value;
    if (custom instanceof Object) {
      custom.open = () => {
        const urlList = getImgByEl(el);
        mountedPreviewImages({
          url: urlList == null ? void 0 : urlList[0],
          previewUrlList: urlList,
          zIndex: el == null ? void 0 : el.zIndex,
          backDropZIndex: el == null ? void 0 : el.backDropZIndex
        });
      };
      custom.close = () => unmountedPreviewImages();
    }
    if (disableDefault) {
      return;
    }
    handleImgByEl(el);
  },
  unmounted() {
    unmountedPreviewImages();
  },
  updated(el, binding) {
    var _a, _b;
    el.zIndex = (_a = binding == null ? void 0 : binding.value) == null ? void 0 : _a.zIndex;
    el.backDropZIndex = (_b = binding == null ? void 0 : binding.value) == null ? void 0 : _b.backDropZIndex;
    if (binding == null ? void 0 : binding.value) {
      const {
        value: { disableDefault },
        oldValue: { disableDefault: oldDisableDefault }
      } = binding;
      if (disableDefault !== oldDisableDefault) {
        if (disableDefault) {
          removeHandle(el);
        } else {
          handleImgByEl(el);
        }
      }
    }
  }
};
var index = {
  title: "ImagePreview \u56FE\u7247\u9884\u89C8",
  category: "\u6570\u636E\u5C55\u793A",
  status: "100%",
  install(app) {
    app.directive("d-image-preview", ImagePreviewDirective);
    app.config.globalProperties.$imagePreviewService = ImagePreviewService;
  }
};
export { ImagePreviewDirective, ImagePreviewService, index as default, imagePreviewProps };
