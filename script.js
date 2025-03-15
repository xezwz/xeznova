document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const darkModeToggle = document.createElement("button");
    const navLinks = document.querySelectorAll("nav a");
    const backToTop = document.createElement("button");
    
    // Typing Animation for Welcome Text
    const welcomeText = document.querySelector("h1");
    const text = "Welcome to Xêznova!";
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            welcomeText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    welcomeText.innerHTML = "";
    typeText();

    // Smooth Scroll Effect
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Sticky Header on Scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.background = "#222";
            header.style.color = "#fff";
        } else {
            header.style.background = "transparent";
            header.style.color = "#000";
        }
    });

    // Dark Mode Toggle
    darkModeToggle.innerText = "🌙 Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "20px";
    darkModeToggle.style.right = "20px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.borderRadius = "5px";
    darkModeToggle.style.cursor = "pointer";
    darkModeToggle.style.background = "#333";
    darkModeToggle.style.color = "#fff";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerText = "☀️ Light Mode";
            document.body.style.background = "#121212";
            document.body.style.color = "#fff";
        } else {
            darkModeToggle.innerText = "🌙 Dark Mode";
            document.body.style.background = "#fff";
            document.body.style.color = "#000";
        }
    });

    // Back to Top Button
    backToTop.innerText = "⬆";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px";
    backToTop.style.borderRadius = "50%";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";
    backToTop.style.background = "#333";
    backToTop.style.color = "#fff";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Digital Clock
    const clock = document.createElement("div");
    clock.style.position = "fixed";
    clock.style.bottom = "20px";
    clock.style.left = "20px";
    clock.style.padding = "10px";
    clock.style.borderRadius = "5px";
    clock.style.background = "#333";
    clock.style.color = "#fff";
    document.body.appendChild(clock);

    function updateClock() {
        const now = new Date();
        clock.innerText = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Pop-up Notification on Visit
    setTimeout(function () {
        alert("👋 Welcome to Xêznova! Enjoy shopping with us.");
    }, 1000);
});
