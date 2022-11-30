// Animations (Slide and fade in)

module.exports = {

  // Reveal From the bottom 
  RevealY: () => {
    let revealCards = document.querySelectorAll(".reveal");

    for (let i = 0; i < revealCards.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = revealCards[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        revealCards[i].classList.add("active");
      } else {
        revealCards[i].classList.remove("active");
      }
    }
  },

  // Reveal From the left 
  RevealLeft: () => {
    let revealLeftCards = document.querySelectorAll(".revealLeft");

    for (let i = 0; i < revealLeftCards.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = revealLeftCards[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        revealLeftCards[i].classList.add("activeLeft");
      } else {
        revealLeftCards[i].classList.remove("activeLeft");
      }
    }
  },

  // Reveal from the right 
  RevealRight: () => {
    let revealRightCards = document.querySelectorAll(".revealRight");

    for (let i = 0; i < revealRightCards.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = revealRightCards[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        revealRightCards[i].classList.add("activeRight");
      } else {
        revealRightCards[i].classList.remove("activeRight");
      }
    }
  }
};
