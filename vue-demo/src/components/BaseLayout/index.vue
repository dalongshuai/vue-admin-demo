<template>
    <div class="baseLayout">
        <top-head />
        <div class="main-content flex">
            <left-menu />
            <main class="page-main flex-1">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script>
import header from '@/components/Header';
import leftMenu from '@/components/LeftMenu';

export default {
    components: {
        'top-head': header,
        'left-menu': leftMenu
    }
};
</script>

<style lang="scss" scoped>
.baseLayout {
    height: 100%;
    padding-top: 50px;
    .main-content {
        height: 100%;
    }
}
</style>
