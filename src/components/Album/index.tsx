import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { JSONPlaceholderAPI } from "../../api/JSONPlaceholderAPI";
import { Album } from '../../types/Album';
import './styles.module.css';

export const Albums = () => {
    useEffect(() => {
        loadAlbums();
    }, [])

    const [album, setAlbums] = useState<Album[]>([]);

    const loadAlbums = async () => {
        setAlbums(await JSONPlaceholderAPI.getAlbums());
    }

    return (
        <div>
            {album.map((item, index) => (
                <Link to={`/album/${(index + 1)}`} key={index}><p>{item.title}</p></Link>
            ))}
        </div>
    );
}