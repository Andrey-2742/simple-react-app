import {useFetching} from '../hooks/useFetching';
import {useEffect, useState} from 'react';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

function CommentResponses({commentId}) {

    const [responses, setResponses] = useState([]);
    const [fetchResponses, loadingState, fetchingError] = useFetching(async () => {
        const response = await PostService.getResponses(commentId);
        setResponses(response.data.map(r => ({
            id: r.id,
            author: r.name,
            text: r.body
        })));
    });

    useEffect(() => {
        fetchResponses(commentId);
    }, []);

    return (
        <div>
            {loadingState === 0
                ?
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50'}}><Loader/></div>
                :
                loadingState === 1
                    ?
                    responses.map(response =>
                        <div
                            key={Math.random()}
                            style={{
                                fontSize: '0.9rem',
                                marginTop: '20px',
                                marginBottom: '10px',
                                marginLeft: '35px'
                            }}
                        >
                            <p style={{fontSize: '0.8rem', marginBottom: '5px'}}>
                                {response.author}
                            </p>
                            <p>
                                {response.text}
                            </p>
                        </div>
                    )
                    :
                    <div>{fetchingError}</div>
            }
        </div>
    );
}

export default CommentResponses;
