// import fetch from 'node-fetch'
let pokemonRepository = (function () {
	let pokemonList = []
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'
	let imageUrl =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

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
		// Populate modal content
		const modalTitle = document.querySelector('#pokemonModalLabel')
		const modalBody = document.querySelector('.modal-body')

		modalTitle.innerText = pokemon.name
		modalBody.innerHTML = `
			<p>Height: ${pokemon.height}</p>
			<p>Types: ${pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ')}</p>
		`

		// Show the modal
		$('#pokemonModal').modal('show')
	}
	function loadList() {
		return fetch(apiUrl)
			.then(function (response) {
				return response.json()
			})
			.then(function (json) {
				json.results.forEach(function (item) {
					// function to parse detailsUrl and grab the id
					let pokeid = item.url.split('/')[6]
					let pokemon = {
						name: item.name,
						detailsUrl: item.url,
						id: pokeid,
					}
					add(pokemon)
				})
			})
			.catch(function (e) {
				console.error(e)
			})
	}
	function addImg(pokemon) {
		// get image from imageUrl + pokemon.id
		let img = document.createElement('img')
		let listItem = document.createElement('li')
		let pokemonUl = document.querySelector('.pokemon-list')
		console.log(pokemon.id)
		img.src = imageUrl + pokemon.id + '.png'
		// append image to listItem
		listItem.appendChild(img)
		// append the list item to the ul element
		pokemonUl.appendChild(listItem)
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

	return {
		add: add,
		getAll: getAll,
		showName: showName,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails,
		addNewItem: addNewItem,
		addImg: addImg,
	}
})()

pokemonRepository.loadList().then(function () {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon)
		// addimage
		pokemonRepository.addImg(pokemon)
	})
})
