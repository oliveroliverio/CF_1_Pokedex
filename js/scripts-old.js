let pokemonRepository = (function () {
	let pokemonList = []
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

	return {
		add: function (pokemon) {
			pokemonList.push(pokemon)
		},
		getAll: function () {
			return pokemonList
		},
		showDetails: function (pokemon) {
			console.log(pokemon.name)
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

			// add event listener to button that console logs pokemon.name when clicked.
			button.addEventListener('click', function () {
				console.log(pokemon.name)
			})
		},
		loadList: function loadList() {
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

// // display pokemon to page
// pokemonRepository.getAll().forEach(function (pokemon) {
// 	pokemonRepository.addListItem(pokemon)
// })

pokemonRepository.loadList().then(function () {
	// Now the data is loaded!
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon)
	})
})

// ----------------------------form validation--------------------------------

function validateEmail() {
	let value = emailInput.value

	if (!value) {
		showErrorMessage(emailInput, 'Email is a required field.')
		return false
	}

	if (value.indexOf('@') === -1) {
		showErrorMessage(emailInput, 'You must enter a valid email address.')
		return false
	}

	if (value.indexOf('.') === -1) {
		showErrorMessage(emailInput, 'You must enter a valid email address.')
		return false
	}

	showErrorMessage(emailInput, null)
	return true
}
function validatePassword() {
	let value = passwordInput.value

	if (!value) {
		showErrorMessage(passwordInput, 'Password is a required field.')
		return false
	}

	if (value.length < 8) {
		showErrorMessage(
			passwordInput,
			'The password needs to be at least 8 characters long.'
		)
		return false
	}

	showErrorMessage(passwordInput, null)
	return true
}

function showErrorMessage(input, message) {
	let container = input.parentElement // The .input-wrapper

	// Check and Remove any existing errors
	let error = container.querySelector('.error-message')
	if (error) {
		container.removeChild(error)
	}

	// Now add the error if the message isn’t empty
	if (message) {
		let error = document.createElement('div')
		error.classList.add('error-message')
		error.innerText = message
		container.appendChild(error)
	}
}

function validateForm() {
	let isValidEmail = validateEmail()
	let isValidPassword = validatePassword()
	return isValidEmail && isValidPassword
}
