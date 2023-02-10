document.querySelector("form").addEventListener("submit", function(event) {
    const form = event.target;
    const name = form.elements.user_name.value;
    const email = form.elements.user_email.value;
    const message = form.elements.user_message.value;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      event.preventDefault();
    }
  });