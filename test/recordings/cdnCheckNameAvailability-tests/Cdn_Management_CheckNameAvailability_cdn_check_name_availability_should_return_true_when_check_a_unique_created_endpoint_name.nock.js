// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Cdn/checkNameAvailability?api-version=2016-04-02', '*')
  .reply(200, "{\"NameAvailable\":true,\"Reason\":null,\"Message\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '51',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '25fdf75b-b9fc-4325-9328-8f05140137bd',
  'x-ms-client-request-id': '4258dae1-48aa-4dea-b8a3-eb2aee290daa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': '8b41087b-661f-4715-a96a-e2fc81bd034c',
  'x-ms-routing-request-id': 'WESTUS:20160511T230033Z:8b41087b-661f-4715-a96a-e2fc81bd034c',
  date: 'Wed, 11 May 2016 23:00:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Cdn/checkNameAvailability?api-version=2016-04-02', '*')
  .reply(200, "{\"NameAvailable\":true,\"Reason\":null,\"Message\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '51',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '25fdf75b-b9fc-4325-9328-8f05140137bd',
  'x-ms-client-request-id': '4258dae1-48aa-4dea-b8a3-eb2aee290daa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': '8b41087b-661f-4715-a96a-e2fc81bd034c',
  'x-ms-routing-request-id': 'WESTUS:20160511T230033Z:8b41087b-661f-4715-a96a-e2fc81bd034c',
  date: 'Wed, 11 May 2016 23:00:33 GMT',
  connection: 'close' });
 return result; }]];