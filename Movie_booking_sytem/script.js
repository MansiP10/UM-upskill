const seatingArea = document.getElementById('seating-area');
const selectedSeats = document.getElementById('selected-seats');
const bookNowBtn = document.getElementById('book-now');

// Sample seating arrangement (replace with your actual data)
const seatingLayout = [
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]
];

// Create seating area elements
function createSeatingArea() {
    seatingArea.innerHTML = '';
    for (let i = 0; i < seatingLayout.length; i++) {
        const row = seatingLayout[i];
        for (let j = 0; j < row.length; j++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.setAttribute('data-row', i);
            seat.setAttribute('data-col', j);

            // Set seat status based on seatingLayout
            if (row[j] === 0) {
                seat.classList.add('occupied');
            }

            seat.addEventListener('click', handleSeatClick);
            seatingArea.appendChild(seat);
        }
    }
}

// Handle seat click event
let selectedSeatsArr = [];
function handleSeatClick(event) {
    const seat = event.target;
    const row = seat.getAttribute('data-row');
    const col = seat.getAttribute('data-col');

    if (!seat.classList.contains('occupied')) {
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            selectedSeatsArr = selectedSeatsArr.filter(s => !(s.row === row && s.col === col));
        } else {
            seat.classList.add('selected');
            selectedSeatsArr.push({ row, col });
        }
    }

    updateSelectedSeats();
}

// Update selected seats display
function updateSelectedSeats() {
    selectedSeats.textContent = `You have selected ${selectedSeatsArr.length} seats for a price of $${selectedSeatsArr.length * 10}.00`;
}

// Book Now button click event
bookNowBtn.addEventListener('click', () => {
    // TODO: Handle booking logic here
    alert('Booking confirmed!');
});

// Create seating area on page load
createSeatingArea();