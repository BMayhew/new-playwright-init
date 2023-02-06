function redirect() {
  // showing message before redirecting
  document.write("Redirecting to the url in 4 seconds...");

  // redirecting to a new page after 4 seconds
  setTimeout(function () {
    window.location = "https://playwrightsolutions.com/";
  }, 4000);

  const button = document.createElement("button");

  button.innerText = "Subscribe";
  button.addEventListener("click", () => {
    alert("Oh, you clicked me!");
  });
  document.body.appendChild(button);
}
