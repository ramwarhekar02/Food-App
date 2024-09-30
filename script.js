document.querySelectorAll('h2').forEach(navItem => {
    navItem.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const cartIcon = document.querySelector('.ri-shopping-cart-2-line');
cartIcon.addEventListener('click', () => {
    alert('Shopping Cart is currently empty!');
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#FF5733';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'orange';
    });
});

const orderNowBtn = document.querySelector('.btn button');
orderNowBtn.addEventListener('click', () => {
    alert('Order functionality is coming soon!');
});

const learnMoreBtn = document.querySelector('.learn-more');
learnMoreBtn.addEventListener('click', () => {
    alert('Learn more about our services on the About page.');
});

const videoBtn = document.querySelector('.video');
videoBtn.addEventListener('click', () => {
    alert('Video is coming soon!');
});

document.querySelectorAll('.ri-star-fill').forEach(star => {
    star.addEventListener('mouseover', () => {
        star.style.color = '#FFD700';
    });

    star.addEventListener('mouseout', () => {
        star.style.color = 'orange'; 
    });
});

const emailSubmitBtn = document.querySelector('.help button');
emailSubmitBtn.addEventListener('click', () => {
    const emailInput = document.querySelector('.help input');
    if (validateEmail(emailInput.value)) {
        alert('Thank you for subscribing! We will get in touch.');
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}