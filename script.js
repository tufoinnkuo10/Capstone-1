window.onload = () => {
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', (event) => {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('showww');

    console.log (sidebar);
  });

  const iconx = document.querySelector('.closeb');
  console.log (iconx);

  iconx.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('showww');
    
    
  });

  const body = document.querySelector('.introduction');

  console.log(body);

  body.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classlist.remove("showww");
  });
  

  const sidebarlist = document.querySelector('.sidebar ul li');

  sidebarlist.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('showww');
  });
  console.log(sidebarlist);
};