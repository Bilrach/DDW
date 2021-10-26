$(document).ready(function(){

  console.log(localStorage);
var heightScreen= $(window).height();
var teller=0;
var e;
var sustainableAccept= ".tweede-hands, .sustainable, .fast-fashion" ;
var choice = "";


$('#wrapper-begin').css({
    "height" : heightScreen
});
$("#wrapper-welcom").css({
    "height" : heightScreen
})
$("#wrapper-scenario2").css({
    "height" : heightScreen
})
// $("#background-street").css({
//     "height" : heightScreen
// })
 console.log(heightScreen);




//random position
Math.random();
var theRandomNumber = Math.floor(Math.random() * 3) + 1;

if(theRandomNumber==1){
console.log('1');

//autority
$('#autority-keuze-s').css({
 'right': '15%',
  'top': '20%'
});
$('#autority-keuze-t').css({
  'right': '37%',
   'top': '20%'
 });
 $('#autority-keuze-f').css({
  'right': '58%',
   'top': '20%'
 });
 //scarcity
 $('#scarcity-keuze-s').css({
  'right': '37%',
   'top': '20%'
 });
 $('#scarcity-keuze-t').css({
   'right': '58%',
    'top': '20%'
  });
  $('#scarcity-keuze-f').css({
   'right': '15%',
    'top': '20%'
  });
  //social-proof
 $('#social-keuze-s').css({
  'right': '15%',
   'top': '20%'
 });
 $('#social-keuze-t').css({
   'right': '58%',
    'top': '20%'
  });
  $('#social-keuze-f').css({
   'right': '37%',
    'top': '20%'
  });



} else if(theRandomNumber==2){
  //autority
$('#autority-keuze-s').css({
  'right': '37%',
   'top': '20%'
 });
 $('#autority-keuze-t').css({
   'right': '58%',
    'top': '20%'
  });
  $('#autority-keuze-f').css({
   'right': '15%',
    'top': '20%'
  });
  //scarcity
  $('#scarcity-keuze-s').css({
   'right': '15%',
    'top': '20%'
  });
  $('#scarcity-keuze-t').css({
    'right': '37%',
     'top': '20%'
   });
   $('#scarcity-keuze-f').css({
    'right': '58%',
     'top': '20%'
   });
   //social-proof
  $('#social-keuze-s').css({
   'right': '58%',
    'top': '20%'
  });
  $('#social-keuze-t').css({
    'right': '15%',
     'top': '20%'
   });
   $('#social-keuze-f').css({
    'right': '37%',
     'top': '20%'
   });
 
  console.log('2');
}else if(theRandomNumber==3){
  $('#autority-keuze-s').css({
    'right': '58%',
     'top': '20%'
   });
   $('#autority-keuze-t').css({
     'right': '15%',
      'top': '20%'
    });
    $('#autority-keuze-f').css({
     'right': '37%',
      'top': '20%'
    });
    //scarcity
    $('#scarcity-keuze-s').css({
     'right': '58%',
      'top': '20%'
    });
    $('#scarcity-keuze-t').css({
      'right': '15%',
       'top': '20%'
     });
     $('#scarcity-keuze-f').css({
      'right': '37%',
       'top': '20%'
     });
     //social-proof
    $('#social-keuze-s').css({
     'right': '37%',
      'top': '20%'
    });
    $('#social-keuze-t').css({
      'right': '58%',
       'top': '20%'
     });
     $('#social-keuze-f').css({
      'right': '15%',
       'top': '20%'
     });

  console.log('3');
};

$('.intro-michelle-face-ani').addClass('gone'); 

 $('#button-begin').click(function(){
   
    console.log('Hey no');
    
    
    $('#michelle_intro-face').css({
      'filter' : 'blur(0px)',
      'transition' : 'transition: ease-in-out 1s',
    });
    $('.intro-michelle-face-ani').css({
      'z-index' : '1',
      'opacity' : '1',
    });
    $('#michelle_intro-face').addClass('open');
    $('.intro-michelle-face-ani').removeClass('gone'); 
    
    setTimeout(function(){ $('.intro-michelle-face-ani').addClass('gone'); }, 16000);
    setTimeout(function(){ $('#wrapper-welcom').addClass('open'); }, 16006);
    // $('#wrapper-welcom').addClass('open').delay(16006);
    $('#wrapper-begin').addClass('open');
    $('audio#city')[0].play();
    $('audio#intro')[0].play();
    setTimeout(function(){ $('audio#gala')[0].play(); }, 16510);
    setTimeout(function(){ $('#autority-keuze-f').addClass('glow'); }, 21110);
 });




//  $('body').on("click mousedown",function(e){
//     console.log(e);
// });


  $('.keuze1').draggable({
    revert: 'invalid',
    drag: function( event, ui ) {
     
      if($('.sustainable, .tweede-hands').hasClass('ui-draggable-dragging')){
        $(this).addClass('dragged');
      // console.log('dragging!');
      };

      if($('.fast-fashion').hasClass('ui-draggable-dragging')){
        $(this).addClass('dragged-bad');
      };
      
      $(this ).on( "dragstop", function( event, ui ) {
        $(this).removeClass('dragged');
        $(this).removeClass('dragged-bad');
        
      });
      

    //----------------------------------
    if($('.sustainable').hasClass('ui-draggable-dragging')){
      // $(this).addClass('sustainable-dropped');
      choice = "sustainable";
    console.log(choice);
    };
    if($('.tweede-hands').hasClass('ui-draggable-dragging')){
      // $(this).addClass('sustainable-dropped');
      choice = "tweede-hands";
    console.log(choice);
    };
    if($('.fast-fashion').hasClass('ui-draggable-dragging')){
      // $(this).addClass('sustainable-dropped');
      choice = "fast-fashion";
    console.log(choice);
    };



      
    }
    
  });
  
  //authority
  




  $('#drop1').droppable({
    
    drop: function( event, ui ) {
  
      $('audio#thanks')[0].play();
      $('audio#gala')[0].pause();
        
        $('#background-street').addClass('open');
        $('#drop1').addClass('open');
        $('#autority-keuze-s').addClass('open');
        $('#autority-keuze-t').addClass('open');
        $('#autority-keuze-f').addClass('open');
        // $('.next-event').addClass('open');
        
        $('.michelle-face').addClass('open');
        if($('.sustainable, .tweede-hands').hasClass('dragged')){
          $('.garbage').addClass('open');
          console.log('nice choice1');
        }

        //--------Next play scenario 2----------------------------------------------------
        setTimeout(function(){ $('#background-street').removeClass('open'); }, 4000);
        setTimeout(function(){ $('.michelle-face').removeClass('open'); }, 4000);
        setTimeout(function(){ $('#wrapper-welcom').removeClass('open'); }, 4000);
        setTimeout(function(){ $('#wrapper-scenario2').addClass('open'); }, 4000);
        setTimeout(function(){ $('audio#scarcity')[0].play(); }, 4000);
        setTimeout(function(){ $('#scarcity-keuze-f').addClass('glow'); }, 8000);

        var timer2 = "0:15";
        var interval = setInterval(function() {
        
        
          var timer = timer2.split(':');
          //by parsing integer, I avoid all extra string processing
          var minutes = parseInt(timer[0], 10);
          var seconds = parseInt(timer[1], 10);
          --seconds;
          minutes = (seconds < 0) ? --minutes : minutes;
          if (minutes < 0) clearInterval(interval);
          seconds = (seconds < 0) ? 59 : seconds;
          seconds = (seconds < 10) ? '0' + seconds : seconds;
          //minutes = (minutes < 10) ?  minutes : minutes;
          $('.countdown').html(minutes + ':' + seconds);
          timer2 = minutes + ':' + seconds;
      
      
          if(seconds==00 && minutes==0){
          $("#scarcity-keuze-f").addClass('gone');
          console.log('test');
          $('audio#scarcity-mist')[0].play();
          $('.countdown').remove();
          }
      
          //scarcity
          $('#drop2').droppable({
            drop: function( event, ui ) {
                console.log('Drop2!!');
                $('.countdown').remove();
                timer2 = minutes+99 + ':' + seconds;
                $('audio#scarcity-thanks')[0].play();
                $('audio#scarcity')[0].pause();
                $('#background-street').addClass('open');
                $('#scarcity-keuze-s').addClass('open');
                $('#scarcity-keuze-t').addClass('open');
                $('#scarcity-keuze-f').addClass('open');
                $('#drop2').addClass('open');
                // $('.next-event').addClass('open');
                $('.michelle-face').addClass('open');
                
                teller=teller+1;
      
                if($('.sustainable, .tweede-hands').hasClass('dragged')){
                  $('.boom').addClass('good');
                  $('.air').addClass('open');
                  $('.birds').addClass('open');
                  $('audio#birds-audio')[0].play();
                  $('audio#city')[0].pause();
                  console.log(teller);
                }
      
                if($('.fast-fashion').hasClass('dragged-bad')){
                  $('.boom-bad').addClass('bad');
                }
      
      
                localStorage.setItem("choice"+localStorage.length++, choice);
              // console.log(choice);
              // console.log(localStorage);

              //testing text-area
              



              //--------Next play scenario 3----------------------------------------------------
              console.log("yeah");
              setTimeout(function(){ $('#background-street').removeClass('open'); }, 4000);
              setTimeout(function(){ $('.michelle-face').removeClass('open'); }, 5000);
              setTimeout(function(){ $('#wrapper-welcom').removeClass('open'); }, 4000);
              setTimeout(function(){ $('#wrapper-scenario3').addClass('open'); }, 5000);
              setTimeout(function(){ $('#wrapper-scenario2').removeClass('open'); }, 5000);
              setTimeout(function(){ $('audio#date')[0].play();}, 5000);
              setTimeout(function(){ $('#social-keuze-f').addClass('glow'); }, 10000);

              
              
      
            }

            
            




          }); //einde drop
      
      
          
        }, 1000) //einde interval
        
        
        // if($('.sustainable').hasClass('sustainable-dropped')){
        //   inpKey=document.getElementById(this);
        
        // console.log(inpKey);
        // };
        
        //------------------local storage-----------------------------------------
        localStorage.setItem("choice"+localStorage.length++, choice);
        // console.log(choice);
        // console.log(localStorage);

        //testing text-area
        
    }
  });
 



  $('.next-event').click(function(){
    // $('.next-event').removeClass('open');
    // $('#background-street').removeClass('open');
    // $('.michelle-face').removeClass('open');
    // $('#wrapper-welcom').removeClass('open');
    
    if($('#wrapper-scenario2').hasClass('open')){
        console.log("yeah");
        $('#wrapper-scenario3').addClass('open');
        $('#wrapper-scenario2').removeClass('open');
        $('audio#date')[0].play();
        setTimeout(function(){ $('#social-keuze-f').addClass('glow'); }, 4000);
        $('audio#scarcity-thanks')[0].pause();
    } else{
        $('#wrapper-scenario2').addClass('open');
        $('audio#scarcity')[0].play();
        setTimeout(function(){ $('#scarcity-keuze-f').addClass('glow'); }, 3000);
    //clock-----------------------------------
  


    }

  });
  

  
//social proof
  $('#drop3').droppable({
    drop: function( event, ui ) {
        console.log('Drop3');
        $('audio#date-end')[0].play();
        $('audio#date')[0].pause();
        $('#background-street').addClass('open');
        $('#wrapper-scenario3').removeClass('open');
        $('#drop3').addClass('open');
        
        // $('.michelle-face').addClass('open');
        $('.michelle-face').css({
          'z-index' : '-1',
        });
        
       

        if($('.sustainable, .tweede-hands').hasClass('dragged')){
          
          
          if($('.boom').hasClass('good')){
            $('.boom').addClass('open');
          }

          if($('.boom-bad').hasClass('bad')){
            $('.boom-bad').addClass('open');
          }
          
          // console.log('nice choice3');
        }

        setTimeout(function(){ $('#wrapper-send-off').addClass('open'); }, 4500);
        setTimeout(function(){ $('audio#resolutions')[0].play(); }, 4500);




        localStorage.setItem("choice"+localStorage.length++, choice);
        // console.log(choice);
        console.log(localStorage);

        //testing text-area
        
    }
  });

  $('.reloading').click(function(){


    
    // $('#consolelog-data').append(localStorage.getItem("choice3")+"-"); 
//   function download(filename, text) {
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     element.setAttribute('download', filename);

//     element.style.display = 'none';
//     document.body.appendChild(element);

//     element.click();

//     document.body.removeChild(element);
// }

//     // Start file download.
//     document.getElementById("reloading").addEventListener("click", function(){
//         // Generate download of hello.txt file with some content
//         var text = document.getElementById("text-val").value;
//         var filename = "choice-data.txt";
        
//         download(filename, text);
//     }, false);






    location.reload();
    
  });
  

  
  

});//einde jquery



