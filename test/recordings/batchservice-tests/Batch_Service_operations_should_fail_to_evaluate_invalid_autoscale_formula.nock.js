// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/evaluateautoscale?api-version=2016-07-01.3.1', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.AutoScaleRun\",\"timestamp\":\"2016-07-29T16:47:25.7669429Z\",\"results\":\"$TargetDedicated=2;$NodeDeallocationOption=requeue\",\"error\":{\r\n    \"code\":\"AutoScalingFormulaEvaluationError\",\"message\":\"The specified auto-scaling formula has evaluation error\",\"values\":[\r\n      {\r\n        \"name\":\"Message\",\"value\":\"Line 1, Col 1: Undefined symbol: something_useless\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c708c4a3-472a-4222-9e82-c82f30c353c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/evaluateautoscale',
  date: 'Fri, 29 Jul 2016 16:47:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/evaluateautoscale?api-version=2016-07-01.3.1', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.AutoScaleRun\",\"timestamp\":\"2016-07-29T16:47:25.7669429Z\",\"results\":\"$TargetDedicated=2;$NodeDeallocationOption=requeue\",\"error\":{\r\n    \"code\":\"AutoScalingFormulaEvaluationError\",\"message\":\"The specified auto-scaling formula has evaluation error\",\"values\":[\r\n      {\r\n        \"name\":\"Message\",\"value\":\"Line 1, Col 1: Undefined symbol: something_useless\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c708c4a3-472a-4222-9e82-c82f30c353c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/nodesdktestpool1/evaluateautoscale',
  date: 'Fri, 29 Jul 2016 16:47:25 GMT',
  connection: 'close' });
 return result; }]];