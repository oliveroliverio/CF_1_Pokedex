// import fetch from 'node-fetch'
let pokemonRepository = (function () {
	let pokemonList = []
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
		// Ensure these elements are properly initialized
		const button = document.createElement('button')
		const listItem = document.createElement('li')
		const pokemonUl = document.querySelector('#list-group-item') // Assuming the ul has an id of 'pokemon-ul'

		if (button && listItem && pokemonUl) {
			loadDetails(pokemon)
				.then(function () {
					button.innerText = pokemon.name

					// add custom class to button
					button.classList.add('btn', 'btn-primary', 'mb-2')
					// append the button to listItem
					listItem.appendChild(button)
					// append the list item to the ul element
					pokemonUl.appendChild(listItem)
					// add event listener to button that displays details in modal
					button.addEventListener('click', () => {
						// console.log(pokemon.height)
						showDetails(pokemon)
					})
				})
				.catch(function (error) {
					console.error('Error loading details:', error)
				})
		} else {
			console.error('Error: One or more elements are null.')
		}
	}
	function showDetails(pokemon) {
		showModal(pokemon.name, `Height: ${pokemon.height}`)
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
	// returns .height and types
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
	function showModal(title, text) {
		let modalContainer = document.querySelector('#modal-container')

		// Clear all existing modal content
		modalContainer.innerHTML = ''

		let modal = document.createElement('div')
		modal.classList.add('modal')

		// Add the new modal content
		let closeButtonElement = document.createElement('button')
		closeButtonElement.classList.add('modal-close')
		closeButtonElement.innerText = 'Close'

		let titleElement = document.createElement('h1')
		titleElement.innerText = title

		let contentElement = document.createElement('p')
		contentElement.innerText = text

		modal.appendChild(closeButtonElement)
		modal.appendChild(titleElement)
		modal.appendChild(contentElement)
		modalContainer.appendChild(modal)

		modalContainer.classList.add('is-visible')

		// Add event listener to close the modal
		closeButtonElement.addEventListener('click', () => {
			modalContainer.classList.remove('is-visible')
		})
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
		showModal: showModal,
	}
})()

pokemonRepository.loadList().then(function () {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon)
	})
})

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

// let newElement = $('<div class="new-class">Content is here!</div>')
// $('body').append(newElement)
