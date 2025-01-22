import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";


const EstatesDetails = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('/userData.json')
            .then(res => res.json())
            .then(data => {
                const estateData = data.find(e => e.id === id)
                setUser(estateData)
            })
    }, [id])
    if (!user) {
        return <div>not have data</div>
    }

    return (
        <div className="max-w-5xl mx-auto mt-10 text-center mb-10">
            <h2 className="text-4xl font-bold mb-10">here details {user.length}</h2>
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img className="h-80 w-2/4"
                        src={user.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold">{user.estate_title}</h2>
                    <p>{user.description}</p>
                    <p>{user.area}</p>

                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl">{user.price}</h2>
                    <h2 className="text-2xl">{user.area}</h2>
                </div>
            </div>

        </div>
    );
};

export default EstatesDetails;