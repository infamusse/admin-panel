const trigger = document.querySelector('.fa-bars');
trigger.addEventListener('click', function() {
  const sidebar = document.querySelector('.sidebar');
  const navbar = document.querySelector('.navbar');
  const section = document.querySelector('.section');

  trigger.classList.toggle('anchor');
  sidebar.classList.toggle('sidebar--hide');
  navbar.classList.toggle('navbar--full-screen');
  section.classList.toggle('section--full-screen');
});
