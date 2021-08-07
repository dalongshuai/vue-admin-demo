<template>
    <div class="home">
        <div>
            <p class="colorTest">{{ count }}</p>
            <el-button @click="checkName">vuex测试</el-button>
        </div>
        <div>
            <el-button @click="testMoveEvent">事件监听</el-button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { ElemListen } from '@/utils';

export default {
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
        }
    },
    computed: {
        ...mapState({
            count: state => state.count
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
        color: $color_red;
    }
}
</style>
