var popsicle = require('popsicle')
var extend = require('xtend')
var setprototypeof = require('setprototypeof')

var TEMPLATE_REGEXP = /\{([^\{\}]+)\}/g

module.exports = Client

function template (string, interpolate) {
  return string.replace(TEMPLATE_REGEXP, function (match, key) {
    if (interpolate[key] != null) {
      return encodeURIComponent(interpolate[key])
    }

    return ''
  })
}

function request (client, method, path, opts) {
  var options = extend({}, client._options, opts)
  var baseUri = template(options.baseUri, options.baseUriParameters)

  var reqOpts = {
    url: baseUri.replace(/\/$/, '') + template(path, options.uriParameters),
    method: method,
    headers: options.headers,
    body: options.body,
    query: options.query,
    options: options.options
  }

  if (options.user && typeof options.user.sign === 'function') {
    reqOpts = options.user.sign(reqOpts)
  }

  return popsicle.request(reqOpts)
}

function Client (options) {
  this._path = ''
  this._options = extend({
    baseUri: 'https://iiko.biz:9900',
    baseUriParameters: {}
  }, options)

  function client (method, path, options) {
    return request(client, method, path, options)
  }

  this.api = new Resource1(client, '/api')
  this.applicationMarket = new Resource33(client, '/applicationMarket')
  setprototypeof(client, this)
  return client
}

Client.form = popsicle.form
Client.version = 'v1'
Client.Security = {
}
function Resource1 (client, path) {
  this._client = client
  this._path = path
  this['0'] = new Resource2(this._client, this._path + '/0')
}
function Resource2 (client, path) {
  this._client = client
  this._path = path
  this.auth = new Resource3(this._client, this._path + '/auth')
  this.mobileIikoCard5 = new Resource7(this._client, this._path + '/mobileIikoCard5')
  this.customers = new Resource9(this._client, this._path + '/customers')
  this.organization = new Resource11(this._client, this._path + '/organization')
  this.rmsSettings = new Resource15(this._client, this._path + '/rmsSettings')
  this.nomenclature = new Resource19(this._client, this._path + '/nomenclature')
  this.stopLists = new Resource24(this._client, this._path + '/stopLists')
  this.cities = new Resource26(this._client, this._path + '/cities')
  this.streets = new Resource29(this._client, this._path + '/streets')
  this.regions = new Resource31(this._client, this._path + '/regions')
}
function Resource3 (client, path) {
  this._client = client
  this._path = path
  this.accessToken = new Resource4(this._client, this._path + '/access_token')
  this.echo = new Resource5(this._client, this._path + '/echo')
  this.bizAccessToken = new Resource6(this._client, this._path + '/biz_access_token')
}
function Resource4 (client, path) {
  this._client = client
  this._path = path
}
Resource4.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource5 (client, path) {
  this._client = client
  this._path = path
}
Resource5.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource6 (client, path) {
  this._client = client
  this._path = path
}
Resource6.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource7 (client, path) {
  this._client = client
  this._path = path
  this.authenticatePhone = new Resource8(this._client, this._path + '/authenticatePhone')
}
function Resource8 (client, path) {
  this._client = client
  this._path = path
}
Resource8.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
function Resource9 (client, path) {
  this._client = client
  this._path = path
  this.getCustomerById = new Resource10(this._client, this._path + '/get_customer_by_id')
}
function Resource10 (client, path) {
  this._client = client
  this._path = path
}
Resource10.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource11 (client, path) {
  this._client = client
  this._path = path
  this.list = new Resource12(this._client, this._path + '/list')
}
function Resource12 (client, path) {
  this._client = client
  this._path = path
}
Resource12.prototype.organizationId = function (uriParams) { return new Resource13(this._client, this._path + template('/{organizationId}', extend({}, uriParams))) }
Resource12.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource13 (client, path) {
  this._client = client
  this._path = path
  this.supportedProtocols = new Resource14(this._client, this._path + '/supportedProtocols')
}
Resource13.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource14 (client, path) {
  this._client = client
  this._path = path
}
Resource14.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource15 (client, path) {
  this._client = client
  this._path = path
  this.getRoles = new Resource16(this._client, this._path + '/getRoles')
  this.getEmployees = new Resource17(this._client, this._path + '/getEmployees')
  this.getRestaurantSections = new Resource18(this._client, this._path + '/getRestaurantSections')
}
function Resource16 (client, path) {
  this._client = client
  this._path = path
}
Resource16.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource17 (client, path) {
  this._client = client
  this._path = path
}
Resource17.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource18 (client, path) {
  this._client = client
  this._path = path
}
Resource18.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource19 (client, path) {
  this._client = client
  this._path = path
  this.getOrderTypes = new Resource21(this._client, this._path + '/getOrderTypes')
  this.getPaymentTypes = new Resource22(this._client, this._path + '/getPaymentTypes')
  this.getMarketingSources = new Resource23(this._client, this._path + '/getMarketingSources')
}
Resource19.prototype.organizationId = function (uriParams) { return new Resource20(this._client, this._path + template('/{organizationId}', extend({}, uriParams))) }
function Resource20 (client, path) {
  this._client = client
  this._path = path
}
Resource20.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource21 (client, path) {
  this._client = client
  this._path = path
}
Resource21.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource22 (client, path) {
  this._client = client
  this._path = path
}
Resource22.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource23 (client, path) {
  this._client = client
  this._path = path
}
Resource23.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource24 (client, path) {
  this._client = client
  this._path = path
  this.getDeliveryStopList = new Resource25(this._client, this._path + '/getDeliveryStopList')
}
function Resource25 (client, path) {
  this._client = client
  this._path = path
}
Resource25.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource26 (client, path) {
  this._client = client
  this._path = path
  this.cities = new Resource27(this._client, this._path + '/cities')
  this.citiesList = new Resource28(this._client, this._path + '/citiesList')
}
function Resource27 (client, path) {
  this._client = client
  this._path = path
}
Resource27.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource28 (client, path) {
  this._client = client
  this._path = path
}
Resource28.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource29 (client, path) {
  this._client = client
  this._path = path
  this.streets = new Resource30(this._client, this._path + '/streets')
}
function Resource30 (client, path) {
  this._client = client
  this._path = path
}
Resource30.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource31 (client, path) {
  this._client = client
  this._path = path
  this.regions = new Resource32(this._client, this._path + '/regions')
}
function Resource32 (client, path) {
  this._client = client
  this._path = path
}
Resource32.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Resource33 (client, path) {
  this._client = client
  this._path = path
  this.userInfo = new Resource34(this._client, this._path + '/userInfo')
}
function Resource34 (client, path) {
  this._client = client
  this._path = path
}
Resource34.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
