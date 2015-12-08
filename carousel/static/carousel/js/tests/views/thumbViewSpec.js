define([
  "models/PhotoModel",
  "views/ThumbView"
], function (PhotoModel, ThumbView) {
  describe("a thumb view", function () {
    var photoModel, thumbView;
    beforeAll(function () {
      photoModel = new PhotoModel({
        "id":"1",
        "url":"test_images/image1.jpg",
        "thumb_url":"test_images/thumb1.jpg",
        "title":"Mountain Tunnel",
        "date":"December 15, 2009",
        "location":"the Rocky Mountains"
      });
      thumbView = new ThumbView({
        model: photoModel
      });
    });
    afterAll(function () {
      photoModel = null;
      thumbView = null;
    });
    it("should exist", function() {
      expect(thumbView).toBeDefined();
    });
    it("should have default values", function() {
      expect(thumbView.tagName).toEqual("li");
      expect(thumbView.render).toBeDefined();
    });
    it("should have a template", function() {
      expect(thumbView.template).toBeDefined();
    });
    describe("a rendered thumb view", function () {
      beforeAll(function () {
        thumbView.render();
        thumbView.$el.appendTo('body');
        $image = thumbView.$('.carousel-thumb');
      });
      afterAll(function () {
        $image = null;
      });
      it("should have the correct image", function() {
        expect($image).toHaveAttr('src', '/static/carousel/test_images/image1.jpg');
      });
      it("should have the correct styling if the image is not active", function() {
        expect($image).not.toHaveClass('thumb-active');
      });
      it("should have the correct styling if the image is active", function() {
        thumbView = new ThumbView({
          model: photoModel,
          active: true
        });
        thumbView.render();
        thumbView.$el.appendTo('body');
        expect(thumbView.$('.carousel-thumb')).toHaveClass('carousel-thumb-active');
      });
      it("should trigger the change:activeSlide event when clicked", function() {
        spyOn(thumbView.model, 'trigger').and.callThrough();
        $image.click();
        expect(thumbView.model.trigger).toHaveBeenCalledWith("change:activeSlide", {'activeSlideId' : 1});
      });
    });
  });
});
