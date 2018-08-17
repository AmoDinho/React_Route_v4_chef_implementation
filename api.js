const ChefAPI = {
  chefs: [
    { number: 1, name: "Max Cele", cusine: "Seafood", rating: 3 },
    { number: 2, name: "Madame Sarah", cusine: "Thai", rating: 2 },
    { number: 3, name: "Sister Nancy", cusine: "African", rating: 5 },
    { number: 4, name: "Javier Herndez", cusine: "Mexican", rating: 5 },
    { number: 5, name: "Alfred Wayne", cusine: "Western", rating: 4 },
    { number: 6, name: "Nomonde Bela", cusine: "Italian", rating: 3 }
  ],
  all: function() {
    return this.chefs;
  },
  get: function(id) {
    const isChef = f => f.number === id;
    return this.chefs.find(isChef);
  }
};

export default ChefAPI;
