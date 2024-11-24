$(document).ready(function () {
    const $modal = $('#sketchModal');
    const $modalContent = $modal.find('.modal-content');
    const $bookingMessage = $('#bookingMessage'); 
    const $confirmBookingBtn = $('#confirmBookingBtn');
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
        const loggedIn = localStorage.getItem('loggedIn') === 'true';
        if (!loggedIn) {
            alert("You must log in to access this page.");
            return;
        }
        const trainerName = $(this).closest('.card').find('.card__title').text();
        $modal.data('trainerName', trainerName);
        $modal.find('.datepicker').val('');
        $('#timePicker').val('');
        $bookingMessage.hide(); 
        openModal();
    });

    $confirmBookingBtn.on('click', function () {
        const trainerName = $modal.data('trainerName');
        const date = $('.datepicker').val();
        const time = $('#timePicker').val();

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
