import s from './Counter.module.css';

export default function Counter(props) {

    return (
        <div className={s.counter}>
            {props.time}
        </div>
    )
}