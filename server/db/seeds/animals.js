exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        { id: 1, name: 'Boris', type: 'Elephant', price: 300, location: 'Africa'   },
        { id: 2, name: 'Maurice', type: 'Orangutan', price: 600, location: 'Asia'  },
        { id: 3, name: 'Willy', type: 'Blue Whale', price: 5, location: 'Australasia'  }
      ])
    })
}
