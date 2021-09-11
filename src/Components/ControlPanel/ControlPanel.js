import s from './ControlPanel.module.css';

export default function ControlPanel (props) {

    return (
        <div className={s.controlContainer}>
            <div>
                <img onClick={props.pause} className={s.btn1} name='wait' src='Icons/pause.png' alt='pause'/>
            </div>
            <div>
                <img onClick={props.status === "stop" || props.status === "pause" ? props.play : props.stop} className={s.btn} name='start-stop'
                 src={props.status === "stop" || props.status === "pause" ? props.icons.iconPlay : props.icons.iconStop} alt='start/stop'/>
            </div>
            <div>
                <img onClick={props.reset} className={s.btn1} name='reset' src='Icons/reset.png' alt='reset'/>
            </div>
        </div>
    )
}