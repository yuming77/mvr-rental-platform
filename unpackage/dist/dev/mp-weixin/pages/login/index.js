"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _component_u_input = common_vendor.resolveComponent("u-input");
  const _component_u_form_item = common_vendor.resolveComponent("u-form-item");
  const _component_u_code = common_vendor.resolveComponent("u-code");
  const _component_u_button = common_vendor.resolveComponent("u-button");
  (_component_u_input + _component_u_form_item + _component_u_code + _component_u_button)();
}
if (!Math) {
  common_vendor.unref(uForm)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(new UTSJSONObject({
  __name: "index",
  setup(__props) {
    const form = common_vendor.ref(new UTSJSONObject({
      mobile: "",
      code: ""
    }));
    const isLogin = common_vendor.ref(true);
    const uForm2 = common_vendor.ref(null);
    function toggleType() {
      isLogin.value = !isLogin.value;
    }
    function submit() {
      if (!form.value.mobile) {
        common_vendor.index.$u.toast("请输入手机号");
        return null;
      }
      if (!form.value.code) {
        common_vendor.index.$u.toast("请输入验证码");
        return null;
      }
      common_vendor.index.$u.toast(isLogin.value ? "登录成功" : "注册成功");
    }
    function sendCode() {
      if (!form.value.mobile) {
        common_vendor.index.$u.toast("请输入手机号");
        return false;
      }
      common_vendor.index.$u.toast("验证码已发送");
      return true;
    }
    function wechatLogin() {
      common_vendor.index.$u.toast("微信登录");
    }
    return (_ctx = null, _cache = null) => {
      const __returned__ = {
        a: common_assets._imports_0,
        b: common_vendor.o(($event = null) => {
          return form.value.mobile = $event;
        }),
        c: common_vendor.p({
          placeholder: "请输入手机号",
          type: "number",
          maxlength: "11",
          clearable: true,
          modelValue: form.value.mobile
        }),
        d: common_vendor.p({
          prop: "mobile"
        }),
        e: common_vendor.sr("uCode", "d08ef7d4-5,d08ef7d4-4"),
        f: common_vendor.o(_ctx.codeChange),
        g: common_vendor.o(_ctx.codeEnd),
        h: common_vendor.o(_ctx.codeStart),
        i: common_vendor.o(_ctx.codeInput),
        j: common_vendor.o(sendCode),
        k: common_vendor.p({
          seconds: 60,
          text: "发送验证码"
        }),
        l: common_vendor.o(($event = null) => {
          return form.value.code = $event;
        }),
        m: common_vendor.p({
          placeholder: "请输入验证码",
          type: "number",
          maxlength: "6",
          clearable: true,
          modelValue: form.value.code
        }),
        n: common_vendor.p({
          prop: "code"
        }),
        o: common_vendor.sr(uForm2, "d08ef7d4-0", {
          "k": "uForm"
        }),
        p: common_vendor.p({
          model: form.value,
          ["label-width"]: "0"
        }),
        q: common_vendor.t(isLogin.value ? "登录" : "注册"),
        r: common_vendor.o(submit),
        s: common_vendor.p({
          type: "primary"
        }),
        t: common_vendor.o(wechatLogin),
        v: common_vendor.p({
          type: "success",
          ["open-type"]: "getUserInfo",
          icon: "weixin-fill"
        }),
        w: common_vendor.t(isLogin.value ? "没有账号？去注册" : "已有账号？去登录"),
        x: common_vendor.o(toggleType),
        y: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
      };
      return __returned__;
    };
  }
}));
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d08ef7d4"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/index.js.map
