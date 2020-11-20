import {useState,useEffect} from 'react';
import PetForm from '../components/PetForm';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Edit = props => {
    const [petForm,setPetForm] = useState({
        name:"",
        type:"",
        description: "",
        skill1:"",
        skill2:"",
        skill3:""
    });
    const [errors,setErrors] = useState({
        name:"",
        type:"",
        description:""
    });

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPetForm(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const handleInputChange = e => {
        if(e.target.type === "checkbox"){
            setPetForm({
                ...petForm,
                isLit:!petForm.isLit
            })
            return;
        }
        
        setPetForm({
            ...petForm,
            [e.target.name]:e.target.value
        })
    }

    const handleUpdate = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/pets/update/${props.id}`,petForm)
            .then(res => navigate(`/details/${props.id}`))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2 className="text-center">Edit Pet:</h2>
            <PetForm 
                form={petForm}
                errors={errors}
                handleInputChange={handleInputChange}
                submitValue="Edit"
                handleSubmit={handleUpdate}
            />
        </div>
    );



}

export default Edit;