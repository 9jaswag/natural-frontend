// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr('string'),
  column: DS.belongsTo('column'),
  row: DS.belongsTo('row')
});
