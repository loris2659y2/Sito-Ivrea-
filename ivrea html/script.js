function toggleMenu() {
  var menu = document.getElementById("menu");
  menu
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
