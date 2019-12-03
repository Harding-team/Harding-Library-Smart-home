(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/details/details"],{

/***/ 47:
/*!*************************************************************************************************!*\
  !*** D:/git/Harding-Library-Smart-home/Smart-home/main.js?{"page":"pages%2Fdetails%2Fdetails"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _details = _interopRequireDefault(__webpack_require__(/*! ./pages/details/details.vue */ 48));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_details.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 48:
/*!******************************************************************************!*\
  !*** D:/git/Harding-Library-Smart-home/Smart-home/pages/details/details.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _details_vue_vue_type_template_id_4f33c047___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=4f33c047& */ 49);
/* harmony import */ var _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js& */ 51);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _details_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.vue?vue&type=style&index=0&lang=less& */ 53);
/* harmony import */ var _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _details_vue_vue_type_template_id_4f33c047___WEBPACK_IMPORTED_MODULE_0__["render"],
  _details_vue_vue_type_template_id_4f33c047___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "git/Harding-Library-Smart-home/Smart-home/pages/details/details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/*!*************************************************************************************************************!*\
  !*** D:/git/Harding-Library-Smart-home/Smart-home/pages/details/details.vue?vue&type=template&id=4f33c047& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_template_id_4f33c047___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./details.vue?vue&type=template&id=4f33c047& */ 50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_template_id_4f33c047___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_template_id_4f33c047___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 50:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git/Harding-Library-Smart-home/Smart-home/pages/details/details.vue?vue&type=template&id=4f33c047& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 51:
/*!*******************************************************************************************************!*\
  !*** D:/git/Harding-Library-Smart-home/Smart-home/pages/details/details.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./details.vue?vue&type=script&lang=js& */ 52);
/* harmony import */ var _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 52:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git/Harding-Library-Smart-home/Smart-home/pages/details/details.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniCountdown = function uniCountdown() {return __webpack_require__.e(/*! import() | wxcomponents/uni-countdown/uni-countdown */ "wxcomponents/uni-countdown/uni-countdown").then(__webpack_require__.bind(null, /*! @/wxcomponents/uni-countdown/uni-countdown.vue */ 142));};var _default =

























































































































































































































































{
  components: { uniCountdown: uniCountdown },
  data: function data() {
    return {
      dataList: [
      {
        "id": 0,
        "title": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
        "smallPrice": 115,
        "bigPrice": 156,
        "freight": "免运费",
        "count": 1,
        "toBuy": 100,
        "sales": 100,
        "toFight": 118,
        "fightPrice": 100,
        "AlonePrice": 100,
        "stock": 2329,
        "status": false,
        "description": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
        "imgSrc": [
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"],

        "offerList": [
        {
          "img": "../../static/images/icon-1.png",
          "text": "10元店铺优惠券" },
        {
          "img": "../../static/images/icon-1.png",
          "text": "10元店铺优惠券" }],


        "refundServiceList": [
        {
          "name": "急速退款",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "全场包邮",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "7天无理由哦",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "48小时发货",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "假一赔十",
          "text": "拼单成功6小时内，待发货状态下" }],


        "singleList": [
        {
          "remainingTime": 86400000,
          "username": "Lddss tom",
          "avatar": "../../static/home/assemble-1.jpeg",
          "num": 1 },
        {
          "remainingTime": 86400000,
          "username": "Lddss sss",
          "avatar": "../../static/home/assemble-1.jpeg",
          "num": 2 },
        {
          "remainingTime": 86400000,
          "username": "dddd tom",
          "avatar": "../../static/home/assemble-1.jpeg",
          "num": 1 }],


        "reviewDetail": [
        {
          "username": "Losres sfsdd",
          "avatar": "../../static/home/assemble-1.jpeg",
          "reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
          "reviewTag": [
          {
            "type": 0,
            "text": "便宜",
            "count": 126 },

          {
            "type": 1,
            "text": "质量好",
            "count": 126 },

          {
            "type": 2,
            "text": "软硬度好",
            "count": 126 },

          {
            "type": 3,
            "text": "服务态度好",
            "count": 126 },

          {
            "type": 4,
            "text": "枕着舒服",
            "count": 126 }] },


        {
          "username": "Losres sfsdd",
          "avatar": "../../static/home/assemble-1.jpeg",
          "reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
          "reviewImg": [
          "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
          "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
          "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"],

          "reviewTag": [
          {
            "type": 0,
            "text": "便宜",
            "count": 126 },

          {
            "type": 1,
            "text": "质量好",
            "count": 126 },

          {
            "type": 2,
            "text": "软硬度好",
            "count": 126 },

          {
            "type": 3,
            "text": "服务态度好",
            "count": 126 },

          {
            "type": 4,
            "text": "枕着舒服",
            "count": 126 }] }],




        "reviewTag": [
        {
          "type": 0,
          "text": "便宜",
          "count": 126 },

        {
          "type": 1,
          "text": "质量好",
          "count": 126 },

        {
          "type": 2,
          "text": "软硬度好",
          "count": 126 },

        {
          "type": 3,
          "text": "服务态度好",
          "count": 126 },

        {
          "type": 4,
          "text": "枕着舒服",
          "count": 126 }],


        "goodsDetailList": [
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"],

        "detailList": [
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"],

        "specificationList": [{
          "title": "尺码",
          "specification": [{
            "name": "60cm*40cm" },
          {
            "name": "30cm*20cm" }] },

        {
          "title": "颜色",
          "specification": [{
            "name": "白色" },
          {
            "name": "黑丝" },
          {
            "name": "绿色" }] }] },


      {
        "id": 1,
        "title": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
        "smallPrice": 115,
        "bigPrice": 156,
        "freight": "免运费",
        "count": 1,
        "toBuy": 100,
        "sales": 100,
        "toFight": 118,
        "fightPrice": 100,
        "AlonePrice": 100,
        "stock": 2329,
        "status": false,
        "description": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
        "imgSrc": [
        "https://img.alicdn.com/tps/i4/TB1QtfYN3HqK1RjSZJnSuvNLpXa.jpg_250x250Q90.jpg",
        "https://img.alicdn.com/imgextra/i3/883737303/O1CN01IoENMZ23op0c1gloK_!!883737303.jpg_250x250Q90.jpg",
        "https://img.alicdn.com/tps/i4/TB1DmirdB1D3KVjSZFySuvuFpXa.jpg_250x250Q90.jpg"],

        "offerList": [
        {
          "img": "../../static/images/icon-1.png",
          "text": "10元店铺优惠券" },
        {
          "img": "../../static/images/icon-1.png",
          "text": "10元店铺优惠券" }],


        "refundServiceList": [
        {
          "name": "急速退款",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "全场包邮",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "7天无理由哦",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "48小时发货",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "假一赔十",
          "text": "拼单成功6小时内，待发货状态下" }],


        "singleList": [
        {
          "remainingTime": 86400000,
          "username": "Lddss tom",
          "avatar": "../../static/home/assemble-1.jpeg",
          "num": 1 },
        {
          "remainingTime": 86400000,
          "username": "Lddss sss",
          "avatar": "../../static/home/assemble-1.jpeg",
          "num": 2 },
        {
          "remainingTime": 86400000,
          "username": "dddd tom",
          "avatar": "../../static/home/assemble-1.jpeg",
          "num": 1 }],


        "reviewDetail": [
        {
          "username": "Losres sfsdd",
          "avatar": "../../static/home/assemble-1.jpeg",
          "reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
          "reviewTag": [
          {
            "type": 0,
            "text": "便宜",
            "count": 126 },

          {
            "type": 1,
            "text": "质量好",
            "count": 126 },

          {
            "type": 2,
            "text": "软硬度好",
            "count": 126 },

          {
            "type": 3,
            "text": "服务态度好",
            "count": 126 },

          {
            "type": 4,
            "text": "枕着舒服",
            "count": 126 }] },


        {
          "username": "Losres sfsdd",
          "avatar": "../../static/home/assemble-1.jpeg",
          "reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
          "reviewImg": [
          "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
          "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
          "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"],

          "reviewTag": [
          {
            "type": 0,
            "text": "便宜",
            "count": 126 },

          {
            "type": 1,
            "text": "质量好",
            "count": 126 },

          {
            "type": 2,
            "text": "软硬度好",
            "count": 126 },

          {
            "type": 3,
            "text": "服务态度好",
            "count": 126 },

          {
            "type": 4,
            "text": "枕着舒服",
            "count": 126 }] }],




        "reviewTag": [
        {
          "type": 0,
          "text": "便宜",
          "count": 126 },

        {
          "type": 1,
          "text": "质量好",
          "count": 126 },

        {
          "type": 2,
          "text": "软硬度好",
          "count": 126 },

        {
          "type": 3,
          "text": "服务态度好",
          "count": 126 },

        {
          "type": 4,
          "text": "枕着舒服",
          "count": 126 }],


        "goodsDetailList": [
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"],

        "detailList": [
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"],

        "specificationList": [{
          "title": "尺码",
          "specification": [{
            "name": "60cm*40cm" },
          {
            "name": "30cm*20cm" }] },

        {
          "title": "颜色",
          "specification": [{
            "name": "白色" },
          {
            "name": "黑丝" },
          {
            "name": "绿色" }] }] },


      {
        "id": 2,
        "title": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
        "smallPrice": 115,
        "bigPrice": 156,
        "freight": "免运费",
        "count": 1,
        "toBuy": 100,
        "sales": 100,
        "toFight": 118,
        "fightPrice": 100,
        "AlonePrice": 100,
        "stock": 2329,
        "status": false,
        "description": "款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm款正品外胎林/煊赫乳胶转/泰国正品波浪按摩枕60*49cm泰国正品波浪按摩枕60*49cm",
        "imgSrc": [
        "https://img.alicdn.com/bao/uploaded/bao/upload/TB15jYnheH2gK0jSZJnXXaT1FXa.png_400x400q60.jpg",
        "https://img.alicdn.com/bao/uploaded/bao/upload/TB1shYWnW61gK0jSZFlXXXDKFXa.png_400x400q60.jpg",
        "https://img.alicdn.com/bao/uploaded/bao/upload/TB1NKDkha67gK0jSZFHXXa9jVXa.png_400x400q60.jpg"],

        "offerList": [
        {
          "img": "../../static/images/icon-1.png",
          "text": "10元店铺优惠券" },
        {
          "img": "../../static/images/icon-1.png",
          "text": "10元店铺优惠券" }],


        "refundServiceList": [
        {
          "name": "急速退款",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "全场包邮",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "7天无理由哦",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "48小时发货",
          "text": "拼单成功6小时内，待发货状态下" },
        {
          "name": "假一赔十",
          "text": "拼单成功6小时内，待发货状态下" }],


        "singleList": [
        {
          "remainingTime": 86400000,
          "username": "Lddss tom",
          "avatar": "../../static/home/assemble-1.jpeg",
          "num": 1 },
        {
          "remainingTime": 86400000,
          "username": "Lddss sss",
          "avatar": "../../static/home/assemble-1.jpeg",
          "num": 2 },
        {
          "remainingTime": 86400000,
          "username": "dddd tom",
          "avatar": "../../static/home/assemble-1.jpeg",
          "num": 1 }],


        "reviewDetail": [
        {
          "username": "Losres sfsdd",
          "avatar": "../../static/home/assemble-1.jpeg",
          "reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
          "reviewTag": [
          {
            "type": 0,
            "text": "便宜",
            "count": 126 },

          {
            "type": 1,
            "text": "质量好",
            "count": 126 },

          {
            "type": 2,
            "text": "软硬度好",
            "count": 126 },

          {
            "type": 3,
            "text": "服务态度好",
            "count": 126 },

          {
            "type": 4,
            "text": "枕着舒服",
            "count": 126 }] },


        {
          "username": "Losres sfsdd",
          "avatar": "../../static/home/assemble-1.jpeg",
          "reviewText": "商品质量特别的好晚上睡觉用它-夜到天亮，睡得很踏实没有异味收到货，柔软度还是不错的，枕头本身的味道是很自然的味道。挺好的，有香味，也不贵。枕头买回来枕了两天发现很舒服而且没有味道快递也很快包装的也很好不错告诉包装精美乳胶枕头摸起来软软的，但枕起来又超级有弹性。值得回购呢",
          "reviewImg": [
          "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
          "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
          "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"],

          "reviewTag": [
          {
            "type": 0,
            "text": "便宜",
            "count": 126 },

          {
            "type": 1,
            "text": "质量好",
            "count": 126 },

          {
            "type": 2,
            "text": "软硬度好",
            "count": 126 },

          {
            "type": 3,
            "text": "服务态度好",
            "count": 126 },

          {
            "type": 4,
            "text": "枕着舒服",
            "count": 126 }] }],




        "reviewTag": [
        {
          "type": 0,
          "text": "便宜",
          "count": 126 },

        {
          "type": 1,
          "text": "质量好",
          "count": 126 },

        {
          "type": 2,
          "text": "软硬度好",
          "count": 126 },

        {
          "type": 3,
          "text": "服务态度好",
          "count": 126 },

        {
          "type": 4,
          "text": "枕着舒服",
          "count": 126 }],


        "goodsDetailList": [
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"],

        "detailList": [
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i4/2206483534228/O1CN01TYNFzu1h6T8WV8Lz6_!!0-item_pic.jpg",
        "https://gw.alicdn.com/bao/uploaded/i1/2112833578/O1CN01GuO7ti1cIlck2lJRt_!!2-item_pic.png",
        "https://gw.alicdn.com/bao/uploaded/i4/2086953701/O1CN01ceqmmJ1dD6PZoyemf_!!0-item_pic.jpg"],

        "specificationList": [{
          "title": "尺码",
          "specification": [{
            "name": "60cm*40cm" },
          {
            "name": "30cm*20cm" }] },

        {
          "title": "颜色",
          "specification": [{
            "name": "白色" },
          {
            "name": "黑丝" },
          {
            "name": "绿色" }] }] }],




      detailData: {},
      timeArr: [],
      currentIndex: 0,
      tagCurrentIndex: 0,
      isShowPopup: false,
      isShowPopupReturn: false,
      isCollection: false,
      specificationCurrentIndex0: 0,
      specificationCurrentIndex1: 0,
      btnType: '',
      countText: 1,
      specification: [], //存放被选中的值
      goodsSize: '',
      goodsColor: '',
      totalCount: 0 };

  },
  onLoad: function onLoad(options) {var _this = this;
    this.id = options.id;
    this.dataList.forEach(function (item) {
      if (item.id == options.id) {
        _this.detailData = item;
      }
    });
    this.detailData.singleList.forEach(function (item, index) {
      var time = item.remainingTime;
      var hours = _this._toDouble(parseInt(time / 3600000)); //计算小时
      var minutes = _this._toDouble(parseInt((time - hours * 3600000) / 60000)); //计算分
      var seconds = _this._toDouble(parseInt((time - hours * 3600000 - minutes * 60000) / 1000)); //计算秒
      item.hours = hours;
      item.minutes = minutes;
      item.seconds = seconds;
    });
    this.totalCount = this._getTotalNum();
  },
  onShow: function onShow() {var _this2 = this;
    var collectArr = uni.getStorageSync('collectArr') || [];
    this.isCollection = collectArr.some(function (item) {return item.id == _this2.id;});
  },
  methods: {
    // 轮播图动画改变时
    onChange: function onChange(ev) {
      this.currentIndex = ev.detail.current;
    },
    // 点击返回icon
    onBack: function onBack() {
      uni.navigateBack({
        animationDuration: 100 });

    },
    // 点击购物车icon
    onCart: function onCart() {
      uni.switchTab({
        url: '/pages/cart/cart' });

    },
    // 点击预览轮播图片
    onPreviewBannerImage: function onPreviewBannerImage(index) {
      uni.previewImage({
        urls: this.detailData.imgSrc,
        current: index });

    },
    // 点击预览评价详情图片
    onPreviewReviewDetailImage: function onPreviewReviewDetailImage(index) {
      uni.previewImage({
        urls: this.detailData.reviewDetail[index].reviewImg,
        current: index });

    },
    // 点击预览商品详情图片
    onPreviewGoodsDetailImage: function onPreviewGoodsDetailImage(index) {
      uni.previewImage({
        urls: this.detailData.detailList,
        current: index });

    },
    // 点击预览详情图片
    onPreviewDetailImage: function onPreviewDetailImage(index) {
      uni.previewImage({
        urls: this.detailData.detailList,
        current: index });

    },
    // 点击优惠券跳转优惠劵界面
    onOffer: function onOffer() {
      uni.navigateTo({
        url: '/pages/coupon/coupon' });

    },
    // 点击七天无理由退款
    onReturn: function onReturn() {
      this.isShowPopupReturn = true;
    },
    // 退货关闭按钮
    onCloseReturn: function onCloseReturn() {
      this.isShowPopupReturn = false;
    },
    // 点击查看更多评价 跳转详情页面
    onReview: function onReview(index) {
      // 判断传过来的变量是否是一个数字
      if (typeof index == "number") {
        this.tagCurrentIndex = index;
      }
      uni.navigateTo({
        url: '/pages/review/review?index=' + index + '&id=' + this.id });

    },
    // 跳转首页icon
    goToHome: function goToHome() {
      uni.switchTab({
        url: '/pages/home/home' });

    },
    // 点击收藏icon
    onCollection: function onCollection() {
      var collectArr = uni.getStorageSync('collectArr') || [];
      var index = this._isHasOne(this.id, collectArr);
      if (this.isCollection) {
        collectArr.splice(index, 1);
      } else {
        collectArr.push({
          id: this.id });

      }
      uni.setStorageSync('collectArr', collectArr);
      this.isCollection = !this.isCollection;
    },
    // 点击客服icon
    onCustomer: function onCustomer() {
      console.log('客服');
    },
    // 点击去拼单  弹出遮罩层
    onSingle: function onSingle(type) {
      this.isShowPopup = true;
      this.btnType = type;
      this.goodsSize = this.detailData.specificationList[0].specification[0].name;
      this.goodsColor = this.detailData.specificationList[1].specification[0].name;
    },
    // 发起拼单
    onStartFight: function onStartFight(type) {
      this.isShowPopup = true;
      this.btnType = type;
      this.goodsSize = this.detailData.specificationList[0].specification[0].name;
      this.goodsColor = this.detailData.specificationList[1].specification[0].name;
    },
    // 单独购买
    onAloneShop: function onAloneShop(type) {
      this.isShowPopup = true;
      this.btnType = type;
      this.goodsSize = this.detailData.specificationList[0].specification[0].name;
      this.goodsColor = this.detailData.specificationList[1].specification[0].name;
    },
    // 点击关闭
    onClose: function onClose() {
      this.isShowPopup = false;
    },
    // 点击样式选择，尺码
    onSpecification1: function onSpecification1(index2) {
      this.specificationCurrentIndex0 = index2;
      this.goodsSize = this.detailData.specificationList[0].specification[index2].name;
    },
    // 点击样式选择,颜色
    onSpecification2: function onSpecification2(index2) {
      this.specificationCurrentIndex1 = index2;
      this.goodsColor = this.detailData.specificationList[1].specification[index2].name;
    },
    // 点击确定将选择的产品参数存起来跳转到订单页面
    onSure: function onSure() {
      // 1发起拼单，2单独购买 3去拼单
      if (this.btnType == 1 || 3) {
        var obj = {
          id: this.detailData.id,
          title: this.detailData.title,
          price: this.detailData.AlonePrice,
          img: this.detailData.imgSrc[0],
          size: this.goodsSize,
          color: this.goodsColor,
          count: this.countText };

        var arr = [];
        arr.push(obj);
        uni.navigateTo({
          url: "/pages/confirmorder/confirmorder?arr=" + JSON.stringify(arr) });

      } else if (this.btnType == 2) {
        var _obj = {
          id: this.detailData.id,
          title: this.detailData.title,
          price: this.detailData.AlonePrice,
          img: this.detailData.imgSrc[0],
          size: this.goodsSize,
          color: this.goodsColor };

        this._addToCart(_obj, this.countText);
        uni.showToast({
          title: '加入购物车成功',
          duration: 2000,
          icon: "none" });

      }
    },
    // 加按钮
    onAdd: function onAdd() {
      this.countText++;
    },
    // 减按钮
    onCut: function onCut() {
      this.countText--;
      if (this.countText < 1) {
        this.countText = 1;
      }
    },
    //1.往购物车里面添加商品
    _addToCart: function _addToCart(item, count) {
      var cartData = this._getDataFromStorage();
      var index = this._isHasOne(item.id, cartData);
      if (index == -1) {
        item.count = count;
        item.status = true;
        cartData.push(item);
      } else {
        //如果不是-1说明当前商品在购物车里面存在:只需要更改数量，将原来的加上新传过来的
        cartData[index].count += count;
      }
      wx.setStorageSync('cart', cartData);
    },
    //2.拿购物车的数据:用参数来区分是拿所有商品还是只拿选中商品
    _getDataFromStorage: function _getDataFromStorage(flag) {
      var cartData = wx.getStorageSync('cart') || [];
      var newArr = [];
      if (flag) {
        for (var i = 0; i < cartData.length; i++) {
          if (cartData[i].status) {
            newArr.push(cartData[i]);
          }
        }
        return newArr;
      } else {
        return cartData;
      }
    },
    //3.查找在购物车中是否存在当前添加的商品
    _isHasOne: function _isHasOne(id, arr) {
      // 假设没有该商品，该数组中没有这个id，下标为-1
      var index = -1;
      for (var i = 0; i < arr.length; i++) {
        if (id == arr[i].id) {
          index = i;
          break;
        }
      }
      return index;
    },
    //4.求所有的商品总数
    _getTotalNum: function _getTotalNum() {
      var cartData = this._getDataFromStorage();
      var total = 0;
      cartData.forEach(function (item) {
        total += item.count;
      });
      return total;
    },
    // 时间 + 0
    _toDouble: function _toDouble(num) {
      if (num < 10) {
        return '0' + num;
      } else {
        return '' + num;
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 53:
/*!****************************************************************************************************************!*\
  !*** D:/git/Harding-Library-Smart-home/Smart-home/pages/details/details.vue?vue&type=style&index=0&lang=less& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../DownLoad/DownLoad_Browser/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./details.vue?vue&type=style&index=0&lang=less& */ 54);
/* harmony import */ var _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_DownLoad_DownLoad_Browser_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_details_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 54:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/git/Harding-Library-Smart-home/Smart-home/pages/details/details.vue?vue&type=style&index=0&lang=less& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[47,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/details/details.js.map