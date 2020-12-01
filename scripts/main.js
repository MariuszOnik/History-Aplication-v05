
TouchEmulator();

const PL = "pl";
const EN = "en";
const ACTIVE_PAGE = "active-page"





var Seting ={
  
}
Seting.curentLanguage = null;
Seting.curentPage = "language-selection"
Seting.curentFontSize = null;
Seting.maxFontSize = 4;
Seting.minFontSize = 1; 
Seting.mainColor= "antiquewhite";
Seting.columnTextColor = "rgba(34, 33, 33, 0.658)";
Seting.contrastEnable = false; 
Seting.intervals = [];
Seting.newURLsetAlredy = false; 
Seting.sliders = []; 


const LanguageEvent = new Event('LanguageChange'); 


SetLanguage(PL); 



function SetLanguage(language){
  
 
 
  if(language == PL){
    Seting.curentLanguage = PL
    dispatchEvent(LanguageEvent)
   
    let selectorON = "."+PL;
    let selectorOFF =  "."+EN;
    $(selectorOFF).hide();
    $(selectorON).show();
  }
  if(language == EN){
    Seting.curentLanguage = EN
    dispatchEvent(LanguageEvent)
   
    let selectorON = "."+EN;
    let selectorOFF =  "."+PL;
    $(selectorOFF).hide();
    $(selectorON).show();
  }
  
 
}


function Slider(_pageID, sliderId, imagesTable, imagesTitleTablePL, imagesTitleTableEN){

  var o = {}

  o.page = _pageID
  o.slider = $("#"+sliderId);
  o.licznik = 0;
  o.transitionIsDone = true; 
  o.imgs = imagesTable;
  o.titlesPL = imagesTitleTablePL;
  o.titlesEN = imagesTitleTableEN;


  o.imgA = $("#"+sliderId+"> span.image-slider-a >img")
  o.imgB = $("#"+sliderId+"> span.image-slider-b >img")
  o.spanA = $("#"+sliderId+"> span.image-slider-a")
  o.spanB = $("#"+sliderId+"> span.image-slider-b")
  o.curentTitle = $("#"+_pageID+">.first-column >.image-in-slider-title")
  o.info = $("#"+_pageID+">.first-column >.info")
  o.buttonNext = $("#"+_pageID+">.first-column > .left-ster")
  o.buttonPrev = $("#"+_pageID+">.first-column > .right-ster")
  o.timeOutHandler = null; 
  o.curentLanguage = null;
  o.duration = 1000; 
  o.fullImageTitle = $("#full-image-title"); 

  

  o.init = function () {
      
      
      o.info.text((o.licznik+1) + " / " + o.imgs.length)
     
      o.curentLanguage = Seting.curentLanguage; 

      o.slider.on("click", function (params) {
          $("#full-screen-panel").addClass("full-screen-panel-active")
          $("#fuul-screen-panel-image")[0].src = o.imgA[0].src;
         
          o.fullImageTitle.text(o.curentTitle.text())
          Seting.curentZoom = $("#fuul-screen-panel-image")[0];
          Seting.zoom = new Zoom(Seting.curentZoom,{
              rotate: false
          })
          /*let imWidth = parseInt($("#fuul-screen-panel-image").css("width"))/2;
          let imHeight = parseInt($("#fuul-screen-panel-image").css("height"));
          let panelWidth = parseInt($("#full-screen-panel").css("width"))/2;
          let panelHeight = parseInt($("#full-screen-panel").css("height"));
          //console.log(panelWidth-imWidth)
  
          if(imHeight >= panelHeight){
              Seting.zoom.activeZoom.b = [(panelWidth-imWidth),0]
          }else{
              let roznica = (panelHeight - imHeight)/2;
              Seting.zoom.activeZoom.b = [(panelWidth-imWidth),roznica]
          }
          
  
          Seting.zoom.repaint()*/
          $(".zoom-exit").addClass("zoom-exit-active");
      })

      if(o.curentLanguage == "pl"){
          o.curentTitle.text(o.titlesPL[o.licznik]);
      }
      if(o.curentLanguage == "en"){
          o.curentTitle.text(o.titlesEN[o.licznik]);
      }
  }

      o.buttonNext.on("click", function (params) {
        if(o.transitionIsDone == true){
          o.next()
        }
          
      })
      o.buttonPrev.on("click", function (params) {
        if(o.transitionIsDone == true){
          o.prev()
        
        }
    })

  o.changeLanguage = function (params) {
      o.curentLanguage = Seting.curentLanguage; 
      
      if(o.curentLanguage == "pl"){
          o.curentTitle.text(o.titlesPL[o.licznik]);
      }

      if(o.curentLanguage == "en"){
          console.log(o.titlesEN[o.licznik])
          o.curentTitle.text(o.titlesEN[o.licznik]);
      }

  }

  o.next = function (params) {
      o.transitionIsDone = false;
      o.curentTitle.text("...");
      o.licznik = o.licznik + 1;
      if(o.licznik>= o.imgs.length){
          o.licznik = 0;
      }
      o.imgB[0].src = o.imgs[o.licznik];
      o.spanB.addClass('active');
      o.info.text((o.licznik+1) + " / " + o.imgs.length);
     
 
      
      o.timeOutHandler = setTimeout(() => {
          o.imgA[0].src = o.imgB[0].src;
          if(o.curentLanguage == "pl"){
            o.curentTitle.text(o.titlesPL[o.licznik]);
        }
        if(o.curentLanguage == "en"){
            o.curentTitle.text(o.titlesEN[o.licznik]);
        }
          o.spanB.removeClass('active');
          o.transitionIsDone = true; 
      }, o.duration);

  }
  o.prev = function (params) {
    o.curentTitle.text("...");
      o.transitionIsDone = false;
      o.licznik = o.licznik - 1;
      if(o.licznik < 0){
          o.licznik = o.imgs.length-1
      }
      o.imgB[0].src = o.imgs[o.licznik];
      o.spanB.addClass('active');
      o.info.text((o.licznik+1) + " / " + o.imgs.length);
     
      o.timeOutHandler = setTimeout(() => {
          o.imgA[0].src = o.imgB[0].src;
          if(o.curentLanguage == "pl"){
            o.curentTitle.text(o.titlesPL[o.licznik]);
        }
        if(o.curentLanguage == "en"){
            o.curentTitle.text(o.titlesEN[o.licznik]);
        }
          o.spanB.removeClass('active');
          o.transitionIsDone = true; 
      }, o.duration);
  }

  return o; 

}

/*$("#lupa-kazimierz").on("click", function name(params) {
  $("#full-screen-panel").addClass("full-screen-panel-active")
  $("#fuul-screen-panel-image")[0].src = "./img/Historia/1/Kazimierz Wielki-historia-1.jpg"

  Seting.curentZoom = $("#fuul-screen-panel-image")[0];
  Seting.zoom = new Zoom(Seting.curentZoom,{
    rotate: false
  })
  

  $(".zoom-exit").addClass("zoom-exit-active");
})*/

$(".zoom-exit").on("click", function name(params) {
  Seting.zoom.reset()
  $(".zoom-exit").removeClass("zoom-exit-active");
  $("#full-screen-panel").removeClass("full-screen-panel-active")
  $("#fuul-screen-panel-image")[0].src = ""
  
})


/*$("#lupa-kazimierz-dokument").on("click", function name(params) {
  $("#full-screen-panel").addClass("full-screen-panel-active")
  $("#fuul-screen-panel-image")[0].src = "./img/Historia/1/Dokument  Kaziemierza Wielkiego.jpg"
  Seting.curentZoom = $("#fuul-screen-panel-image")[0];
  Seting.zoom = new Zoom(Seting.curentZoom,{
    rotate: false
  })

  
  $(".zoom-exit").addClass("zoom-exit-active");
})*/




function BlockedNavigation(){
  $(".navigation-button").off("click")
  console.log("Blokuje navigacje")
}
function UnBlockedNavigation(){
  $(".navigation-button").on("click", function name(params) {
        
        navigate($(this))
        console.log("odblokowuje nawigacje")
        
  })
}

var curent = true; 
$(".test-animacji").on("click", function name(params) {

  var im1 = "./img/Historia/menu/karta-historia-3.png";
  var im2 = "./img/Historia/menu/karta-historia-1.jpg";

    var image = $("#test-image-change")[0]; 
    animateCSSbyClassName($(this)[0], fadeOutLeft).then((mes)=>{
        image.src = curent == true ? im2 :im1 ; 
        animateCSSbyClassName($(this)[0], fadeInRight).then((mes)=>{
          
          
          
      })
        curent = !curent; 
    })
})

function navigate($this){
  
  var url = $this.data("url");
  
  /*$this.css({
    "transform":"translate(-100%,-100%)!important"
  })*/
  
  console.log("navigate to : " + url)

  var animationData = $this.data("animation");
  var defaultAnimation = bounceIn; 
  var animation = null; 

    if(animationData != null && animationData != undefined){
      animation = animationData
    }else{
      animation = defaultAnimation; 
    }
    animateCSSbyClassName($this[0],animation).then((mes)=>{
     console.log("MES = " + mes)
      Seting.newURLsetAlredy = false; 
      console.log("ustawiam zmienna new url na false = "+  Seting.newURLsetAlredy)
     
      
      $("#"+Seting.curentPage).removeClass(ACTIVE_PAGE);

      console.log("usuwam active page z " + "#"+ Seting.curentPage + " "+( $("#"+Seting.curentPage).hasClass("active-page)")))
     
     
      let newActivePage = $("#"+url);
     
      newActivePage.addClass(ACTIVE_PAGE);
      
      
      
      Seting.curentPage= newActivePage[0].id; 
      console.log(Seting.curentPage);

      if($this.hasClass("l-s-PL")){
        SetLanguage(PL)
      }
      if($this.hasClass("l-s-EN")){
        SetLanguage(EN)
      }
      
     

  }).catch(error => alert(error.message));



}

function navigate1($this){
  
    var url = $this.data("url");
    
    /*$this.css({
      "transform":"translate(-100%,-100%)!important"
    })*/
      animateCSSbyClassName($this[0],bounceOut).then((mes)=>{
      
     
      animateCSS(Seting.curentPage, zanikanie ).then((message) => {
    
        
        $("#"+Seting.curentPage).removeClass(ACTIVE_PAGE);
        let newActivePage = $("#"+url);
       
        newActivePage.addClass(ACTIVE_PAGE);
        
        
        animateCSS(newActivePage[0].id, pojawianie)       
        Seting.curentPage= newActivePage[0].id; 
        console.log(Seting.curentPage);
  
        if($this.hasClass("kolo-pl")){
          SetLanguage(PL)
        }
        if($this.hasClass("kolo-en")){
          SetLanguage(EN)
        }
  
      

    })

  })
  
}


//var z = document.getElementById("testZoom");

//var yy = new Zoom(z); 

$(".pl-button.en").on( "click", function() {
 
  console.log("pl-button.en")
  if(Seting.newURLsetAlredy == false){
   
    Seting.newURLsetAlredy = true; 
    //animateCSS(Seting.curentPage, zanikanie).then((mesage)  =>  {
      
    animateCSSbyClassName($(this)[0], bounceIn).then((mesage)  =>  {
        SetLanguage(PL);
        Seting.newURLsetAlredy = false; 
    })
     //}) 
  }else{
    //console.log("ZAJETE !!!!!!!!!!!!!!!"); 
    return; 
  }  

});
$(".en-button.pl").on( "click", function() {
  console.log("en-button.pl")
  if(Seting.newURLsetAlredy == false){
   
    Seting.newURLsetAlredy = true; 
    //animateCSS(Seting.curentPage, zanikanie).then((mesage)  =>  {
      
    animateCSSbyClassName($(this)[0], bounceIn).then((mesage)  =>  {
        SetLanguage(EN);
        Seting.newURLsetAlredy = false; 
    })
     //}) 
  }else{
    //console.log("ZAJETE !!!!!!!!!!!!!!!"); 
    return; 
  }  

});

$(".font-plus").on("click", function name(e) {

    
    var root =document.querySelector(':root');
    let syleOfRoot = getComputedStyle(root);
    var curentfontsize = parseInt(syleOfRoot.getPropertyValue('--p-font-size'))

    if((curentfontsize + 1)<=Seting.maxFontSize){
        curentfontsize = curentfontsize+1; 
        root.style.setProperty('--p-font-size', curentfontsize+'vw');
    }
 
})
$(".font-minus").on("click", function name(e) {

    
  var root =document.querySelector(':root');
  let syleOfRoot = getComputedStyle(root);
  var curentfontsize = parseInt(syleOfRoot.getPropertyValue('--p-font-size'))

  if((curentfontsize - 1)>=Seting.minFontSize){
      curentfontsize = curentfontsize-1; 
      root.style.setProperty('--p-font-size', curentfontsize+'vw');
  }

})

$(".navigation-button").on("click", function name(e) {

    
   
    
    if(Seting.newURLsetAlredy == false){
      console.log("WOLNE !!!!!!!!!!!!!!!"); 
      Seting.newURLsetAlredy = true; 
      navigate($(this))
    }else{
      console.log("ZAJETE !!!!!!!!!!!!!!!"); 
      return; 
    }
    
    
    
    
    
    //UnBlockedNavigation()

    /*var url = $(this).data("url");
   animateCSSbyClassName($(this)[0], flash).then((mes)=>{
    animateCSS(Seting.curentPage, bounceOut).then((message) => {
    

      $("#"+Seting.curentPage).removeClass(ACTIVE_PAGE);
      let newActivePage = $("#"+url);
     
      newActivePage.addClass(ACTIVE_PAGE);
      
      
      animateCSS(newActivePage[0].id, fadeInRight)       
      Seting.curentPage= newActivePage[0].id; 
      console.log(Seting.curentPage);

      if($(this).hasClass("wraper-l-s-h1-pl")){
        SetLanguage(PL)
      }
      if($(this).hasClass("wraper-l-s-h1-en")){
        SetLanguage(EN)
      }

      UnBlockedNavigation()
    })
   })*/
    

    
})


document.body.setScaledFont = function (f) {
  var s = this.offsetWidth,
      fs = s * f;
  this.style.fontSize = fs + '%';
  return this
};


function exit(){
  ActualZoomingImage.zoom.reset();
  document.exitFullscreen();
  
}
const ActualZoomingImage = {
  id: null,
  zoom: null, 
  isOn: false,
  counter: 0,
  style: {},
  $el: null,
  isFuulScren : false,
  $exit: null,
  $imageInFuul: null,
  $progresBar: null,
  $fuulImageToLoad: null
  

}
var isOn = false; 

var allZoomImage = []; 
ActualZoomingImage.$exit = $('#zoom-exit-button'); 
ActualZoomingImage.$fuulImageToLoad = $("#full-screen-panel-image");


function ShowFuulScreen($this){

  ActualZoomingImage.$el = $this;

  if(ActualZoomingImage.isFuulScren == false){
    
    ActualZoomingImage.$exit.toggleClass("zoom-exit-active");
    $("#panel").toggleClass("full-screen-panel-active");
    /*ActualZoomingImage.$imageInFuul = $this.children().first();
    ActualZoomingImage.id = ActualZoomingImage.$imageInFuul[0].id;
    ActualZoomingImage.zoom = CreateZoomImage(ActualZoomingImage.id);
    $this.toggleClass("zoom-wraper-full");
    ActualZoomingImage.$imageInFuul.toggleClass("zoom-mage-fuul")
    ActualZoomingImage.isFuulScren = true; */
  }

}

function ExitFuulScreen($this,event){
  event.preventDefault();
  event.stopPropagation();
  
  if(ActualZoomingImage.isFuulScren == true){

    ActualZoomingImage.zoom.reset();
    ActualZoomingImage.$imageInFuul.toggleClass("zoom-mage-fuul")
    ActualZoomingImage.$exit.toggleClass("zoom-exit-active");
    ActualZoomingImage.$el.toggleClass("zoom-wraper-full");
    ActualZoomingImage.zoom.destroy(); 
    ActualZoomingImage.zoom = null;
    ActualZoomingImage.id = null;
    ActualZoomingImage.$el = null;
    ActualZoomingImage.isFuulScren = false;
  
  }
}


$(".zoom-wraper").on("click", function name(e) {
  
  

  $("#panel").toggleClass("full-screen-panel-active");
  ActualZoomingImage.$exit.toggleClass("zoom-exit-active");

  


 
  //getImage(largImagesrc).then(function(successUrl){
    //do stufff
    //ActualZoomingImage.$progresBar.toggleClass("progres");
    //ActualZoomingImage.$fuulImageToLoad[0].src = largImagesrc; 

  //}).catch(function(errorUrl){
    //do stuff
  //})
  
 
/*
  if(ActualZoomingImage.isFuulScren == false){
    ActualZoomingImage.$el = $(this);
    let id = $(this).children().first()[0].id;
    let idExit = $(this).data("exit-button") ;
    idExit = "#"+ idExit;
   
    ActualZoomingImage.$exit = $(idExit);
   

   
    /*ActualZoomingImage.style.top =  $(this).css("top");
    ActualZoomingImage.style.left =  $(this).css("left");
    ActualZoomingImage.style.width =  $(this).css("width");
    ActualZoomingImage.style.height =  $(this).css("height");

    $(idExit).toggleClass("zoom-exit-active");
    let stupidID = "#"+id; 
    //console.log(id); 

    ActualZoomingImage.id = id;

    
     let tm = CreateZoomImage(id); 
     ActualZoomingImage.zoom = tm; 
     ActualZoomingImage.$imageInFuul = $(this).children().first();
  
   
     //$(this).removeClass("zoom-wraper");
     $(this).toggleClass("zoom-wraper-full");
     ActualZoomingImage.$imageInFuul.toggleClass("zoom-mage-fuul")

    

    ActualZoomingImage.isFuulScren = true; */

}) 



$("#zoom-exit-button").on("click", function name(e) {

  console.log("Klik na exit");
  $("#panel").toggleClass("full-screen-panel-active");
  ActualZoomingImage.$exit.toggleClass("zoom-exit-active");

  //ExitFuulScreen($(this), e)
  /*e.preventDefault();
  e.stopPropagation();
  if(ActualZoomingImage.isFuulScren == true){
 
    ActualZoomingImage.zoom.reset();
    ActualZoomingImage.$imageInFuul.toggleClass("zoom-mage-fuul")
    ActualZoomingImage.$exit.toggleClass("zoom-exit-active");
    ActualZoomingImage.$el.toggleClass("zoom-wraper-full");
    
    /*ActualZoomingImage.$imageInFuul.css({
     
      "width":"100% !important",
      "height":"100%",
      "top":"0",
      "left":"0",
      "border":"40px solid red"
    })*/
    
    
    
    /*ActualZoomingImage.$el.css("width", ActualZoomingImage.style.width);
    ActualZoomingImage.$el.css("height", ActualZoomingImage.style.height)
    ActualZoomingImage.$el.css("top", ActualZoomingImage.style.top)
    ActualZoomingImage.$el.css("left", ActualZoomingImage.style.left)*/
     
   
    
    
    
    /*ActualZoomingImage.zoom.destroy(); 
    ActualZoomingImage.zoom = null;
    
    ActualZoomingImage.isFuulScren = false;
  

    
  }*/

})


/*$(".zoom-exit").on("click", function name(params) {
 

  //ActualZoomingImage.zoom.destroy();
  //ActualZoomingImage.zoom = null;
  console.log("zom-exit -click  " + ActualZoomingImage.isFuulScren)
  ActualZoomingImage.$el.css("width", ActualZoomingImage.style.width);
  ActualZoomingImage.$el.css("height", ActualZoomingImage.style.height)
  ActualZoomingImage.$el.css("top", ActualZoomingImage.style.top)
  ActualZoomingImage.$el.css("left", ActualZoomingImage.style.left)

  //s$(".zoom-wraper").off("click")
  ActualZoomingImage.zoom.reset();
  ActualZoomingImage.isFuulScren = false;

  console.log("exit"); 
})
var test = $(".zoom-wraper").on("click", function name(params) {

  console.log("zoom click" + ActualZoomingImage.isFuulScren); 
    //$(this)[0].requestFullscreen();
    //id of first child most by image 
   if(ActualZoomingImage.isOn == false){
    ActualZoomingImage.isOn = true; 
    ActualZoomingImage.$el = $(this);
    let id = $(this).children().first()[0].id;
    ActualZoomingImage.style.top =  $(this).css("top");
    ActualZoomingImage.style.left =  $(this).css("left");
    ActualZoomingImage.style.width =  $(this).css("width");
    ActualZoomingImage.style.height =  $(this).css("height");
    let stupidID = "#"+id; 
    //console.log(id); 
  
    ActualZoomingImage.id = id;
     let tm = CreateZoomImage(id); 
     ActualZoomingImage.zoom = tm; 
     $(this).css({
      "width": "100%",
      "height":"100%",
      "top":"50%",
      "left":"50%",
      "-webkit-transform": "translate(-50%, -50%)"
    })

    ActualZoomingImage.isFuulScren = true; 

      /*$(stupidID).css({
      "width": "50%",
      "height": "90%",
      "top" : "50%",
      "left:":"80%"
    })
     
   }else{
     if(ActualZoomingImage.isFuulScren = true){

     }else{
      $(this).css({
        "width": "100%",
        "height":"100%",
        "top":"50%",
        "left":"50%",
        "-webkit-transform": "translate(-50%, -50%)"
      })
     }
    
    //$(this).children().first()[0].style = ActualZoomingImage.style;
   }
   ActualZoomingImage.counter += 1; 
   
    
     
})*/

function log(ev) {
    //console.log(ev);
}
   
   document.body.addEventListener('touchstart', log, false);
   document.body.addEventListener('touchmove', log, false);
   document.body.addEventListener('touchend', log, false);

var Scale = {
    x :null,
    y :null
}

function CalculateScale(){
    var SW = window.innerWidth/ window.innerHeight;
    var SH =  window.innerHeight/window.innerWidth;

     let scaleX = Math.min(SW, SH);
      let scaleY = scaleX;
    Scale.x = scaleX;
    Scale.y = scaleY; 
    $(':root').css('--scaleY', scaleX+"%");
    $(':root').css('--scaleX', scaleY+"%");
    //var curentValue = $(':root').css('--scale');
    //console.log(Scale);
    //console.log("curent Scale: "+ curentValue)

}



  