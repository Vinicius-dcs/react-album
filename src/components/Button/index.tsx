import { useNavigate } from "react-router-dom";

useNavigate

type Props = {
    text: string;
    link?: string;
}

export const Button = ({ text }: Props) => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)}>{text}</button>
    )
}