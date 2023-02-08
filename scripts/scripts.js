function carregaJogos() {
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
			nome: "Wayward Strand",
			imagem:
				"https://cdn.akamai.steamstatic.com/steam/apps/1080450/header.jpg?t=1668727534",
			descricao:
				"Wayward Strand é uma genuína história contada de maneira curiosa. Embarque em um hospital aéreo e conheça seu eclético elenco de personagens totalmente dublados. Com o tempo que passa para todos, explore as vidas entrelaçadas dos pacientes e funcionários e descubra algo novo a cada vez que jogar.",
			link: "https://store.steampowered.com/app/1080450/Wayward_Strand/",
		},
		jogo05: {
			nome: "Raptor Boyfriend: A High School Romance",
			imagem:
				"https://cdn.akamai.steamstatic.com/steam/apps/1273080/header.jpg?t=1668442656",
			descricao:
				"Raptor Boyfriend: Um Romance na Escola Secundária é um simulador de namoro sobre uma adolescente que se muda para uma pequena comunidade secreta de criptídeos. Romance com ume fada mágico, um Bigfoot sensível e um Velociraptor corajoso. Uma sátira de drama adolescente dos anos 90 sobre tentar encontrar amor no último ano do ensino médio.",
			link: "https://store.steampowered.com/app/1273080/Raptor_Boyfriend_A_High_School_Romance/",
		},
		jogo06: {
			nome: "2064: Read Only Memories",
			imagem:
				"https://cdn.akamai.steamstatic.com/steam/apps/330820/header.jpg?t=1667269121",
			descricao:
				"Nos confins de Neo-São Francisco, no ano de 2064. Sua jornada como jornalista em busca de respostas é interrompida por um ser sem precedentes, uma máquina dotada de inteligência e sentido. Conheça Turing, o primeiro ROM (Gerente de Relacionamentos e Organizações) a pisar neste mundo. Juntos, você e o engraçado robô encararão desafios e se depararão com personagens coloridos enquanto desvendam os segredos da cidade, onde a tecnologia se sobrepõe a humanidade. 2064: Read Only Memories é uma aventura cyberpunk que te levará a uma jornada de desafios e descobertas, ao investigar o mundo misterioso de Neo-São Francisco.",
			link: "https://2064.io/",
		},
	};

	const content = document.getElementById("content");
	let html = "";

	function renderizaCards(jogos) {
		html = "";
		for (const jogo of Object.values(jogos)) {
			html += `
        <div class="card">
          <img src="${jogo.imagem}" alt="${jogo.nome}"/>
          <details>
            <summary>${jogo.nome}</summary>
            <p>${jogo.descricao}</p>
            <blockquote>
              <q><a href="${jogo.link}" target="_blank">Link do jogo</a></q>
            </blockquote>
          </details>
        </div>
      `;
		}

		content.innerHTML = html;
	}

	function ordenaJogos(jogos, criterio) {
		return Object.values(jogos).sort((a, b) => {
			if (criterio === "nome") {
				return a.nome.localeCompare(b.nome);
			}
			if (criterio === "descricao") {
				return a.descricao.localeCompare(b.descricao);
			}
			return 0;
		});
	}

	const selectOrdenacao = document.getElementById("selectOrdenacao");
	selectOrdenacao.addEventListener("change", function () {
		const criterio = this.value;
		const jogosOrdenados = ordenaJogos(jogos, criterio);
		renderizaCards(jogosOrdenados);
	});

	renderizaCards(jogos);
}
