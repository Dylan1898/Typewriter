var sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate']
letterCounter=0
sentenceCounter=0

var sent =[
    (s1 = sentences[0].split('')),
    (s2 = sentences[1].split('')),
    (s3 = sentences[2].split('')),
    (s4 = sentences[3].split('')),
    (s5 = sentences[4].split('')), 
]
    
    
    console.log(s1)
    console.log(s1[0])
    
$(document).ready(function () {
    $('#keyboard-upper-container').hide();
    $(function () {
        $(document).keydown(function (e) {
            if (e.which == 16) {
                $('#keyboard-lower-container').hide()
                $('#keyboard-upper-container').show()
            }
        })
    })
    $(function () {
        $(document).keyup(function (e) {
            if (e.which == 16) {
                $('#keyboard-lower-container').show()
                $('#keyboard-upper-container').hide()
                console.log('shift')
            }
        })
    })
    // THIS MAKES PRESSED KEYS BACKGROUNDS YELLOW and then removes the class after .2 sec
    var map = {};
    $('span').each(function () {
        var key = $(this).text().trim();
        if (key.length == 1) map[key] = $(this);
    });
    console.log(map); 
    $(window).keypress(function (e) {
        var key = String.fromCharCode(e.which);
        if (map[key]) map[key].addClass('yellow');

        console.log('keypress');
        setTimeout(function () {
            $((map[key])).removeClass('yellow');
        }, 200);
    });

    
    // var map = {};
    // $('span').each(function () {
    //     var key = $(this).text().trim();
    //     if (key.length == 1) map[key] = $(this);
    // });
    // console.log(map);

    $(window).keypress(function (e) {
        x=sent[0]
        
        
        console.log(e.which)
        console.log(String.fromCharCode(e.which))
        
            if (x[letterCounter]== String.fromCharCode(e.which) ) {
               if (letterCounter<x.length){ letterCounter= letterCounter+1
                $('#yellow-block').animate({left: '+=17px'})
                console.log('first')  
                $('#target-letter').append(x[letterCounter ])
                $('#target-letter').remove(x[letterCounter ])
               } 
            }
            else if(x[letterCounter]=x.length){
                
                sent++

            }
            
            else{
                letterCounter=letterCounter
            }
            $('#target-letter').remove(x[letterCounter -1])
        }
    )






        
    
});
$('#sentence').append(sentences[0]);






    // console.log(map);
    // $(window).keyup(function (e) {
    //     var key = String.fromCharCode(e.which);
    //     if (map[key]) map[key].removeClass('yellow');






    // })








    // $(document).keypress(function(e) {
    //         if(e.which == ids[i] ){


    //         $('.well-well-lg-key','id').addClass('.yellow')
    //             console.log('it worked')
    //         }
    //         console.log(e.which)
    // })

    // this sorta works
    // $(document).keypress(function(e) {
    //         $("span[target='e.which id']")
    //             console.log('it worked');
    //             console.log(e.which)
    //         })

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
// attempt at follow string array

// function progressSentence(e) {
//         var s1 = sentences[0].split('')
//         console.log(s1.split(''))
//         if (String.fromCharCode(e.which) = s1[0]) {
//             console.log('first')
//         }
//     }