import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { PhotoEx } from "../pages/PhotoEx";
import { PhotosAlbum } from "../pages/PhotosAlbum";

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/album/:id', element: <PhotosAlbum /> },
        { path: '/photo/:id', element: < PhotoEx />},
        { path: '*', element: <NotFound /> }
    ])
}