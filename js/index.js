function ativaScrollSuave(selector){
 $(selector).click(function(event){
    event.preventDefault();

    var target = $(this).attr('href');
 
    /*selecionar*/$('html, body').animate({ /*até*/
        scrollTop: $(target).offset().top
        /* pagar o target dele, tirar o offset dele e pegar o top em um segundo*/
    }, 1000)
});
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-hqs]');
ativaScrollSuave('a[href*=panel-image]');