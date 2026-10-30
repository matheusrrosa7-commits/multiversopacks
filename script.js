const personagensMultiverso = [
    // --- TITANS (DC) & MARVEL ---
    { nome: "Rachel Roth", obra: "Titans", specs: "4K | Dark Magic Focus", img: "https://i.pinimg.com/1200x/a7/30/5e/a7305e62e1a50996f3b3980b2f0cb114.jpg" }, 
    { nome: "Garfield Logan", obra: "Titans", specs: "1080p | Beast Forms", img: "https://i.pinimg.com/736x/28/cc/23/28cc2369390a2d09ff98abbf3d9067c3.jpg" },
    { nome: "Kory Anders", obra: "Titans", specs: "4K | Starfire Powers", img: "https://i.pinimg.com/736x/43/9e/b9/439eb98ac287271b27f5a5348a556c36.jpg" },
    { nome: "Wanda Maximoff", obra: "WandaVision", specs: "4K | Chaos Magic", img: "https://i.pinimg.com/736x/73/9b/c7/739bc765457ce89c95c58a0a367de963.jpg" },
    { nome: "Jean Grey", obra: "X-Men", specs: "4K | Cosmic Fire", img: "https://i.pinimg.com/736x/d5/6b/1e/d56b1e076c628392ca4383c056d44ed6.jpg" },

    // --- ONE PIECE ---
    { nome: "Roronoa Zoro", obra: "One Piece", specs: "4K | Twixtor Ready", img: "https://i.pinimg.com/1200x/d4/36/fe/d436fefa18a7d10e731bbce64a4ba1b9.jpg" },
    { nome: "Nami", obra: "One Piece", specs: "1080p | Logoless", img: "https://i.pinimg.com/736x/81/bb/71/81bb71909e7eeb53a45f292ee976658b.jpg" },
    { nome: "Monkey D. Luffy", obra: "One Piece", specs: "4K | Gear 5 Focus", img: "https://i.pinimg.com/736x/4f/bd/30/4fbd30201ba5e2233a37e962358413c8.jpg" },

    // --- TEEN WOLF ---
    { nome: "Erica Reyes", obra: "Teen Wolf", specs: "1080p | HD Pack", img: "https://i.pinimg.com/1200x/d7/71/d4/d771d448b0840e68d3a1a20052c2c3a8.jpg" },
    { nome: "Stiles Stilinski", obra: "Teen Wolf", specs: "1080p | Sarcasm Clips", img: "https://i.pinimg.com/1200x/ff/8d/9d/ff8d9d653abc5430b369adcb896a61e6.jpg" },
    { nome: "Allison Argent", obra: "Teen Wolf", specs: "1080p | Archer Scenes", img: "https://i.pinimg.com/736x/8b/15/8d/8b158dde46e4d14e6168ec1ec2ae2aba.jpg" },
    { nome: "Lydia Martin", obra: "Teen Wolf", specs: "1080p | Banshee Scream", img: "https://i.pinimg.com/1200x/8e/e8/cd/8ee8cdc3eb0cb562f1e2db5ff819e3df.jpg" },
    { nome: "Derek Hale", obra: "Teen Wolf", specs: "4K | Alpha Scenes", img: "https://i.pinimg.com/736x/d0/7a/8e/d07a8e4cce85db0d36923a3ea3ed0e11.jpg" },
    { nome: "Malia Tate", obra: "Teen Wolf", specs: "1080p | Coyote Focus", img: "https://i.pinimg.com/1200x/8f/12/5f/8f125f5a2a686f630eaba533e070db7d.jpg" },
    { nome: "Isaac Lahey", obra: "Teen Wolf", specs: "1080p | Scarf & Claws", img: "https://i.pinimg.com/1200x/83/d7/84/83d7849ddae17e432883f3114b2adf65.jpg" },
    { nome: "Theo Raeken", obra: "Teen Wolf", specs: "1080p | Villain Pack", img: "https://i.pinimg.com/736x/1e/a7/25/1ea7253ef915957451385eb2663ed15e.jpg" },
    { nome: "Liam Dunbar", obra: "Teen Wolf", specs: "1080p | IED Rage Clips", img: "https://i.pinimg.com/1200x/9f/5a/46/9f5a46f2c9acc29975bb8f04d9065084.jpg" },
    { nome: "Scott McCall", obra: "Teen Wolf", specs: "4K | True Alpha", img: "https://i.pinimg.com/1200x/92/8e/d7/928ed7688f6ded8a10a5e8d56eb3e8c8.jpg" },

    // --- STRANGER THINGS ---
    { nome: "Max Mayfield", obra: "Stranger Things", specs: "4K | Running Up Pack", img: "https://i.pinimg.com/736x/e4/ee/95/e4ee95740419a99d2f673cf66981aad5.jpg" },
    { nome: "Will Byers", obra: "Stranger Things", specs: "1080p | Mind Flayer", img: "https://i.pinimg.com/736x/b1/b3/fd/b1b3fda559fe2318edef9ae8fc721f0d.jpg" },
    { nome: "Eleven", obra: "Stranger Things", specs: "4K | Powers Focus", img: "https://i.pinimg.com/736x/87/e7/bd/87e7bd1ad6a76912fd4818d974a2a462.jpg" },
    { nome: "Steve Harrington", obra: "Stranger Things", specs: "1080p | Mom Steve Pack", img: "https://i.pinimg.com/736x/c1/c8/d6/c1c8d676f4f15af3a5934a39524064ed.jpg" },
    { nome: "Robin Buckley", obra: "Stranger Things", specs: "1080p | Scoops Ahoy", img: "https://i.pinimg.com/1200x/2e/67/49/2e6749845f85d89e14f54ed8c4e60511.jpg" },
    { nome: "Jonathan Byers", obra: "Stranger Things", specs: "1080p | Camera Scenes", img: "https://i.pinimg.com/736x/22/65/27/226527e7dc74160af518d7e21ba5d3d1.jpg" },
    { nome: "Lucas Sinclair", obra: "Stranger Things", specs: "1080p | S4 Basket/Fight", img: "https://i.pinimg.com/1200x/9f/ff/37/9fff374346f933fcf24ed51f88a0e506.jpg" },
    { nome: "Nancy Wheeler", obra: "Stranger Things", specs: "1080p | Shotgun Scenes", img: "https://i.pinimg.com/736x/a5/0a/c1/a50ac1242465964b6fe8ff894da3b2fb.jpg" },
    { nome: "Holly Wheeler", obra: "Stranger Things", specs: "1080p | Lights Scene", img: "https://i.pinimg.com/736x/21/84/6b/21846ba4ab4855e251e04adbeddb0b6c.jpg" },
    { nome: "Joyce Byers", obra: "Stranger Things", specs: "1080p | Christmas Lights", img: "https://i.pinimg.com/736x/7b/f2/bd/7bf2bd207fa1866867c68149a807efe5.jpg" },
    { nome: "Jim Hopper", obra: "Stranger Things", specs: "1080p | Russia Scenes", img: "https://i.pinimg.com/736x/42/2d/ac/422dac2de7f338af88024ca2773eeeb2.jpg" },
    { nome: "Dustin Henderson", obra: "Stranger Things", specs: "1080p | Nerd Talks", img: "https://i.pinimg.com/736x/39/8b/c7/398bc79eb0b1d1a2b8bda73df5235321.jpg" },

    // --- MAZE RUNNER ---
    { nome: "Thomas", obra: "Maze Runner", specs: "1080p | Glade Runner", img: "https://i.pinimg.com/736x/a0/72/d4/a072d4c63e3ca9225a2e0582b6e3f498.jpg" },
    { nome: "Newt", obra: "Maze Runner", specs: "1080p | Emotional Pack", img: "https://i.pinimg.com/736x/43/8d/31/438d318920e687bd6f3a0282c72ccf1c.jpg" },
    { nome: "Minho", obra: "Maze Runner", specs: "1080p | Maze Lead", img: "https://i.pinimg.com/736x/22/a5/86/22a586152ee5723c931487195b804da4.jpg" },

    // --- CREPÚSCULO ---
    { nome: "Edward Cullen", obra: "Crepúsculo", specs: "1080p | Sparkle Focus", img: "https://i.pinimg.com/736x/8a/23/07/8a230779d74b73ac19a0b5965b898c71.jpg" },
    { nome: "Bella Swan", obra: "Crepúsculo", specs: "1080p | Forks Aesthetic", img: "https://i.pinimg.com/736x/08/5e/c0/085ec0473606fdd4331596c37e70c82e.jpg" },
    { nome: "Alice Cullen", obra: "Crepúsculo", specs: "1080p | Vision Scenes", img: "https://i.pinimg.com/736x/d2/e8/66/d2e8665ffdd72ecba796cfba47a707b6.jpg" },

    // --- WANDINHA ---
    { nome: "Wednesday Addams", obra: "Wandinha", specs: "4K | Dance Scene", img: "https://i.pinimg.com/1200x/2a/ed/78/2aed78ed89fba161168ab46e6cc2a609.jpg" },
    { nome: "Enid Sinclair", obra: "Wandinha", specs: "1080p | Colorful Wolf", img: "https://i.pinimg.com/736x/c4/f8/29/c4f8291e02a1dff9bd98dcd81e41d6ff.jpg" },
    { nome: "Morticia Addams", obra: "Wandinha", specs: "1080p | Gothic Vibe", img: "https://i.pinimg.com/1200x/8f/c3/42/8fc342dcd7e7623adbaa2f6da7a14f74.jpg" },
    { nome: "Ajax Petropolus", obra: "Wandinha", specs: "1080p | Gorgon Pack", img: "https://i.pinimg.com/736x/b3/3a/16/b33a1613d957796e3ee69bd74b8815ef.jpg" },
    { nome: "Tyler Galpin", obra: "Wandinha", specs: "1080p | Hyde Form", img: "https://i.pinimg.com/736x/49/72/2b/49722b2f817208966cc78f95dc306f1a.jpg" },
    { nome: "Agnes de Mille", obra: "Wandinha", specs: "1080p | Historical", img: "https://i.pinimg.com/736x/af/2d/75/af2d75830868a060fed29102384d6058.jpg" },
    
    // --- HARRY POTTER ---
    { nome: "Harry Potter", obra: "Harry Potter", specs: "4K | Chosen One", img: "https://i.pinimg.com/736x/51/ff/4c/51ff4c0defcbe979fb18a43a2ed81707.jpg" },
    { nome: "Draco Malfoy", obra: "Harry Potter", specs: "1080p | Slytherin Vibe", img: "https://i.pinimg.com/736x/1a/74/f4/1a74f4ee698c6d05eae6352d2d2047f5.jpg" },
    { nome: "Hermione Granger", obra: "Harry Potter", specs: "1080p | Smart Spells", img: "https://i.pinimg.com/736x/c3/8b/c7/c38bc7d6aa78d202d6deb9e9515d2827.jpg" },

    // --- CULPA MIA ---
    { nome: "Nick Leister", obra: "Culpa Mia", specs: "1080p | Race Scenes", img: "https://i.pinimg.com/736x/87/57/d2/8757d23d57ce00af17afa8eb0be7c39b.jpg" },
    { nome: "Noah Morgan", obra: "Culpa Mia", specs: "1080p | Drama Pack", img: "https://i.pinimg.com/736x/2c/ff/94/2cff9485899e4f8f849afa0116a265da.jpg" },

    // --- OUTER BANKS ---
    { nome: "JJ Maybank", obra: "Outer Banks", specs: "4K | Wild Pogues", img: "https://i.pinimg.com/736x/36/86/83/368683e4573bd41e9197448204e1ed04.jpg" },
    { nome: "Rafe Cameron", obra: "Outer Banks", specs: "1080p | Psycho Scenes", img: "https://i.pinimg.com/736x/7a/7a/92/7a7a9267de0b749b56f6e656a9b8257c.jpg" },
    { nome: "Sarah Cameron", obra: "Outer Banks", specs: "1080p | Kook Princess", img: "https://i.pinimg.com/736x/10/7e/31/107e31ef7a5c3b22101cc0be80a7288d.jpg" },
    { nome: "John B", obra: "Outer Banks", specs: "1080p | Lead Pack", img: "https://i.pinimg.com/736x/97/82/ef/9782ef55a1da53937e640222578b0f88.jpg" },
    { nome: "Kiara Carrera", obra: "Outer Banks", specs: "1080p | Pogue Girl", img: "https://i.pinimg.com/1200x/43/82/2d/43822dc3cf07fd9722cec8cf20544aab.jpg" },
    { nome: "Pope Heyward", obra: "Outer Banks", specs: "1080p | History Focus", img: "https://i.pinimg.com/736x/33/d5/1e/33d51e93bf6666843823f9cfddd49367.jpg" },
    { nome: "Cleo Anderson", obra: "Outer Banks", specs: "1080p | Nassau Pack", img: "https://i.pinimg.com/736x/6b/58/ef/6b58ef39e223a76ab1ee171f08217e00.jpg" },

    // --- DIÁRIOS DE UM VAMPIRO ---
    { nome: "Elena Gilbert", obra: "The Vampire Diaries", specs: "1080p | Human/Vamp", img: "https://i.pinimg.com/736x/19/f6/2b/19f62bcfd49da6cc3cd20190d2edd4b7.jpg" },
    { nome: "Damon Salvatore", obra: "The Vampire Diaries", specs: "4K | Bad Boy Pack", img: "https://i.pinimg.com/736x/7b/e4/60/7be460f1df1f1d1189ae0b646f054506.jpg" },
    { nome: "Stefan Salvatore", obra: "The Vampire Diaries", specs: "1080p | Ripper Scenes", img: "https://i.pinimg.com/736x/2a/92/eb/2a92eb45e8ec4def31d490bc5ff74812.jpg" },

    // --- ATRAVÉS DA MINHA JANELA ---
    { nome: "Ares Hidalgo", obra: "Através da Minha Janela", specs: "1080p | Greek God", img: "https://i.pinimg.com/736x/73/60/ac/7360acf3840ce027fe24afefd2fcd6d1.jpg" },
    { nome: "Raquel Mendoza", obra: "Através da Minha Janela", specs: "1080p | Witch Pack", img: "https://i.pinimg.com/736x/5b/b3/d1/5bb3d14533e80a560a1920749197d2bb.jpg" }
];

const container = document.getElementById('conteudo-packs');
const inputBusca = document.getElementById('input-busca');
const mensagemVazio = document.getElementById('mensagem-vazio');

// Função de renderização principal por pesquisa
function renderizar(termoDeBusca = "") {
    container.innerHTML = "";
    
    // Deixa a busca idêntica ignorando espaços ou letras maiúsculas/minúsculas
    const termoLimpo = termoDeBusca.toLowerCase().trim().replace(/\s+/g, '');

    const listaFiltrada = personagensMultiverso.filter(p => {
        const nomeLimpo = p.nome.toLowerCase().replace(/\s+/g, '');
        const obraLimpa = p.obra.toLowerCase().replace(/\s+/g, '');
        return nomeLimpo.includes(termoLimpo) || obraLimpa.includes(termoLimpo);
    });

    if (listaFiltrada.length === 0) {
        mensagemVazio.style.display = "block";
        return;
    } else {
        mensagemVazio.style.display = "none";
    }

    listaFiltrada.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <div class="card-img" style="background-image: url('${item.img}')">
                    <span class="badge">${item.obra}</span>
                </div>
                <div class="card-body">
                    <h3>${item.nome}</h3>
                    <div class="pack-specs">
                        <span>Qualidade:</span>
                        <span style="color:var(--neon-verde)">${item.specs}</span>
                    </div>
                    <a href="#" class="download-btn">Baixar Scenepack</a>
                </div>
            </div>
        `;
    });
}

// Escuta a digitação do usuário e filtra imediatamente
inputBusca.addEventListener('input', (e) => {
    renderizar(e.target.value);
});

// Inicialização automática do site com o catálogo completo na tela
window.onload = () => renderizar();
