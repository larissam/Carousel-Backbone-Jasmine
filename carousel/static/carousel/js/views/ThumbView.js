define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/PhotoModel'
], function($, _, Backbone, Handlebars, PhotoModel ){
  var ThumbView = Backbone.View.extend({
    tagName:  'li',
    template: Handlebars.compile($("#thumb-view").html()),
    initialize: function(options){
      this.options = options;
    },
    render: function(){
      this.$el.html(this.template(this.model.attributes));

      if (this.options.active) {
        this.$el.find('img').addClass('carousel-thumb-active');
      }
      return this;
    },
    events: {
      'click .carousel-thumb': 'triggerActiveSlide'
    },
    triggerActiveSlide: function(){
      this.model.trigger("change:activeSlide", {'activeSlideId' : parseInt(this.model.id)});
    },
    makeActive: function(){
      this.$el.find('img').addClass('carousel-thumb-active');
      this.options.active = true;
      return this;
    },
    makeInactive: function(){
      this.$el.find('img').removeClass('carousel-thumb-active');
      this.options.active = false;
      return this;
    }
  });
  return ThumbView;
});
