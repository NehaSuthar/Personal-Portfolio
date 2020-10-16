//Document Ready
function setFooterYear(){
    //updated footer copywrite year
    const year = new Date().getFullYear();
    $('.footer span').text(year);
}
function toogleNavBar(){
    //menu toggle button
    $('.navbar-toggler').on('click', function(){
        $('.aside').toggleClass('aside-open');
        $(".ham").toggleClass('active');
    });
}
function smoothScrol(){
     //smooth scroll
     $('.navbar-nav a').on('click', function() {
        var $section = $(this);
        $('html, body').animate({
            scrollTop: $($section.attr('href')).offset().top
        }, 900);
    });
}
function contactEmailCopy(){
     //Contact Email Copy button tooltip
     $('.email-address').on('mouseout',function(){
        const tooltip = $('.tooltiptext');
        $(tooltip).text("Click to copy")
    });

    //Contact Email Copy button
    $('.email-address').on('click',function(){
        const temp = $("<input>");
        const emailAddress = $('.email-address')[0].firstChild.data;
        $("body").append(temp);
        temp.val(emailAddress).select();
        document.execCommand("copy");
        temp.remove();
        const tooltip = $('.tooltiptext');
        $(tooltip).text('Copied');
       
    });
}
init = () => {
    setFooterYear();
    toogleNavBar();
    smoothScrol();
    contactEmailCopy();
}
$(()=>{
    init();  
});