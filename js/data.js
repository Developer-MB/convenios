const promociones = [
  {
    id: 1,
    empresa: "Abarrosaurios",
    urlImg: "img/abarrosaurios.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion:
      "Calle Rosita Alvírez 290, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 2,
    empresa: "Abarrotera Richilli",
    urlImg: "img/richili.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion: "Organillero 95, Benito juuarez",
  },
  {
    id: 3,
    empresa: "Abarrotes Calderon ",
    urlImg: "img/calderon.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion: "Calle Rancho Grande 215 Benito Juarez 5700",
  },
  {
    id: 4,
    empresa: "Abarrotes El Fenix",
    urlImg: "img/fenix.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion:
      "Calle Mariquita Linda 292, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 5,
    empresa: "Abarrotes el Zaguancito",
    urlImg: "img/zaguancito.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion: "Mariquita 104, vol Benito Juárez, 57000",
  },
  {
    id: 6,
    empresa: "Abarrotes Juanita",
    urlImg: "img/juanita.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion: "Perjura 99 Benito Juárez 57000",
  },
  {
    id: 7,
    empresa: "Abarrotes la Juquilita",
    urlImg: "img/juquilita.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion: "San Marqueña 106 Benito Juárez, 57000",
  },
  {
    id: 8,
    empresa: "Abarrotes Lyly",
    urlImg: "img/lili.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion: "Mariquita Linda 39 Benito Juárez 57000",
  },
  {
    id: 9,
    empresa: "Abarrotes Owen",
    urlImg: "img/owen.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion: "Las mixtecas 268, Benito Juárez 57000",
  },
  {
    id: 10,
    empresa: "Abarrotes Perla",
    urlImg: "img/perla.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion:
      "Calle Mañanitas 215, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 11,
    empresa: "Abarrotes Todito ",
    urlImg: "img/todito.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion: "Calle Perjura 2 Benito Juárez 57000",
  },
  {
    id: 12,
    empresa: "Abarrotes y Semillas Lupita",
    urlImg: "img/semillaslupita.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion: "Calle Cariño 370 Benito Juárez 57000",
  },
  {
    id: 13,
    empresa: "Agencia de viajes HEROCHE",
    urlImg: "img/herochy.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Viajes",
    direccion: "Av Carmelo Pérez 843 col Benito Juárez 57000",
  },
  {
    id: 14,
    empresa: "Auto Cerrajeria Judith",
    urlImg: "img/judith.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Servicio",
    direccion: "Carmelo Perez 749 Benito Juárez 57000",
  },
  {
    id: 15,
    empresa: "Cafeteria Sociedad Crepas",
    urlImg: "img/sociedad.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Comida",
    direccion:
      "Av. Gustavo Baz 173, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 16,
    empresa: "Cocina Economica Mary",
    urlImg: "img/mary.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Comida",
    direccion:
      "Av. 4a. Avenida 160, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 17,
    empresa: "Comida Don Adrian",
    urlImg: "img/adrian.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Comida",
    direccion: "Calle Cecilia 4 Benito Juarez 57000 ",
  },
  {
    id: 18,
    empresa: "Cremería La Güera",
    urlImg: "img/cremeriawera.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Cremería",
    direccion: "Av Carmelo Pérez 840 Benito Juárez 57000",
  },
  {
    id: 19,
    empresa: "Cremería La Reina de Neza",
    urlImg: "img/reina.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion:
      "Av. Gustavo Baz 224, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 20,
    empresa: "Cremería y Abarrotes Regina",
    urlImg: "img/regina.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion:
      "Calle Mariquita Linda 297, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 21,
    empresa: "Dental fresh",
    urlImg: "img/dentalFresh.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Dentista",
    direccion:
      "Calle Mariquita Linda 292, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 22,
    empresa: "Didacti risas",
    urlImg: "img/didactirisas.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Jugueteria",
    direccion: "Av Chimalhuacán 451, Benito Juárez 57000",
  },
  {
    id: 23,
    empresa: "Distribuidora Electrica LUGO",
    urlImg: "img/lugo.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Tlapaleria",
    direccion:
      "Av. Carmelo Pérez 625, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 24,
    empresa: "Dulceria y Materias Primas Karen",
    urlImg: "img/karen.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Dulceria",
    direccion:
      "Av. Chimalhuacán 474, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 25,
    empresa: "El Carretón de Sinaloa",
    urlImg: "img/sinaloa.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Comida",
    direccion:
      "Av. 4a. Avenida 244, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 26,
    empresa: "El Taco Perrón",
    urlImg: "img/perron.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Comida",
    direccion:
      "Av. Carmelo Pérez 677, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 27,
    empresa: "Farmacia Access",
    urlImg: "img/access.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Papelería",
    direccion: "Av Chimalhuacan 452",
  },
  {
    id: 28,
    empresa: "Farmacia Genéricos",
    urlImg: "img/genericos.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Farmacia",
    direccion: "Cama de Piedra 51 Benito Juárez, 57000",
  },
  {
    id: 29,
    empresa: "Farmacia Tauro 2",
    urlImg: "img/tauro.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Farmacia",
    direccion:
      "Av. 4a. Avenida 159, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 30,
    empresa: "Fel & Ever Productos de Belleza",
    urlImg: "img/felever.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Belleza",
    direccion:
      "Av. Gustavo Baz 190, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 31,
    empresa: "Fiesta shopp",
    urlImg: "img/fiestaShop.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Salón de fiestas",
    direccion:
      "Av. 4a. Avenida 231, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 32,
    empresa: "Huaraches Lupita",
    urlImg: "img/lupita.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Comida",
    direccion:
      "Av. Gustavo Baz 297, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 33,
    empresa: "Infantiles Villada",
    urlImg: "img/villada.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Jugueteria",
    direccion: "Av. Vicente Villada 727 Benito Juárez 57000",
  },
  {
    id: 34,
    empresa: "Internet La Madrugada ",
    urlImg: "img/madrugada.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Papelería",
    direccion: "Av. Gustavo Baz 196 Benito Juárez 57000",
  },
  {
    id: 35,
    empresa: "Lady Barber",
    urlImg: "img/ladyBarber.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Belleza",
    direccion:
      "Av. Rancho Grande 223, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 36,
    empresa: "Lipstick studio",
    urlImg: "img/lipstick.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Belleza",
    direccion: "Cascabel 96 col Benito Juárez",
  },
  {
    id: 37,
    empresa: "Los Mezcalitos",
    urlImg: "img/mezcalitos.png",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Comida",
    direccion: "Av. Gustavo Baz 205, Benito Juárez, 57000, Nezahualcóyotl",
  },
  {
    id: 38,
    empresa: "Mamá cocina",
    urlImg: "img/mamaCocina.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Comida",
    direccion:
      "Av. 4a. Avenida 193, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 39,
    empresa: "Muebleria Pepes",
    urlImg: "img/pepes.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Muebleria",
    direccion:
      "Av. Gustavo Baz 161, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 40,
    empresa: "NovaFast",
    urlImg: "img/novafast.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Abarrotes",
    direccion:
      "Calle Adelita 262, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 41,
    empresa: "Papelería ANA",
    urlImg: "img/ana.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Papelería",
    direccion:
      "Calle Mariquita Linda 268, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 42,
    empresa: "Papelería HA",
    urlImg: "img/ha.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Papelería",
    direccion:
      "Calle Mariquita Linda 189, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 43,
    empresa: "Papeleria Osmara",
    urlImg: "img/osmara.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Papelería",
    direccion: "Av Chimalhuacán 485 Benito Juárez 57000",
  },
  {
    id: 44,
    empresa: "Papelería Victoria",
    urlImg: "img/victoria.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Papelería",
    direccion: "Escondida, 297 Benito Juárez 57000",
  },
  {
    id: 45,
    empresa: "Pollería Yessi",
    urlImg: "img/yessi.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Polleria",
    direccion: "Calle Pagaré 2, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 46,
    empresa: "Publineza ",
    urlImg: "img/publineza.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Impresion",
    direccion: "Av Chimalhuacán 601 BENITO JUAREZ 57000 ",
  },
  {
    id: 47,
    empresa: "Red velvet spa",
    urlImg: "img/velvet.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Belleza",
    direccion: "Cama de piedra 232, entre calle ardilla y cecilia",
  },
  {
    id: 48,
    empresa: "Reparaciones de Pantallas ",
    urlImg: "img/servicioEsp.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Tecnología",
    direccion: "Calle Mixtecas 397 Colonia Benito Juárez 57000",
  },
  {
    id: 49,
    empresa: "Sala De Uñas Coquette Nails",
    urlImg: "img/coquette.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Belleza",
    direccion: "Av Chimalhuacan 567 Benito Juarez 57000 ",
  },
  {
    id: 50,
    empresa: "Tacos El Zurdo",
    urlImg: "img/zurdo.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Comida",
    direccion:
      "Calle Panchita 398, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 51,
    empresa: "Tienda Naturista",
    urlImg: "img/naturista.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Salud",
    direccion:
      "Calle Panchita 393, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 52,
    empresa: "Tortas y Chilaquiles Isabel",
    urlImg: "img/isabel.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Comida",
    direccion:
      "Calle Isabeles 196, Benito Juárez, 57000, Nezahualcóyotl, México",
  },
  {
    id: 53,
    empresa: "Tortilleria Brabante ",
    urlImg: "img/brabante.jpg",
    calificacion: 4.8,
    highlight: "25% o cashback",
    giro: "Comida",
    direccion: "Calandría  244 Benito Juarez  57000",
  },
];
