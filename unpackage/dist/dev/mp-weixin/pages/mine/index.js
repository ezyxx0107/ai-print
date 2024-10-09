"use strict";
const common_vendor = require("../../common/vendor.js");
const Tabbar = () => "../../components/tabbar/index.js";
const SlideMenu = () => "./slide-menu.js";
const TYPE_ENUM = [
  {
    value: 1,
    label: "待付款",
    icon: "/static/nav-car-icon.png"
  },
  {
    value: 2,
    label: "待发货",
    icon: "/static/nav-car-icon.png"
  },
  {
    value: 3,
    label: "待收货",
    icon: "/static/nav-car-icon.png"
  },
  {
    value: 4,
    label: "待评价",
    icon: "/static/nav-car-icon.png"
  }
];
const SERVICE_ENUM = [
  {
    value: 1,
    label: "交易记录",
    path: ""
  },
  {
    value: 2,
    label: "平台客服",
    path: ""
  }
];
const _sfc_main = {
  name: "Mine",
  components: {
    Tabbar,
    SlideMenu
  },
  data() {
    return {
      TYPE_ENUM,
      SERVICE_ENUM,
      info: {
        profile: "/static/couple.png",
        nickname: "我家都是小星星呀创作",
        id: 123456,
        follow: 10,
        following: 12
      }
    };
  },
  methods: {
    handleCheckOrders(type = "") {
      const url = `/pages/orders?type=${type}`;
      this.handleTurnPage(url);
    },
    handleTurnPage(url = "") {
      if (!url) {
        return;
      }
      common_vendor.index.navigateTo({
        url
      });
    },
    handleOpenSlideMenu() {
      this.$refs.slideMenuDrawer.handleOpen();
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_SlideMenu = common_vendor.resolveComponent("SlideMenu");
  const _component_Tabbar = common_vendor.resolveComponent("Tabbar");
  (_easycom_uni_icons2 + _component_SlideMenu + _component_Tabbar)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.info.profile,
    b: common_vendor.t($data.info.nickname),
    c: common_vendor.t($data.info.id),
    d: common_vendor.o((...args) => $options.handleOpenSlideMenu && $options.handleOpenSlideMenu(...args)),
    e: common_vendor.t($data.info.follow),
    f: common_vendor.t($data.info.following),
    g: common_vendor.p({
      type: "right",
      size: "22"
    }),
    h: common_vendor.o(($event) => $options.handleCheckOrders()),
    i: common_vendor.f($data.TYPE_ENUM, (item, k0, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.label),
        c: item.value,
        d: common_vendor.o(($event) => $options.handleCheckOrders(item.value), item.value)
      };
    }),
    j: common_vendor.f($data.SERVICE_ENUM, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: item.value,
        c: common_vendor.o(($event) => $options.handleTurnPage(item.path), item.value)
      };
    }),
    k: common_vendor.sr("slideMenuDrawer", "569e925a-1"),
    l: common_vendor.p({
      activeKey: "mine"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-569e925a"]]);
wx.createPage(MiniProgramPage);
