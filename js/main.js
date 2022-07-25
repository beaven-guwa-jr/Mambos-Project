window.onload = function(){


    //----------------------- HAMBURGER MENU------------------------
    const menu_btn = document.querySelector('.hamburger');
    const mobile_nav = document.querySelector('.mobile-nav');
    const body = document.querySelector('body')
    

    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');

        if(menu_btn.classList.contains('is-active')){
            body.classList.add('no-scroll');  
        }
        else{
            body.classList.remove('no-scroll');
        }

    })

    //  ---------------------CAROUSEL------------------

    $('.banner').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToshow:1,
        prevArrow:'<i class="fas fa-chevron-circle-left fa-3x left-arrow d-none d-md-flex">',
        nextArrow:'<i class="fas fa-chevron-circle-right fa-3x right-arrow d-none d-md-flex">',
    });
     

          // --------TABS---------
      var tabTriggerBtns = document.querySelectorAll('.tabs li button');
      tabTriggerBtns.forEach(function(tabTriggerBtn, index){
          tabTriggerBtn.addEventListener('click', function(){
              var currentTabData = document.querySelector('.tab-content[data-tab-content="' + this.dataset.tabTrigger + '"]');

              // remove classess
              document.querySelector('.tab-content.is-open').classList.remove('is-open');
              document.querySelector('.tabs li button.is-active').classList.remove('is-active');
              // add classes
              currentTabData.classList.add('is-open');
              this.classList.add('is-active');
          });
      });
     
      var tabs = document.querySelectorAll('.customer li button');
      tabs.forEach(function(tabs, index){
          tabs.addEventListener('click', function(){
              var currentTab = document.querySelector('.tab-content[data-tab-content="' + this.dataset.tabTrigger + '"]');

              // remove classess
              document.querySelector('.tab-content.is-open').classList.remove('is-open');
              document.querySelector('.tabs li button.is-active').classList.remove('is-active');
              // add classes
              currentTab.classList.add('is-open');
              this.classList.add('is-active');
          });
      });

    //   SPECIALS CAROUSEL
     
 
    $('.specials').slick({
        centerPadding: '60px',
        mobileFirst:true,//add this one
        slidesToShow: 1,
        responsive: [
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 1024,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        }
        ]
    });
      
    //   ACOUSTIC NIGHT CAROUSEL
      $('.artists').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow:'<img src="./img/Group 1397.png" alt="" class="img-fluid l d-none d-md-flex">',
        nextArrow:'<img src="./img/Group 1398.png" alt="" class="img-fluid r d-none d-md-flex">',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
                }
            }
            ]
        
      });

}