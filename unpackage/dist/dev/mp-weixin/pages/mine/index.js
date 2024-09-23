"use strict";
const common_vendor = require("../../common/vendor.js");
const Tabbar = () => "../../components/tabbar/index.js";
const _sfc_main = {
  components: {
    Tabbar
  }
};
if (!Array) {
  const _component_Tabbar = common_vendor.resolveComponent("Tabbar");
  _component_Tabbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      activeKey: "mine"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
