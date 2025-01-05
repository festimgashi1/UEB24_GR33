document.addEventListener('DOMContentLoaded', function() { 
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => { 
        entries.forEach((entry) => { 
            if (entry.isIntersecting) { 
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
                observer.unobserve(entry.target); 
            } 
        }); 
    }, { threshold: 0.5 }); 
    timelineItems.forEach(item => observer.observe(item)); 
});

///
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : 0;
    const reviewText = document.getElementById('reviewText').value;

    if (rating == 0) {
        alert('Please select a star rating!');
        return;
    }

    const newReview = {
        name: name,
        image: "https://via.placeholder.com/60",  
        stars: parseInt(rating),
        text: reviewText
    };

   
    const formContainer = document.querySelector('.submit-review');
    const successMessage = document.querySelector('.success-message');

    formContainer.style.display = 'none';  
    successMessage.style.display = 'block'; 

    setTimeout(() => {
        successMessage.style.opacity = '1'; 
    }, 50);

   
    setTimeout(() => {
        
        const mailtoLink = "mailto:gresathaci18@gmail.com?subject=Review&body=" +
            "Name: " + encodeURIComponent(name) + "%0D%0A" +
            "Email: " + encodeURIComponent(email) + "%0D%0A" +
            "Rating: " + encodeURIComponent(rating) + "%0D%0A" +
            "Review: " + encodeURIComponent(reviewText);

        window.location.href = mailtoLink; 

        setTimeout(() => {
            successMessage.style.opacity = '0'; 
            setTimeout(() => {
                successMessage.style.display = 'none'; 
                formContainer.style.display = 'block';
                formContainer.querySelector('form').reset(); 
            }, 500); 
        }, 2000); 
    }, 2000); 
});
