let pokemonRepository = (function () {
	let pokemonList = []
	return {
		add: function (pokemon) {
			pokemonList.push(pokemon)
		},
		getAll: function () {
			return pokemonList
		},
	}
})()

let pokemonData = {
	Bulbasaur: {
		name: 'Bulbasaur',
		height: 7,
		types: ['trees', 'green'],
	},
	Charmeleon: {
		name: 'Charmeleon',
		height: 3,
		types: ['fire', 'orange'],
	},
	Pikachu: {
		name: 'Pikachu',
		height: 5,
		types: ['lightning', 'yellow'],
	},
	MewToo: {
		name: 'MewToo',
		height: 3,
		types: ['telekinesis', 'purple'],
	},
	Dinosauuuurr: {
		name: 'Dinosauuur',
		height: 8,
		types: ['veryStrong', 'green'],
	},
}
// access values of the object so as to pass through forEach loop
Object.values(pokemonData).forEach(function (pokemon) {
	pokemonRepository.add(pokemon)
})

pokemonRepository.getAll().forEach(function (pokemon) {
	document.write(
		JSON.stringify(pokemon.name) +
			'<br>' +
			JSON.stringify(pokemon.height) +
			'<br>' +
			JSON.stringify(pokemon.types) +
			'<br><br>'
	)
})
