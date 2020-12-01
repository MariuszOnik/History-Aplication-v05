

$(".plan-kolo").on("click", function (params) {

    let curentSRC = $(this).data("url")
    console.log(curentSRC)
    $("#full-screen-panel").addClass("full-screen-panel-active")
    $("#fuul-screen-panel-image")[0].src = curentSRC; 
   $("#full-image-title").text("");
    
    Seting.curentZoom = $("#fuul-screen-panel-image")[0];
    Seting.zoom = new Zoom(Seting.curentZoom,{
        rotate: false
    })

   
          

    

    $(".zoom-exit").addClass("zoom-exit-active");
    
})

