const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');

var imagem = [
   { imagem: "imagens/céu-1.jpg", nome:'nome', descricao: "ceu 1" },
   { imagem: "imagens/céu-2.jpg", nome:'nome', descricao: "ceu 2" },
   { imagem: "imagens/céu-3.jpg", nome:'nome', descricao: "ceu 3" },
   { imagem: "imagens/céu-4.jpg", nome:'nome', descricao: "ceu 4" },
   { imagem: "imagens/céu-5.jpg", nome:'nome', descricao: "ceu 5" },
   { imagem: "imagens/céu-6.jpg", nome:'nome', descricao: "ceu 6" },
   { imagem: "imagens/céu-7.jpg", nome:'nome', descricao: "ceu 7" },
   { imagem: "imagens/céu-8.jpg", nome:'nome', descricao: "céu 8" },
 ];

imagem.forEach(function(imagem){
   var card = document.createElement('div')
   card.classList.add('card')
   
   card.innerHTML=
   `<img src="${imagem.imagem}" alt="${imagem.descricao}" id="selectedImage">
   <p>${imagem.nome}</p>
   <p>${imagem.descricao}</p>`;
   
   gallery.appendChild(card)
}

   
   );




