function checkPassword () {
    var input = document.getElementById('password-input')
    var overlay = document.getElementById('overlay')
    var password = 'YinMo19'

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            if (input.value === password) {
                overlay.style.display = 'none'
            } else {
                input.value = ''
            }
        }
    })
}
