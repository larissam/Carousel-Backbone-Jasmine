define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/PhotoModel',
  'collections/PhotosCollection',
  'views/ThumbView'
], function($, _, Backbone, Handlebars, PhotoModel, PhotosCollection, ThumbView ){
  var GalleryView = Backbone.View.extend({
    template: Handlebars.compile($("#gallery-view").html()),
    initialize: function(){
      this.children = [];
      this.collection.forEach(function(thumbModel){
        if (parseInt(thumbModel.id) === this.collection.activeSlide) {
          this.children[thumbModel.id] = new ThumbView({ model: thumbModel, active: true }); 
        } else {
          this.children[thumbModel.id] = new ThumbView({model: thumbModel, active: false }); 
        }
      }, this);
      return this;
    },
    render: function(){
      this.$el.html(this.template());

      //render children
      for (var i = 1; i< this.children.length; i++) {
        this.$el.find('.carousel-thumbs-list').append(this.children[i].render().el);
        this.children[i].delegateEvents();
      }

      //update active element
      this.children[this.collection.pastActiveSlide].makeInactive().render();
      this.children[this.collection.activeSlide].makeActive().render();

      return this;
    },
  });
  return GalleryView;
});
