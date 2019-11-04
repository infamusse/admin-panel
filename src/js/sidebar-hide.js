const trigger = document.querySelector('.fa-bars')
trigger.addEventListener("click",  function(){
    console.log('chowaj')
     const sidebar = document.querySelector('.sidebar')
    const navbar = document.querySelector('.navbar')

    console.log('chowaj')

    trigger.classList.toggle('anchor')
    sidebar.classList.toggle('sidebar--hide')
    navbar.classList.toggle('navbar--full-screen')
})


