

let Historia2SliderImages = [ 
    "./img/Historia/2/DokumentWładysławaOpolczyka-minaitura.jpg",
    "./img/Historia/2/Opolczyk-miniatura.jpg",
    "./img/Historia/2/PieczęćMajestatycznaOpolczyka-miniatura.jpg",
    "./img/Historia/2/PieczęcKonnaOpolczyka-miniatura.jpg",

];

let Historia2SliderTitlesPL   = [
    "Dokument księcia Władysława II Opolczyka z 3 maja 1377 r., w którym Częstochowę nazwano po raz pierwszy miastem. Archiwum Jasnogórskie.",
    "Władysław II Opolczyk, rys. Jan Matejko. Muzeum Narodowe w Krakowie.",
    "Pieczęć majestatyczna Władysława II Opolczyka. Biblioteka Kórnicka PAN.",
    "Pieczęć konna Władysława II Opolczyka. Biblioteka Kórnicka PAN.",

]
let Historia2SliderTitlesEN = [
    "A document of Prince Władysław II of Opole from May 3, 1377, in which Częstochowa was first named a city. Archive of Jasna Góra.",
    "Władysław II of Opole, drawing by Jan Matejko. National Museum in Krakow.",
    "The majestic seal of Władysław II of Opole. Kórnik Library of the Polish Academy of Sciences.",
    "Horse seal of Władysław II of Opole. Kórnik Library of the Polish Academy of Sciences.",
   

]



var Historia2SliderObject = new Slider("historia-2", "slider-historia-2", Historia2SliderImages, Historia2SliderTitlesPL, Historia2SliderTitlesEN);
Seting.sliders.push(Historia2SliderObject); 
Historia2SliderObject.init()