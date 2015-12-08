# Backbone.js Carousel with Jasmine Tests

### To run the app

1. <code>git clone https://github.com/larissam/carousel.git</code>
2. Install dependencies (**see below**)
3. <code>cd carousel_clover/</code>
4. <code>$ python manage.py runserver</code>

### Dependencies
- Frontend:
  - App:
     - jQuery (included)
     - Underscore (included)
     - Backbone (included)
     - Handlebars (included)
     - RequireJS (included)
     - Sass (<code>$ gem install sass</code>, <code>$ gem install bootstrap-sass</code>)
     - Compass (<code>$ gem install compass</code>)
  - Testing:
     - Karma (<code>$ npm install karma</code>, <code>$ npm install karma-cli</code>, <code>$ npm install karma-chrome-launcher</code>)
     - RequireJS (<code>$ npm install requirejs</code>, <code>$ npm install karma-requirejs</code>)
     - Jasmine (<code>$ npm install jasmine</code>, <code>$ npm install karma-jasmine</code>)
     - Jasmine-jQuery (<code>$ npm install karma-jasmine-jquery</code>)

     - html2js (<code>$ npm install karma-html2js-preprocessor</code>)
- Backend (<code>$ pip install -r requirements.txt </code>):
   - Django
   - Django REST Framework
