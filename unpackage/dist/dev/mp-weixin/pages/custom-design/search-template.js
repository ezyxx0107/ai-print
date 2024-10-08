"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "SearchTemplate",
  data() {
    return {
      searchValue: "",
      collapseVisible: true,
      collapseValue: ["category"],
      categoryEnum: [
        {
          id: 1,
          cover: "/static/tshirt-img.jpeg",
          label: "动漫"
        },
        {
          id: 1,
          cover: "/static/tshirt-img.jpeg",
          label: "动漫"
        },
        {
          id: 1,
          cover: "/static/tshirt-img.jpeg",
          label: "动漫"
        },
        {
          id: 1,
          cover: "/static/tshirt-img.jpeg",
          label: "动漫"
        },
        {
          id: 1,
          cover: "/static/tshirt-img.jpeg",
          label: "动漫"
        },
        {
          id: 1,
          cover: "/static/tshirt-img.jpeg",
          label: "动漫"
        },
        {
          id: 1,
          cover: "/static/tshirt-img.jpeg",
          label: "动漫"
        },
        {
          id: 1,
          cover: "/static/tshirt-img.jpeg",
          label: "动漫"
        },
        {
          id: 1,
          cover: "/static/tshirt-img.jpeg",
          label: "动漫"
        },
        {
          id: 1,
          cover: "/static/tshirt-img.jpeg",
          label: "动漫"
        }
      ],
      templateListVisible: false,
      templateList: [
        {
          id: "1",
          title: "黑色T恤 小绵羊 短袖",
          image: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 11,
          title: "黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          image: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: "1",
          title: "黑色T恤 小绵羊 短袖",
          image: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 11,
          title: "黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          image: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: "1",
          title: "黑色T恤 小绵羊 短袖",
          image: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 11,
          title: "黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          image: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: "1",
          title: "黑色T恤 小绵羊 短袖",
          image: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 11,
          title: "黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          image: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: "1",
          title: "黑色T恤 小绵羊 短袖",
          image: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 11,
          title: "黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          image: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: "1",
          title: "黑色T恤 小绵羊 短袖",
          image: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 11,
          title: "黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          image: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: "1",
          title: "黑色T恤 小绵羊 短袖",
          image: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 11,
          title: "黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          image: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: "1",
          title: "黑色T恤 小绵羊 短袖",
          image: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 11,
          title: "黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          image: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: "1",
          title: "黑色T恤 小绵羊 短袖",
          image: "/static/tshirt-img.jpeg",
          profile: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        },
        {
          id: 11,
          title: "黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖",
          cover: "/static/tshirt-img.jpeg",
          image: "/static/nav-car-active-icon.png",
          nickname: "我家都是小星星呀创作"
        }
      ]
    };
  },
  methods: {
    handleOpen() {
      this.$refs.searchPopup.open();
      this.$nextTick(() => {
        this.$refs.collapse.resize();
      });
    },
    handleBack() {
      this.$refs.searchPopup.close();
    },
    handleSearch(e) {
      console.log(e);
    },
    handleClear() {
      this.searchValue = "";
    },
    handleopen(e) {
      console.log(e);
    },
    handleSelectCategory(type) {
      this.collapseVisible = false;
      this.templateListVisible = true;
    },
    handleSelected(data = {}) {
    },
    handleGetMore() {
      console.log("====");
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2 + _easycom_uni_collapse_item2 + _easycom_uni_collapse2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar + _easycom_uni_collapse_item + _easycom_uni_collapse + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.handleBack),
    b: common_vendor.p({
      type: "left",
      size: "28"
    }),
    c: common_vendor.o($options.handleSearch),
    d: common_vendor.o($options.handleClear),
    e: common_vendor.o($options.handleClear),
    f: common_vendor.o(($event) => $data.searchValue = $event),
    g: common_vendor.p({
      placeholder: "点击输入文字",
      radius: "100",
      modelValue: $data.searchValue
    }),
    h: common_vendor.o(($event) => $options.handleSelectCategory("all")),
    i: common_vendor.f($data.categoryEnum, (item, k0, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.label),
        c: item.id,
        d: common_vendor.o(($event) => $options.handleSelectCategory(item.id), item.id)
      };
    }),
    j: common_vendor.p({
      name: "category",
      title: "分类"
    }),
    k: common_vendor.sr("collapse", "f315b393-3,f315b393-0"),
    l: $data.collapseVisible,
    m: common_vendor.o($options.handleopen),
    n: common_vendor.p({
      value: $data.collapseValue
    }),
    o: $data.templateListVisible
  }, $data.templateListVisible ? {
    p: common_vendor.f($data.templateList, (item, k0, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.title),
        c: item.profile,
        d: common_vendor.t(item.nickname),
        e: item.id
      };
    }),
    q: common_vendor.o((...args) => $options.handleGetMore && $options.handleGetMore(...args))
  } : {}, {
    r: common_vendor.sr("searchPopup", "f315b393-0"),
    s: common_vendor.p({
      ["background-color"]: "#f5f5f5"
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f315b393"]]);
wx.createComponent(Component);
