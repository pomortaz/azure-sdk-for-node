// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup107/providers/Microsoft.Cdn/profiles/cdnTestProfile3498/endpoints/cdnTestEndpoint8618?api-version=2016-04-02', '*')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint8618\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/profiles/cdnTestProfile3498/endpoints/cdnTestEndpoint8618\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint8618.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '802',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '5bb97007-2823-4353-9e91-6b880c6ca9bd',
  'x-ms-client-request-id': '197584ea-37b0-4013-a503-ec5933eaf563',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8cffb70e-2202-497e-bb54-f2ac7d58b482',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224445Z:8cffb70e-2202-497e-bb54-f2ac7d58b482',
  date: 'Wed, 11 May 2016 22:44:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup107/providers/Microsoft.Cdn/profiles/cdnTestProfile3498/endpoints/cdnTestEndpoint8618?api-version=2016-04-02', '*')
  .reply(200, "{\r\n  \"name\":\"cdnTestEndpoint8618\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/profiles/cdnTestProfile3498/endpoints/cdnTestEndpoint8618\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \"tag1\":\"val1\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"hostName\":\"cdnTestEndpoint8618.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"newname\",\"properties\":{\r\n          \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '802',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '5bb97007-2823-4353-9e91-6b880c6ca9bd',
  'x-ms-client-request-id': '197584ea-37b0-4013-a503-ec5933eaf563',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8cffb70e-2202-497e-bb54-f2ac7d58b482',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224445Z:8cffb70e-2202-497e-bb54-f2ac7d58b482',
  date: 'Wed, 11 May 2016 22:44:44 GMT',
  connection: 'close' });
 return result; }]];