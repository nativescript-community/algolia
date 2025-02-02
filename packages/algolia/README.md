<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
<!--  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      DO NOT EDIT THIS READEME DIRECTLY! Edit "bluesprint.md" instead.
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<h1 align="center">@nativescript-community/algolia</h1>
<p align="center">
		<a href="https://npmcharts.com/compare/@nativescript-community/algolia?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/@nativescript-community/algolia.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/@nativescript-community/algolia"><img alt="NPM Version" src="https://img.shields.io/npm/v/@nativescript-community/algolia.svg" height="20"/></a>
	</p>

<p align="center">
  <b>NativeScript plugin for Algolia search. This plugin is designed to mirror, as closely as possible, the structure of Algolia’s JavaScript client.</b></br>
  <sub><sub>
</p>

<br />



[](#table-of-contents)

## Table of Contents

* [Installation](#installation)
* [Initialize the client](#initialize-the-client)
* [Push Data](#push-data)
* [Simple Search](#simple-search)
* [Advanced Search](#advanced-search)
* [Configure](#configure)
* [Breaking Changes in Version 2](#breaking-changes-in-version-2)
* [Demos and Development](#demos-and-development)
	* [Repo Setup](#repo-setup)
	* [Build](#build)
	* [Demos](#demos)
* [Contributing](#contributing)
	* [Update repo ](#update-repo-)
	* [Update readme ](#update-readme-)
	* [Update doc ](#update-doc-)
	* [Publish](#publish)
	* [modifying submodules](#modifying-submodules)
* [Questions](#questions)


[](#installation)

## Installation
Run the following command from the root of your project:

`ns plugin add @nativescript-community/algolia`


[](#initialize-the-client)

## Initialize the client

You first need to initialize the client. For that, you will need your **Application ID** and **API Key**.
You can find both of them on [your Algolia account](https://www.algolia.com/api-keys).

```js
import { Algolia } from "@nativescript-community/algolia";

const client = new Algolia('APP_ID', 'API_KEY');
const index = client.initIndex('items');
```


[](#push-data)

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


[](#simple-search)

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


[](#advanced-search)

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


[](#configure)

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


[](#breaking-changes-in-version-2)

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


[](#demos-and-development)

## Demos and Development


### Repo Setup

The repo uses submodules. If you did not clone with ` --recursive` then you need to call
```
git submodule update --init
```

The package manager used to install and link dependencies must be `pnpm` or `yarn`. `npm` wont work.

To develop and test:
if you use `yarn` then run `yarn`
if you use `pnpm` then run `pnpm i`

**Interactive Menu:**

To start the interactive menu, run `npm start` (or `yarn start` or `pnpm start`). This will list all of the commonly used scripts.

### Build

```bash
npm run build.all
```
WARNING: it seems `yarn build.all` wont always work (not finding binaries in `node_modules/.bin`) which is why the doc explicitly uses `npm run`

### Demos

```bash
npm run demo.[ng|react|svelte|vue].[ios|android]

npm run demo.svelte.ios # Example
```

Demo setup is a bit special in the sense that if you want to modify/add demos you dont work directly in `demo-[ng|react|svelte|vue]`
Instead you work in `demo-snippets/[ng|react|svelte|vue]`
You can start from the `install.ts` of each flavor to see how to register new demos 


[](#contributing)

## Contributing

### Update repo 

You can update the repo files quite easily

First update the submodules

```bash
npm run update
```

Then commit the changes
Then update common files

```bash
npm run sync
```
Then you can run `yarn|pnpm`, commit changed files if any

### Update readme 
```bash
npm run readme
```

### Update doc 
```bash
npm run doc
```

### Publish

The publishing is completely handled by `lerna` (you can add `-- --bump major` to force a major release)
Simply run 
```shell
npm run publish
```

### modifying submodules

The repo uses https:// for submodules which means you won't be able to push directly into the submodules.
One easy solution is t modify `~/.gitconfig` and add
```
[url "ssh://git@github.com/"]
	pushInsteadOf = https://github.com/
```


[](#questions)

## Questions

If you have any questions/issues/comments please feel free to create an issue or start a conversation in the [NativeScript Community Discord](https://nativescript.org/discord).