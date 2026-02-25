//debug: dosya yükleniyor mu?
console.log("app.js yüklendi!");

//=========
//Elementleri Seçme DOM
//=========
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navLinksList = document.querySelectorAll(".nav-link");
const themeBtn = document.getElementById("themeBtn");
const revealItems = document.querySelectorAll(".reveal");
const progressBars = document.querySelectorAll(".progress-bar");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

//=========
//Mobil Menü Toggle
//=========
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

//=========
//menü link tıklanınca mobil menü + active değişsin
//=========

if (navLinksList.length > 0) {
    navLinksList.forEach(link => {
        link.addEventListener("click", () => {
            if(navLinks) navLinks.classList.remove("open");

            navLinkİtems.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

//=========
//Tema Butonu
//=========

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if(document.body.classList.contains("light")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }
    });
}

//=========
//reveal Animasyonları
//=========

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;

    revealItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < triggerBottom) {
            item.classList.add("visible");
        }
    });
}

//Sayfa açıldığında + scroll olduğunda çalıştır
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

//=========
//Progress Bar Animasyonu
//=========

function animateProgressBars() {
    const triggerPoint = window.innerHeight * 0.9;

    progressBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;

        if(barTop < triggerPoint && !bar.dataset.animated) {
            bar.style.widht = bar.dataset.widht || "70%";
            bar.dataset.animated = "true";
        }
    });
}

window.addEventListener("scroll", animateProgressBars);
window.addEventListener("load", animateProgressBars);

//=========
//Demo Formu
//=========

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        formMessage.textContent = "Mesajınız gönderildi! Teşekkürler. (Demo formu - backend yok)";
        formMessage.style.color = "pink";
        contactForm.reset();

        setTimeout(() => {
            formMessage.textContent = "";
        }, 3000);
    });
}
