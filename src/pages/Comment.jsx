import {useParams} from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
import {useEffect, useState} from 'react';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import CommentResponses from '../components/CommentResponses';

function Comment() {

    const params = useParams();
    const [comment, setComment] = useState({});
    const [fetchComment, loadingState, fetchingError] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setComment({
            id: response.data.id,
            author: response.data.title,
            text: response.data.body
        });
    });

    useEffect(() => {
        fetchComment(params.id);
    }, []);

    return (
        <div>
           {loadingState === 0
                ?
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50'}}><Loader/></div>
                :
                loadingState === 1
                    ?
                    <div style={{marginTop: '15px'}}>
                        <p style={{fontSize: '0.9rem', marginBottom: '5px'}}>
                            {comment.author}
                        </p>
                        <p>
                            {comment.text}
                        </p>
                    </div>
                    :
                    <div>
                        {fetchingError}
                    </div>
            }
            <hr style={{marginTop: '15px', marginBottom: '15px'}}/>
            <CommentResponses commentId={params.id}/>
        </div>
    );
}

export default Comment;
