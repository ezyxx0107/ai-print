"use strict";
const common_vendor = require("../../common/vendor.js");
const common_js_constant = require("../../common/js/constant.js");
const _sfc_main = {
  name: "Tabbar",
  props: {
    activeKey: {
      require: true,
      default: "home"
    }
  },
  data() {
    return {
      tabs: [
        {
          path: "/pages/index/index",
          defaultIcon: "/static/nav-car-icon.png",
          activeIcon: "/static/nav-car-active-icon.png",
          label: "首页",
          key: "home",
          isTab: true
        },
        {
          path: common_js_constant.CUSTOM_DESIGN_PATH,
          defaultIcon: "/static/nav-car-icon.png",
          activeIcon: "/static/nav-car-active-icon.png",
          label: "定制",
          key: "design",
          isDesign: true
        },
        {
          path: "/pages/mine/index",
          defaultIcon: "/static/nav-car-icon.png",
          activeIcon: "/static/nav-car-active-icon.png",
          label: "我的",
          key: "mine",
          isTab: true
        }
      ],
      DESIGN_TYPES: common_js_constant.DESIGN_TYPES
    };
  },
  methods: {
    handleTurnPage(item) {
      if (item.isTab) {
        common_vendor.index.switchTab({
          url: item.path
        });
        return;
      }
      if (item.isDesign) {
        this.$refs.designPopup.open();
      }
    },
    handleClosePopup() {
      this.$refs.designPopup.close();
    },
    handleTurnDesignPage(item) {
      common_vendor.index.navigateTo({
        url: `${common_js_constant.CUSTOM_DESIGN_PATH}?type=${item.value}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabs, (item, index, i0) => {
      return common_vendor.e({
        a: $props.activeKey != item.key
      }, $props.activeKey != item.key ? {
        b: item.defaultIcon
      } : {
        c: item.activeIcon
      }, {
        d: common_vendor.t(item.label),
        e: item.key,
        f: common_vendor.n({
          "active": $props.activeKey == item.key,
          center: index == 1
        }),
        g: common_vendor.o(($event) => $options.handleTurnPage(item), item.key)
      });
    }),
    b: common_vendor.o((...args) => $options.handleClosePopup && $options.handleClosePopup(...args)),
    c: common_vendor.f($data.DESIGN_TYPES, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.label),
        c: item.key,
        d: common_vendor.o(($event) => $options.handleTurnDesignPage(item), item.key)
      };
    }),
    d: common_vendor.sr("designPopup", "0e399a7b-0"),
    e: common_vendor.p({
      type: "bottom",
      ["background-color"]: "#fff",
      borderRadius: "20px 20px"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0e399a7b"]]);
wx.createComponent(Component);
