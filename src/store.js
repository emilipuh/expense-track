let data = {
  stanjeRacuna: {
    data: [
      {
        prihodi: [
          { id: 1, iznos: 150 },
          { id: 2, iznos: 1500 },
        ],
      },
      {
        rashodi: [
          { id: 11, iznos: 50 },
          { id: 12, iznos: 70 },
          { id: 13, iznos: 30 },
        ],
      },
      {
        stednja: [{ id: 111, iznos: 50 }],
      },
    ],
  },
  prihodi: {
    data: [
      {
        id: 1,
        kategorija: "Plaća",
        iznos: 1500,
        datum: 2023 - 12 - 15,
        biljeska: "",
      },
      {
        id: 2,
        kategorija: "Ostalo",
        iznos: 150,
        datum: 2023 - 12 - 15,
        biljeska: "Prihod od rentanja stana",
      },
    ],
  },
  jedanPrihod: {
    data: {
      id: 1,
      kategorija: "Ostalo",
      iznos: 150,
      datum: 2023 - 12 - 15,
      biljeska: "Prihod od rentanja stana",
    },
  },
  rashodi: {
    data: [
      {
        id: 11,
        kategorija: "Vozilo",
        iznos: 50,
        datum: 2023 - 12 - 15,
        biljeska: "Trošak tankanja",
      },
      {
        id: 12,
        kategorija: "Kupovina",
        iznos: 70,
        datum: 2023 - 12 - 15,
        biljeska: "Tjedna kupnja namirnica",
      },
      {
        id: 13,
        kategorija: "Edukacija",
        iznos: 30,
        datum: 2023 - 12 - 15,
        biljeska: "Mjesečna uplata za tečaj",
      },
    ],
  },
  jedanRashod: {
    data: {
      id: 11,
      kategorija: "Vozilo",
      iznos: 50,
      datum: 2023 - 12 - 15,
      biljeska: "Trošak tankanja",
    },
  },
  stednja: {
    data: [
      {
        id: 111,
        iznos: 200,
        datum: 2023 - 12 - 15,
        biljeska: "Mjesečna štednja",
      },
    ],
  },
  jednaStednja: {
    data: {
      id: 111,
      iznos: 200,
      datum: 2023 - 12 - 15,
      biljeska: "Mjesečna štednja",
    },
  },
};


export default data;