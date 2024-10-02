"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const BASIC_DATA = () => ({});
const _sfc_main = {
  name: "CustomerDesign",
  data() {
    return {
      backImg: "/static/tshirt-img.jpeg",
      editData: BASIC_DATA()
    };
  },
  methods: {
    handleDelete() {
      this.editData = editData();
    },
    handleAlign(type) {
      console.log(type);
    },
    handleSelectColor() {
      this.$refs.colorPopup.open();
    },
    handleChangeColor(color) {
      switch (color) {
        case "white":
          this.backImg = "/static/tshirt-img.jpeg";
        default:
          this.backImg = "/static/tshirt-img.jpeg";
      }
      this.$refs.colorPopup.close();
    },
    handleSubmit() {
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.backImg,
    b: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args)),
    c: common_vendor.p({
      type: "trash",
      size: "30"
    }),
    d: common_vendor.o((...args) => $options.handleDelete && $options.handleDelete(...args)),
    e: common_assets._imports_0,
    f: common_vendor.o(($event) => $options.handleAlign("horizontal")),
    g: common_assets._imports_1,
    h: common_vendor.o(($event) => $options.handleAlign("vertical")),
    i: common_assets._imports_1,
    j: common_vendor.o((...args) => $options.handleSelectColor && $options.handleSelectColor(...args)),
    k: common_assets._imports_1,
    l: common_assets._imports_1,
    m: common_assets._imports_1,
    n: common_assets._imports_1,
    o: common_vendor.o(($event) => $options.handleChangeColor("white")),
    p: common_vendor.o(($event) => $options.handleChangeColor("black")),
    q: common_vendor.sr("colorPopup", "ab0cc392-1"),
    r: common_vendor.p({
      ["background-color"]: "#fff",
      borderRadius: "10px 10px 10px 10px"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ab0cc392"]]);
wx.createPage(MiniProgramPage);
