// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile4304?api-version=2016-04-02')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/6477e88d-a48f-4cf3-81bc-1a6ae01d684f/profileresults/cdnTestProfile4304?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '799101d2-79c4-40b7-84b3-c9d1a85f1ec5',
  'x-ms-client-request-id': '4c65d6d8-7768-47b5-b59a-4a188a57518b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/6477e88d-a48f-4cf3-81bc-1a6ae01d684f?api-version=2016-04-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5f0f6a10-d0fc-44b2-9422-a5becf1b4ce7',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223923Z:5f0f6a10-d0fc-44b2-9422-a5becf1b4ce7',
  date: 'Wed, 11 May 2016 22:39:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup7477/providers/Microsoft.Cdn/profiles/cdnTestProfile4304?api-version=2016-04-02')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/6477e88d-a48f-4cf3-81bc-1a6ae01d684f/profileresults/cdnTestProfile4304?api-version=2016-04-02',
  'retry-after': '10',
  'x-ms-request-id': '799101d2-79c4-40b7-84b3-c9d1a85f1ec5',
  'x-ms-client-request-id': '4c65d6d8-7768-47b5-b59a-4a188a57518b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/6477e88d-a48f-4cf3-81bc-1a6ae01d684f?api-version=2016-04-02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5f0f6a10-d0fc-44b2-9422-a5becf1b4ce7',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223923Z:5f0f6a10-d0fc-44b2-9422-a5becf1b4ce7',
  date: 'Wed, 11 May 2016 22:39:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/6477e88d-a48f-4cf3-81bc-1a6ae01d684f?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '2492fe41-cd39-4edd-b79a-13f5c44b8323',
  'x-ms-client-request-id': '0e61be5d-2c4a-48bb-a793-8ff1b60ad2d9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '903aec25-6c9f-48e5-867d-d37fa35f67d2',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223954Z:903aec25-6c9f-48e5-867d-d37fa35f67d2',
  date: 'Wed, 11 May 2016 22:39:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup7477/providers/Microsoft.Cdn/operationresults/6477e88d-a48f-4cf3-81bc-1a6ae01d684f?api-version=2016-04-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '2492fe41-cd39-4edd-b79a-13f5c44b8323',
  'x-ms-client-request-id': '0e61be5d-2c4a-48bb-a793-8ff1b60ad2d9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '903aec25-6c9f-48e5-867d-d37fa35f67d2',
  'x-ms-routing-request-id': 'CENTRALUS:20160511T223954Z:903aec25-6c9f-48e5-867d-d37fa35f67d2',
  date: 'Wed, 11 May 2016 22:39:53 GMT',
  connection: 'close' });
 return result; }]];