$(document).ready(function () {
    let $modal = $('#sketchModal');
    let $modalContent = $modal.find('.modal-content');
    let $bookingMessage = $('#bookingMessage'); 
    let $confirmBookingBtn = $('#confirmBookingBtn');
    let bookings = {};
    function openModal() {
        $modal.addClass('show');
    }

    function closeModal() {
        $modalContent.css('animation', 'modalExit 0.3s ease forwards');
        setTimeout(() => {
            $modal.removeClass('show');
            $modalContent.css('animation', '');
        }, 300);
    }

    function checkAvailability(trainerName, date, time) {
        return bookings[trainerName]?.[date]?.includes(time);
    }

    function addBooking(trainerName, date, time) {
        if (!bookings[trainerName]) bookings[trainerName] = {};
        if (!bookings[trainerName][date]) bookings[trainerName][date] = [];
        bookings[trainerName][date].push(time);
    }

    $('.book__btn').on('click', function () {
        let loggedIn = sessionStorage.getItem('Logged_In') === 'true';
        console.log(sessionStorage.getItem('Logged_In'));
        if (!loggedIn) {
            alert("You must log in to access this page.");
            return;
        }
        let trainerName = $(this).closest('.card').find('.card__title').text();
        $modal.data('trainerName', trainerName);
        $modal.find('.datepicker').val('');
        $('#timePicker').val('');
        $bookingMessage.hide(); 
        openModal();
        
    });

    $confirmBookingBtn.on('click', function () {
        let trainerName = $modal.data('trainerName');
        let date = $('.datepicker').val();
        let time = $('#timePicker').val();

        if (!date || !time) {
            alert('Please select both a date and time.');
            return;
        }

        if (checkAvailability(trainerName, date, time)) {
           
            $bookingMessage.text(`Trainer ${trainerName} is unavailable on ${date} at ${time}.`).show();
        } else {
            addBooking(trainerName, date, time);
            alert(`Appointment confirmed with ${trainerName} on ${date} at ${time}.`);
            closeModal();
        }
    });

    $('#closeModalBtn').on('click', closeModal);

    $('.datepicker').datepicker();

    

        
    $('.faq-question').on('click', function () {
    let answer = $(this).next('.faq-answer');
    let toggle = $(this).find('.faq-toggle');
        
    if (answer.is(':visible')) {
        answer.slideUp(300);
        toggle.text('+');
    } else {
        $('.faq-answer').slideUp(300); 
        $('.faq-toggle').text('+');   
        answer.slideDown(300);
        toggle.text('−');
    }
        
    });


});

document.addEventListener("DOMContentLoaded", () => {
    
    let Logged_In = sessionStorage.getItem("Logged_In") === "true";

   
    let navElement = document.querySelector(".nav");

    
    if (Logged_In) {
        let loginLink = navElement.querySelector('a[href="/login.html"]');
        if (loginLink) {
            loginLink.textContent = "Logout";
            loginLink.href = "#"; 
            loginLink.addEventListener("click", (e) => {
                e.preventDefault();
                sessionStorage.setItem("Logged_In", "false");
                location.reload(); 
                alert("You are logged out.")
            });
        }
    }
});