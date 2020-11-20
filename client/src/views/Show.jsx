import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';
const Show = props => {
    const [pet,setPets] = useState(null);
    const [bounce,setBounce] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err))
    },[bounce, props])


    const bouncePet = (id,name) => {
        Axios.delete(`http://localhost:8000/api/pets/destroy/${id}`)
            .then(res => {
                if(res.data.results){
                    alert(`You adopted ${name} from the Shelter, you're awesome!'`)
                    // creates state variable to re-render DOM
                    setBounce(!bounce);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        pet ? 
        <div className="card col-6 mx-auto">
            <Link to={`/edit/${props.id}`} >Edit</Link>
            <div className="card-body">
                <h2 className="card-title">{pet.name}</h2>
                <h4 className="card-subtitle text-muted">{pet.type}</h4>
                <p className="card-text">Description: {pet.description}</p>
                
                <div className="card-text">Skills:
                    <p>{pet.skill1}</p>
                    <p>{pet.skill2}</p>
                    <p>{pet.skill3}</p>
                </div>
                <button onClick={() => bouncePet(pet._id,pet.name)} className="btn btn-danger">Adopt Pet</button>
                
            </div>
        </div> : <p>Click "Home" to go back</p>
    );
}

export default Show;