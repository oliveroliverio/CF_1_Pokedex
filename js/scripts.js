// import fetch from 'node-fetch'
let pokemonRepository = (function () {
	let pokemonList = []
	let pokemonHeights = []
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

	// functions list separate from return
	function add(pokemon) {
		pokemonList.push(pokemon)
	}
	function getAll() {
		return pokemonList
	}
	function showName(pokemon) {
		console.log(pokemon.name)
	}
	function addListItem(pokemon) {
		// console.log(pokemon.name)
		let listItem = document.createElement('li')
		let button = document.createElement('button')
		let pokemonUl = document.querySelector('.pokemon-list')
		// set innerText of button to pokemon

		loadDetails(pokemon).then(function () {
			button.innerText = pokemon.name + '\nHeight ' + pokemon.height

			// add custom class to button
			button.classList.add('pokemon-button')
			// append the button to listItem
			listItem.appendChild(button)
			// append the list item to the ul element
			pokemonUl.appendChild(listItem)
			// add event listener ``to button that console logs pokemon.name when clicked.
			button.addEventListener('click', function () {
				console.log(pokemon.name)
			})
		})
	}
	function showDetails() {
		loadDetails(pokemon)
	}
	function loadList() {
		return fetch(apiUrl)
			.then(function (response) {
				return response.json()
			})
			.then(function (json) {
				json.results.forEach(function (item) {
					let pokemon = {
						name: item.name,
						detailsUrl: item.url,
					}
					add(pokemon)
				})
			})
			.catch(function (e) {
				console.error(e)
			})
	}
	function loadDetails(item) {
		let url = item.detailsUrl
		return fetch(url)
			.then(function (response) {
				return response.json()
			})
			.then(function (details) {
				// Now we add the details to the item
				// item.imageUrl = details.sprites.front_default
				item.height = details.height
				item.types = details.types
			})
			.catch(function (e) {
				console.error(e)
			})
	}
	function addNewItem() {
		// console.log(pokemon.name)
		let newDiv = document.createElement('div')
		let otherButton = document.createElement('button')
		otherButton.innerText = 'asdfasdf'
		otherButton.classList.add('other-button')
		newDiv.appendChild(otherButton)
		document.body.appendChild(newDiv)
	}

	return {
		add: add,
		getAll: getAll,
		showName: showName,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails,
		addNewItem: addNewItem,
	}
})()
// sample pokemon data
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

// populate static data
Object.values(pokemonData).forEach(function (pokemon) {
	pokemonRepository.add(pokemon)
})

document.addEventListener('DOMContentLoaded', function () {
	pokemonRepository.loadList().then(function () {
		// Now the data is loaded!
		console.log(pokemonRepository.getAll())
		pokemonRepository.getAll().forEach(function (pokemon) {
			pokemonRepository.addListItem(pokemon)
		})
	})
})

function validateEmail() {
	let value = emailInput.value
	let hasAtSign = value.indexOf('@') > -1
	let hasDot = value.indexOf('.') > -1
	return value && hasAtSign && hasDot
}

function validatePassword() {
	let value = passwordInput.value
	return value && value.length >= 8
}
