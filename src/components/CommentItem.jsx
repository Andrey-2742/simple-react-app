import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom';

function CommentItem({comments, setComment, ...props}) {

    const navigate = useNavigate();

    return (
        <div className='comment'>
            <div className='comment_author'>
                {props.item.id}. {props.item.author}
            </div>
            <div className='comment_text'>
                {props.item.text}
            </div>
            <div className='comment_buttons'>
                <MyButton onClick={() => props.removeComment(props.item)}>Remove</MyButton>
                <MyButton onClick={() => navigate(`/comments/${props.item.id}`)}>Open</MyButton>
            </div>
        </div>
    )
}

export default CommentItem;
