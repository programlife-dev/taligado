
const BASE_SITE = 'https://api.programlife.com.br/taligado/public/assets/images/empresas/imagens/'; 

let objects = [];

for (var i = 1; i < 6; i++) {   
    let object = {
        id: i,
        avatar: `${BASE_SITE}${i}.jpg`,
        title: `Title Carrousel ${i}`,
        subtitle: `Subitle Carrousel ${i}`,
    }
    objects.push(object);
    
 };

 export default objects;
    