// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018
import ENV from "../config/environment";
import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
  host: 'http://' + ENV.apiHost,

  pathForType: function(type) {
    return Ember.String.underscore(pluralize(type));
  }
});
