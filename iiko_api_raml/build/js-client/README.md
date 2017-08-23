# iikoBiz Server API

> Browser and node module for making API requests against [iikoBiz Server API](https://iiko.biz:9900).

## Installation

```sh
npm install iiko-biz-server-api --save
```

## Usage

```js
var IikoBizServerApi = require('iiko-biz-server-api')

var client = new IikoBizServerApi()
```

### Options

You can set options when you initialize a client or at any time with the `options` property. You may also override options per request by passing an object as the last argument of request methods. For example:

```javascript
var client = new IikoBizServerApi({ ... })

client('GET', '/', {
  baseUri: 'http://example.com',
  headers: {
    'Content-Type': 'application/json'
  }
})
```

#### Base URI

You can override the base URI by setting the `baseUri` property, or initializing a client with a base URI. For example:

```javascript
new IikoBizServerApi({
  baseUri: 'https://example.com'
});
```

### Helpers

Exports `IikoBizServerApi.form`, which exposes a cross-platform `FormData` interface that can be used with request bodies.

### Methods

All methods return a HTTP request instance of [Popsicle](https://github.com/blakeembrey/popsicle), which allows the use of promises (and streaming in node).

#### `api.0.auth.accessToken.get([query, [options]])`

```js
client.api.0.auth.accessToken.get([query, [options]]).then(...)
```
  
#### `api.0.auth.echo.get([query, [options]])`

```js
client.api.0.auth.echo.get([query, [options]]).then(...)
```
  
#### `api.0.auth.bizAccessToken.get([query, [options]])`

```js
client.api.0.auth.bizAccessToken.get([query, [options]]).then(...)
```
  
#### `api.0.mobileIikoCard5.authenticatePhone.post([body, [options]])`

```js
client.api.0.mobileIikoCard5.authenticatePhone.post([body, [options]]).then(...)
```
  
#### `api.0.customers.getCustomerById.get([query, [options]])`

```js
client.api.0.customers.getCustomerById.get([query, [options]]).then(...)
```
  
#### `api.0.organization.list.get([query, [options]])`

```js
client.api.0.organization.list.get([query, [options]]).then(...)
```
  
#### `api.0.organization.list.organizationId({ organizationId }).get([query, [options]])`

* **organizationId** (type: `string`)

```js
client.api.0.organization.list.organizationId({ organizationId }).get([query, [options]]).then(...)
```
  
#### `api.0.organization.list.organizationId({ organizationId }).supportedProtocols.get([query, [options]])`

* **organizationId** (type: `string`)

```js
client.api.0.organization.list.organizationId({ organizationId }).supportedProtocols.get([query, [options]]).then(...)
```
  
#### `api.0.rmsSettings.getRoles.get([query, [options]])`

```js
client.api.0.rmsSettings.getRoles.get([query, [options]]).then(...)
```
  
#### `api.0.rmsSettings.getEmployees.get([query, [options]])`

```js
client.api.0.rmsSettings.getEmployees.get([query, [options]]).then(...)
```
  
#### `api.0.rmsSettings.getRestaurantSections.get([query, [options]])`

```js
client.api.0.rmsSettings.getRestaurantSections.get([query, [options]]).then(...)
```
  
#### `api.0.nomenclature.organizationId({ organizationId }).get([query, [options]])`

* **organizationId** (type: `string`)

```js
client.api.0.nomenclature.organizationId({ organizationId }).get([query, [options]]).then(...)
```
  
#### `api.0.nomenclature.getOrderTypes.get([query, [options]])`

```js
client.api.0.nomenclature.getOrderTypes.get([query, [options]]).then(...)
```
  
#### `api.0.nomenclature.getPaymentTypes.get([query, [options]])`

```js
client.api.0.nomenclature.getPaymentTypes.get([query, [options]]).then(...)
```
  
#### `api.0.nomenclature.getMarketingSources.get([query, [options]])`

```js
client.api.0.nomenclature.getMarketingSources.get([query, [options]]).then(...)
```
  
#### `api.0.stopLists.getDeliveryStopList.get([query, [options]])`

```js
client.api.0.stopLists.getDeliveryStopList.get([query, [options]]).then(...)
```
  
#### `api.0.cities.cities.get([query, [options]])`

```js
client.api.0.cities.cities.get([query, [options]]).then(...)
```
  
#### `api.0.cities.citiesList.get([query, [options]])`

```js
client.api.0.cities.citiesList.get([query, [options]]).then(...)
```
  
#### `api.0.streets.streets.get([query, [options]])`

```js
client.api.0.streets.streets.get([query, [options]]).then(...)
```
  
#### `api.0.regions.regions.get([query, [options]])`

```js
client.api.0.regions.regions.get([query, [options]]).then(...)
```
  
#### `applicationMarket.userInfo.get([query, [options]])`

```js
client.applicationMarket.userInfo.get([query, [options]]).then(...)
```
  
## License

Apache 2.0
