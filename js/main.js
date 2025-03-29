//active Navbar

//nav hide
let navBar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function(a) {
    a.addEventListener('click', function() {
        navcollapse.classList.remove("show"); // Fixed variable name
    });
});
//nav shadow
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

//counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        if (!obj) return; // Ensure the element exists
        let current = start,
            range = end - start,
            increment = end > start ? Math.ceil(range / 100) : -1, // Dynamic increment
            step = Math.abs(Math.floor(duration / (range / increment))), // Adjust step timing
            timer = setInterval(() => {
                current += increment;
                if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                    current = end;
                    clearInterval(timer);
                }
                obj.textContent = current;
            }, step);
    }
    counter("counter1", 0, 1287, 3000);
    counter("counter2", 100, 5787, 2500);
    counter("counter3", 0, 1440, 3000);
    counter("counter4", 0, 7110, 3000);
});

