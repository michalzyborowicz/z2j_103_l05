const btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
	btn.classList.add('off')
	const div = document.createElement('div')
	document.body.append(div)
	div.classList.add('active')

	div.innerHTML = ' <h1>You!</h1><h2>Yes You!</h2><h3>You gonna be programmer one day, so keep up with good work!</h3>'

	div.classList.add('alert')
	setTimeout(() => {
		btn.classList.remove('off')
		div.remove
	}, 11000)
})
