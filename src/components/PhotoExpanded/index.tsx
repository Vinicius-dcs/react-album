import { Photo } from "../../types/Photo";
import style from './styles.module.css';

export type Props = { 
    photo?: Photo;
}

export const PhotoExpanded = ({photo}: Props) => {

    return (
        <>
            <h2>{photo?.title}</h2>
            <img src={photo?.thumbnailUrl} className={style.img} />
        </>
    );
}