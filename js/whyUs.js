  const listItems = document.querySelectorAll('.why-us-list li');
  const descriptions = document.querySelectorAll('.why-us-description p');
  let currentIndex = 0;
  let intervalId;

  function showItem(index) {
    // Reset classes
    listItems.forEach(item => item.classList.remove('active'));
    descriptions.forEach(desc => desc.classList.remove('active'));

    // Add active class to current item
    listItems[index].classList.add('active');
    descriptions[index].classList.add('active');
    currentIndex = index;
  }

  function startCarousel() {
    intervalId = setInterval(() => {
      let nextIndex = (currentIndex + 1) % listItems.length;
      showItem(nextIndex);
    }, 5000);
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  // Event listeners for hover
  listItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      stopCarousel();
      showItem(index);
    });
    item.addEventListener('mouseleave', () => {
      startCarousel();
    });
  });

  // Initialize
  showItem(0);
  startCarousel();
