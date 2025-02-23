import {useNavigate} from "react-router-dom";
import {FaBackward} from "react-icons/fa";

function BackButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <button className="fixed left-10 top-10 btn btn-soft btn-primary rounded-full" onClick={handleClick}>
            <FaBackward size={15}/>
            <span>Back</span>
        </button>
    );
}

export default BackButton;