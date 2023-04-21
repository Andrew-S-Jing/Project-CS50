// Add event listener to check button
document.querySelector('#send').addEventListener('click', function() {

    // Select input element
    let input = document.querySelector('input');
    // Test input element's value
    if (input.value !== '') {
        document.querySelector('#feedback3').innerHTML = 'Thank you for your submission!';
        input.value = '';
    }
})