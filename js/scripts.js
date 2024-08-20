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

let pokemonUl = document.querySelector('.pokemon-list')

pokemonRepository.getAll().forEach(function (pokemon) {
	// console.log(pokemon.name)
	let listItem = document.createElement('li')
	let button = document.createElement('button')

	// set innerText of button to pokemon
	button.innerText = pokemon.name + '\nHeight ' + pokemon.height

	// add custom class to button
	button.classList.add('pokemon-button')

	// append the button to listItem
	listItem.appendChild(button)

	// append the list item to the ul element
	pokemonUl.appendChild(listItem)
})
