import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Doctorprofile=()=>{
    const name = localStorage.getItem('name');
    const id = localStorage.getItem('id');
    const navigate = useNavigate();
    const [imageurl, setImageurl]= useState("http://localhost:8080/");
    const [image1, setImage1] = useState("")
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')

    const currentImage =()=>{
      axios.get(`http://localhost:8080/users/singleuser/${id}`).then((response)=>{
        setImage1(response.data.message.image);
      })
    }
  
    const handleFileChange = (e) => {
      const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      }
      setImage(img)
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      
      // let imageData ={image:image.data};
      // console.log(image.data)
      let imageData = new FormData()
      imageData.append('image', image.data)
            // let registrationData ={firstname:firstname,lastname:lastname,phoneno:phoneno,email:email,password:password,image:formData}
            console.log(image.data);
            const config = {
                headers: {
                  'content-type': 'multipart/form-data',
                },
              };
      axios.put(`http://localhost:8080/image/${id}`,imageData,config).then((response)=>{
        console.log(response);
      })
        // axios.put(`http://localhost:8080/users/updateimage/${id}`,imageData).then((response)=>{
        //     //console.log(response)
        //     navigate('/doctorprofile')
        //     console.log(response);

        // })
    }

    useEffect(()=>{
      currentImage();
  })

    return(
        <>
        <div style={{height:"500px", display:"flex", gap:"30px", marginTop:"30px", marginLeft:"30px"}}>
        <img style={{borderRadius:"100%", border:"5px solid rgb(40, 176, 226)", boxShadow: "1px 6px 24px"}} src={imageurl + image1} alt="" width='200' height='200'/>
        <div><h1>Dr. {name}</h1>
        {image.preview && <img src={image.preview} width='100' height='100' />}
        <br />
        <hr />
        <br />
        <input type='file' name='file' onChange={handleFileChange}></input>
        <button onClick={handleSubmit}>Upload</button></div>
        </div>
        </>
    )
}

export default Doctorprofile