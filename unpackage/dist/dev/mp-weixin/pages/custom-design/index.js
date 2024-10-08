"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const SearchTemplate = () => "./search-template.js";
const DEFAULT_DATA = (data = {}) => ({
  visible: false,
  id: Date.valueOf(),
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  ...data
});
const DEFAULT_MOVABLE_AREA_BOX = {
  height: 136,
  width: 100
};
const _sfc_main = {
  name: "CustomerDesign",
  components: {
    SearchTemplate
  },
  data() {
    return {
      DEFAULT_MOVABLE_AREA_BOX,
      backImg: "/static/tshirt-img.jpeg",
      editImg: DEFAULT_DATA(),
      editText: DEFAULT_DATA()
    };
  },
  methods: {
    handleDelete() {
      this.editImg = DEFAULT_DATA();
      this.editText = DEFAULT_DATA();
    },
    handleAlign(type) {
      let editImgX = this.editImg.x;
      let editImgY = this.editImg.y;
      let editTextX = this.editText.x;
      let editTextY = this.editText.y;
      if (type === "horizontal") {
        editImgX = (DEFAULT_MOVABLE_AREA_BOX.width - this.editImg.w) / 2;
        editTextX = (DEFAULT_MOVABLE_AREA_BOX.width - this.editText.w) / 2;
      }
      if (type === "vertical") {
        editImgY = (DEFAULT_MOVABLE_AREA_BOX.height - this.editText.h) / 2;
        editTextY = (DEFAULT_MOVABLE_AREA_BOX.height - this.editText.h) / 2;
      }
      if (this.editImg.visible) {
        this.editImg = {
          ...this.editImg,
          x: editImgX,
          y: editImgY
        };
      }
      if (this.editText.visible) {
        this.editText = {
          ...this.editText,
          x: editTextX,
          y: editTextY
        };
      }
    },
    handleSelectColor() {
      this.$refs.colorPopup.open();
    },
    handleChangeColor(color) {
      switch (color) {
        case "white":
          this.backImg = "/static/tshirt-img.jpeg";
          break;
        default:
          this.backImg = "/static/tshirt-img.jpeg";
          break;
      }
      this.$refs.colorPopup.close();
    },
    handleSelectTemplate() {
      this.$refs.searchTemplate.handleOpen();
    },
    handleChooseImg() {
      common_vendor.index.chooseImage({
        count: 1,
        success: (res) => {
          const { path, size } = res.tempFiles[0];
          this.editImg = {
            ...this.editImg,
            path
          };
          this.$refs.imgPopup.open();
        }
      });
    },
    handleImg(type) {
      if (type == "add") {
        this.editImg.visible = true;
        this.$refs.imgPopup.close();
      }
    },
    handleRemove(key) {
      this[key] = DEFAULT_DATA();
    },
    handleEffect() {
      common_vendor.index.chooseImage({
        count: 1,
        success: (res) => {
          const { path, size } = res.tempFiles[0];
          this.editImg = DEFAULT_DATA({
            path,
            visible: true
          });
        }
      });
    },
    handleMoveChange(e, key) {
      const { x, y, source } = e.detail || {};
      if (!source) {
        return;
      }
      this.$set(this, key, {
        ...this[key],
        x,
        y
      });
    },
    handleSubmit() {
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _component_SearchTemplate = common_vendor.resolveComponent("SearchTemplate");
  (_easycom_uni_icons2 + _easycom_uni_popup2 + _component_SearchTemplate)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.backImg,
    b: $data.editText.visible
  }, $data.editText.visible ? {
    c: $data.editText.path,
    d: common_vendor.o(($event) => $options.handleRemove("editText")),
    e: common_vendor.p({
      type: "closeempty",
      size: "16",
      color: "#fff"
    }),
    f: $data.editText.x,
    g: $data.editText.y,
    h: `${$data.editText.w}px`,
    i: `${$data.editText.h}px`,
    j: common_vendor.o((e) => $options.handleMoveChange(e, "editText"))
  } : {}, {
    k: $data.editImg.visible
  }, $data.editImg.visible ? {
    l: $data.editImg.path,
    m: common_vendor.o(($event) => $options.handleRemove("editImg")),
    n: common_vendor.p({
      type: "closeempty",
      size: "16",
      color: "#fff"
    }),
    o: $data.editImg.x,
    p: $data.editImg.y,
    q: `${$data.editImg.w}px`,
    r: `${$data.editImg.h}px`,
    s: common_vendor.o((e) => $options.handleMoveChange(e, "editImg"))
  } : {}, {
    t: `${$data.DEFAULT_MOVABLE_AREA_BOX.width}px`,
    v: `${$data.DEFAULT_MOVABLE_AREA_BOX.height}px`,
    w: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args)),
    x: common_vendor.p({
      type: "trash",
      size: "36"
    }),
    y: common_vendor.o((...args) => $options.handleDelete && $options.handleDelete(...args)),
    z: common_assets._imports_0,
    A: common_vendor.o(($event) => $options.handleAlign("horizontal")),
    B: common_assets._imports_1,
    C: common_vendor.o(($event) => $options.handleAlign("vertical")),
    D: common_assets._imports_1,
    E: common_vendor.o((...args) => $options.handleSelectColor && $options.handleSelectColor(...args)),
    F: common_assets._imports_1,
    G: common_vendor.o((...args) => $options.handleSelectTemplate && $options.handleSelectTemplate(...args)),
    H: common_assets._imports_1,
    I: common_vendor.o((...args) => $options.handleChooseImg && $options.handleChooseImg(...args)),
    J: common_assets._imports_1,
    K: common_vendor.o((...args) => $options.handleEffect && $options.handleEffect(...args)),
    L: common_vendor.o(($event) => $options.handleChangeColor("white")),
    M: common_vendor.o(($event) => $options.handleChangeColor("black")),
    N: common_vendor.sr("colorPopup", "ab0cc392-3"),
    O: common_vendor.p({
      ["background-color"]: "#fff",
      borderRadius: "10px 10px 10px 10px"
    }),
    P: common_vendor.p({
      type: "checkmarkempty",
      size: "24"
    }),
    Q: common_vendor.o(($event) => $options.handleImg("add")),
    R: common_vendor.p({
      type: "checkmarkempty",
      size: "24"
    }),
    S: common_vendor.o(($event) => $options.handleImg("cut")),
    T: common_vendor.sr("imgPopup", "ab0cc392-4"),
    U: common_vendor.p({
      ["background-color"]: "#fff",
      borderRadius: "10px 10px 10px 10px"
    }),
    V: common_vendor.sr("searchTemplate", "ab0cc392-7")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ab0cc392"]]);
wx.createPage(MiniProgramPage);
