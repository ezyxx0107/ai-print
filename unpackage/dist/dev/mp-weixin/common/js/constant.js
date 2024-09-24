"use strict";
const CUSTOM_DESIGN_PATH = "/pages/custom-design/index";
const DETAIL_PATH = "/pages/goods-detail/index";
const DESIGN_TYPES = [
  {
    value: "shirs",
    label: "T恤",
    img: "/static/tshirt-img.jpeg"
  },
  {
    value: "sweater",
    label: "卫衣",
    img: "/static/tshirt-img.jpeg"
  },
  {
    value: "sheet",
    label: "床单",
    img: "/static/tshirt-img.jpeg"
  }
];
const SIZE = [
  {
    value: "S",
    label: "S"
  },
  {
    value: "M",
    label: "M"
  },
  {
    value: "L",
    label: "L"
  },
  {
    value: "XL",
    label: "XL"
  }
];
exports.CUSTOM_DESIGN_PATH = CUSTOM_DESIGN_PATH;
exports.DESIGN_TYPES = DESIGN_TYPES;
exports.DETAIL_PATH = DETAIL_PATH;
exports.SIZE = SIZE;
