import { useEffect, useState } from 'react';
import '../css/slider.css';
const Slider = ()=>{
    let images =['../images/canva-blue-modern-medical-(banner-(landscape))-KnpnPyt_oV4.jpg',
    '../images/doctor-man-stethoscope-hospital-260nw-555894940.png',
    '..images/canva-blue-modern-medical-(banner-(landscape))-KnpnPyt_oV4.jpg']
    let [imageno, setimageno] = useState(0);
    const [image, setimage]=useState('../images/canva-blue-modern-medical-(banner-(landscape))-KnpnPyt_oV4.jpg');

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
            {/* <a class="prev" onClick={()=>{prevSlide()}}>❮</a>
            <a class="next" onClick={()=>{nextSlide()}}>❯</a> */}
        </>
    )
}
export default Slider