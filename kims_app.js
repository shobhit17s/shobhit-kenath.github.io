const allImages = document.querySelectorAll('.image');
const tabContainer = document.querySelector('.tabs');
const backToTopButton = document.querySelector('.back_to_top_button');

for (let i = 0; i < allImages.length; i++) {

    if (i >= 3) {
        allImages[i].style.display = 'none';
        tabContainer.style.display = 'none';
    }

}

function checkPassword() {
    const correctPassword = "test";  // Replace with your password
    const inputPassword = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("error_message");

    if (inputPassword === correctPassword) {
        errorMessage.style.display = 'none'; // Hide error message if previously shown

        allImages.forEach(function (image) {
            image.style.display = 'block';
        })
        tabContainer.style.display = 'flex'

    } else {
        // Display error message if password is incorrect
        errorMessage.style.display = 'block';

        for (let i = 0; i < allImages.length; i++) {

            if (i >= 3) {
                allImages[i].style.display = 'none';
                tabContainer.style.display = 'none';
            }

        }
    }
}




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


backToTopButton.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}