<template>
    <div class="main-contain">
        <v-demo :code="code.base">
            <div slot="desc">基础说明部分</div>
            <div class="buttonWrap">
                <v-button>Default</v-button>
                <v-button type="cancel">Cancel</v-button>  
                <v-button type="disable">Disable</v-button> 
                <v-button type="primary">Primary</v-button>  
                <v-button type="info">Info</v-button>             
                <v-button type="danger">Danger</v-button>
                <v-button type="warning">Warning</v-button>
                <v-button type="success">Success</v-button>
                <v-button type="error">Error</v-button>
            </div>
        </v-demo>

        <v-demo :code="code.size">
            <div slot="desc">size 传入尺寸数字</div>
            <div class="buttonWrap">
                <v-button type="primary" size="10">10 Size</v-button>
                <v-button type="primary">Default Size</v-button>
                <v-button type="primary" size="20">20 Size</v-button>
                <v-button type="primary" size="30">30 Size</v-button>
            </div>
        </v-demo>

        <v-demo :code="code.group">
            <div slot="desc">可以使用 '按钮组'，创造一组按钮</div>
            <v-group>
                <v-button type="primary">Primary</v-button>
                <v-button type="danger">Danger</v-button>
                <v-button type="warning">Warning</v-button>
            </v-group>
        </v-demo>
    </div>
</template>
<script>
import code from "@/codes/button";
export default {
    data() {
        return {
            code,
            click: code.click
        };
    }
};
</script>
<style lang="scss" scoped>
.buttonWrap {
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: -10px;
    button {
        margin-bottom: 10px;
    }
}
</style>
