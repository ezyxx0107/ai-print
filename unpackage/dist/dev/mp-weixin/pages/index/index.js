"use strict";
const common_vendor = require("../../common/vendor.js");
const common_js_constant = require("../../common/js/constant.js");
const Tabbar = () => "../../components/tabbar/index.js";
const _sfc_main = {
  name: "Home",
  components: {
    Tabbar
  },
  data() {
    return {
      DESIGN_TYPES: common_js_constant.DESIGN_TYPES,
      bannerImg: "/static/banner-img.png",
      goods: [
        {
          id: 1,
          title: "黑色T恤 小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 11,
          title: "黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 2,
          title: "黑色T恤 小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 3,
          title: "黑色T恤 小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 4,
          title: "黑色T恤 小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        }
      ]
    };
  },
  onPageScroll(arg) {
    console.log(arg);
  },
  methods: {
    handleType(type) {
    },
    handleDesign(item) {
      common_vendor.index.navigateTo({
        url: `${CUSTOM_DESIGN_PATH}?id=${item.id}`
      });
    }
  }
};
if (!Array) {
  const _component_Tabbar = common_vendor.resolveComponent("Tabbar");
  _component_Tabbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.bannerImg,
    b: common_vendor.f($data.DESIGN_TYPES, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.label),
        c: item.key,
        d: common_vendor.o(($event) => $options.handleType(item), item.key)
      };
    }),
    c: common_vendor.f($data.goods, (item, k0, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.title),
        c: item.profile,
        d: common_vendor.t(item.nickname),
        e: item.id,
        f: common_vendor.o(($event) => $options.handleDesign(item), item.id)
      };
    }),
    d: common_vendor.p({
      activeKey: "home"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
