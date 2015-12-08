define([
  "collections/PhotosCollection",
  "views/GalleryView",
  "views/DisplayView",
  "views/CarouselView"
], function (PhotosCollection, GalleryView, DisplayView, CarouselView) {
  describe("a carousel view", function () {
    var photosCollection, carouselView;
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
      spyOn(DisplayView.prototype, 'render').and.callThrough();
      spyOn(GalleryView.prototype, 'render').and.callThrough();
      carouselView = new CarouselView({
        collection: photosCollection
      });
    });
    afterAll(function () {
      photosCollection = null;
      carouselView = null;
    });
    it("should exist", function() {
      expect(carouselView).toBeDefined();
    });
    it("should have default values", function() {
      expect(carouselView.collection).toBeDefined();
      expect(carouselView.collection.activeSlide).toEqual(1);
    });
    it("should have a template", function() {
      expect(carouselView.template).toBeDefined();
    });
    describe("a rendered carousel view", function () {
      beforeAll(function () {
        displayView = carouselView.displayView;
        galleryView = carouselView.galleryView;

        carouselView.render();
        carouselView.$el.appendTo('body');
      });
      afterAll(function () {
        displayView = null;
        galleryView = null;
      });
      it("should display the current image", function() {
        expect(displayView).toBeDefined();
        expect(displayView.model.id).toBe('1');
        expect(displayView.render).toHaveBeenCalled();
      });
      it("should display the gallery", function() {
        expect(galleryView).toBeDefined();
        expect(galleryView.render).toHaveBeenCalled();
      });
      describe("when next slide arrow is clicked", function () {
        it("should go to the next slide if there is a next slide", function() {
          spyOn(carouselView.collection, 'trigger').and.callThrough();
          carouselView.toNext();
          expect(carouselView.collection.trigger).toHaveBeenCalledWith("change:activeSlide", {'activeSlideId' : 2});
        });
        it("should stay on the current slide if there is no next slide", function() {
          spyOn(carouselView.collection, 'trigger').and.callThrough();
          carouselView.toNext();
          expect(carouselView.collection.trigger).not.toHaveBeenCalledWith("change:activeSlide", {'activeSlideId' : 2});
        });
      });
      describe("when previous slide arrow is clicked", function () {
        it("should go to the previous slide if there is a previous slide", function() {
          spyOn(carouselView.collection, 'trigger').and.callThrough();
          carouselView.toPrev();
          expect(carouselView.collection.trigger).toHaveBeenCalledWith("change:activeSlide", {'activeSlideId' : 1});
        });
        it("should stay on the current slide if there is no previous slide", function() {
          spyOn(carouselView.collection, 'trigger').and.callThrough();
          carouselView.toNext();
          expect(carouselView.collection.trigger).not.toHaveBeenCalledWith("change:activeSlide", {'activeSlideId' : 1});
        });
      });
      it("should update the active slide when change:activeSlide is triggered", function() {
        carouselView.collection.trigger("change:activeSlide", {'activeSlideId' : 2});
        expect(carouselView.collection.activeSlide).toBe(2);
      });
    });
  });
});
