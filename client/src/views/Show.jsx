import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';
const Show = props => {
    const [pet,setPet] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err))
    },[props])

    return (
        pet ? 
        <div className="card col-6 mx-auto">
            <Link to={`/edit/${props.id}`} >Edit</Link>
            <div className="card-body">
                <div className="card-title">{pet.name}</div>
                <h4 className="card-subtitle text-muted">{pet.breed}</h4>
                <p className="card-text">Age: {pet.age}</p>
                <p className="card-text">Favorite Move: {pet.favoriteMove}</p>
                <p className="card-text">{pet.isLit ? `${pet.name} is Lit`: 'Get better dance moves.'}</p>
            </div>
        </div> : <p>Loading . . .</p>
    );
}

export default Show;