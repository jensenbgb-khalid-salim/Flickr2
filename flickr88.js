
 let button = document.querySelector(".btn");

 

 button.addEventListener("click", flickr);

 async function flickr () {


    
let text= document.querySelector("#search").value;

let data= await getImgs(text);
updateUi(data);
 }


    
    async function getImgs(text) {
    
        
        const basUrl= 'https://www.flickr.com/services/rest';
    const apikey= '255c273dd506b7bbb260b683f11910b0';
    let method= 'flickr.photos.search';
    let url = `${basUrl}?api_key=${apikey}&method=${method}&text=${text}&format=json&nojsoncallback=1`
    
    let response = await fetch(url);
    let data = await response.json();
     return data.photos;
    
    }
    
    
    function updateUi(data){
    
    data.photo.forEach(img => {
    let el = document.createElement("img");
    el.setAttribute("src", imgUrl (img,"q"));
    document.querySelector("#photos").appendChild(el);
    
    
    });
    
    
    
    }
    
    
    
    function imgUrl (img, size){
    
    
    
    return `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_${size}.jpg`
    }
