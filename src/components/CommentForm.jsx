import {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function CommentForm(props) {

    const [comment, setComment] = useState({author: '', text: ''});

    function addComment(e) {
        e.preventDefault();
        props.sendComment(comment);
        setComment({author: '', text: ''});
    }

    return (
        <form>
            <MyInput
                type='text'
                placeholder='author'
                value={comment.author}
                onChange={e => setComment({...comment, author: e.target.value})}/>
            <MyInput
                type='text'
                placeholder='text'
                value={comment.text}
                onChange={e => setComment({...comment, text: e.target.value})}/>
            <MyButton onClick={(e) => addComment(e)}>send</MyButton>
        </form>
    );
}

export default CommentForm;
