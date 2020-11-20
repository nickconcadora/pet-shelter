import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [pets,setPets] = useState([]);
    const [bounce,setBounce] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err));
    },[bounce])

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
        <>
            <Link to="/new" >Add Disco Dog</Link>
            <table className="table table-hover col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Dog</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet,i) => <tr key={i}>
                                                <td>
                                                    <Link to={`/details/${pet._id}`}>{pet.name}</Link>
                                                    
                                                </td>
                                                <td>
                                                    <Link className="btn btn-primary" to={`/edit/${pet._id}`} >Edit</Link>
                                                    <button 
                                                        onClick={() => bouncePet(pet._id,pet.name)}
                                                        className="btn btn-danger"
                                                    >Remove</button>
                                                </td>
                                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Main;
