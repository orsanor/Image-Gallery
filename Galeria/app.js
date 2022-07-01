const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');

var imagem = [
   { imagem: "imagens/céu-1.jpg", nome:'Céu Noturno', descricao: "Noruega" },
   { imagem: "imagens/céu-2.jpg", nome:'Amanhacer', descricao: "Alemanha" },
   { imagem: "imagens/céu-3.jpg", nome:'Raio de Sol', descricao: "Canadá" },
   { imagem: "imagens/céu-4.jpg", nome:'Mar', descricao: "Bahamas" },
   { imagem: "imagens/céu-5.jpg", nome:'Nuvens', descricao: "Brasilia" },
   { imagem: "imagens/céu-6.jpg", nome:'Entardecer', descricao: "Japão" },
   { imagem: "imagens/céu-7.jpg", nome:'Por do sol', descricao: "Nova York" },
   { imagem: "imagens/céu-8.jpg", nome:'Por do sol na praia', descricao: "Salvador" },
   { imagem: "imagens/céu-9.jpg", nome:'Céu Estrelado', descricao: "São Paulo" },
   { imagem: "imagens/céu-10.jpg",nome:'Dia de Chuva', descricao: "Rio grande do Sul" },
 ];


imagem.forEach(function(imagem)
{
   var card = document.createElement('div')
   card.classList.add('card')
   
   card.innerHTML=
   `<img src="${imagem.imagem}" alt="${imagem.descricao}" id="selectedImage">
   <p class="name">${imagem.nome} </p>
   <p class="descri">${imagem.descricao}</p>`;

   card.addEventListener('mouseover', function(){
      card.classList.add('card-hover');
  });
  card.addEventListener('mouseout', function(){
        card.classList.remove('card-hover');
  });

     
   gallery.appendChild(card)
});




