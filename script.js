const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll(".nav nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav nav a").forEach(x => x.classList.remove("active"));
    link.classList.add("active");
  });
});
