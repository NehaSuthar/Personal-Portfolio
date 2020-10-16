//Document Ready
$(()=>{
    //menu toggle button
    $('.navbar-toggler').on('click', function(){
        $('.aside').toggleClass('aside-open');
        $(".ham").toggleClass('active');
    });
    
});