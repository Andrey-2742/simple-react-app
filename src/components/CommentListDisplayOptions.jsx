import '../styles/App.css';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

function CommentListDisplayOptions({commentsPerPage, setCommentsPerPage, autoLoading, setAutoLoading}) {
    
    return (
        <div>
            <div className='selectBlock'>
                <label className='label'>
                    Комментариев на странице:
                </label>
                <MySelect
                    value={commentsPerPage}
                    onChange={value => setCommentsPerPage(value)}
                    options={[
                        {value: 5, name: '5'},
                        {value: 10, name: '10'},
                        {value: 25, name: '25'},
                        {value: 50, name: '50'}
                    ]}
                />
            </div>
            <div>
                <MyInput
                    type='checkbox'
                    checked={autoLoading}
                    onChange={(e) => setAutoLoading(e.target.checked)}>
                </MyInput>
                <label>Автозагрузка</label>
            </div>
        </div>
    );
}

export default CommentListDisplayOptions;
