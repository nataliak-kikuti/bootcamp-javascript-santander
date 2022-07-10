const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImagem = document.getElementById('cat');


const getCats = async () => {
  try {
    const data = await fetch(BASE_URL)
    const json = await data.json()

    return json.webpurl
  } catch (error) {
    console.log(error.message)
  }
};


const carregaImagem = async () => {
  catImagem.src = await getCats();
};

catBtn.addEventListener('click', carregaImagem);

carregaImagem();

