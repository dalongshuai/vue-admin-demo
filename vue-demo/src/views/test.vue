<template>
    <div class="home">
        <div>
            <h4>{{this.language.title}}</h4>
        </div>
        <div>
            <el-button @click="testMoveEvent">事件监听</el-button>
        </div>
        <div>
            <el-select v-model="cut_lang" placeholder="请选择语言" @change="onChange">
                <el-option
                v-for="item in lang_list"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-button @click="loginout">退出登录</el-button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ElemListen, storage } from '@/utils';

const lang = storage.get('lang') || 'cn';

export default {
    data () {
        return {
            cut_lang: lang,
            lang_list: [
                {
                    label: '简体中文',
                    value: 'cn'
                },
                {
                    label: 'English',
                    value: 'en'
                }
            ]
        };
    },
    methods: {
        // vuex测试
        checkName () {
            this.$store.commit('ADD_COUNT');
        },
        // 事件监听
        testMoveEvent () {
            if(this.listen_1) {
                this.listen_1();
                return;
            }
            this.listen_1 = ElemListen(document.body, 'mousemove', () => {
                console.log(1111);
            });
        },
        // 语言切换
        onChange (val) {
            this.$store.commit('CHECK_LANGUAGE', val);
        },
        loginout () {
            this.$store.commit('LOGINOUT');
        }
    },
    computed: {
        ...mapGetters({
            language: 'language'
        })
    }
};
</script>

<style lang="scss" scoped>
.home {
    & > div {
        margin-bottom: 20px;
    }
    .colorTest {
        color: $ftc;
    }
}
</style>
