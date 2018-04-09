import DS from 'ember-data';
import { singularize } from "ember-inflector";
import { capitalize } from "@ember/string";

export default DS.JSONAPISerializer.extend({
  payloadKeyFromModelName(modelName) {
    return singularize(capitalize(modelName));
  }
});
