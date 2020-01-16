// Only a simulated database for demonstration purposes.
const coffeesMock = [
  {
    name: 'Flat white',
    description: 'A flat white is a coffee drink consisting of double ristretto espresso with microfoam. It is comparable to a latte, but smaller in volume and with less microfoam',
    price: 4.50
  },
  {
    name: 'Cappuccino',
    description: 'A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, and flavoring with cinnamon or chocolate powder.',
    price: 3.60
  },
  {
    name: 'Latte',
    description: 'Caffe latte is a coffee drink made with espresso and steamed milk. The word comes from the Italian caffè e latte, caffelatte or caffellatte, which means "coffee & milk".',
    price: 6.40
  },
];

// Only a simulated database for demonstration purposes.
const usersMock = [];

const findUserByName = (username) => {
    return usersMock.filter((user) => user.username === username)[0];
};
module.exports = {
    coffeesMock,
    usersMock,
    findUserByName
};
