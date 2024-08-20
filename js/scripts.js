let pokemonRepository = (function () {
	let pokemonList = []
	return {
		add: function (pokemon) {
			pokemonList.push(pokemon)
		},
		getAll: function () {
			return pokemonList
		},
		addListItem: function (pokemon) {
			// console.log(pokemon.name)
			let listItem = document.createElement('li')
			let button = document.createElement('button')
			let pokemonUl = document.querySelector('.pokemon-list')

			// set innerText of button to pokemon
			button.innerText = pokemon.name + '\nHeight ' + pokemon.height

			// add custom class to button
			button.classList.add('pokemon-button')

			// append the button to listItem
			listItem.appendChild(button)

			// append the list item to the ul element
			pokemonUl.appendChild(listItem)
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

// display pokemon to page
pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon)

	// add event listener to button that console logs pokemon.name when clicked.
	document
		.querySelector('.pokemon-button')
		.addEventListener('click', function () {
			console.log(pokemon.name)
		})
})

//
