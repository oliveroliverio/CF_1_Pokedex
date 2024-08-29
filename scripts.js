$(document).ready(() => {
	// Event handler for button click
	$('#test-button').click(() => {
		// Create a new div element with some content
		let newElement = $('<div class="new-class">asdfasdf!</div>')
		// Append the new element to the body
		$('body').append(newElement)
	})

	// Example of manipulating existing content
	$('#content').text('This is some initial content.')
})
