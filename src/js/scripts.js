/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// Find the HTML element within the class 'counter-number' and stores it into counter
const counter = document.querySelector(".counter-number");

// Async function, which allows it to use the 'await' keyword to handle asynchronous operations
async function updateCounter() {
    // Send an HTTP request to AWS Lambda endpointto retrieve current view count
    let response = await fetch("https://7v2otwhdr6zr45udwxpb3rmogy0ghnpw.lambda-url.us-west-1.on.aws/");
    // Await response from the server to send back the data, then converts it from JSON to JavaScript object
    let data = await response.json();
    // Update innerHTML of element counter to display the fetched view count by setting 'counter.innerHTML'
    // to a string that includes the view count
    counter.innerHTML = ` Views: ${data}`;
}

// HTML Element: <div class="counter-number">...</div>
// Inner HTML: The ... part, which is the content inside the <div> tags.

updateCounter();