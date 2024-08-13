# Task 1.3 .  Printing to DOM elements of pokemonList

Prompt:

```
Here's some javascript code and HTML code.

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
	document.write(pokemonList[[i]])
}

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<title>Document</title>
		<link
			rel="stylesheet"
			href="./css/styles.css"
		/>
	</head>
	<body>
		<!-- html -->
		<h1></h1>
		<script src="js/scripts.js"></script>
	</body>
</html>

I'm trying to write to the DOM the list of objects in pokemonList but it's only displaying [object Object][object Object][object Object][object Object][object Object], instead of the actual objects

```

Response
```
for (let i = 0; i < pokemonList.length; i++) {
	document.write(JSON.stringify(pokemonList[i]) + '<br>')
}
```

Prompt

```
trying to use for (let i = 0; i < pokemonList.length; i++) {
	document.write(JSON.stringify(pokemonList[i]) + '<br>')
}

but now getting:
"[object Object]
""[object Object]
""[object Object]
""[object Object]
""[object Object]
"
```

>>The issue you're seeing arises because document.write() is not handling JSON.stringify() properly when writing to the DOM. Instead, you can directly append the content to the DOM using methods like innerHTML or textContent. Here's an updated approach:

```
for (let i = 0; i < pokemonList.length; i++) {
    document.body.innerHTML += JSON.stringify(pokemonList[i]) + '<br>';
}
```