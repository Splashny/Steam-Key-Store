const games = [
  { 
    title:"Baldur's Gate 3", 
    link:"baldurs-gate",
    genres:["Стратегия"], 
    category:"bestsellers", 
    price:1999,
    description:"Соберите свой отряд и возвращайтесь в Забытые королевства в сказке о братстве и предательстве . . .",
    image:"images/topgames1.png"
  },
  { 
    title:"Elden Ring", 
    link:"elden-ring",
    genres:["Шутер"], 
    category:"bestsellers", 
    price:2499,
    description:"Как и в играх серии Dark Souls, Elden Ring представляет собой фэнтезийную игру в сеттинге западного средневековья . . . ",
    image:"images/topgames2.png"
  },
  { 
    title:"Scorn", 
    link:"scorn",
    genres:["Хоррор"], 
    category:"discounts", 
    price:899,
    description:"Игрок управляет главным героем с видом от первого лица; герой обнаруживает себя в одиночестве в . . .",
    image:"images/topgames3.png"
  },
  { 
    title:"R.E.P.O.", 
    link:"repo",
    genres:["Хоррор","Инди"], 
    category:"discounts", 
    price:499,
    description:"Игровой процесс R.E.P.O. схож с Lethal Company. В игре могут участвовать до шести игроков, главная задача которых . . .",
    image:"images/topgames4.png"
  },
  { 
    title:"Don't Starve Together", 
    link:"starve-together",
    genres:["Инди","Симулятор"], 
    category:"discounts", 
    price:399,
    description:"Идея игры заключается в выживании посреди . . .",
    image:"images/topgames5.png"
  },
  { 
    title:"The Outlast Trials",
    link:"outlast", 
    genres:["Хоррор"], 
    category:"bestsellers", 
    price:1300,
    description:"Во времена Холодной войны по всей Америке были открыты благотворительные центры корпорации Мёркофф для . . .",
    image:"images/outlast.png"
  },
  { 
    title:"Lethal Company", 
    link:"lethal-company", 
    genres:["Хоррор","Инди"], 
    category:"discounts", 
    price:450,
    description:"Вы являетесь сотрудником Компании по контракту. Ваша задача — собирать металлолом с заброшенных . . .",
    image:"images/topgames7.png"
  },
  { 
    title:"Mass Effect", 
    link:"mass-effect", 
    genres:["Шутер"], 
    category:"all", 
    price:999,
    description:"Однопользовательская action/RPG, в которой игрок управляет капитаном Шепардом с видом от . . .",
    image:"images/topgames8.png"
  },
  { 
    title:"Choice of Life", 
    link:"choice-of-life",
    genres:["Стратегия"], 
    category:"all", 
    price:299,
    description:"Вы - простой матрос, попавший в шторм в первое же плавание. Корабль налетел на рифы, а вас вынесло на . . .",
    image:"images/topgames9.png"
  },
  { 
    title:"Sky", 
    link:"sky",
    genres:["Инди"], 
    category:"new", 
    price:0,
    description:"Потрясающее приключение в открытом мире ждёт вас! Исследуйте волшебные миры, возвращайте утраченный . . .",
    image:"images/topgames10.png"
  },
  { 
    title:"Spider-Man", 
    link:"spider-man",
    genres:["Шутер"], 
    category:"bestsellers", 
    price:2999,
    description:"В оригинальной и захватывающей истории «MARVEL Человек-Паук. Обновленная версия» . . .",
    image:"images/spiderman.jpg"
  },
  { 
    title:"The Last of Us", 
    link:"tlou",
    genres:["Шутер"], 
    category:"bestsellers", 
    price:2799,
    description:"В мире, где цивилизация пала, а зараженные и заматерелые выжившие бесчинствуют, Джоэл, измученный герой . . .",
    image:"images/tlou.jpg"
  },
  { 
    title:"Soulstice", 
    link:"soulstice",
    genres:["Платформер"], 
    category:"new", 
    price:1499,
    description:"Равновесие в Святом Королевстве Кейдас нарушилось, когда из-за Завесы пришли дикие . . .",
    image:"images/soulstice.jpg"
  },
  { 
    title:"Call of Duty", 
    link:"call-of-duty",
    genres:["Шутер"], 
    category:"all", 
    price:3199,
    description:"Самая ожидаемая игра 2009 года, сиквел к самому популярному экшену от первого лица за всю . . .",
    image:"images/callofduty.jpg"
  },
  { 
    title:"Hollow Knight Silksong",
    link:"silksong",
    genres:["Платформер","Инди"], 
    category:"new", 
    price:1599,
    description:"Станьте смертоносной охотницей Хорнет и . . .",
    image:"images/silksong.jpg"
  },
  { 
    title:"Doom: The Dark Ages",
    link:"doom",
    genres:["Шутер"], 
    category:"bestsellers", 
    price:3599,
    description:"Рвите врагов в клочья, ведь вы — настоящее супероружие . . .",
    image:"images/doom.jpg"
  }
];


const cards = document.getElementById("cards");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentCategory = "bestsellers";
let currentPage = 1;
const perPage = 3;

function getFilteredGames() {
  const checked = [...document.querySelectorAll(".filters input:checked")]
    .map(i => i.value);

  return games.filter(game => {
    const categoryMatch =
      currentCategory === "all" || game.category === currentCategory;

    const genreMatch =
      checked.length === 0 || checked.some(g => game.genres.includes(g));

    return categoryMatch && genreMatch;
  });
}

function render() {
  const filtered = getFilteredGames();
  const start = (currentPage - 1) * perPage;
  const pageGames = filtered.slice(start, start + perPage);

  cards.innerHTML = "";

  pageGames.forEach(game => {
    cards.innerHTML += `
      <div class="game-card">
        <img src="${game.image}" alt="${game.title}">
        <div class="game-info">
          <h4>
            <a href="/games/${game.link}.html" class="game-link">
              ${game.title}
            </a>
          </h4>
          <small>${game.genres.join(", ")}</small>
          <p>${game.description}</p>
        </div>
        <div class="price">${game.price} р.</div>
      </div>
    `;
  });



  prevBtn.style.display = currentPage > 1 ? "block" : "none";
  nextBtn.style.display = start + perPage < filtered.length ? "block" : "none";
}

document.querySelectorAll(".top-categories button").forEach(btn => {
  btn.onclick = () => {
    document.querySelector(".top-categories .active")?.classList.remove("active");
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    currentPage = 1;
    render();
  };
});

document.querySelectorAll(".filters input").forEach(i =>
  i.onchange = () => {
    currentPage = 1;
    render();
  }
);

prevBtn.onclick = () => {
  currentPage--;
  render();
};

nextBtn.onclick = () => {
  currentPage++;
  render();
};

render();