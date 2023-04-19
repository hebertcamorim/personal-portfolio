function showToast() {
  let message = 'Contato recebido com Sucesso!'
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  toast.style.opacity = 1;
  setTimeout(() => {
    toast.style.opacity = 0;
  }, 3000);
}
