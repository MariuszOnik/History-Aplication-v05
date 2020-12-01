
let RynekSliderImages = [ 
    "./img/Rynek/Rynek/Bensheimer_miasto.jpg",
    "./img/Rynek/Plac/Gorczyn_ratusz.jpg",
    "./img/Rynek/Rynek/4. Rynek, pocztówka.jpg",

];

let RynekSliderTitlesPL = [
   
    "Oblężenie Jasnej Góry przez Szwedów w 1655 r., fragment przedstawiający widok Częstochowy, sztych według miedziorytu Jana BensheimeraW zbiorach Muzeum Narodowego w Krakowie. Pracownia Fotograficzna Muzeum Narodowego w Krakowie",
    "Oblężenie Jasnej Góry przez Szwedów w 1655 r., fragment przedstawiający widok Starej Częstochowy, sztych według miedziorytu Jana Aleksandra Gorczyna W zbiorach Muzeum Narodowego w Krakowie. Pracownia Fotograficzna Muzeum Narodowego w Krakowie",
    "Częstochowa, Stary Rynek, lata 20. XX wieku Pocztówka ze zbiorów Muzeum Częstochowskiego",
]
let RynekSliderTitlesEN = [
    "The Swedish Siege of Jasna Góra of 1655, a fragment depicting a view over Częstochowa, engraving after a copper-plate engraving by Jan Bensheimer National Museum in Kraków, Photographic Studio of the National Museum in Kraków",
    "Old Częstochowa, a fragment of an engraving after a copper-plate engraving by Jan Aleksander Gorczyn The Swedish Siege of Jasna Góra of 1655 National Museum in Kraków, Photographic Studio of the National Museum in Kraków",
    "Old Market Square, 1920s Postcard, Częstochowa Museum"
]




var RynekSliderObject = new Slider("rynek", "slider-rynek", RynekSliderImages, RynekSliderTitlesPL,  RynekSliderTitlesEN);
Seting.sliders.push(RynekSliderObject); 


RynekSliderObject.init()

window.addEventListener("LanguageChange", function (params) {
   Seting.sliders.forEach(slider=> {
    slider.changeLanguage()
   });
   
  })



