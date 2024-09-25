
        // get all the images
const images = [
        
           
        '1.png',
        'Aniversary-bg.png',
        '3-bg.png',
        'e-removebg-preview.png',
        'Grade-bg.png',
        'Hiral-bg.png',
        'jeni-bg.png',
        'mirror glaze-bg.png',
        'Mitarth_bg.png',
        'papa-bg.png',
        'Pari-bg.png',
        'Rushvi-bg.png',
        'Unicorn-bg.png',
        'vanila-bg.png',
        '7-bg',
        'Yadav-bg',
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
    
    
