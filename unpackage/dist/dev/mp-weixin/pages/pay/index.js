"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Pay",
  data() {
    return {
      addresssInfo: {
        address: "湖北省武汉市江岸区后湖大道青松园路汉口花园2号5栋二单元803",
        name: "xxx"
      },
      goods: [
        {
          id: 4,
          title: "黑色T恤 小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          size: "S",
          price: 36,
          count: 1
        }
      ],
      selections: []
    };
  },
  methods: {
    handlePay() {
    },
    handleEditAddress() {
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "location",
      size: "20",
      color: "#525252"
    }),
    b: common_vendor.t($data.addresssInfo.address),
    c: common_vendor.t($data.addresssInfo.name),
    d: common_vendor.p({
      type: "right",
      size: "22",
      color: "#525252"
    }),
    e: common_vendor.o((...args) => $options.handleEditAddress && $options.handleEditAddress(...args)),
    f: common_vendor.f($data.goods, (item, k0, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.size),
        d: common_vendor.t(item.price),
        e: common_vendor.t(item.count),
        f: item.id
      };
    }),
    g: common_vendor.o((...args) => $options.handlePay && $options.handlePay(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d7fd7b38"]]);
wx.createPage(MiniProgramPage);
