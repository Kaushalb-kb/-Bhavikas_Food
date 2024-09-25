
        // get all the images
const images = [
        
           
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.png',
        '12.png',
        '13.png',
        '14.png',
        '15.png',
        '16.png',
        '17.png'
        
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
    
    
