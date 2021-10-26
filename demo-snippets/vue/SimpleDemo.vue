<template>
    <Page>
        <ActionBar>
            <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label text="Simple Algolia Demo" />
        </ActionBar>

        <StackLayout class="page">
            <Label text="This is simple dmeo." />
        </StackLayout>
    </Page>
</template>

<script>

import { Algolia } from "@nativescript-community/algolia"

export default {
    mounted() {
        console.log("MOUNTED")
        const client = new Algolia('LZSO57R00X', '10dda1e71df2426f29304b450d6cc372');
        // const client = new Algolia('IAVXMQ0USB', 'c75ce70ad6ccd704f6f3346f52062328');
        console.log("CLIENT", client)
    } 
};
</script>

<style lang="scss" scoped>
.page Label {
    font-size: 35;
    horizontal-alignment: center;
    vertical-alignment: center;
    color: #ffffff;
    text-transform: uppercase;
}
</style>