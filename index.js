const checkIcon = document.querySelectorAll('.fa-check');
const checkDisplay = document.querySelectorAll('.checkBtn-display');
const heartIcon = document.querySelectorAll('.fa-heart');


// checkIcon.forEach(function (check) {
//     check.addEventListener('click', () => {
//         check.classList.toggle('toggleBtn');
//         checkDisplay.forEach(display => {
//             display.classList.toggle('toggleDisplay');
//         })
//     })
// })

checkIcon.forEach((check, index) => {
    check.addEventListener('click', () => {
        check.classList.toggle('toggleBtn');
        checkDisplay[index].classList.toggle('toggleDisplay');
    })
})

heartIcon.forEach(heart => {
    heart.addEventListener('click', () => {
        if (heart.className == "fa-regular fa-heart") {
            heart.className = "fa-solid fa-heart";
            heart.style.color = '#0266FF';
        } else {
            heart.className = "fa-regular fa-heart";
            heart.style.color = '#9D9DB5';
        }
    })
})