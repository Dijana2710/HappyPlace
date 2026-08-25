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
const hodnikOdabiri = document.getElementById("hodnik-odabiri");
const gumbi = {
    lijevo: document.getElementById("lijevo"),
    desno: document.getElementById("desno"),
    gore: document.getElementById("gore"),
    dolje: document.getElementById("dolje")
};

function prikaziUnutarnjiPrizor(nazivPrizora) {
    trenutniUnutarnjiPrizor = nazivPrizora;
    const prizor = unutarnjiPrizori[nazivPrizora];

    fotografija.src = prizor.slika;
    fotografija.alt = prizor.opis;
    oznakaPrizora.textContent = prizor.opis;
    hodnikOdabiri.hidden = nazivPrizora !== "ulazniHodnik";

    for (const smjer in gumbi) {
        const odrediste = prizor[smjer];
        gumbi[smjer].hidden = !odrediste;
    }
}

for (const smjer in gumbi) {
    gumbi[smjer].addEventListener("click", function () {
        const odrediste = unutarnjiPrizori[trenutniUnutarnjiPrizor][smjer];
        if (odrediste) prikaziUnutarnjiPrizor(odrediste);
    });
}

hodnikOdabiri.querySelectorAll("button").forEach(function (gumb) {
    gumb.addEventListener("click", function () {
        prikaziUnutarnjiPrizor(gumb.dataset.prizor);
    });
});

prikaziUnutarnjiPrizor(trenutniUnutarnjiPrizor);
