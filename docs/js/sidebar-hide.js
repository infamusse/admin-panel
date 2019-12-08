const trigger = document.querySelector('.fa-bars');
trigger.addEventListener('click', function() {
  const sidebar = document.querySelector('.sidebar');
  const container = document.querySelector('.container');

  trigger.classList.toggle('anchor');
  sidebar.classList.toggle('sidebar--hide');
  container.classList.toggle('container--full-screen');
});
