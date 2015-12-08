define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/PhotoModel',
  'collections/PhotosCollection',
  'views/DisplayView',
  'views/GalleryView'
], function($, _, Backbone, Handlebars, PhotoModel, PhotosCollection, DisplayView, GalleryView){
  var CarouselView = Backbone.View.extend({
    el: $('#carousel-content'),
    template: Handlebars.compile($("#carousel").html()),
    initialize: function(){
      this.displayView = new DisplayView({ model: this.displayModel });
      this.galleryView = new GalleryView({ collection: this.collection });

      // if active slide has changed, update the active slide and rerender.
      this.listenTo(this.collection, 'change:activeSlide', function(options){
        if (options && options.activeSlideId) {
          this.collection.pastActiveSlide = this.collection.activeSlide;
          this.collection.activeSlide = options.activeSlideId;
        }
        this.render();
      });

      this.render();
    },
    render: function(){
      //render your own display
      this.$el.html(this.template());

      //render the image display
      this.displayModel = this.collection.get(this.collection.activeSlide);
      this.displayView.setModel(this.displayModel);
      this.displayView.setElement(this.$('.carousel-display')).render();

      //render the gallery
      this.galleryView.setElement(this.$('.carousel-gallery')).render();

      return this;
    },
    events: {
      'click .nav-right': 'toNext',
      'click .nav-left': 'toPrev',
    },
    toNext: function(){
      if (this.collection.activeSlide < this.collection.length) {
        this.collection.trigger("change:activeSlide", {'activeSlideId' : this.collection.activeSlide + 1});
      }
    },
    toPrev: function(){
      if (this.collection.activeSlide - 1 > 0) {
        this.collection.trigger("change:activeSlide", {'activeSlideId' : this.collection.activeSlide - 1});
      }
    }
  });
  return CarouselView;
});
