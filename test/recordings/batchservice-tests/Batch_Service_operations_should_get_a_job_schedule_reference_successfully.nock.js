// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobschedules/NodeSDKTestSchedule?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"NodeSDKTestSchedule\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobschedules/NodeSDKTestSchedule\",\"eTag\":\"0x8D3B7D0A40BD41A\",\"lastModified\":\"2016-07-29T16:51:52.2691098Z\",\"creationTime\":\"2016-07-29T16:51:52.2691098Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-07-29T16:51:52.2691098Z\",\"schedule\":{\r\n    \"doNotRunUntil\":\"2017-12-25T00:00:00Z\",\"startWindow\":\"PT6M\"\r\n  },\"jobSpecification\":{\r\n    \"priority\":0,\"usesTaskDependencies\":false,\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":0\r\n    },\"poolInfo\":{\r\n      \"poolId\":\"nodesdktestpool1\"\r\n    }\r\n  },\"executionInfo\":{\r\n    \"nextRunTime\":\"2017-12-25T00:00:00Z\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 29 Jul 2016 16:51:52 GMT',
  etag: '0x8D3B7D0A40BD41A',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '09c3aeb6-55ad-44f0-ae39-84d5e84195e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:51:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobschedules/NodeSDKTestSchedule?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"NodeSDKTestSchedule\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobschedules/NodeSDKTestSchedule\",\"eTag\":\"0x8D3B7D0A40BD41A\",\"lastModified\":\"2016-07-29T16:51:52.2691098Z\",\"creationTime\":\"2016-07-29T16:51:52.2691098Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-07-29T16:51:52.2691098Z\",\"schedule\":{\r\n    \"doNotRunUntil\":\"2017-12-25T00:00:00Z\",\"startWindow\":\"PT6M\"\r\n  },\"jobSpecification\":{\r\n    \"priority\":0,\"usesTaskDependencies\":false,\"constraints\":{\r\n      \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":0\r\n    },\"poolInfo\":{\r\n      \"poolId\":\"nodesdktestpool1\"\r\n    }\r\n  },\"executionInfo\":{\r\n    \"nextRunTime\":\"2017-12-25T00:00:00Z\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 29 Jul 2016 16:51:52 GMT',
  etag: '0x8D3B7D0A40BD41A',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '09c3aeb6-55ad-44f0-ae39-84d5e84195e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:51:53 GMT',
  connection: 'close' });
 return result; }]];