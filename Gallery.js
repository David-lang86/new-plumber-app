const viewMoreButtons = document.querySelectorAll('.view-more');
const viewLessButtons = document.querySelectorAll('.view-less');

viewMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const morePictures = button.nextElementSibling;
    morePictures.style.display = 'block';
    button.style.display = 'none';
  });
});

viewLessButtons.forEach(button => {
  button.addEventListener('click', () => {
    const morePictures = button.parentNode;
    morePictures.style.display = 'none';
    morePictures.previousElementSibling.style.display = 'block';
  });
});