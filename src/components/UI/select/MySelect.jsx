import classes from './MySelect.module.css';

function MySelect({options, defaultValue, ...props}) {
    return (
        <select
            className={classes.mySelect}
            value={props.value}
            onChange={e => props.onChange(e.target.value)}>

            <option value='' disabled>{defaultValue}</option>
            {options.map(
                (o) => <option value={o.value} key={Math.random()}>{o.name}</option>
            )}
        </select>
    );
}

export default MySelect;
