// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup107/providers/Microsoft.Cdn/profiles/cdnTestProfile3498/endpoints/cdnTestEndpoint8618?api-version=2016-04-02')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/9f1aa983-522d-4d42-b841-5975a4cc6251/profileresults/cdnTestProfile3498/endpointresults/cdnTestEndpoint8618?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '4c20e626-b61e-4688-a7f8-3a5dbd9dac5d',
  'x-ms-client-request-id': '1055abd8-f721-4874-ac58-4029c43704aa',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/9f1aa983-522d-4d42-b841-5975a4cc6251?api-version=2016-04-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e8aada80-3a86-4c07-a71e-a5a3f673bf2f',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224804Z:e8aada80-3a86-4c07-a71e-a5a3f673bf2f',
  date: 'Wed, 11 May 2016 22:48:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup107/providers/Microsoft.Cdn/profiles/cdnTestProfile3498/endpoints/cdnTestEndpoint8618?api-version=2016-04-02')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/9f1aa983-522d-4d42-b841-5975a4cc6251/profileresults/cdnTestProfile3498/endpointresults/cdnTestEndpoint8618?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '4c20e626-b61e-4688-a7f8-3a5dbd9dac5d',
  'x-ms-client-request-id': '1055abd8-f721-4874-ac58-4029c43704aa',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/9f1aa983-522d-4d42-b841-5975a4cc6251?api-version=2016-04-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e8aada80-3a86-4c07-a71e-a5a3f673bf2f',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224804Z:e8aada80-3a86-4c07-a71e-a5a3f673bf2f',
  date: 'Wed, 11 May 2016 22:48:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/9f1aa983-522d-4d42-b841-5975a4cc6251?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'aa7e7a9c-e9ac-4d66-9e74-15b0ece4f5f1',
  'x-ms-client-request-id': 'bdebe36a-121b-432e-8dae-73a7bc0d60b7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '48a63b96-766f-41fc-b418-32fad1661084',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224834Z:48a63b96-766f-41fc-b418-32fad1661084',
  date: 'Wed, 11 May 2016 22:48:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup107/providers/Microsoft.Cdn/operationresults/9f1aa983-522d-4d42-b841-5975a4cc6251?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'aa7e7a9c-e9ac-4d66-9e74-15b0ece4f5f1',
  'x-ms-client-request-id': 'bdebe36a-121b-432e-8dae-73a7bc0d60b7',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '48a63b96-766f-41fc-b418-32fad1661084',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T224834Z:48a63b96-766f-41fc-b418-32fad1661084',
  date: 'Wed, 11 May 2016 22:48:33 GMT',
  connection: 'close' });
 return result; }]];