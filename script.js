const mainGlow = document.querySelectorAll('.main_glow');
const mainGlowSmall = document.querySelectorAll('.main_glow_small');
const sideGlowX = document.querySelectorAll('.side_glow_x');
const sideGlowY = document.querySelectorAll('.side_glow_y');

const backToTopButton = document.querySelector('.back_to_top_button');

const q1 = mainGlow

for (let i = 0; i < mainGlow.length; i++) {

    mainGlow[i].addEventListener('mousemove', function (e) {

        let x = e.offsetX;
        let y = e.offsetY;

        // console.log(x);
        // console.log(y);

        const colorChoices = ['#4DA3D6', '#C33354', '#10AF20']

        this.style.background = `radial-gradient(circle 400px at ${x}px ${y}px, ${colorChoices[i]}, transparent)`;
        this.style.opacity = .25;

    })

}


mainGlow.forEach(
    function (area) {
        area.addEventListener('mouseleave', function (e) {

            area.style.background = ``;

            // console.log(x);
            // console.log(y);
        })
    }
)






mainGlowSmall.forEach(
    function (area) {
        area.addEventListener('mousemove', function (e) {
            let x = e.offsetX;
            let y = e.offsetY;

            area.style.opacity = .25;
            // console.log(x);
            // console.log(y);

            // Calculate dynamic RGB values based on the mouse position
            const r = Math.round((x / area.offsetWidth) * 255);
            const g = Math.round((y / area.offsetHeight) * 255);
            const b = Math.round((x / area.offsetWidth) * 255);

            // Apply the new background color based on the mouse position
            area.style.background = `radial-gradient(circle 400px at ${x}px ${y}px, #FC9516, transparent)`;
            // area.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


        })
    }
)

mainGlowSmall.forEach(
    function (area) {
        area.addEventListener('mouseleave', function (e) {

            area.style.background = ``;

            // console.log(x);
            // console.log(y);
        })
    }
)




// sideGlowX.forEach(
//     function (area) {
//         area.addEventListener('mousemove', function (e) {
//             let x = e.offsetX;
//             let y = e.offsetY;

//             console.log(x);

//             area.style.opacity = 1;
//             // console.log(x);
//             // console.log(y);

//             // Calculate dynamic RGB values based on the mouse position
//             const r = Math.round((x / area.offsetWidth) * 255);
//             const g = Math.round((y / area.offsetHeight) * 255);
//             const b = Math.round((x / area.offsetWidth) * 255);

//             // Apply the new background color based on the mouse position
//             area.style.border = `2.5px radial-gradient(circle 400px at ${x}px 0px, #DE4E64, transparent)`;
//             // area.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


//         })
//     }
// )

// sideGlowX.forEach(
//     function (area) {
//         area.addEventListener('mouseleave', function (e) {

//             area.style.background = ``;

//             // console.log(x);
//             // console.log(y);
//         })
//     }
// )













// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


backToTopButton.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}