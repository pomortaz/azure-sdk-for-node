// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = '91d12660-3dec-467a-be2a-213b5544ddc0';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .put('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/eventHubEndpoints/events/ConsumerGroups/testconsumergroup?api-version=2016-02-03')
  .reply(200, "{\"tags\":null,\"id\":\"/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"testconsumergroup\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '173',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'c1382fda-dc35-4ae3-8c8f-f0b67f458dcf',
  'x-ms-correlation-request-id': 'c1382fda-dc35-4ae3-8c8f-f0b67f458dcf',
  'x-ms-routing-request-id': 'WESTUS:20160718T192209Z:c1382fda-dc35-4ae3-8c8f-f0b67f458dcf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Jul 2016 19:22:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/eventHubEndpoints/events/ConsumerGroups/testconsumergroup?api-version=2016-02-03')
  .reply(200, "{\"tags\":null,\"id\":\"/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"testconsumergroup\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '173',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'c1382fda-dc35-4ae3-8c8f-f0b67f458dcf',
  'x-ms-correlation-request-id': 'c1382fda-dc35-4ae3-8c8f-f0b67f458dcf',
  'x-ms-routing-request-id': 'WESTUS:20160718T192209Z:c1382fda-dc35-4ae3-8c8f-f0b67f458dcf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Jul 2016 19:22:09 GMT',
  connection: 'close' });
 return result; }]];