<template>
  <div>
    <div>
      <ul class="circles">
        <li v-for="n in 10" :key="n"></li>
      </ul>
    </div>
    <div class="login-title">
      <li>江南农村商业银行</li>
      <li>E同赢系统业务管理平台</li>
    </div>
    <!-- <div >{{time}}</div> -->
    <div>
      <div>
        <div></div>
        <div>
          <!-- form -->
          <div class="login-wrap">
            <div class="login-content">
              <ui-form
                ref="loginForm"
                label-position="top"
                :rules="rules"
                :model="formLogin"
                size="default"
              >
                <ui-form-item prop="username">
                  <span>用户名</span>
                  <ui-input type="text" v-model="formLogin.username" placeholder="请输入操作员ID"></ui-input>
                </ui-form-item>
                <ui-form-item prop="password">
                  <span>登陆密码</span>
                  <ui-input
                    type="password"
                    v-model="formLogin.password"
                    :placeholder="$t('views.system.login.form.placeholder.password')"
                  ></ui-input>
                </ui-form-item>
                <div class="login-btn">
                  <ui-button
                  size="default"
                  @click="submit"
                  type="primary"
                  class="button-login"
                >{{ $t('views.system.login.form.button.login') }}</ui-button>
                </div>
                
              </ui-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      //   timeInterval: null,
      //   time: dayjs().format('HH:mm:ss'),
      // 表单
      formLogin: {
        username: "admin",
        password: "admin"
        // code: 'v9am'
      }
    };
  },
  computed: {
    // 校验
    rules() {
      return {
        username: [
          {
            required: true,
            message: this.$t("public.rules.required", {
              name: this.$t("views.system.login.form.label.username")
            }),
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: this.$t("public.rules.required", {
              name: this.$t("views.system.login.form.label.password")
            }),
            trigger: "blur"
          }
        ]
        // code: [
        //   {
        //     required: true,
        //     message: this.$t('public.rules.required', {
        //       name: this.$t('views.system.login.form.label.code')
        //     }),
        //     trigger: 'blur'
        //   }
        // ]
      };
    }
  },
  mounted() {
    this.timeInterval = setInterval(() => {
      this.refreshTime();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timeInterval);
  },
  methods: {
    ...mapActions("vxadmin/account", ["login"]),
    // refreshTime() {
    //   this.time = dayjs().format('HH:mm:ss')
    // },
    /**
     * @description 接收选择一个用户快速登录的事件
     * @param {Object} user 用户信息
     */
    handleUserBtnClick(user) {
      this.formLogin.username = user.username;
      this.formLogin.password = user.password;
      this.submit();
    },
    /**
     * @description 提交表单
     */
    // 提交登录信息
    submit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 登录
          // 注意 这里的演示没有传验证码
          // 具体需要传递的数据请自行修改代码
          this.login({
            username: this.formLogin.username,
            password: this.formLogin.password
          }).then(() => {
            // 重定向对象不存在则返回顶层路径
            this.$router.replace(this.$route.query.redirect || "/");
          });
        } else {
          // 登录表单校验失败
          this.$message.error(this.$t("public.message.error.form.invalid"));
        }
      });
    }
  }
};
</script>
<style>
.login-wrap {
  width: 40%;
  height: 500px;
  margin: 0 auto;
  height: 500px;
}
.login-content {
  width: 100%;
  height: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
}
.login-wrap div form {
  padding-top: 80px;
}
.ui-form-item__content {
  display: -webkit-box;
}
.login-wrap div form span{
  display: block;
  width: 20%;
  margin-left: 30px;
}
.login-wrap div form div input {
  /* width: 80%;
  display: block; */
  float: right;
  width: 300px;
}
.login-title {
  text-align: center;
}
.login-title li:nth-child(1) {
  font-size: 36px;
  margin-top: 50px;
}
.login-title li:nth-child(2) {
  font-size: 32px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.login-btn{
  text-align: center;
}
</style>