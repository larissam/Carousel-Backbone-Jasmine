define([
  "collections/PhotosCollection",
  "views/GalleryView"
], function (PhotosCollection, GalleryView) {
  describe("a gallery view", function () {
    var photosCollection, galleryView;
    beforeAll(function () {
      photosCollection = new PhotosCollection([{
        "id":"1",
        "url":"test_images/image1.jpg",
        "thumb_url":"test_images/thumb1.jpg",
        "title":"Mountain Tunnel",
        "date":"December 15, 2009",
        "location":"the Rocky Mountains"
      },
      {
        "id":"2",
        "url":"test_images/image2.jpg",
        "thumb_url":"test_images/thumb2.jpg",
        "title":"City at Night",
        "date":"January 1, 2008",
        "location":"London, England"
      }]);
      galleryView = new GalleryView({
        collection: photosCollection
      });
    });
    afterAll(function () {
      photosCollection = null;
      galleryView = null;
    });
    it("should exist", function() {
      expect(galleryView).toBeDefined();
    });
    it("should have default values", function() {
      expect(galleryView.collection).toBeDefined();
      expect(galleryView.template).toBeDefined();
    });
    describe("a rendered gallery view", function () {
      beforeAll(function () {
        galleryView.render();
        galleryView.$el.appendTo('body');
      });
      it("should have the correct number of subviews", function() {
        expect(galleryView.$el.find('.carousel-thumbs-list').children().length).toEqual(2);
      });
    });
  });
});
