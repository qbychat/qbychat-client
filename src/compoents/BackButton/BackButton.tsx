import {useNavigate} from "react-router-dom";
import * as React from "react";

interface Props {
    children: React.ReactNode;
}

function BackButton(props: Props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <button className="btn btn-soft" onClick={handleClick}>{props.children}</button>
    );
}

export default BackButton;