import {useState} from "react";

export const useFetching = (callback) => {

    const [loadingState, setLoadingState] = useState(1);
    const [error, setError] = useState('');

    const fetch = async (...args) => {
        try {
            setLoadingState(0);
            await callback(...args);
            setLoadingState(1);
        } catch (e) {
            setLoadingState(-1);
            setError(e.message);
            console.log(e);
        }
    }

    return [fetch, loadingState, error];
}
