import { Link } from "react-router-dom";
import { Photo } from "../../types/Photo";
import style  from './styles.module.css';

type Props = {
    photo: Photo[];
    titleAlbum: string;
}

export const Photos = ({ photo, titleAlbum }: Props) => {
    return (
        <>
            <h1>{titleAlbum}</h1>

            {photo.map((item, index) => (
                <Link to={`/photo/${(index + 1)}`} key={index}> <img src={item.thumbnailUrl} className={style.img} /> </Link>
            ))}
        </>
    );
}