let pokemonList = []

pokemonList.push({
	name: 'Bulbasaur',
	height: 7,
	types: ['grass', 'poison'],
})

let Charmeleon = {
	name: 'Charmeleon',
	height: 3,
	types: ['fire', 'orange'],
}
let Pikachu = {
	name: 'Pikachu',
	height: 5,
	types: ['lightning', 'yellow'],
}
let MewToo = {
	name: 'MewToo',
	height: 3,
	types: ['telekinesis', 'purple'],
}
let Dinosauuuurr = {
	name: 'Dinosauuur',
	height: 8,
	types: ['veryStrong', 'green'],
}

pokemonList.push(Charmeleon, Pikachu, MewToo, Dinosauuuurr)

// for (let i = 0; i < pokemonList.length; i++) {
// 	// console.log(pokemonList[i])
// 	// console.log(pokemonList[i].height)
// 	if (pokemonList[i].height >= 7) {
// 		document.write(
// 			JSON.stringify(pokemonList[i].name) + "  You're big!!!!" + '<br><br>'
// 		)
// 	}
// 	if (pokemonList[i].types[0] === 'telekinesis') {
// 		document.write(
// 			JSON.stringify(pokemonList[i].name) +
// 				"  I'm a huge fan of Eleven from Stranger Things!!!!!" +
// 				'<br><br>'
// 		)
// 	}
// 	// document.body.innerHTML += JSON.stringify(pokemonList[i]) + '<br>'
// }

// refactor the above to forEach loop
pokemonList.forEach(function (pokemon) {
	document.write(
		JSON.stringify(pokemon.name) +
			'<br>' +
			JSON.stringify(pokemon.height) +
			'<br>' +
			JSON.stringify(pokemon.types) +
			'<br><br>'
	)
})
