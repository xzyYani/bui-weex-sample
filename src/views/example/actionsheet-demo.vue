<template>
    <div>
        <bui-header
                title="上拉菜单(bui-actionsheet)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div class="center" style="padding:10px;">
            <bui-button type="warning" value="上拉菜单" @click="open()"></bui-button>
        </div>

        <!--自定义上拉菜单-->
        <bui-actionsheet
                :items="actionsheetItems"
                v-model="showAction"
                @itemClick="actionsheetItemClick"
                @btnClick="actionsheetBtnClick"
        ></bui-actionsheet>

    </div>

</template>

<style lang="scss" src="bui-weex/src/css/buiweex.scss"></style>


<script>
    export default {
        data: function () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                showAction: false,
                actionsheetItems: ['复制文字', '收藏动态']
            }
        },
        methods: {
            back () {
                this.$pop();
            },
            //打开上拉菜单
            open() {
                this.showAction = true;
            },
            actionsheetItemClick(item,index) {
                this.$toast(item+index)
                this.showAction = false;
            },
            actionsheetBtnClick() {
                this.showAction = false;
            }
        }
    }
</script>
<style>

</style>