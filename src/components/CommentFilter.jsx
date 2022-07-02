import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

function CommentFilter({filter, setFilter}) {

    return (
        <div>
            <MyInput
                value={filter.searchQuery}
                placeholder='Поиск'
                onChange={e => setFilter({...filter, searchQuery: e.target.value})}/>
            <MySelect
                value={filter.sortingMethod}
                onChange={selectedSort => setFilter({...filter, sortingMethod: selectedSort})}
                defaultValue='Сортировка'
                options={[
                    {value: 'author', name: 'По автору'},
                    {value: 'text', name: 'По тексту'}
                ]}/>
        </div>
    );
}

export default CommentFilter;
