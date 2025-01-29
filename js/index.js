window.addEventListener("scroll", function () {
    const elements = document.getElementsByClassName("home_2");

    Array.prototype.forEach.call(elements, function (element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const triggerOffset = 400;
      if (elementTop - windowHeight + triggerOffset <= 0) {
        element.classList.add("animated");
      }
    });
  }); 


  
  window.addEventListener("scroll", function () {
    const elements = document.getElementsByClassName("home_3");

    Array.prototype.forEach.call(elements, function (element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const triggerOffset = 400;
      if (elementTop - windowHeight + triggerOffset <= 0) {
        element.classList.add("animated");
      }
    });
  });