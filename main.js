var ids = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126]
$(document).ready(function(){
    $('#keyboard-upper-container').hide();

// $(document).keypress(function(e){
//     if(e.which == 16){
//     // $('keyboard-lower-container').toggle();
//     // $('keyboard-upper-container').toggle();
//     console.log( 'shift')
//     };

// })
// $(function() {                           
//     $(document).keydown(function(e) {
//         if(e.which == 16){
//         $('#keyboard-lower-container , #keyboard-upper-container').toggle(function(){
//         })
        
//             console.log('shifted')
//         }
//     });

    
// })
$(function() {                           
    $(document).keydown(function(e) {
        if(e.which == 16){
        $('#keyboard-lower-container').hide()
        $('#keyboard-upper-container').show()
        }   
    })
        })
        $(function() {                           
    $(document).keyup(function(e) {
        if(e.which == 16){
        $('#keyboard-lower-container').show()
        $('#keyboard-upper-container').hide()
        console.log('shift')
        }   
    })
        })



        // THIS MAKES PRESSED KEYS BACKGROUNDS YELLOW
 var map = {};
$('span').each(function(){
   var key = $(this).text().trim();
   if (key.length==1) map[key]=$(this);
});
console.log(map);
$(window).keypress(function(e){
  var key = String.fromCharCode(e.which);
  if (map[key]) map[key].addClass('yellow');




  
  
});

// this sorta works
        // $(document).keypress(function(e) {
        //         $("span[target='e.which id']")
        //             console.log('it worked');
        //             console.log(e.which)
        //         })
                
  })      








        // $(document).keypress(function(e) {
        //         if(e.which == ids[i] ){
                    
                    
        //         $('.well-well-lg-key','id').addClass('.yellow')
        //             console.log('it worked')
        //         }
        //         console.log(e.which)
        // })
        