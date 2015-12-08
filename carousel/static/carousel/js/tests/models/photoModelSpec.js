define(["models/PhotoModel"], function (PhotoModel) {
  describe("a photo", function () {
    beforeAll(function () {
      this.photoModel = new PhotoModel();
    });
    afterAll(function () {
      this.photoModel = null;
    });
    it("should exist", function() {
        expect(this.photoModel).toBeDefined();
    });
    it("should have default values", function() {
      expect(this.photoModel.isActive).toEqual(false);
      expect(this.photoModel.urlRoot).toEqual("/api/photos/");
    });
  });
});
