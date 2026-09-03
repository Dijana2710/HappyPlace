const prizori = {
    prilaz: {
    slika: "Setnja/1-prilaz.jpg",
    opis: "Prilaz objektu",
    lijevo: "ograda",
    gore: "ulaz"
},

    ograda: {
        slika: "ograda.jpg",
        opis: "Pogled na ogradu",
        desno: "prilaz"
    },

    ulaz: {
    slika: "Setnja/2-ulaz.jpg",
    opis: "Ulaz",
    lijevo: "zaba",
    gore: "garaza",
    dolje: "motor"
},

    motor: {
        slika: "Setnja/motor.jpg?v=2",
        opis: "Pogled prema motoru",
        gore: "ulaz"
    },

  zaba: {
    slika: "Setnja/zaba.jpg",
    opis: "Pogled prema žabi",
    lijevo: "terasa",
    desno: "ulaz"
},
    terasa: {
    slika: "terasa.jpg",
    opis: "Terasa",
    lijevo: "stolica",
    desno: "zaba"
},

    stolica: {
    slika: "stolica.jpg",
    opis: "Pogled na stolicu",
    desno: "terasa"
},

    garaza: {
    slika: "Setnja/3-garaza.jpg",
    opis: "Garaža",
    dolje: "ulaz",
    gore: "vrt",
    desno: "radiona"
},

  vrt: {
    slika: "Setnja/4-vrt.jpg",
    opis: "Vrt",
    lijevo: "gredice",
    desno: "radiona",
    dolje: "happy"
},

    gredice: {
        slika: "gredice.jpg",
        opis: "Pogled na gredice",
        dolje: "vrt"
    },

    happy: {
        slika: "happy.jpg",
        opis: "Pogled unatrag iz vrta",
        gore: "vrt"
    },

    radiona: {
    slika: "Setnja/5-radiona.jpg",
    opis: "Radionica",
    lijevo: "garaza",
    desno: "cvijece",
    dolje: "motor"
},

    cvijece: {
    slika: "Setnja/cvijece.jpg",
    opis: "Pogled na cvijeće",
    lijevo: "garaza",
    desno: "radiona",
    dolje: "motor"
},

};

let trenutniPrizor = "prilaz";

const fotografija = document.getElementById("fotografija");
const oznakaPrizora = document.getElementById("oznaka-prizora");
const napredakPrizora = document.getElementById("napredak-prizora");
const izbornik = document.getElementById("izbornik-lokacija");
const izbornikGumb = document.getElementById("izbornik-gumb");

const tekstovi = {
    hr: { vrsta: "Vanjska šetnja", povratak: "Povratak", lokacije: "Lokacije", prizor: "Prizor", od: "od", uputa: "Odaberite strelicu ili povucite prstom za kretanje." },
    en: { vrsta: "Outdoor tour", povratak: "Back", lokacije: "Locations", prizor: "View", od: "of", uputa: "Choose an arrow or swipe to move." },
    de: { vrsta: "Außenrundgang", povratak: "Zurück", lokacije: "Orte", prizor: "Ansicht", od: "von", uputa: "Wählen Sie einen Pfeil oder wischen Sie zum Navigieren." }
};

const nazivi = {
    hr: { prilaz: "Prilaz objektu", ograda: "Ograda", ulaz: "Ulaz", motor: "Prostor uz ulaz", zaba: "Vrtna dekoracija", terasa: "Terasa", stolica: "Prostor za odmor", garaza: "Garaža", vrt: "Vrt", gredice: "Gredice", happy: "Pogled iz vrta", radiona: "Radionica", cvijece: "Cvjetnjak" },
    en: { prilaz: "Property approach", ograda: "Fence", ulaz: "Entrance", motor: "Entrance area", zaba: "Garden feature", terasa: "Terrace", stolica: "Seating area", garaza: "Garage", vrt: "Garden", gredice: "Garden beds", happy: "View from the garden", radiona: "Workshop", cvijece: "Flower garden" },
    de: { prilaz: "Zufahrt zum Grundstück", ograda: "Zaun", ulaz: "Eingang", motor: "Eingangsbereich", zaba: "Gartendekoration", terasa: "Terrasse", stolica: "Sitzbereich", garaza: "Garage", vrt: "Garten", gredice: "Beete", happy: "Blick aus dem Garten", radiona: "Werkstatt", cvijece: "Blumengarten" }
};

let jezik = "hr";
try {
    const spremljeni = localStorage.getItem("happyPlaceJezik");
    if (tekstovi[spremljeni]) jezik = spremljeni;
} catch (pogreska) {
    // Hrvatski ostaje zadani jezik ako localStorage nije dostupan.
}

document.documentElement.lang = jezik;
document.getElementById("vrsta-setnje").textContent = tekstovi[jezik].vrsta;
document.getElementById("tekst-povratak").textContent = tekstovi[jezik].povratak;
document.getElementById("tekst-lokacije").textContent = tekstovi[jezik].lokacije;
document.getElementById("setnja-uputa").textContent = tekstovi[jezik].uputa;

const gumbi = {
    lijevo: document.getElementById("lijevo"),
    desno: document.getElementById("desno"),
    gore: document.getElementById("gore"),
    dolje: document.getElementById("dolje")
};

function prikaziPrizor(nazivPrizora) {
    trenutniPrizor = nazivPrizora;

    const prizor = prizori[trenutniPrizor];

    fotografija.classList.add("mijenja-se");
    fotografija.src = prizor.slika;
    fotografija.alt = nazivi[jezik][trenutniPrizor];
    oznakaPrizora.textContent = nazivi[jezik][trenutniPrizor];

    const sviPrizori = Object.keys(prizori);
    napredakPrizora.textContent = `${tekstovi[jezik].prizor} ${sviPrizori.indexOf(trenutniPrizor) + 1} ${tekstovi[jezik].od} ${sviPrizori.length}`;

    for (const smjer in gumbi) {
        const odrediste = prizor[smjer];

        gumbi[smjer].hidden = !odrediste;
        gumbi[smjer].querySelector(".smjer-tekst").textContent = odrediste ? nazivi[jezik][odrediste] : "";
        gumbi[smjer].setAttribute("aria-label", odrediste ? nazivi[jezik][odrediste] : smjer);

        gumbi[smjer].onclick = odrediste
            ? function () {
                prikaziPrizor(odrediste);
            }
            : null;

        if (odrediste) {
            const sljedecaSlika = new Image();
            sljedecaSlika.src = prizori[odrediste].slika;
        }
    }

    izbornik.querySelectorAll("button").forEach((gumb) => gumb.classList.toggle("aktivan", gumb.dataset.prizor === trenutniPrizor));
}

fotografija.addEventListener("load", () => fotografija.classList.remove("mijenja-se"));

const glavneLokacije = ["prilaz", "ulaz", "terasa", "garaza", "vrt", "gredice", "radiona", "cvijece"];
glavneLokacije.forEach((naziv) => {
    const gumb = document.createElement("button");
    gumb.type = "button";
    gumb.dataset.prizor = naziv;
    gumb.textContent = nazivi[jezik][naziv];
    gumb.addEventListener("click", () => {
        prikaziPrizor(naziv);
        izbornik.classList.remove("otvoren");
        izbornikGumb.setAttribute("aria-expanded", "false");
    });
    izbornik.appendChild(gumb);
});

izbornikGumb.addEventListener("click", () => {
    const otvoren = izbornik.classList.toggle("otvoren");
    izbornikGumb.setAttribute("aria-expanded", String(otvoren));
});

let dodirX = 0;
fotografija.addEventListener("touchstart", (dogadaj) => { dodirX = dogadaj.changedTouches[0].clientX; }, { passive: true });
fotografija.addEventListener("touchend", (dogadaj) => {
    const pomak = dogadaj.changedTouches[0].clientX - dodirX;
    if (Math.abs(pomak) < 55) return;
    const smjer = pomak > 0 ? "lijevo" : "desno";
    const odrediste = prizori[trenutniPrizor][smjer];
    if (odrediste) prikaziPrizor(odrediste);
}, { passive: true });

document.addEventListener("keydown", (dogadaj) => {
    const mapa = { ArrowLeft: "lijevo", ArrowRight: "desno", ArrowUp: "gore", ArrowDown: "dolje" };
    const odrediste = prizori[trenutniPrizor][mapa[dogadaj.key]];
    if (odrediste) prikaziPrizor(odrediste);
});

prikaziPrizor(trenutniPrizor);
