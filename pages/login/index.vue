<template>
  <view class="login-container">
    <view class="logo">
      <image src="/static/logo.png" mode="widthFix" style="width: 120rpx; height: 120rpx; margin: 40rpx auto;" />
    </view>
    <u-form :model="form" ref="uForm" label-width="0">
      <u-form-item prop="mobile">
        <u-input v-model="form.mobile" placeholder="请输入手机号" type="number" maxlength="11" clearable />
      </u-form-item>
      <u-form-item prop="code">
        <u-input v-model="form.code" placeholder="请输入验证码" type="number" maxlength="6" clearable>
          <template #suffix>
            <u-code ref="uCode" @change="codeChange" @end="codeEnd" @start="codeStart" @input="codeInput" :seconds="60" @send="sendCode" text="发送验证码" />
          </template>
        </u-input>
      </u-form-item>
    </u-form>
    <u-button type="primary" @click="submit">{{ isLogin ? '登录' : '注册' }}</u-button>
    <u-button type="success" open-type="getUserInfo" @click="wechatLogin" icon="weixin-fill" style="margin-top: 20rpx;">微信一键登录</u-button>
    <view class="switch-type" @click="toggleType">
      <text>{{ isLogin ? '没有账号？去注册' : '已有账号？去登录' }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  mobile: '',
  code: ''
});
const isLogin = ref(true);
const uForm = ref(null);

function toggleType() {
  isLogin.value = !isLogin.value;
}

function submit() {
  if (!form.value.mobile) {
    uni.$u.toast('请输入手机号');
    return;
  }
  if (!form.value.code) {
    uni.$u.toast('请输入验证码');
    return;
  }
  // TODO: 登录/注册逻辑
  uni.$u.toast(isLogin.value ? '登录成功' : '注册成功');
}

function sendCode() {
  if (!form.value.mobile) {
    uni.$u.toast('请输入手机号');
    return false;
  }
  // TODO: 发送验证码逻辑
  uni.$u.toast('验证码已发送');
  return true;
}

function wechatLogin() {
  // TODO: 微信登录逻辑
  uni.$u.toast('微信登录');
}
</script>

<style lang="scss" scoped>
.login-container {
  padding: 40rpx 32rpx;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .switch-type {
    text-align: center;
    margin-top: 32rpx;
    color: #2979ff;
    font-size: 28rpx;
    cursor: pointer;
  }
}
</style> 