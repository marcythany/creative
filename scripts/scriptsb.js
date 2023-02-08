function carregaDicionario() {
	const jogos = {
		jogo01: {
			nome: "UNSIGHTED",
			imagem:
				"https://cdn.akamai.steamstatic.com/steam/apps/1062110/header.jpg?t=1652725307",
			descricao:
				"EXPLORE DO SEU JEITO. Ao acordar em um mundo arruinado pela guerra, Alma precisa cruzar a vasta cidade de Arcadia antes que a força vital de seus amigos – e sua própria – se esvaiam. O tempo está se esgotando, e cada segundo importa. Quem você salvará, e quem deixará que se torne",
			link: "https://store.steampowered.com/app/1062110/UNSIGHTED/",
		},
		jogo02: {
			nome: "Celeste",
			imagem:
				"https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg?t=1617130992",
			descricao:
				"Ajude Madeline a enfrentar seus demônios internos em sua jornada até o topo da Montanha Celeste, nesse jogo de plataforma super afiado dos criadores de TowerFall. Desbrave centenas de desafios meticulosos, descubra segredos complicados e desvende o mistério da montanha.",
			link: "http://store.steampowered.com/app/504230/Celeste/",
		},
		jogo03: {
			nome: "The Hayseed Knight",
			imagem:
				"https://cdn.akamai.steamstatic.com/steam/apps/1332990/header.jpg?t=1675259396",
			descricao:
				"Uma bagunça de personagens excêntricos contam a história improvável de como um garoto de fazenda com um único olho acabou se tornando famoso, nesta novela visual animada totalmente dublada.",
			link: "https://store.steampowered.com/app/1332990/The_Hayseed_Knight/",
		},
		jogo04: {
			nome: "The Hayseed Knight",
			imagem:
				"https://cdn.akamai.steamstatic.com/steam/apps/1332990/header.jpg?t=1675259396",
			descricao:
				"Uma bagunçada de personagens excêntricos contam a história improvável de como um garoto de fazenda com um único olho acabou se tornando famoso, nesta novela visual animada totalmente dublada.",
			link: "https://store.steampowered.com/app/1332990/The_Hayseed_Knight/",
		},
		jogo05: {
			nome: "The Hayseed Knight",
			imagem:
				"https://cdn.akamai.steamstatic.com/steam/apps/1332990/header.jpg?t=1675259396",
			descricao:
				"Uma bagunça de personagens excêntricos contam a história improvável de como um garoto de fazenda com um único olho acabou se tornando famoso, nesta novela visual animada totalmente dublada.",
			link: "https://store.steampowered.com/app/1332990/The_Hayseed_Knight/",
		},
		jogo06: {
			nome: "The Hayseed Knight",
			imagem:
				"https://cdn.akamai.steamstatic.com/steam/apps/1332990/header.jpg?t=1675259396",
			descricao:
				"Uma bagunçada de personagens excêntricos contam a história improvável de como um garoto de fazenda com um único olho acabou se tornando famoso, nesta novela visual animada totalmente dublada.",
			link: "https://store.steampowered.com/app/1332990/The_Hayseed_Knight/",
		},
	};

	const content = document.getElementById("content");
	let html = "";

	// Adiciona botão para ordenar
	const sortButton = document.createElement("button");
	sortButton.textContent = "Ordenar por Título";
	sortButton.addEventListener("click", function () {
		jogos.sort((a, b) => (a.nome > b.nome ? 1 : -1));
		carregaDicionario();
	});
	content.appendChild(sortButton);

	for (const jogo in jogos) {
		html += `
      <div class="card">
        <img src="${jogos[jogo].imagem}" alt="${jogos[jogo].nome}"/>
        <details>
          <summary>${jogos[jogo].nome}</summary>
          <p>${jogos[jogo].descricao}</p>
          <blockquote>
            <q><a href="${jogos[jogo].link}" target="_blank">Link do jogo</a></q>
          </blockquote>
        </details>
      </div>
    `;
	}

	content.innerHTML = html;
}

carregaDicionario();
