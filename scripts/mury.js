

let MurySliderImages = [ 
    "./img/Rynek/Mury/Gorczyn_miasto.jpg"
    
];

let MurySliderTitlesPL = [
    "Oblężenie Jasnej Góry przez Szwedów w 1655 r., fragment przedstawiający widok Starej Częstochowy, sztych według miedziorytu Jana Aleksandra Gorczyna. W zbiorach Muzeum Narodowego w Krakowie. Pracownia Fotograficzna Muzeum Narodowego w Krakowie "


]

let MurySliderTitlesEN = [
   "Old Częstochowa, a fragment of an engraving after a copper-plate engraving by Jan Aleksander Gorczyn The Swedish Siege of Jasna Góra of 1655 National Museum in Kraków, Photographic Studio of the National Museum in Kraków"
]


var MurySliderObject = new Slider("mury", "slider-mury", MurySliderImages, MurySliderTitlesPL, MurySliderTitlesEN);
Seting.sliders.push(MurySliderObject); 
MurySliderObject.init()
