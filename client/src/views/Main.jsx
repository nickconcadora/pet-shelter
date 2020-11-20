import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [pets,setPets] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err));
    })

    return (
        <>
            <Link to="/new" >Know a pet needing a home? </Link>
            <table className="table table-hover col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Pet</th>
                        <th>Type</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet,i) => <tr key={i}>
                                                <td>
                                                    <p className = "petName" >{pet.name}</p>
                                                    
                                                </td>
                                                <td>
                                                    <p className ="petType">{pet.type}</p> 
                                                </td>
                                                <td>
                                                    <Link className="btn btn-primary" to={`/edit/${pet._id}`} >Edit</Link>
                                                    <Link className = "btn btn-danger" to ={`/details/${pet._id}`}>Details</Link>
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
