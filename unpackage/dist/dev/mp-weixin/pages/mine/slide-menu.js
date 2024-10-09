"use strict";
const common_vendor = require("../../common/vendor.js");
const MENU_ENUM = [
  {
    value: 1,
    label: "商城记录",
    path: ""
  },
  {
    value: 2,
    label: "浏览记录",
    path: ""
  },
  {
    value: 3,
    label: "个人中心",
    path: ""
  },
  {
    value: 4,
    label: "消息通知",
    path: ""
  },
  {
    value: 5,
    label: "收藏夹",
    path: ""
  },
  {
    value: 5,
    label: "帮助",
    path: ""
  }
];
const OPERATION_ENUM = [
  {
    value: 1,
    label: "设置",
    path: ""
  },
  {
    value: 2,
    label: "退出",
    path: ""
  }
];
const _sfc_main = {
  name: "SlideMenu",
  data() {
    return {
      MENU_ENUM,
      OPERATION_ENUM
    };
  },
  methods: {
    handleOpen() {
      this.$refs.slideMenu.open();
    }
  }
};
if (!Array) {
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  _easycom_uni_drawer2();
}
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
if (!Math) {
  _easycom_uni_drawer();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.MENU_ENUM, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: item.value
      };
    }),
    b: common_vendor.f($data.OPERATION_ENUM, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: item.value
      };
    }),
    c: common_vendor.sr("slideMenu", "9f8172dd-0"),
    d: common_vendor.p({
      mode: "left"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9f8172dd"]]);
wx.createComponent(Component);
