'use strict';

var app = app || {};

(function(module) {

  let aboutController = {};

  aboutController.initAbout = function(){
    $('div').hide();
    $('#about-div').show();
  };

  module.aboutController = aboutController;
})(app);
