
let objects = [];

for (var i = 1; i < 10; i++) {   
    let object = {
        id: i,
        avatar: `https://i.pravatar.cc/150?img=${i}`,
        title: `Title Carrousel ${i}`,
        subtitle: `Subitle Carrousel ${i}`,
    }
    objects.push(object);
    
 };

 export default objects;
    