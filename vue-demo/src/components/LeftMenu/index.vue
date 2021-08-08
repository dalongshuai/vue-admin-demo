<template>
    <aside class="leftMenu">
        <el-menu
        router
        :default-active="$route.path"
        :default-openeds="defaultOpends"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <template v-for="item in menuList">
                <el-submenu :index="item.path" :key="item.name" v-if="item.child">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item :index="elem.path" v-for="elem in item.child" :key="elem.path">{{elem.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item :index="item.path" v-else :key="item.name">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </aside>
</template>

<script>
export default {
    data: function () {
        return {
            menuList: [
                {
                    name: '一级菜单',
                    path: '/test',
                    child: [
                        {
                            name: '二级菜单',
                            path: '/test'
                        }
                    ]
                },
                {
                    name: '系统首页',
                    path: '/'
                }
            ],
            defaultOpends: ['/123']
        };
    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>
.leftMenu {
    width: 220px;
    flex-shrink: 0;
    background-color: $page--bg;
}
</style>
