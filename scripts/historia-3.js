

let Historia3SliderImages = [ 
    
    "./img/Historia/3/Herb Częstochowy.jpg",
    "./img/Rynek/Rynek/2. Bodenehr.jpg",
    "./img/Historia/3/OgólnywidokCzęstochowy.jpg",

];

let Historia3SliderTitlesPL = [
   
    "Herb Częstochowy według gotyckiej pieczęci odciśniętej na dokumencie z 1564 r.",
    "Oblężenie Jasnej Góry przez Szwedów w 1655 r., sztych według miedziorytu Gabriela Bodenehra Starszego. W zbiorach Muzeum Częstochowskiego",
    "Ogólny widok Częstochowy od strony Złotej Góry, rys. Władysław Dmochowski, ilustracja z albumu Widoki Częstochowy i Jasnej Góry z opisem, Warszawa 1876 r. W zbiorach Muzeum Częstochowskiego",

]

let Historia3SliderTitlesEN = [
    "The coat of arms of Częstochowa according to a Gothic seal imprinted on a document from 1564.",
    "The Swedish Siege of Jasna Góra of 1655, engraving after a copper-plate engraving by Gabriel Bodenehr the Elder, Częstochowa Museum", 
    "General view of Częstochowa from the direction of Złota Góra, drawing by Władysław Dmochowski, illustration from the album, Views of Częstochowa and Jasna Góra with descriptions, Warsaw 1876 Częstochowa Museum"
]


var Historia3SliderObject = new Slider("historia-3", "slider-historia-3", Historia3SliderImages, Historia3SliderTitlesPL, Historia3SliderTitlesEN);
Seting.sliders.push(Historia3SliderObject); 
Historia3SliderObject.init()
