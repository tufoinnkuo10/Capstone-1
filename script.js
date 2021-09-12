const show = document.querySelector()
function show() {
  document.querySelector('.sidebar').classList.toggle('show');
}

const burger = document.querySelector('.fas');

  burger.addEventListener('click', (event) => {
    event.preventDefault();
    const mobileMenu = document.querySelector('.sidebar');
    mobileMenu.classList.toggle('show');
  });
  const mobileMenuList = document.querySelector('.sidebar');

  mobileMenuList.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.body');
    mobileMenu.classList.toggle('show');
  });


//function show() {
 // document.querySelector('.sidebar').classList.toggle('.active');}