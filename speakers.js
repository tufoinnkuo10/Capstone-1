  const featureSection = document.querySelector('#featured-speakers');
  const cardContainer = featureSection.querySelector('.speakers-container');
  const moreBtn = featureSection.querySelector('.more-button');
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
    console.log(sidebarli

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

  {
    name: 'blabla tufoin doesnt wopwokr hard',
    image: './images/speakers/milla.jpg',
    text: 'Magni consequuntur, vel ipsa possimus corporis accusamus magnam facere. Facere enim incidunt',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis !',
  },
   
];


const speakerContainer = document.createElement('div');
const speakerCard = document.createElement('div');
const speakerImgHolder = document.createElement('div');
const speakerImgContainer = document.createElement('div');
const speakerImg = document.createElement('img');
const speakerInfo = document.createElement('div');
const speakerName = document.createElement('h3');
const speakerText = document.createElement('p');
const speakerDesc = document.createElement('p');

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
speakerImg.src = './images/speakers/etoo3.jpg';
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















































/*const createCard = (speaker) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <div class="speaker-image-holder">
    <div class="speaker-image">
    <img src="${speaker.image}" alt="">
    </div>
  </div>
  <div class="speaker-info">
    <h3>${speaker.name}</h3>
    <p class="speaker-text">${speaker.text}</p>
    <p class="speaker-desc">${speaker.description}</p>
  </div>`;
  return card;
};

const index = 4;
speakers.slice(0, index).forEach((speaker) => {
  const card = createCard(speaker);
  cardContainer.appendChild(card);
});

moreBtn.addEventListener('click', () => {
  moreBtn.classList.add('loading');
  moreBtn.querySelector('span.icon').remove();
  const span = document.createElement('span');
  span.classList.add('icon');
  span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';
  moreBtn.appendChild(span);

  setTimeout(() => {
    artists.slice(index).forEach((artist) => {
      const card = createCard(artist);
      cardContainer.appendChild(card);
    });
    moreBtn.remove();
  }, 1000);
});
};
window.addEventListener('load', () => {
setupFeaturedSection();
});


/*function moreSection() {
  const icon = document.querySelector('.cmore-icon');
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
*/