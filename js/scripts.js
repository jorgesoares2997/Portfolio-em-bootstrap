$(document).ready(function() {
    // progress bar

    let containerA= document.getElementById('circleA')
    let circleA = new ProgressBar.Circle(containerA, {
        color: '#f99364',
        strokeWidth: 8,
        duration: 1400,
        from: {color: '#AAA'},
        to: {color: '#f99364'},

        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 100);

            circle.setText(value);
        }
    });
    let containerB= document.getElementById('circleB')
    let circleB = new ProgressBar.Circle(containerB, {
        color: '#f99364',
        strokeWidth: 8,
        duration: 1600,
        from: {color: '#AAA'},
        to: {color: '#f99364'},

        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 100);

            circle.setText(value);
        }
    });
    let containerC= document.getElementById('circleC')
    let circleC = new ProgressBar.Circle(containerC, {
        color: '#f99364',
        strokeWidth: 8,
        duration: 2000,
        from: {color: '#AAA'},
        to: {color: '#f99364'},

        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 12);

            circle.setText(value);
        }
    });
    let containerD= document.getElementById('circleD')
    let circleD = new ProgressBar.Circle(containerD, {
        color: '#f99364',
        strokeWidth: 8,
        duration: 2200,
        from: {color: '#AAA'},
        to: {color: '#f99364'},

        step: function(state,circle){
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 12);

            circle.setText(value);
        }
    });

    // iniciando o loader quando o usuario chega no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e){

        let scroll = $(window).scrollTop();
        if(scroll > (dataAreaOffset.top - 500) && stop == 0){
            circleA.animate(0.75);
            circleB.animate(0.55);
            circleC.animate(0.6);
            circleD.animate(0.82);

            stop =  1;
        }

    });

    //parallax
    setTimeout(function(){

    
        $('#data-area').parallax({imageSrc:'img/para.jpg'});
        

    }, 250);

    // Filtro do portfólio
    $('.filter-btn').on('click', function(){
        let type= $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

       
    if(type == 'dsg-btn') {
        eachBoxes('dsg', boxes);
      } else if(type == 'dev-btn') {
        eachBoxes('dev', boxes);
      } else if(type == 'seo-btn') {
        eachBoxes('seo', boxes);
      } else {
        eachBoxes('all', boxes);
      }
  
    });
  
    function eachBoxes(type,boxes){
        if(type == 'all'){
            $(boxes).fadeIn();
        }else{
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('slow');
                }else{
                    $(this).fadeIn();
                }
            });
        }
    }
    // Scroll para seções 
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo ='';
    $(navBtn).click(function(){
        let btnId = $(this).attr('id');

        if(btnId == 'about-menu'){
            scrollTo = aboutSection;
        
        }else if (btnId == 'services-menu'){
        scrollTo = servicesSection;
        }else if (btnId == 'team-menu'){
             scrollTo = teamSection;       
        }else if (btnId == 'portfolio-menu'){
            scrollTo = portfolioSection;
        }else if (btnId == 'contact-menu'){
            scrollTo = contactSection;     
        }else {
            scrollTo=bannerSection
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
    }, 1500);

        
    });
   

});