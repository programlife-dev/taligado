
let items = [];

for (var i = 1; i < 2; i++) {   
    let item = {
        id: i,
        avatar: `https://source.unsplash.com/random/150x150?img=${i}`,
        title: `Title ${i}`,
        subtitle: `Subtitle  ${i}`,
    }
    items.push(item);
    
 };

 export default items;
    