const countdown = (count, callback) => {
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');
  
    const countdownInterval = setInterval(() => {
      count--;
  
      if (count > 1) {
        countdownElement.innerText = count;
      } else if (count === 1) {
        countdownElement.innerText = count;
      } else {
        clearInterval(countdownInterval);
  
        messageElement.classList.remove('hidden');
        callback(); // Call the callback function when countdown finishes
      }
    }, 1000);
  };
  
  // Callback function to display the countdown in the middle of the page
  const displayCountdown = () => {
    const countdownContainer = document.getElementById('countdown-container');
    countdownContainer.style.display = 'flex';
    countdownContainer.style.flexDirection = 'column';
    countdownContainer.style.alignItems = 'center';
    countdownContainer.style.justifyContent = 'center';
    countdownContainer.style.height = '100vh';
  };
  
  // Start the countdown
  countdown(10, displayCountdown);
