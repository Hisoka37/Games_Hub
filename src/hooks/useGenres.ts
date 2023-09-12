import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    background_image: string;
}

export interface FetchGenresResponse {
    count: number;
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
        .get<FetchGenresResponse>("/genres")
        .then((res) => {
            setGenres(res.data.results)
        })
        .catch(err => setError(err.message))
    })
    return { genres, error}
}

export default useGenres;