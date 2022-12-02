const container = document.querySelector('body');
const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('#hamburger');
const closeIcon = document.querySelector('#close-icon');
const featuredSpeakers = document.querySelector('#featured-speakers');

function displayMobileMenu() {
    container.id = 'menu-container';
    mobileMenu.id = 'show-menu';
}

hamburger.addEventListener('click', displayMobileMenu);

closeIcon.addEventListener('click', () => {
    window.location.reload(true);
});

const speakerArray = [
    {
        speakerImg: 'images/2020.jpg',
        speakerName: 'Name One',
        speakerTitle: 'President of Young Pirates of Africa',
        speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
        speakerImg: 'images/2020.jpg',
        speakerName: 'Name Two',
        speakerTitle: 'President of Young Pirates of Africa',
        speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
        speakerImg: 'images/2020.jpg',
        speakerName: 'Name Three',
        speakerTitle: 'President of Young Pirates of Africa',
        speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
        speakerImg: 'images/2020.jpg',
        speakerName: 'Name Four',
        speakerTitle: 'President of Young Pirates of Africa',
        speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
        speakerImg: 'images/2020.jpg',
        speakerName: 'Name Five',
        speakerTitle: 'President of Young Pirates of Africa',
        speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
        speakerImg: 'images/2020.jpg',
        speakerName: 'Name Six',
        speakerTitle: 'President of Young Pirates of Africa',
        speakerDescription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    }
];

for (let i = 0; i < speakerArray.length; i++) {
    featuredSpeakers.innerHTML += `
    <article class="speaker">
      <img src="${speakerArray[i].speakerImg}" class="speaker-img" alt="Speaker Image">
      <div class="speaker-info">
        <h3>${speakerArray[i].speakerName}</h3>
        <p class="speaker-rank">${speakerArray[i].speakerTitle}</p>
        <hr>
        <p>${speakerArray[i].speakerDescription}</p>
      </div>
    </article>
  `
}