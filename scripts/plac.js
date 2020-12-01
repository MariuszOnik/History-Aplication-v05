

let PlacSliderImages = [ 
    "./img/Rynek/Plac/Gorczyn_ratusz.jpg",
    "./img/Rynek/Plac/5. Kościół św. Zygmunta 1 Szerner.jpg",
    "./img/Rynek/Plac/6. Kosciół św. Zygmunta 2 Dmochowski, 1876.jpg"
    
];

let PlacSliderTitlesPL = [
    "Oblężenie Jasnej Góry przez Szwedów w 1655 r., fragment przedstawiający widok Starej Częstochowy, sztych według miedziorytu Jana Aleksandra Gorczyna W zbiorach Muzeum Narodowego w Krakowie. Pracownia Fotograficzna Muzeum Narodowego w Krakowie",
    "Kościół św. Zygmunta w Starej Częstochowie, 1862 r., rys. Władysław Szerner W zbiorach Muzeum Częstochowskiego",
    "Kościół św. Zygmunta w Starej Częstochowie, rys. Władysław Dmochowski, ilustracja z albumu Widoki Częstochowy i Jasnej Góry z opisem, Warszawa 1876 W zbiorach Muzeum Częstochowskiego"

]

let PlacSliderTitlesEN = [
    "Old Częstochowa, a fragment of an engraving after a copper-plate engraving by Jan Aleksander Gorczyn, The Swedish Siege of Jasna Góra of 1655 National Museum in Kraków, Photographic Studio of the National Museum in Kraków",
    "Saint Sigismund’s Church in Old Częstochowa, 1862, drawing by Władysław Szerner, Częstochowa Museum",
    "Saint Sigismund’s Church in Old Częstochowa, drawing by Władysław Dmochowski, illustration from the album Views of Częstochowa and Jasna Góra with Description, Warsaw 1876, Częstochowa Museum"
]


var PlacSliderObject = new Slider("plac-koscielny", "slider-plac", PlacSliderImages, PlacSliderTitlesPL, PlacSliderTitlesEN);
Seting.sliders.push(PlacSliderObject); 
PlacSliderObject.init()
