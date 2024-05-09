function showThankYouMessage(event) {
  // event.preventDefault(); // Prevent the form from submitting immediately

  var formDiv = document.getElementById('contact-form-div');
  var thankYouMessage = document.createElement('div');
  thankYouMessage.textContent =
    'Kiitos viestistänne, otamme teihin yhteyttä mahdollisimman pian!';
  thankYouMessage.classList.add(
    'flex',
    'justify-center',
    'items-center',
    'h-screen',
    'bg-green-500',
    'font-bold',
    'py-2'
  );

  formDiv.style.display = 'none'; // Hide the form
  formDiv.parentNode.appendChild(thankYouMessage); // Append the message

  // Optional: You can submit the form via JavaScript if needed
  // formDiv.querySelector('form').submit();
}
