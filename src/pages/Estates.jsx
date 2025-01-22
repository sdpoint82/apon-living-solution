
import { useEffect, useState } from 'react';

import AllEstates from '../components/Estates/AllEstates';

const Estates = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('/userData.json')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div className="max-w-5xl mx-auto mt-10 text-center mb-10">

            <h2 className="text-5xl">Residential Estates: {user.length}</h2>

            <div className='grid md:grid-cols-2 text-center mx-auto mt-10'>
                {
                    user.map(userData => <AllEstates key={userData.id} userData={userData}></AllEstates>)
                }
            </div>
        </div>
    );
};
export default Estates;