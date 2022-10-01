import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JSONPlaceholderAPI } from "../api/JSONPlaceholderAPI";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Photo } from "../types/Photo";
import { Photos } from "../components/Photo"
import { Loading } from "../components/Loading/Loading";

export const PhotosAlbum = () => {

    const params = useParams();
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [title, setTitle] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPhotos();
        loadNameAlbum();
    }, []);

    const loadPhotos = async () => {
        setPhotos(await JSONPlaceholderAPI.getPhotos(parseInt(params.id as string)));
        setLoading(false);
    }

    const loadNameAlbum = async () => {
        setTitle(await JSONPlaceholderAPI.getNameAlbum(parseInt(params.id as string)));
    }

    return (
        <>
            {loading && <Loading />}

            <Header />
            <Button text="Voltar" />
            <Photos photo={photos} titleAlbum={title} />
        </>
    )
}