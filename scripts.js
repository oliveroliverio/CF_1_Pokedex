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

	// Select all input elements
	let inputs = $('input')

	// Make the element(s) visible
	inputs.show()
	// Hide the element(s)
	inputs.hide()

	// Fade the element(s) out and then hide them
	inputs.fadeOut()
	// Fade the element(s) in and show them
	inputs.fadeIn()
	// Fade the element(s) in or out depending on whether they're currently visible or not
	inputs.fadeToggle()

	// Slide the element(s) out of view and then hide them
	inputs.slideDown()
	// Slide the element(s) into view and show them
	inputs.slideUp()
	// Slide the element(s) in or out
	inputs.slideToggle()

	// Add click event to all li elements
	$('li').on('click', function () {
		$(this).addClass('strike')
	})

