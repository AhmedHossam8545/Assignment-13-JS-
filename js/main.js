$(".openNav").click(function(){
    $("#leftMenu").animate({width: '250px'} ,50)
    $(".openNav").animate({left : '250px'} , 500)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({width: '0px'} ,50)
    $(".openNav").animate({left : '0px'} , 500)

})

$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
    console.log(this);
});

window.onload=function(){
    countTimeTo("26 july 2024 7:00:00")
}


function countTimeTo(fDate){
    let futureDate = new Date(fDate);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDiff = (futureDate- now);
        
   let days = Math.floor( timeDiff / (24*60*60));
   let hours = Math.floor((timeDiff - (days * (24*60*60))) / 3600);
   let minutes = Math.floor((timeDiff - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let seconds = Math.floor((timeDiff - (days * (24*60*60)) - (hours * 3600) - (minutes * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} H`);
    $(".minutes").html(`${ minutes } M`);
    $('.seconds').html(`${ seconds} S`)

  
    setInterval(function() 
        {  
            countTimeTo(fDate); 
        }, 1000);

}

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var charLeft = maxLength-length;
    if(charLeft<=0)
    {
        $("#chars").text("Your Available Character Finished");  
        $(".charMsg").addClass("d-none")       
    }

    else
    {
        $("#chars").text(charLeft);
        $(".charMsg").removeClass("d-none")       

    }
});
