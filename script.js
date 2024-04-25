
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        form.reset();
    });
});


document.getElementById("portfolioButton").addEventListener("click", function() {
    window.location.href ="file:///C:/Users/kathy/OneDrive/Documents/GitHub/Final%20assignment/portfolio.html";
});


function sanityCheck() {
    console.log('!Sanity check: all good!');
}
// Call the sanityCheck function
sanityCheck();