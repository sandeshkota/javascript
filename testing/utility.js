(function () {
    'use strict';
  
    // Create a global variable and expose it to the world
    var $myapp = {};
    self.$myapp = $myapp;
  
    $myapp.repeater = function(value, count)
    {
        if (isNaN(count)) {
            return "[error] count is not a number";
        }
    
        if (count < 1) {
            return "[error] count is less than one";
        }
    
        return value.repeat(count).trimLeft().trimRight();
    }
  })();