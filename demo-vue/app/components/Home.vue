<template>
  <Page>
    <ActionBar>
      <Label text="Home"/>
    </ActionBar>

    <GridLayout>
      <Label class="info">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; "/>
          <Span :text="message"/>
        </FormattedString>
      </Label>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { Algolia } from "@nativescript-community/algolia"

  const algolia = new Algolia('APP_ID', 'API_KEY');

  const index = algolia.initIndex('products');

  index.search('your_search', (success, error) => {
    if(error) {
        console.log(JSON.stringify(error));
    }

    console.log(JSON.stringify(success));
  });

  export default Vue.extend({
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    }
  });
</script>

<style scoped lang="scss">
  @import '@nativescript/theme/scss/variables/blue';

  // Custom styles
  .fas {
    @include colorize($color: accent);
  }

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
