<template>
    <div class="login">
        <div class="login-box">
            <div class="login-title">
                <p>{{lang.title}}</p>
                <p>{{lang.desc}}</p>
            </div>
            <div class="login-form flex">
                <div class="img-box flex align-center">
                    <img src="@/assets/img/login_logo.png" alt="">
                </div>
                <div class="form flex align-center justify-center">
                    <el-form :model="loginFrom" ref="ruleForm">
                        <el-input class="mt20" prefix-icon="el-icon-user" type="text" v-model="loginFrom.username" :placeholder="lang.user"></el-input>
                        <el-input class="mt20" prefix-icon="el-icon-lock" type="password" v-model="loginFrom.password" :placeholder="lang.pwd"></el-input>
                        <el-button class="mt20 w_100" type="primary" :loading="loading" @click="submitForm()">{{lang.btn}}</el-button>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data () {
        return {
            loginFrom: {
                username: '',
                password: ''
            },
            loading: false
        };
    },
    methods: {
        submitForm () {
            if(!this.loginFrom.username) {
                this.$message.warning('请输入用户名');
                return false;
            }
            if(!this.loginFrom.password) {
                this.$message.warning('请输入密码');
                return false;
            }
            this.loading = true;
            this.$http.login({ data: this.loginFrom }).then(res => {
                const { data, msg, code } = res;
                if(code === 0) {
                    this.$store.commit('SET_TOKEN', data);
                    this.$router.replace('/');
                } else {
                    this.$message.error(msg);
                }
                this.loading = false;
            }).catch(() => {
                this.loading = false;
            });
        }
    },
    computed: {
        ...mapGetters({
            lang: 'language'
        })
    }
};
</script>

<style lang="scss" scoped>
.login {
    position: absolute;
    width: 100%;
    height: 100%;
    background: bg-img("login_bg.jpg") no-repeat;
    background-size: 100% 100%;
    .img-box {
        width: 60%;
        padding: 0 20px;
        img {
            width: 100%;
            display: block;
        }
    }
    .form {
        width: 40%;
        padding: 0 40px;
    }
    .login-box {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        .login-title {
            text-align: center;
            color: #fff;
            padding-bottom: 30px;
            & > p:nth-child(1) {
                font-size: 30px;
            }
            & > p:nth-child(2) {
                font-size: 14px;
                margin-top: 10px;
            }
        }
        .login-form {
            width: 800px;
            height: 340px;
            background-color: #fff;
            box-shadow: 0 0 4px 0 #ccc;
        }
    }
}
</style>
