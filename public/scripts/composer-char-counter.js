$(function(){
    var textBox = $('.new-tweet textarea').on('keyup', function(){
        var avaliableChar = 140 - $(this).val().length;
        var textCount = $('.counter').html(avaliableChar);
        if(avaliableChar < 0) {
            textCount.css({'color': 'red'});
        } else {
            textCount.css({ 'color': '' });
        }
    });
});