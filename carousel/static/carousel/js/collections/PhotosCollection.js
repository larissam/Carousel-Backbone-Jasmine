define([
  'jquery',
  'underscore',
  'backbone',
  'models/PhotoModel'
], function($, _, Backbone, PhotoModel){
  var PhotosCollection = Backbone.Collection.extend({
    model: PhotoModel,
    url: '/api/photos',
    activeSlide : 1,
    pastActiveSlide: 1,
  });
  return PhotosCollection;
});
