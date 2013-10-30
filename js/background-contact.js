// JavaScript Document

// Object to activate focus and blur style changes for INPUT text boxes in 
    // Internet Explorer
    var InputFocus = {
      classNameFocus  : "focus",
      classNameBlur   : "",
      
      initialize : function() {
        // Test for Internet Explorer, and version that supports standard DOM calls
        if (window.ActiveXObject && document.selection && document.all && document.getElementById && document.getElementsByTagName) {
          alert("It's internet explorer!");
          var inputs = document.getElementsByTagName("input");
          var i = 0;
          var end = inputs.length;
          
          for (i; i < end; i++) {
            inputs[i].onfocus = function() {
              InputFocus.doFocus(this);
            };
            
            inputs[i].onblur = function() {
              InputFocus.doBlur(this);
            };
            
          }
        }
      },
      
      doBlur : function(el) {
        el.className = el.className.replace(this.classNameFocus, this.classNameBlur);
        el = null;
      },
      
      doFocus : function(el) {
        el.className += this.classNameFocus;
      }
      
    };
    
    window.onload = function() {
      InputFocus.initialize();
    };