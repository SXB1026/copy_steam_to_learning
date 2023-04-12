document.addEventListener('DOMContentLoaded', () => {
    const ikun = document.querySelector('img[src="/images/ikun.jpg"]');
    if (ikun) {
      ikun.addEventListener('click', () => {
        window.location.href = '/login_register';
      });
    }
  });
  