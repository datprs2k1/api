"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_test_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/test/Add.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/test/Add.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      test: {
        name: "",
        type: null,
        class_id: null,
        subj_id: null,
        lesson_id: null
      },
      subject: [],
      lesson: [],
      errors: {},
      types: [{
        id: 1,
        name: "Ôn tập"
      }, {
        id: 2,
        name: "Kiểm tra"
      }]
    };
  },
  created: function created() {
    this.getCLASSES();
    this.getSubjects();
    this.getLessons();

    if (this.$route.params.class_id && this.$route.params.subj_id && this.$route.params.lesson_id) {
      this.test.class_id = this.$route.params.class_id;
      this.test.subj_id = this.$route.params.subj_id;
      this.test.lesson_id = this.$route.params.lesson_id;
    }

    this.getSubject();
    this.getLesson();
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("CLASS", ["getCLASSES"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("subject", ["getSubjects"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("lesson", ["getLessons"])), {}, {
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.$store.dispatch("test/add", _this.test);

              case 3:
                _this.$swal({
                  title: "Thành công",
                  text: "Thêm khoa thành công.",
                  icon: "success",
                  showConfirmButton: false,
                  position: "top-end",
                  timer: 1000,
                  width: 360
                });

                _this.test = {
                  name: "",
                  type: null,
                  class_id: null,
                  subj_id: null,
                  lesson_id: null
                };
                _this.errors = {
                  name: null,
                  type: null,
                  class_id: null,
                  subj_id: null,
                  lesson_id: null
                };
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                _this.errors = _context.t0.response.data.errors;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    getSubject: function getSubject() {
      var _this2 = this;

      this.subject = this.subjects.filter(function (subject) {
        return subject.class_id == _this2.test.class_id;
      });
    },
    getLesson: function getLesson() {
      var _this3 = this;

      this.lesson = this.lessons.filter(function (lesson) {
        return lesson.subj_id == _this3.test.subj_id;
      });
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("CLASS", ["CLASSES"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("subject", ["subjects"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("lesson", ["lessons"]))
});

/***/ }),

/***/ "./resources/js/pages/admin/test/Add.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/admin/test/Add.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_474a7826___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=474a7826& */ "./resources/js/pages/admin/test/Add.vue?vue&type=template&id=474a7826&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/test/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_474a7826___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_474a7826___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/test/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/test/Add.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/admin/test/Add.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/test/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/test/Add.vue?vue&type=template&id=474a7826&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/admin/test/Add.vue?vue&type=template&id=474a7826& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_474a7826___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_474a7826___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_474a7826___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=474a7826& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/test/Add.vue?vue&type=template&id=474a7826&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/test/Add.vue?vue&type=template&id=474a7826&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/test/Add.vue?vue&type=template&id=474a7826& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "content-wrapper" },
      [
        _c("Breadcrumbs"),
        _vm._v(" "),
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container-fluid" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "card card-primary" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      attrs: { enctype: "multipart/form-data" },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.submit()
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Tên bài kiểm tra"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.test.name,
                                expression: "test.name",
                              },
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors.name },
                            attrs: {
                              type: "text",
                              id: "name",
                              placeholder: "Nhập tên lớp.",
                              name: "name",
                            },
                            domProps: { value: _vm.test.name },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.test, "name", $event.target.value)
                              },
                            },
                          }),
                          _vm._v(" "),
                          _vm.errors.name
                            ? _c(
                                "span",
                                {
                                  staticClass: "error invalid-feedback",
                                  attrs: { id: "exampleInputEmail1-error" },
                                },
                                [_vm._v(_vm._s(_vm.errors.name[0]))]
                              )
                            : _vm._e(),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Loại"),
                            ]),
                            _vm._v(" "),
                            _c("b-form-select", {
                              class: { "is-invalid": _vm.errors.type },
                              attrs: {
                                options: _vm.types,
                                "text-field": "name",
                                "value-field": "id",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "first",
                                  fn: function () {
                                    return [
                                      _c(
                                        "b-form-select-option",
                                        {
                                          attrs: { value: null, disabled: "" },
                                        },
                                        [_vm._v("-- Chọn loại --")]
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ]),
                              model: {
                                value: _vm.test.type,
                                callback: function ($$v) {
                                  _vm.$set(_vm.test, "type", $$v)
                                },
                                expression: "test.type",
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.type
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "error invalid-feedback",
                                    attrs: { id: "exampleInputEmail1-error" },
                                  },
                                  [_vm._v(_vm._s(_vm.errors.type[0]))]
                                )
                              : _vm._e(),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "class" } }, [
                              _vm._v("Tên lớp"),
                            ]),
                            _vm._v(" "),
                            _c("b-form-select", {
                              class: { "is-invalid": _vm.errors.class_id },
                              attrs: {
                                options: _vm.CLASSES,
                                "text-field": "name",
                                "value-field": "id",
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.getSubject()
                                },
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "first",
                                  fn: function () {
                                    return [
                                      _c(
                                        "b-form-select-option",
                                        {
                                          attrs: { value: null, disabled: "" },
                                        },
                                        [_vm._v("-- Chọn lớp --")]
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ]),
                              model: {
                                value: _vm.test.class_id,
                                callback: function ($$v) {
                                  _vm.$set(_vm.test, "class_id", $$v)
                                },
                                expression: "test.class_id",
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.class_id
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "error invalid-feedback",
                                    attrs: { id: "exampleInputEmail1-error" },
                                  },
                                  [_vm._v(_vm._s(_vm.errors.class_id[0]))]
                                )
                              : _vm._e(),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "class" } }, [
                              _vm._v("Tên môn học"),
                            ]),
                            _vm._v(" "),
                            _c("b-form-select", {
                              class: { "is-invalid": _vm.errors.subj_id },
                              attrs: {
                                options: _vm.subject,
                                "text-field": "name",
                                "value-field": "id",
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.getLesson()
                                },
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "first",
                                  fn: function () {
                                    return [
                                      _c(
                                        "b-form-select-option",
                                        {
                                          attrs: { value: null, disabled: "" },
                                        },
                                        [_vm._v("-- Chọn lớp --")]
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ]),
                              model: {
                                value: _vm.test.subj_id,
                                callback: function ($$v) {
                                  _vm.$set(_vm.test, "subj_id", $$v)
                                },
                                expression: "test.subj_id",
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.subj_id
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "error invalid-feedback",
                                    attrs: { id: "exampleInputEmail1-error" },
                                  },
                                  [_vm._v(_vm._s(_vm.errors.subj_id[0]))]
                                )
                              : _vm._e(),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "class" } }, [
                              _vm._v("Tên bài giảng"),
                            ]),
                            _vm._v(" "),
                            _c("b-form-select", {
                              class: { "is-invalid": _vm.errors.lesson_id },
                              attrs: {
                                options: _vm.lesson,
                                "text-field": "name",
                                "value-field": "id",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "first",
                                  fn: function () {
                                    return [
                                      _c(
                                        "b-form-select-option",
                                        {
                                          attrs: { value: null, disabled: "" },
                                        },
                                        [_vm._v("-- Chọn bài giảng --")]
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ]),
                              model: {
                                value: _vm.test.lesson_id,
                                callback: function ($$v) {
                                  _vm.$set(_vm.test, "lesson_id", $$v)
                                },
                                expression: "test.lesson_id",
                              },
                            }),
                            _vm._v(" "),
                            _vm.errors.lesson_id
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "error invalid-feedback",
                                    attrs: { id: "exampleInputEmail1-error" },
                                  },
                                  [_vm._v(_vm._s(_vm.errors.lesson_id[0]))]
                                )
                              : _vm._e(),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._m(1),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ],
      1
    ),
    _vm._v(" "),
    _c("aside", { staticClass: "control-sidebar control-sidebar-dark" }),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("\n                    Xác nhận\n                  ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);