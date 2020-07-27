<template>
  <div>
    <div >
      <ul class="circles">
        <li v-for="n in 10" :key="n"></li>
      </ul>
    </div>
    <!-- <div >{{time}}</div> -->
    <div >
      <div>
        <div >
        </div>
        <div >
          <!-- form -->
          <div class="login-wrap">
          
                <div>
                    <ui-form
                ref="loginForm"
                label-position="top"
                :rules="rules"
                :model="formLogin"
                size="default"
              >
                <ui-form-item prop="username">
                  <ui-input
                    type="text"
                    v-model="formLogin.username"
                    :placeholder="$t('views.system.login.form.placeholder.username')"
                  >
                    <i slot="prepend" class="fa fa-user-circle-o"></i>
                  </ui-input>
                </ui-form-item>
                <ui-form-item prop="password">
                  <ui-input
                    type="password"
                    v-model="formLogin.password"
                    :placeholder="$t('views.system.login.form.placeholder.password')"
                  >
                    <i slot="prepend" class="fa fa-keyboard-o"></i>
                  </ui-input>
                </ui-form-item>
                <!-- <ui-form-item prop="code">
                  <ui-input
                    type="text"
                    v-model="formLogin.code"
                    :placeholder="$t('views.system.login.form.placeholder.code')"
                  >
                    <template slot="append">
                    </template>
                  </ui-input>
                </ui-form-item> -->
                <ui-button
                  size="default"
                  @click="submit"
                  type="primary"
                  class="button-login"
                >{{ $t('views.system.login.form.button.login') }}</ui-button>
              </ui-form>
                </div>
              
           
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
    //   timeInterval: null,
    //   time: dayjs().format('HH:mm:ss'),
      // 表单
      formLogin: {
        username: 'admin',
        password: 'admin',
        // code: 'v9am'
      }
    }
  },
  computed: {
    // 校验
    rules() {
      return {
        username: [
          {
            required: true,
            message: this.$t('public.rules.required', {
              name: this.$t('views.system.login.form.label.username')
            }),
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: this.$t('public.rules.required', {
              name: this.$t('views.system.login.form.label.password')
            }),
            trigger: 'blur'
          }
        ],
        // code: [
        //   {
        //     required: true,
        //     message: this.$t('public.rules.required', {
        //       name: this.$t('views.system.login.form.label.code')
        //     }),
        //     trigger: 'blur'
        //   }
        // ]
      }
    }
  },
  mounted() {
    this.timeInterval = setInterval(() => {
      this.refreshTime()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timeInterval)
  },
  methods: {
    ...mapActions('vxadmin/account', ['login']),
    // refreshTime() {
    //   this.time = dayjs().format('HH:mm:ss')
    // },
    /**
     * @description 接收选择一个用户快速登录的事件
     * @param {Object} user 用户信息
     */
    handleUserBtnClick(user) {
      this.formLogin.username = user.username
      this.formLogin.password = user.password
      this.submit()
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
            this.$router.replace(this.$route.query.redirect || '/')
          })
        } else {
          // 登录表单校验失败
          this.$message.error(this.$t('public.message.error.form.invalid'))
        }
      })
    }
  }
}
</script>
<style scoped>
.login-wrap{
    width: 60%;
    margin: 0 auto;
    height: 500px;
}
</style>