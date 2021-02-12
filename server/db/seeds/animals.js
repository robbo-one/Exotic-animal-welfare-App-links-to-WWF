exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        { id: 1, name: 'Boris', type: 'Elephant', price: 300, location: 'Africa'   },
        { id: 2, name: 'Maurice', type: 'Orangutan', price: 600, location: 'Asia'  },
        { id: 3, name: 'Willy', type: 'Blue Whale', price: 5, location: 'Australasia'  },
        { id: 4, name: 'Moley', type: 'Naked Mole Rat', price: 9000, location: 'Asia'  },
        { id: 5, name: 'Barry', type: 'Sun Bear', price: 20, location: 'Europe'  },
        { id: 6, name: 'Samuel', type: 'Sloth', price: 600, location: 'Africa'  },
        { id: 7, name: 'Penelope', type: 'Python', price: 80000, location: 'Australasia'  }
      ])
    })
}
