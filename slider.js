
        // get all the images
const images = [
        
           
        '83-Dutch_cake.png',    
        '70-chocolate.png',
        '15-loaded_cake.png'
        
    ];
    const firstImage = 0;
    const lastImage = images.length -1;
    let rotate = 0;
    //DOMContentLoaded
    document.addEventListener('DOMContentLoaded', Slide);
    
    function Slide(){
        // get image tag
        const imageElement = document.getElementById('image-slider');
        // assign image
        imageElement.src = images[rotate];
        rotate++;
        if(rotate > lastImage){
            rotate = firstImage;
        }
    }
    setInterval(function() {
        Slide();
    }, 2500);
    
    