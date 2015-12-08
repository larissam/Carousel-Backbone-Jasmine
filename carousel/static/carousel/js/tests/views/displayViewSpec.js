define([
  "models/PhotoModel",
  "views/DisplayView"
], function (PhotoModel, DisplayView) {
  describe("a display view", function () {
    var displayModel, displayView;
    beforeAll(function () {
      displayModel = new PhotoModel({
        "id":"1",
        "url":"test_images/image1.jpg",
        "thumb_url":"test_images/thumb1.jpg",
        "title":"Mountain Tunnel",
        "date":"December 15, 2009",
        "location":"the Rocky Mountains"
      });
      displayView = new DisplayView({
        model: displayModel
      });
    });
    afterAll(function () {
      displayModel = null;
      displayView = null;
    });
    it("should exist", function() {
      expect(displayView).toBeDefined();
    });
    it("should have default values", function() {
      expect(displayView.template).toBeDefined();
      expect(displayView.render).toBeDefined();
    });
    it("should have a template", function() {
      expect(displayView.template).toBeDefined();
    });
    describe("a rendered display view", function () {
      beforeAll(function () {
        displayView.render();
        displayView.$el.appendTo('body');
      });
      it("should have the correct title", function() {
          var $title = displayView.$('.carousel-title > h1');
          expect($title).toBeVisible();
          expect($title).toContainText('Around the world');
      });
      it("should have the correct image", function() {
          var $image = displayView.$('.carousel-image');
          expect($image).toHaveAttr('src', '/static/carousel/test_images/image1.jpg');
      });
      it("should have the correct caption", function() {
          var $captionTitle = displayView.$('.carousel-item-title'),
            $captionDescription = displayView.$('.carousel-item-description');
          expect($captionTitle).toBeVisible();
          expect($captionTitle).toContainText('Mountain Tunnel');
          expect($captionDescription).toBeVisible();
          expect($captionDescription).toContainText('Taken on December 15, 2009 in the Rocky Mountains');
      });
    });
  });
});
