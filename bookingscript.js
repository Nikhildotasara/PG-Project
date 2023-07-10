document.addEventListener('DOMContentLoaded', function() {
    const seats = document.getElementsByClassName('subBox');
    const totalBedsFloor1 = 22; // Total number of beds on the 1st floor
    const totalBedsFloor2 = 22; // Total number of beds on the 2nd floor
    let bookedBedsFloor1 = 0; // Initially, no beds are booked on the 1st floor
    let bookedBedsFloor2 = 0; // Initially, no beds are booked on the 2nd floor
  
    Array.from(seats).forEach(function(seat) {
      seat.addEventListener('click', function() {
        if (seat.classList.contains('booked')) {
          alert('This room is already booked. Please select another room.');
        } else {
          const floor = seat.closest('.floor');
          const confirmation = confirm('Do you want to book this room?');
          if (confirmation) {
            seat.classList.add('booked');
            if (floor.classList.contains('floor_1')) {
              bookedBedsFloor1++;
            } else if (floor.classList.contains('floor_2')) {
              bookedBedsFloor2++;
            }
            updateBedCounts();
          }
        }
      });
    });
  
    function updateBedCounts() {
        const availableBedsFloor1 = totalBedsFloor1 - bookedBedsFloor1;
        const availableBedsFloor2 = totalBedsFloor2 - bookedBedsFloor2;
        document.querySelector('.floor_1_details li:nth-child(2) span').textContent = bookedBedsFloor1;
        document.querySelector('.floor_1_details li:nth-child(3) span').textContent = availableBedsFloor1;
        document.querySelector('.floor_2_details li:nth-child(2) span').textContent = bookedBedsFloor2;
        document.querySelector('.floor_2_details li:nth-child(3) span').textContent = availableBedsFloor2;
      }
      
  
    updateBedCounts(); // Initialize bed counts on page load
  });