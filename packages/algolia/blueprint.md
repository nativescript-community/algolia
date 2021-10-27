{{ load:../../tools/readme/edit-warning.md }}
{{ template:title }}
{{ template:badges }}
{{ template:description }}

{{ template:toc }}

## Installation
Run the following command from the root of your project:

`ns plugin add {{ pkg.name }}`

## Initialize the client

You first need to initialize the client. For that, you will need your **Application ID** and **API Key**.
You can find both of them on [your Algolia account](https://www.algolia.com/api-keys).

```js
import { Algolia } from "@nativescript-community/algolia";

const client = new Algolia('APP_ID', 'API_KEY');
const index = client.initIndex('items');
```

## Push Data

Add or replace an existing object in your index with an updated set of attributes.

```typescript
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

index.addObjects(contacts)
  .then(result => {
      console.log(result);
  })
  .catch(error => {
      console.log("ERROR!", error);
  });
```

## Simple Search

With objects added to your index, you can now utilize the searching capabilities.

```typescript
index.search("bob")
  .then(content => {
      console.log(content.hits)
  })
  .catch(error => {
      console.log("ERROR", error)
  });
```

## Advanced Search

There is also the ability to pass in search parameters for more advanced searching such as geolocation. See available search parameters [here](https://www.algolia.com/doc/api-reference/search-api-parameters/).

```typescript
index.search("", {
    aroundLatLng: "38.846693, -104.861354",
    aroundRadius: 200000 // meters
})
  .then(content => {
      console.log(content.hits);
  })
  .catch(error => {
      console.log("ERROR", error);
  });
```

## Configure

Settings can be customized to tune the search behavior. For example, you can add a custom sort by number of followers to the already great built-in relevance:

```typescript
index.setSettings({
  customRanking: ['desc(firstname)']
})
  .then(result => {
      console.log("Setting saved", result);
  })
  .catch(error => {
      console.log("ERROR", error);
  });
```

You can also configure the list of attributes you want to index by order of importance (ex: firstname = most important):

**Note:** Since the engine is designed to suggest results as you type, you'll generally search by prefix.
In this case the order of attributes is very important to decide which hit is the best:

```typescript
index.setSettings({
  searchableAttributes: [
    'lastname',
    'firstname',
    'company',
    'email',
    'city',
    'address'
  ]
})
  .then(result => {
      console.log("Setting saved", result);
  })
  .catch(error => {
      console.log("ERROR", error);
  });
```

## Breaking Changes in Version 2

Switched to Promise based method calls instead of callbacks.

**Before**:
```typescript
index.search('bob', function(content, err) {
  console.log(content.hits);
});
```

**After**:
```typescript
index.search("bob")
  .then(content => {
      console.log(content.hits)
  })
  .catch(error => {
      console.log("ERROR", error)
  });

```

The method `addObjects` is now deprecated and has been removed and replaced with `saveObjects`. 

{{ load:../../tools/readme/demos-and-development.md }}
{{ load:../../tools/readme/questions.md }}