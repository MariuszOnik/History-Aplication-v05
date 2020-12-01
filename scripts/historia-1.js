
let Historia1SliderImages = [ 
    "./img/Historia/1/Kazimierz Wielki-historia-1.jpg",
    "./img/Historia/1/Dokument  Kaziemierza Wielkiego.jpg"
];

let Historia1SliderTitlesPL = [
    "Figura króla Kazimierza III Wielkiego z jego nagrobka, rys. Aleksander Lesser. Muzeum Narodowe w Warszawie.",
    "Dokument króla Kazimierza III Wielkiego  przyznający przywilej na lokację dwóch wsi, „jednej zwanej Częstochową i drugiej nad rzeką w dąbrowie tegoż dziedzictwa Częstochowy”. Archiwum Jasnogórskie."
]
let Historia1SliderTitlesEN = [
   "A figure of King Casimir the Great from his tombstone, drawing by Aleksander Lesser. National Museum in Warsaw.",
   "The document of King Casimir the Great of August 24, 1356 granting the privilege to settle two villages, “one called Częstochowa and the other by the river in Dąbrowa of the same Częstochowa heritage”. Archive of Jasna Góra.",
]




var Historia1SliderObject = new Slider("historia-1", "slider-historia-1", Historia1SliderImages, Historia1SliderTitlesPL, Historia1SliderTitlesEN);
Seting.sliders.push(Historia1SliderObject); 
Historia1SliderObject.init()




