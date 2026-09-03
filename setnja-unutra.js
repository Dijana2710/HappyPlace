const unutarnjiPrizori = {
    ulazniHodnik: {
        slika: "Unutra/IMG_1741.JPEG",
        opis: "Ulazni hodnik",
        gore: "ulaz",
        desno: "predvorje"
    },

    ulaz: {
        slika: "Unutra/IMG_1755.JPEG",
        opis: "Ulaz",
        dolje: "predvorje",
        lijevo: "blagovaonica",
        desno: "soba1"
    },

    soba1: {
        slika: "Unutra/IMG_1743.JPEG",
        opis: "Soba 1",
        desno: "ulazniHodnik",
        gore: "soba1DrugiPogled"
    },

    soba1DrugiPogled: {
        slika: "Unutra/IMG_1744.JPEG",
        opis: "Soba 1",
        dolje: "soba1"
    },

    kupaonica: {
        slika: "Unutra/IMG_1746.JPEG",
        opis: "Kupaonica",
        dolje: "ulazniHodnik",
        desno: "kupaonicaDesno",
        lijevo: "kupaonicaLijevo"
    },

    kupaonicaDesno: {
        slika: "Unutra/IMG_1745.JPEG",
        opis: "Kupaonica",
        lijevo: "kupaonica"
    },

    kupaonicaLijevo: {
        slika: "Unutra/IMG_1747.JPEG",
        opis: "Kupaonica",
        desno: "kupaonica"
    },

    soba2: {
        slika: "Unutra/IMG_1750.JPEG",
        opis: "Soba 2",
        desno: "ulazniHodnik",
        gore: "soba2Gore",
        lijevo: "soba2Lijevo"
    },

    soba2Gore: {
        slika: "Unutra/IMG_1751.JPEG",
        opis: "Soba 2",
        dolje: "soba2"
    },

    soba2Lijevo: {
        slika: "Unutra/IMG_1752.JPEG",
        opis: "Soba 2",
        desno: "soba2"
    },

    soba3: {
        slika: "Unutra/IMG_1757.JPEG",
        opis: "Soba 3",
        dolje: "ulazniHodnik",
        lijevo: "soba3Lijevo",
        desno: "soba3Desno"
    },

    soba3Lijevo: {
        slika: "Unutra/IMG_1758.JPEG",
        opis: "Soba 3",
        desno: "soba3"
    },

    soba3Desno: {
        slika: "Unutra/IMG_1756.JPEG",
        opis: "Soba 3",
        lijevo: "soba3"
    },

    tehnoSoba: {
        slika: "Unutra/IMG_1759.JPEG",
        opis: "Tehno soba",
        lijevo: "ulazniHodnik"
    },

    predvorje: {
        slika: "Unutra/IMG_1742.JPEG",
        opis: "Predvorje",
        desno: "smocnica",
        lijevo: "blagovaonica",
        dolje: "ulaz",
        gore: "dnevniBoravak"
    },

    smocnica: {
        slika: "Unutra/IMG_1749.JPEG",
        opis: "Smočnica",
        dolje: "predvorje"
    },

    dnevniBoravak: {
        slika: "Unutra/IMG_1734.JPEG",
        opis: "Dnevni boravak",
        desno: "dnevniDesno",
        lijevo: "dnevniLijevo",
        dolje: "blagovaonica"
    },

    dnevniDesno: {
        slika: "Unutra/IMG_1735.JPEG",
        opis: "Dnevni boravak",
        lijevo: "dnevniBoravak"
    },

    dnevniLijevo: {
        slika: "Unutra/IMG_1736.JPEG",
        opis: "Dnevni boravak",
        desno: "dnevniBoravak"
    },

    blagovaonica: {
        slika: "Unutra/IMG_1737.JPEG",
        opis: "Blagovaonica",
        lijevo: "kuhinja",
        desno: "predvorje"
    },

    kuhinja: {
        slika: "Unutra/IMG_1740.JPEG",
        opis: "Kuhinja",
        lijevo: "kuhinjaLijevo",
        desno: "kuhinjaDesno",
        dolje: "blagovaonica"
    },

    kuhinjaLijevo: {
        slika: "Unutra/IMG_1739.JPEG",
        opis: "Kuhinja",
        desno: "kuhinja"
    },

    kuhinjaDesno: {
        slika: "Unutra/IMG_1738.JPEG",
        opis: "Kuhinja",
        lijevo: "kuhinja"
    }
};

let trenutniUnutarnjiPrizor = "ulazniHodnik";

const fotografija = document.getElementById("fotografija");
const oznakaPrizora = document.getElementById("oznaka-prizora");
const napredakPrizora = document.getElementById("napredak-prizora");
const izbornik = document.getElementById("izbornik-lokacija");
const izbornikGumb = document.getElementById("izbornik-gumb");

const tekstovi = {
    hr: { vrsta: "Unutarnja šetnja", povratak: "Povratak", lokacije: "Prostorije", prizor: "Prizor", od: "od", uputa: "Odaberite strelicu ili povucite prstom za kretanje." },
    en: { vrsta: "Indoor tour", povratak: "Back", lokacije: "Rooms", prizor: "View", od: "of", uputa: "Choose an arrow or swipe to move." },
    de: { vrsta: "Innenrundgang", povratak: "Zurück", lokacije: "Räume", prizor: "Ansicht", od: "von", uputa: "Wählen Sie einen Pfeil oder wischen Sie zum Navigieren." }
};

const nazivi = {
    hr: { ulazniHodnik: "Ulazni hodnik", ulaz: "Ulaz", soba1: "Spavaća soba 1", soba1DrugiPogled: "Spavaća soba 1 — drugi pogled", kupaonica: "Kupaonica", kupaonicaDesno: "Kupaonica — desno", kupaonicaLijevo: "Kupaonica — lijevo", soba2: "Spavaća soba 2", soba2Gore: "Spavaća soba 2 — drugi pogled", soba2Lijevo: "Spavaća soba 2 — lijevo", soba3: "Spavaća soba 3", soba3Lijevo: "Spavaća soba 3 — lijevo", soba3Desno: "Spavaća soba 3 — desno", tehnoSoba: "Tehnička prostorija", predvorje: "Predvorje", smocnica: "Smočnica", dnevniBoravak: "Dnevni boravak", dnevniDesno: "Dnevni boravak — desno", dnevniLijevo: "Dnevni boravak — lijevo", blagovaonica: "Blagovaonica", kuhinja: "Kuhinja", kuhinjaLijevo: "Kuhinja — lijevo", kuhinjaDesno: "Kuhinja — desno" },
    en: { ulazniHodnik: "Entrance hall", ulaz: "Entrance", soba1: "Bedroom 1", soba1DrugiPogled: "Bedroom 1 — second view", kupaonica: "Bathroom", kupaonicaDesno: "Bathroom — right", kupaonicaLijevo: "Bathroom — left", soba2: "Bedroom 2", soba2Gore: "Bedroom 2 — second view", soba2Lijevo: "Bedroom 2 — left", soba3: "Bedroom 3", soba3Lijevo: "Bedroom 3 — left", soba3Desno: "Bedroom 3 — right", tehnoSoba: "Utility room", predvorje: "Hallway", smocnica: "Pantry", dnevniBoravak: "Living room", dnevniDesno: "Living room — right", dnevniLijevo: "Living room — left", blagovaonica: "Dining room", kuhinja: "Kitchen", kuhinjaLijevo: "Kitchen — left", kuhinjaDesno: "Kitchen — right" },
    de: { ulazniHodnik: "Eingangsflur", ulaz: "Eingang", soba1: "Schlafzimmer 1", soba1DrugiPogled: "Schlafzimmer 1 — zweite Ansicht", kupaonica: "Badezimmer", kupaonicaDesno: "Badezimmer — rechts", kupaonicaLijevo: "Badezimmer — links", soba2: "Schlafzimmer 2", soba2Gore: "Schlafzimmer 2 — zweite Ansicht", soba2Lijevo: "Schlafzimmer 2 — links", soba3: "Schlafzimmer 3", soba3Lijevo: "Schlafzimmer 3 — links", soba3Desno: "Schlafzimmer 3 — rechts", tehnoSoba: "Technikraum", predvorje: "Vorraum", smocnica: "Speisekammer", dnevniBoravak: "Wohnzimmer", dnevniDesno: "Wohnzimmer — rechts", dnevniLijevo: "Wohnzimmer — links", blagovaonica: "Essbereich", kuhinja: "Küche", kuhinjaLijevo: "Küche — links", kuhinjaDesno: "Küche — rechts" }
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

function prikaziUnutarnjiPrizor(nazivPrizora) {
    trenutniUnutarnjiPrizor = nazivPrizora;
    const prizor = unutarnjiPrizori[nazivPrizora];

    fotografija.classList.add("mijenja-se");
    fotografija.src = prizor.slika;
    fotografija.alt = nazivi[jezik][nazivPrizora];
    oznakaPrizora.textContent = nazivi[jezik][nazivPrizora];

    const sviPrizori = Object.keys(unutarnjiPrizori);
    napredakPrizora.textContent = `${tekstovi[jezik].prizor} ${sviPrizori.indexOf(nazivPrizora) + 1} ${tekstovi[jezik].od} ${sviPrizori.length}`;

    for (const smjer in gumbi) {
        const odrediste = prizor[smjer];
        gumbi[smjer].hidden = !odrediste;
        gumbi[smjer].querySelector(".smjer-tekst").textContent = odrediste ? nazivi[jezik][odrediste] : "";
        gumbi[smjer].setAttribute("aria-label", odrediste ? nazivi[jezik][odrediste] : smjer);

        if (odrediste) {
            const sljedecaSlika = new Image();
            sljedecaSlika.src = unutarnjiPrizori[odrediste].slika;
        }
    }

    izbornik.querySelectorAll("button").forEach((gumb) => gumb.classList.toggle("aktivan", gumb.dataset.prizor === nazivPrizora));
}

for (const smjer in gumbi) {
    gumbi[smjer].addEventListener("click", function () {
        const odrediste = unutarnjiPrizori[trenutniUnutarnjiPrizor][smjer];
        if (odrediste) prikaziUnutarnjiPrizor(odrediste);
    });
}

fotografija.addEventListener("load", () => fotografija.classList.remove("mijenja-se"));

const glavneProstorije = ["ulazniHodnik", "predvorje", "dnevniBoravak", "blagovaonica", "kuhinja", "soba1", "soba2", "soba3", "kupaonica", "smocnica", "tehnoSoba"];
glavneProstorije.forEach((naziv) => {
    const gumb = document.createElement("button");
    gumb.type = "button";
    gumb.dataset.prizor = naziv;
    gumb.textContent = nazivi[jezik][naziv];
    gumb.addEventListener("click", () => {
        prikaziUnutarnjiPrizor(naziv);
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
    const odrediste = unutarnjiPrizori[trenutniUnutarnjiPrizor][smjer];
    if (odrediste) prikaziUnutarnjiPrizor(odrediste);
}, { passive: true });

document.addEventListener("keydown", (dogadaj) => {
    const mapa = { ArrowLeft: "lijevo", ArrowRight: "desno", ArrowUp: "gore", ArrowDown: "dolje" };
    const odrediste = unutarnjiPrizori[trenutniUnutarnjiPrizor][mapa[dogadaj.key]];
    if (odrediste) prikaziUnutarnjiPrizor(odrediste);
});

prikaziUnutarnjiPrizor(trenutniUnutarnjiPrizor);
