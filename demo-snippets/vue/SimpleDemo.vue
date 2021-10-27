<template>
    <Page>
        <ActionBar>
            <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label text="Simple Algolia Demo" />
        </ActionBar>

        <StackLayout class="page">
            <Label text="This is a simple demo. Look at the code, there is no UI." />
        </StackLayout>
    </Page>
</template>

<script>

import { Algolia } from "@nativescript-community/algolia"

export default {
    async mounted() {
        const client = new Algolia('APP_ID', 'API_KEY');
        const index = client.initIndex('items');

        // Set Settings Example
        // index.setSettings({
        //     searchableAttributes: []
        // });

        // index.setSettings({
        //     customRanking: ['desc(firstname)']
        // })
        // .then(result => {
        //     console.log("Setting saved", result);
        // })
        // .catch(error => {
        //     console.log("ERROR", error);
        // });

        // Simple Search
        // index.search("bob")
        // .then(content => {
        //     console.log(content.hits)
        // })
        // .catch(error => {
        //     console.log("ERROR", error)
        // });

        // Geolocation Search
        // await index.search("", {
        //     aroundLatLng: "38.846693, -104.861354",
        //     aroundRadius: 200000 // meters
        // })
        // .then(content => {
        //     console.log(content.hits)
        // })
        // .catch(error => {
        //     console.log("ERROR", error)
        // });


        // Add Objects Example
        const contacts = [
            { 
                objectID: "1234567890",
                firstname: "John", 
                lastname: "Smith",
                zip_code: 78787
            },
            { 
                objectID: "987654321",
                firstname: "Billy", 
                lastname: "Bob",
                zip_code: 54321
            },
        ];

        index.saveObjects(contacts)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log("ERROR!", error)
            });
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