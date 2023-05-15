const checkIcon = document.querySelectorAll('.fa-check');
const checkDisplay = document.querySelectorAll('.checkBtn-display');
const heartIcon = document.querySelectorAll('.fa-heart');
const xIcon = document.querySelectorAll('.fa-xmark');
const logo = document.querySelectorAll('.refocus-logo');

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

xIcon.forEach(xmark => {
    xmark.addEventListener('click', () => {
        xmark.closest('.news').style.display = 'none';
    })
})

logo.addEventListener ('click', () => {
    
})