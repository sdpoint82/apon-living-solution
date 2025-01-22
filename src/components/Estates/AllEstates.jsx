import { Link } from "react-router-dom";


const AllEstates = ({ userData }) => {
    const { image, estate_title, description, area, id } = userData;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className="h-80 w-full"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <p>{area}</p>
                    <div className="card-actions justify-end">
                        <p>Price and Other Details for Click here</p>
                        <Link to={`/estateDetails/${id}`}>
                            <button className="btn btn-primary">View Property</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AllEstates;