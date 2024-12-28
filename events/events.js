document.addEventListener('DOMContentLoaded', function () {
    const eventsContainer = document.getElementById('events-container');
    const modal = document.getElementById('event-modal');
    const closeModal = document.getElementById('close-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalDate = document.getElementById('modal-date');
    const modalTime = document.getElementById('modal-time');
    const regionFilter = document.getElementById('region');
    const timeFilter = document.getElementById('time');

    function showModal(eventCard) {
        const imgSrc = eventCard.querySelector('img').src;
        const title = eventCard.querySelector('h3').textContent;
        const date = eventCard.querySelector('.event-time:nth-child(3)').textContent;
        const time = eventCard.querySelector('.event-time:nth-child(4)').textContent;
        const description = eventCard.getAttribute('data-description'); // Read description from data-description attribute

        modalImage.src = imgSrc;
        modalTitle.textContent = title;
        modalDate.textContent = date;
        modalTime.textContent = time;
        modalDescription.textContent = description; // Set description in modal

        modal.classList.add('active');
    }

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

function filterEvents() {
    const region = regionFilter.value;
    const time = timeFilter.value;
    const eventCards = Array.from(eventsContainer.getElementsByClassName('event-card'));

    eventCards.forEach(card => {
        const eventRegion = card.getAttribute('data-region');
        const eventTime = card.getAttribute('data-time');

        const matchesRegion = region === 'all' || region === eventRegion;
        const matchesTime = time === 'all' || time === eventTime;

        if (matchesRegion && matchesTime) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

regionFilter.addEventListener('change', filterEvents);
timeFilter.addEventListener('change', filterEvents);


Array.from(eventsContainer.getElementsByClassName('event-card')).forEach(card => {
    card.addEventListener('click', () => showModal(card));
});
});