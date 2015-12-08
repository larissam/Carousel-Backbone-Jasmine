define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/PhotoModel'
], function($, _, Backbone, Handlebars, PhotoModel){
  var DisplayView = Backbone.View.extend({
    template: Handlebars.compile($("#carousel-item").html()),
    render: function(){
      this.$el.html(this.template(this.model.attributes));
      return this;
    },
    setModel: function(model){
      this.model = model;
      return this;
    }
  });
  return DisplayView;
});
