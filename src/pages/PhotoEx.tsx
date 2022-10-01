import { useEffect, useState } from "react";
import { JSONPlaceholderAPI } from "../api/JSONPlaceholderAPI";
import { Header } from "../components/Header";
import { useParams } from "react-router-dom";
import { PhotoExpanded } from "../components/PhotoExpanded";
import { Photo } from "../types/Photo";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading/Loading";

export const PhotoEx = () => {

    const [loading, setLoading] = useState(true);
    const [photo, setPhoto] = useState<Photo>();
    const params = useParams();

    useEffect(() => {
        loadPhoto();
    }, [])

    const loadPhoto = async () => {
        setPhoto(await JSONPlaceholderAPI.getPhoto(parseInt(params.id as string)));
        setLoading(false);
    }

    return (

        <>
            {loading && <Loading />}

            <Header />
            <Button text="Voltar" />
            <PhotoExpanded photo={photo} />
        </>

    );
}