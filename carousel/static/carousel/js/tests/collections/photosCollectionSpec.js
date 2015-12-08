define([
  "collections/PhotosCollection"
], function (PhotosCollection) {
  describe("a photo collection", function () {
    beforeAll(function () {
      this.photosCollection = new PhotosCollection();
    });
    afterAll(function () {
      this.photosCollection = null;
    });
    it("should exist", function() {
        expect(this.photosCollection).toBeDefined();
    });
    it("should have default values", function() {
      expect(this.photosCollection.model).toBeDefined();
      expect(this.photosCollection.url).toEqual("/api/photos");
      expect(this.photosCollection.activeSlide).toEqual(1);
    });
  });
});
