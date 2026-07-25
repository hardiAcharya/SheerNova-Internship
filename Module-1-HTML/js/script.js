document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded Successfully");


    // Contact form message
    const form = document.querySelector("form");


    if (form) {

        form.addEventListener("submit", function () {

            alert("Your form has been submitted successfully!");

        });

    }


});