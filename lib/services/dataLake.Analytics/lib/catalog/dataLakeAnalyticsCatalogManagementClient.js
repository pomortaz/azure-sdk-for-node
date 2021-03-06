/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var msRestAzure = require('ms-rest-azure');
var ServiceClient = msRestAzure.AzureServiceClient;

var models = require('./models');
var operations = require('./operations');

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsCatalogManagementClient class.
 * @constructor
 *
 * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [options.apiVersion] - Client Api Version.
 *
 * @param {string} [options.adlaCatalogDnsSuffix] - Gets the DNS suffix used as the base for all Azure Data Lake Analytics Catalog service requests.
 *
 * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
function DataLakeAnalyticsCatalogManagementClient(credentials, options) {
  this.apiVersion = '2016-11-01';
  this.adlaCatalogDnsSuffix = 'azuredatalakeanalytics.net';
  this.acceptLanguage = 'en-US';
  this.longRunningOperationRetryTimeout = 30;
  this.generateClientRequestId = true;
  if (credentials === null || credentials === undefined) {
    throw new Error('\'credentials\' cannot be null.');
  }

  if (!options) options = {};

  DataLakeAnalyticsCatalogManagementClient['super_'].call(this, credentials, options);
  this.baseUri = 'https://{accountName}.{adlaCatalogDnsSuffix}';
  this.credentials = credentials;

  if(options.apiVersion !== null && options.apiVersion !== undefined) { 
    this.apiVersion = options.apiVersion;
  }
  if(options.adlaCatalogDnsSuffix !== null && options.adlaCatalogDnsSuffix !== undefined) { 
    this.adlaCatalogDnsSuffix = options.adlaCatalogDnsSuffix;
  }
  if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) { 
    this.acceptLanguage = options.acceptLanguage;
  }
  if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) { 
    this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
  }
  if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) { 
    this.generateClientRequestId = options.generateClientRequestId;
  }
  this.catalog = new operations.Catalog(this);
  this.models = models;
  msRest.addSerializationMixin(this);
}

util.inherits(DataLakeAnalyticsCatalogManagementClient, ServiceClient);

module.exports = DataLakeAnalyticsCatalogManagementClient;
