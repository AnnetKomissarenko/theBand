$(document).ready(function(){
        $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('nav').animate({"height" : "100px", "opacity" : "0.2"}, {queue : false}, 500);
            
        } else {
            $('nav').animate({"height" : "200px", "opacity" : "1"}, {queue: false}, 500);
        }
    });
    
    $('.menu a').click(function(event){
        event.preventDefault();
    
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 800, 'swing');

    });
    
    
    $('.discography a').click(function(event){
        event.preventDefault();
    });
    
    var newAlbum = '';
    var newSrc = '';
    
    $('.listen').click(function(){
        $('.currentAlb').text($(this).parent().find('a').text());
        newAlbum = $(this).parent().find('a').attr('rel');
        $('.album').not('#'+newAlbum).slideUp(100);
        $('#'+newAlbum).slideDown(100);
        $('.nowPlaying h5').text($('#'+newAlbum+' li:first').text());
        newSrc = $('#'+newAlbum+' li:first-child a').attr('href');
        $('audio').attr('src', newSrc);
        $('li:first-child').addClass('active');
        console.log($('audio').attr('src'));
    });
        
    $('.album li a').click(function(event){
        event.preventDefault();
        $('.album li').removeClass('active');
        var newTitle = $(this).parent().text();
        $('.nowPlaying h5').text(newTitle);
        var newSong = $(this).attr('href');
        $('audio').attr('src', newSong);
        $(this).parent('li').addClass('active');
    });




});
