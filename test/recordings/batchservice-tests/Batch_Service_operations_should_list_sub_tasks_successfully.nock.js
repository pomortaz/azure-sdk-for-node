// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/subtasksinfo?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#subtaskinfo\",\"value\":[\r\n    \r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4a1f8476-7f1f-4b07-8e45-137d80638c23',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:49:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/subtasksinfo?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#subtaskinfo\",\"value\":[\r\n    \r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4a1f8476-7f1f-4b07-8e45-137d80638c23',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:49:18 GMT',
  connection: 'close' });
 return result; }]];