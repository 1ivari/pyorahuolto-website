function showThankYouMessage() {
  var formDiv = document.getElementById('contact-form');
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
  formDiv.parentNode.replaceChild(thankYouMessage, formDiv);
}
