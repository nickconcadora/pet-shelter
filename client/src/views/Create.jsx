import Axios from 'axios';
import {useState} from 'react';
import {navigate} from '@reach/router';
import PetForm from '../components/PetForm';

const Create = props => {

    const [petForm,setPetForm] = useState({
        name:"",
        breed:"",
        age: 0,
        favoriteMove:"",
        isLit:false
    });
    const [errors,setErrors] = useState({
        name:"",
        breed:"",
        age:""
    })

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

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/pets/create',petForm)
            .then(res => {
                if(res.data.results){
                    navigate('/');
                }
                else{
                    setErrors(res.data);
                }
            })
    }

    return(
        <div>
            <h2 className="text-center">Add A Dog to the Disco</h2>
            <PetForm 
                form={petForm}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="Add Pet"
            />

        </div>
    );
}

export default Create;