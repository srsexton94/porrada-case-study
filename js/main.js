function openPersona(event) {
  const personaName = event.target.innerText;
  const personaContainers =
    document.getElementsByClassName("persona-container");
  const personaButtons = document.querySelectorAll(".controls button");

  Array.from(personaButtons).forEach((button) => {
    button.classList.remove("active-button");
  });
  event.target.classList.add("active-button");
  Array.from(personaContainers).forEach((container) => {
    container.style.display = "none";
  });
  document.getElementById(personaName).style.display = "block";
}
