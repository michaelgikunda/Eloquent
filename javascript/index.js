   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var DropdownMenu1_dropdownToggle = document.querySelectorAll('#DropdownMenu1 .dropdown-toggle');
      DropdownMenu1_dropdownToggle.forEach(item => 
      {
         var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
      });
      var DropdownMenu1_dropdown = document.querySelectorAll('#DropdownMenu1 .dropdown');
      DropdownMenu1_dropdown.forEach(item => 
      {
         item.addEventListener('shown.bs.dropdown', function(e)
         {
            e.currentTarget.classList.add('show');
         });
         item.addEventListener('hidden.bs.dropdown', function(e)
         {
            e.currentTarget.classList.remove('show');
         });
      });
   });
   
   $(document).ready(function()
   {
      $("#SlideShow1").conveyerbelt({speed:3, spacing: 5});
   function countUpJavaScript1()
   {
      var $obj = $('#JavaScript1');
      var count = $obj.attr('data-count');
      var bottomObj = $obj.offset().top + $obj.outerHeight();
      var bottomWnd = $(window).scrollTop() + $(window).height();
      if (bottomWnd > bottomObj && count != 0)
      {
         $({countUp: $obj.text()}).animate({countUp: count},
         {
            duration: 4000,
            step: function() { $obj.text(Math.floor(this.countUp)); },
            complete: function() { $obj.text(this.countUp); $obj.attr('data-count', 0); }
         });  
      }
   }
   $(window).scroll( function()
   {
      countUpJavaScript1();
   });
   countUpJavaScript1();
   function countUpJavaScript2()
   {
      var $obj = $('#JavaScript2');
      var count = $obj.attr('data-count');
      var bottomObj = $obj.offset().top + $obj.outerHeight();
      var bottomWnd = $(window).scrollTop() + $(window).height();
      if (bottomWnd > bottomObj && count != 0)
      {
         $({countUp: $obj.text()}).animate({countUp: count},
         {
            duration: 4000,
            step: function() { $obj.text(Math.floor(this.countUp)); },
            complete: function() { $obj.text(this.countUp); $obj.attr('data-count', 0); }
         });  
      }
   }
   $(window).scroll( function()
   {
      countUpJavaScript2();
   });
   countUpJavaScript2();
   function countUpJavaScript3()
   {
      var $obj = $('#JavaScript3');
      var count = $obj.attr('data-count');
      var bottomObj = $obj.offset().top + $obj.outerHeight();
      var bottomWnd = $(window).scrollTop() + $(window).height();
      if (bottomWnd > bottomObj && count != 0)
      {
         $({countUp: $obj.text()}).animate({countUp: count},
         {
            duration: 4000,
            step: function() { $obj.text(Math.floor(this.countUp)); },
            complete: function() { $obj.text(this.countUp); $obj.attr('data-count', 0); }
         });  
      }
   }
   $(window).scroll( function()
   {
      countUpJavaScript3();
   });
   countUpJavaScript3();
   });
