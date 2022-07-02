import CommentItem from './CommentItem';
import '../styles/App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function CommentList({comments, removeComment}) {

    console.log('list rendering');

    return (
        <div className='App'>
            <h1 style={{textAlign: 'center'}}>list</h1>
            {comments.length > 0
                ?
                <TransitionGroup>
                    {comments.map(comment =>
                        <CSSTransition
                            timeout={500}
                            classNames='comment'
                            key={comment.id}>
                            <CommentItem
                                removeComment={removeComment}
                                item={comment}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
                :
                <div>No comments</div>
            }
        </div>
    );
}

export default CommentList;
