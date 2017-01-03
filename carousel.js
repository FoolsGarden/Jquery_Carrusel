$(document).ready(function(){
  
   //  //get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '  
   item1_width = $('.frames li').outerWidth();  

   //  //calculate the new left indent of the unordered list  
   left_indent = parseInt($('.frames').css('left')) - item1_width;  

   //  $('#previous_frame').on("click", function(){  
  
   //  //make the sliding effect using jquery's anumate function '  
   //    $('.frames').animate({'left': left_indent},function(){  

   //      /* when sliding to left we are moving the last item before the first item */  
   //      $('.frames li:last').before($('.frames li:first'));  

   //      /* and again, when we make that change we are setting the left indent of our unordered list to the default -210px */  
   //      $('.frames').css({'left' : '0px'});  
   //  });  
    
   // });  


   // $('#next_frame').on("click", function(){  
    
   //    //var item_width = $('.frames li').outerWidth();  

   //    /* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - item_width) */  
   //    var right_indent = parseInt($('.frames').css('left')) + item1_width;
   //    $('.frames li:last').after($('.frames li:first'));  
   //    $('.frames').animate({'left': right_indent},function(){  

   //      /* when sliding to left we are moving the last item before the first item */  
        

   //      /* and again, when we make that change we are setting the left indent of our unordered list to the default -210px */  
   //      $('.frames').css({'left' : '0px'});  
   //    });  

   //  });  



    $('#previous_frame').on('click', function(){
      var $last = $('.frames li:last');
      $last.remove().css({ 'margin-left': left_indent});
      $('.frames li:first').before($last);
      $last.animate({ 'margin-left': '0px' }, 500);
    });

    $('#next_frame').on('click', function(){
      var $first = $('.frames li:first');
      $first.animate({ 'margin-left': left_indent}, 500, function() {
          $first.remove().css({ 'margin-left': '0px' });
          $('.frames li:last').after($first);
      });
    });

});
  




