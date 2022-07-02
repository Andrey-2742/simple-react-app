import '../styles/App.css';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import CommentFilter from '../components/CommentFilter';
import CommentListDisplayOptions from '../components/CommentListDisplayOptions';
import PageButtonSection from '../components/PageButtonSection';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';

import {useState, useEffect, useRef} from 'react';
import {useSortedFilteredComments} from '../hooks/usePost';
import {useFetching} from '../hooks/useFetching';
import {useObserver} from '../hooks/useObserver';

import PostService from '../API/PostService';
import {getPageCount} from '../utils/pages';

function Comments() {
    
    const [comments, setComments] = useState([]);

    const [filter, setFilter] = useState({sortingMethod: '', searchQuery: ''});
    const [modal, setModal] = useState(false);
    const sortedFilteredComments = useSortedFilteredComments(comments, filter.sortingMethod, filter.searchQuery);

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [autoPageLoading, setAutoPageLoading] = useState(false);
    
    const lastElement = useRef();
    const newlyAdded = useRef();

    const [fetchComments, loadingState, fetchingError] = useFetching(async (itemsPerPage, currentPage, rewrite) => {
        const response = await PostService.get(itemsPerPage, currentPage);
        if (rewrite) {
            setComments(
                response.data.map(comment => ({id: comment.id, author: comment.title, text: comment.body}))
            );
        } else {
            setComments([
                ...comments,
                ...response.data.map(comment => ({id: comment.id, author: comment.title, text: comment.body}))
            ]);
        }
        var itemCount = response.headers['x-total-count'];
        setPageCount(getPageCount(itemCount, itemsPerPage));
    });


    useObserver(lastElement,
                currentPage < pageCount && autoPageLoading, 
                loadingState === 0, 
                () => {
        setCurrentPage(currentPage + 1);
    });


    useEffect(() => {
        fetchComments(itemsPerPage, currentPage, !autoPageLoading);
    }, [itemsPerPage, currentPage, autoPageLoading]);


    function sendComment(comment) {
        comment.id = Math.round(Math.random() * 10000) / 10000;
        setModal(false);
        setComments([comment, ...comments]);
    }

    function removeComment(comment) {
        setComments(comments.filter(c => c.id !== comment.id));
    }


    return (
        <div className='App'>
            <MyButton onClick={() => setModal(true)}>
                Новый комментарий
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <CommentForm sendComment={sendComment}/>
            </MyModal>
            <CommentFilter filter={filter} setFilter={setFilter}/>
            <CommentListDisplayOptions
                commentsPerPage={itemsPerPage}
                setCommentsPerPage={setItemsPerPage}
                autoLoading={autoPageLoading}
                setAutoLoading={setAutoPageLoading}
            />
            {loadingState === -1
                ? <div>{fetchingError}</div>
                : <CommentList removeComment={removeComment} comments={sortedFilteredComments}/>
            }
            {loadingState === 0
                && 
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50'}}>
                    <Loader/>
                </div>
            }
            <div ref={lastElement}/>
            <PageButtonSection pageCount={pageCount} current={currentPage} setCurrent={setCurrentPage}/>
        </div>
    );
}

export default Comments;
