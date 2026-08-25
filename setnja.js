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

const gumbi = {
    lijevo: document.getElementById("lijevo"),
    desno: document.getElementById("desno"),
    gore: document.getElementById("gore"),
    dolje: document.getElementById("dolje")
};

function prikaziPrizor(nazivPrizora) {
    trenutniPrizor = nazivPrizora;

    const prizor = prizori[trenutniPrizor];

    fotografija.src = prizor.slika;
    fotografija.alt = prizor.opis;

    for (const smjer in gumbi) {
        const odrediste = prizor[smjer];

        gumbi[smjer].hidden = !odrediste;

        gumbi[smjer].onclick = odrediste
            ? function () {
                prikaziPrizor(odrediste);
            }
            : null;
    }
}

prikaziPrizor(trenutniPrizor);