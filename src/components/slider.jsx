import { useEffect, useState } from 'react';
import '../css/slider.css';
const Slider = ()=>{
    let images =['../images/vecteezy_double-exposure-of-technology-healthcare-and-medicine_11830942.jpg',
        '../images/vecteezy_ai-generated-a-doctor-holds-a-clipboard_35846616.jpg',
        '../images/vecteezy_group-of-doctors-standing-in-hallway_45891459.jpeg']
    let [imageno, setimageno] = useState(0);
    const [image, setimage]=useState('../images/vecteezy_double-exposure-of-technology-healthcare-and-medicine_11830942.jpg');

    function changeSlide(){
        setimage(images[imageno]);
        if(imageno >= images.length -1){
            imageno = 0;
        }else{
            imageno = imageno + 1;
        }
        setTimeout(changeSlide,5000);
    }

    const prevSlide=()=>{
        
        setimageno(imageno-1);
        console.log(imageno);
        setimage(images[imageno]);
    }

    const nextSlide=()=>{
        if(imageno >= images.length -1){
            imageno = 0;
        }else{
            imageno = imageno + 1;
        }
        setimage(images[imageno]);
        // setimageno(imageno+1);
        // console.log(imageno);
        // setimage(images[imageno]);
    }
    
    useEffect(()=>{
        changeSlide();
    },[])
    return(
        <>
            <img id="imagegalary" src={image} class="img2" alt=""/>
            <a class="prev" onClick={()=>{prevSlide()}}>❮</a>
            <a class="next" onClick={()=>{nextSlide()}}>❯</a>
        </>
    )
}
export default Slider