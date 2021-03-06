/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ProfileListResult class.
 * @constructor
 * Result of the request to list profiles. It contains a list of profile
 * objects and a URL link to get the the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of profile objects if
 * there are any.
 * 
 */
function ProfileListResult() {
}

util.inherits(ProfileListResult, Array);

/**
 * Defines the metadata of ProfileListResult
 *
 * @returns {object} metadata of ProfileListResult
 *
 */
ProfileListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ProfileListResult',
    type: {
      name: 'Composite',
      className: 'ProfileListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ProfileElementType',
                type: {
                  name: 'Composite',
                  className: 'Profile'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ProfileListResult;
