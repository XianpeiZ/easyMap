
<template>
  <div>
     
    <div class="outer_label">
    
      <img class="logo" height=150px width=150px  src="../assets/kanban.png" >
      <span class="slogon" >easyMap</span>

    </div>
     <el-form>
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName">
      <input type="password"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
      <!--<button class="login_btn el-button el-button--primary is-round" type="primary" round>登录</button>-->
      <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button>
      <div style="margin-top: 10px">
        <span style="color: #000099;" @click="login">注册</span><span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
    </div>
     </el-form>
  </div>
</template>
 
 
 
<script>
//  import { userLogin } from '../../api/api';
 import qs from 'qs'
  export default {
    data() {
      return {
        userName: '',
        password: '',
        isBtnLoading: false
      }
    },
    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
        this.userName = JSON.parse( localStorage.getItem('user')).userName;
        this.password = JSON.parse( localStorage.getItem('user')).password;
      }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      login() {
        if (!this.userName) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.password) {
          this.$message.error('请输入密码');
          return;
        }
        var that = this 
        var userName = that.userName
        var userPasswd = that.password

         this.$axios.post('/getLoginInf', qs.stringify({userName,userPasswd}
      )).then(function (response) {
        // console.log(response.data)
        // console.log(typeof(response.data))
        
        if(response.data){
          //  console.log("")
            that.$router.push({ name: 'maplist', params: { currentUser: userName}})
        }else{
          that.$message('用户名或密码错误')
          
        }
            
      // eslint-disable-next-line handle-callback-err
      }).catch(function (error) {
        that.$message('登录失败')
      })
 
      }
    }
  }
</script>
<style>
  .login_form {
    padding-top: 10%;
    padding-left: 30%;
    padding-right: 30%;
  }
  .qxs-ic_user {
    background: url("../assets/login/ic_user.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background: url("../assets/login/ic_password.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }
  .login_logo {
    height: 100%;
  }
  .login_btn {
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
    filter: brightness(1.4);
  }

.slogon{
  font-size:50px;
  color:#fff;
}
</style>