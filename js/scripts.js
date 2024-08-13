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

for (let i = 0; i < pokemonList.length; i++) {
	// console.log(pokemonList[i])
	document.body.innerHTML += JSON.stringify(pokemonList[i]) + '<br>'
}
