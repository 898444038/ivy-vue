<template>
  <div>
    <vs-input
        v-validate="'required|email|min:3'"
        data-vv-validate-on="blur"
        name="email"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="邮箱"
        v-model="email"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('email') }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:6|max:20'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        label-placeholder="密码"
        v-model="password"
        class="w-full mt-6" style="margin-top: 36px!important;"/>
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <div class="flex flex-wrap justify-between my-5">
        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">记住密码</vs-checkbox>
        <!-- <router-link to="/pages/forgot-password">忘记密码?</router-link> -->
    </div>
    <div class="flex flex-wrap justify-between mb-3">
      <!-- <vs-button  type="border" @click="registerUser">注册</vs-button> -->
      <vs-button  type="border" @click="visitorUser">游客</vs-button>
      <vs-button :disabled="!validateForm" @click="loginJWT">登录</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '', //898444038@qq.com
      password: '', //admin@12345
      checkbox_remember_me: true
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.email !== '' && this.password !== ''
    }
  },
  watch:{
    
  },
  created () {
    
  },
  methods: {
    checkLogin () {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: '提示',
          text: '您已经登录!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        return false
      }
      return true
    },
    loginJWT () {

      if (!this.checkLogin()) return

      // Loading
      this.$vs.loading()

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password
        }
      }

      this.$store.dispatch('auth/loginJWT', payload)
        .then((response) => {
          //console.log('userRole', response.data.data.userData.userRole)
          //this.$acl.change(response.data.data.userData.userRole)
          this.$store.dispatch('updateUserRole', {aclChangeRole: this.$acl.change, userRole: response.data.data.userData.userRole})
          this.$vs.loading.close() 
        }).catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            // title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
    },
    registerUser () {
      this.$vs.notify({
        text: '暂不提供账号注册',
        iconPack: 'feather',
        icon: 'icon-alert-circle',
        color: 'danger'
      })
      // if (!this.checkLogin()) return
      // this.$router.push('/pages/register').catch(() => {})
    },
    visitorUser () {
      //this.$vs.loading()
      this.$router.push(this.$router.currentRoute.query.to || '/')
    }
  }
}

</script>

<style scoped>

</style>