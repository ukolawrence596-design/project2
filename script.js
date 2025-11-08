< !--Back to Top Button-- >
<button id="backToTop" title="Go to top">↑</button>

<script>
// Create functionality for Back to Top button
const backToTopButton = document.getElementById("backToTop");

// Show button when scrolled down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scroll to top
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
</script>

<style>
/* Style for Back to Top Button */
#backToTop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--accent-color, #0078ff);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 20px;
  cursor: pointer;
  display: none;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: background 0.3s ease, transform 0.3s ease;
  z-index: 1000;
}

#backToTop:hover {
  background-color: #005fcc;
  transform: translateY(-3px);
}
</style>
