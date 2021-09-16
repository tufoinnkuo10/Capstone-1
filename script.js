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

  const sidebarlist = document.querySelector('.sidebar ul li');

  sidebarlist.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('showww');
  });
  
};

const speakers = [
{
  name: 'Samuel Etoo',
  image: './images/speakers/etoo3.jpg',
  text: 'Magni consequuntur, vel ipsa possimus corporis accusamus magnam facere. Facere enim incidunt',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis !',
},
{
  name: 'Didier Drogba',
  image: './images/speakers/drogba.jpg',
  text: 'Magni consequuntur, vel ipsa possimus corporis accusamus magnam facere. Facere enim incidunt',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis !',
},
{
  name: 'George weah',
  image: './images/speakers/weah.jpg',
  text: 'Magni consequuntur, vel ipsa possimus corporis accusamus magnam facere. Facere enim incidunt',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis !',
},
{
  name: 'Roger Milla',
  image: './images/speakers/milla.jpg',
  text: 'Magni consequuntur, vel ipsa possimus corporis accusamus magnam facere. Facere enim incidunt',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis !',
},
];


for (let i=0; i < speakers.length; i++) {

const speakerContainer = document.createElement('div');
const speakerCard = document.createElement('div');
const speakerImgHolder = document.createElement('div');
const speakerImgContainer = document.createElement('div');
const speakerImg = document.createElement('img');
const speakerInfo = document.createElement('div');
const speakerName = document.createElement('h3');
const speakerText = document.createElement('p');
const speakerDesc = document.createElement('p');
document.querySelector('.featured-card > .all-speakers').appendChild(speakerContainer);
speakerContainer.classList.add('speakers-container');
speakerContainer.append(speakerCard);
speakerCard.classList.add('speaker-card');
speakerCard.append(speakerImgHolder);
speakerImgHolder.classList.add('speaker-image-holder');
speakerImgHolder.append(speakerImgContainer);
speakerImgContainer.classList.add('speaker-image');
speakerImgContainer.append(speakerImg);
speakerImg.classList.add('speaker-image');
speakerImg.src = speakers[i].image;
speakerCard.append(speakerInfo);
speakerInfo.classList.add('speaker-info');
speakerInfo.append(speakerName);
speakerName.innerText = speakers[i].name;
speakerInfo.append(speakerText);
speakerText.classList.add('speaker-text');
speakerText.innerText = 'Magni consequuntur, vel ipsa possimus corporis accusamus magnam facere. Facere enim incidunt';
speakerInfo.append(speakerDesc);
speakerDesc.classList.add('speaker-desc');
speakerDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ';
}

