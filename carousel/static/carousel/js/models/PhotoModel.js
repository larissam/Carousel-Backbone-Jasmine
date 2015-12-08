define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var PhotoModel = Backbone.Model.extend({
    isActive: false,
    urlRoot: '/api/photos/',
  });

  return PhotoModel;
});
