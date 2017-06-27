var sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate']
var letterCounter = 0
sentenceCounter = 0
var start = new Date()
x = sentences[sentenceCounter]
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
$(document).keypress(function (e) {
    numberOfWords = 54
    numberOfMistakes = 0
    x = sentences[sentenceCounter]
    if (sentenceCounter === sentences.length) {
        var end = new Date()
        var elapsed = end - start
        var seconds = Math.round(elapsed / 1000);
        var minutes = Math.round(seconds / 60);
        $('#feedback').empty()
        $('#feedback').append('Your score is ' + ((numberOfWords / minutes) - (2 * numberOfMistakes)));
        setTimeout(function () {
            confirm('Would you like to play again?')
            if (confirm) {
                location.reload()
            }
        }, 3000)
        setTimeout()
        sentenceCounter = 0
        letterCounter = 0
    }
    if (letterCounter === x.length - 1) {
         $('#yellow-block').css('left' , '5.75em')
        letterCounter = 0
        $('#sentence').empty();
        $('#target-letter').empty();
        
        sentenceCounter++
        $('#sentence').append(sentences[sentenceCounter])
        x = sentences[sentenceCounter]
        $('#target-letter').append(x[letterCounter])
    }
    $('#feedback').empty()
    if (x[letterCounter] == String.fromCharCode(e.which)) {
        $('#target-letter').empty()
        $('#feedback').append('<div class="glyphicon glyphicon-ok"></div>');
        if (letterCounter < x.length) {
            letterCounter = letterCounter + 1
            $('#yellow-block').animate({ left: '+=.75em' }, 12)
            $('#target-letter').append(x[letterCounter])
        }
    }
    else if (x[letterCounter] !== String.fromCharCode(e.which)) {
        $('#feedback').append('<div class="glyphicon glyphicon-remove"></div>')
        letterCounter = letterCounter
        // console.log('dosentmatch')
        numberOfMistakes++
    }
})
$(document).ready(function () {
    $('#sentence').append(sentences[sentenceCounter])
    $('#target-letter').append(x[letterCounter])/*MAKE ONLY FIRST LETTER OF FIRST LINE WORK*/
})






