/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the MetadataItem class.
 * @constructor
 * A metadata item associated with an Azure Batch resource. The Batch service
 * does not assign any meaning to metadata; it is solely for the use of user
 * code.
 * @member {string} [name] Gets or sets the name of the metadata item.
 * 
 * @member {string} [value] Gets or sets the value of the metadata item.
 * 
 */
function MetadataItem() {
}

/**
 * Defines the metadata of MetadataItem
 *
 * @returns {object} metadata of MetadataItem
 *
 */
MetadataItem.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'MetadataItem',
    type: {
      name: 'Composite',
      className: 'MetadataItem',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = MetadataItem;