"use strict";
const common_vendor = require("../../common/vendor.js");
const common_js_constant = require("../../common/js/constant.js");
const _sfc_main = {
  name: "GoodsDetail",
  data() {
    return {
      SIZE: common_js_constant.SIZE,
      nacEnum: [
        {
          icon: "heart",
          text: "点赞"
        },
        {
          icon: "star",
          text: "收藏"
        },
        {
          icon: "cart",
          text: "购物车"
        }
      ],
      buttonGroup: [
        {
          text: "立即购买",
          backgroundColor: "linear-gradient(to right, rgb(192,199,255), rgb(129,143,250))",
          color: "#fff"
        }
      ],
      currentSize: "S",
      count: 1,
      detail: {
        id: 1,
        title: "黑色T恤 小绵羊 短袖",
        cover: "/static/tshirt-img.jpeg",
        price: 56,
        profile: "/static/nav-car-active-icon.png",
        nickname: "我家都是小星星呀创作我家都是小星星呀创作我家都是小星星呀创作",
        collections: 1299,
        detailImg: "/static/detail-img.png"
      }
    };
  },
  onLoad(options) {
    const { id } = options;
    this.getDetail(id);
  },
  methods: {
    getDetail(id) {
      if (!id) {
        common_vendor.index.showToast({
          title: "获取详情失败，请重试",
          icon: "error",
          mask: true,
          complete: () => {
            setTimeout(() => {
              common_vendor.index.navigateBack();
            }, 1500);
          }
        });
        return;
      }
    },
    handleClickCount(count) {
      this.count = count;
    },
    handleCollected({ content }) {
      console.log(content);
    },
    handleAddCart() {
      common_vendor.index.navigateTo({
        url: `/pages/pay/index?id=${this.detail.id}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_icons2 + _easycom_uni_number_box2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_number_box + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.detail.cover,
    b: common_vendor.t($data.detail.title),
    c: common_vendor.t($data.detail.price),
    d: $data.detail.profile,
    e: common_vendor.t($data.detail.nickname),
    f: common_vendor.p({
      type: "star",
      size: "20",
      color: "#999"
    }),
    g: common_vendor.t($data.detail.collections),
    h: common_vendor.f($data.SIZE, (size, k0, i0) => {
      return {
        a: common_vendor.t(size.label),
        b: size.value,
        c: common_vendor.n({
          active: $data.currentSize == size.value
        })
      };
    }),
    i: common_vendor.o($options.handleClickCount),
    j: common_vendor.o(($event) => _ctx.vModelValue = $event),
    k: common_vendor.p({
      min: 1,
      modelValue: _ctx.vModelValue
    }),
    l: $data.detail.detailImg,
    m: common_vendor.o($options.handleCollected),
    n: common_vendor.o($options.handleAddCart),
    o: common_vendor.p({
      fill: true,
      options: $data.nacEnum,
      buttonGroup: $data.buttonGroup
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e73d10d5"]]);
wx.createPage(MiniProgramPage);
