const AVATARURL_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    id: 1,
    title: `Beautiful room in Vedensky Hotel`,
    price: 120,
    roomType: `Private room`,
    isPremium: true,
    rating: 4.6,
    photo: `/img/apartment-01.jpg`,
    bedroomCount: 3,
    maxAdults: 4,
    insideRoom: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cabel TV`,
    ],
    owner: {
      photo: `${AVATARURL_URL}/${Math.random()}`,
      name: `Julie`,
      description: `Vedensky Hotel is an impressive historical 9-floor building on Petrogradsky Island. Guests can walk to the Peter and Paul Fortress in just 10 minutes and Yubileyny Sports Complex is within an 8-minute drive. WiFi is available in the hotel's rooms.
        Rooms at the Vedensky Hotel St. Petersburg feature classical décor with cosy carpet and dark wooden furniture. All rooms are air-conditioned and include a flat-screen TV, desk and private bathroom.
        A buffet breakfast is provided each morning in the hotel's restaurant, and a variety of European dishes is served in Poet Restaurant and in Biscotto Cafe. Drinks are available in the on-site lobby bar. Guests are offered free access to the fitness centre from 7:00 to 23:00. A room with ironing facilities is available.
        Petrogradskaya and Chkalovskaya Metro Stations are both a 10-minute walk from the Vedensky. Saint Petersburg Mosque is a 15-minute walk away.
        The hotel is a 20-minute drive from Moskovskiy Train Station. Pulkovo Airport is a 30-minute drive away.`,
    },
  },
  {
    id: 2,
    title: `VIP apartment in Angleterre Hotel`,
    price: 210,
    roomType: `Arartment`,
    isPremium: true,
    rating: 4.9,
    photo: `/img/apartment-02.jpg`,
    bedroomCount: 4,
    maxAdults: 5,
    insideRoom: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Cabel TV`,
    ],
    owner: {
      photo: `${AVATARURL_URL}/${Math.random()}`,
      name: `Alexandra`,
      description: `The Angleterre Hotel is very favourably located 5 to 10 minute’s walk from Palace Square, the Hermitage and Nevsky Prospekt. It is adjacent to the stunning Saint Isaac’s Cathedral.
      Energize at the gym. Rejuvenate at the sauna. Follow all with a dip in the Hotel Angleterre pool. When ready to go out, ask at the tours and tickets desk for advice. The ATM is also useful.
      Return to superb, authentic Italian food at the chic Borsalino Restaurant. The attractive Gallery is the perfect place for a tea or coffee during the day, and to meet friends or colleagues.`,
    },
  },
  {
    id: 3,
    title: `Room in Rocco Forte Astoria Hotel`,
    price: 150,
    roomType: `Room`,
    isPremium: false,
    rating: 4.5,
    photo: `/img/room.jpg`,
    bedroomCount: 2,
    maxAdults: 3,
    insideRoom: [
      `Wi-Fi`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Dishwasher`,
      `Towels`,
      `Baby seat`,
      `Cabel TV`,
    ],
    owner: {
      photo: `${AVATARURL_URL}/${Math.random()}`,
      name: `Daria`,
      description: `The Rocco Forte Astoria Hotel has an excellent location across from the beautiful St. Isaac’s Cathedral, and within 10 minutes walk of Nevsky Prospekt, Palace Square and the Hermitage.
      Energize at the gym. Rejuvenate at the spa, in the sauna and Turkish baths. Have a massage and a dip in the pool. When ready to go out, ask the friendly staff for tickets, and tours advice. The ATM is also useful.
      Enjoy a tea or coffee at the attractive Hotel Astoria lounge with live music, during the day. For later, the restaurant features excellent, authentic Russian cuisine. Then move to the stylish bar for a drink.`,
    },
  },
  {
    id: 4,
    title: `Studio in Solo Sokos Hotel Vasilievsky`,
    price: 100,
    roomType: `Studio`,
    isPremium: false,
    rating: 4.0,
    photo: `/img/studio-01.jpg`,
    bedroomCount: 1,
    maxAdults: 2,
    insideRoom: [
      `Wi-Fi`,
      `Heating`,
      `Kitchen`,
      `Fridge`,
      `Washing machine`,
      `Coffee machine`,
      `Dishwasher`,
      `Towels`,
    ],
    owner: {
      photo: `${AVATARURL_URL}/${Math.random()}`,
      name: `Angie`,
      description: `Solo Sokos Hotel Vasilievsky gallery hotel is located on Vasilievsky Island, within a 5-minute walk of Blagoveshchensky Bridge and Neva embankment. Palace Square and State Hermitage Museum are a 10-minute drive away. The hotel hosts art exhibitions on a constant basis.
      All rooms are individually decorated and include LCD TVs and comfortable seating areas.
      Free, high speed WiFi is accessible throughout this 19th-century building. Stylish décor and furnishing is featured throughout the property. A fitness centre and a sauna are available.`,
    },
  },
];
