define([
  'jquery',
  'underscore',
  'backbone',
  'collections/PhotosCollection',
  'views/CarouselView'
], function($, _, Backbone, PhotosCollection, CarouselView){
    var initialize = function(){
      var photosCollection = new PhotosCollection();
      photosCollection.fetch({
        success: function(){
          var carouselView = new CarouselView({collection: photosCollection});
          Backbone.history.start();
        }
      });
    }

    return {
      initialize: initialize
    };
});
