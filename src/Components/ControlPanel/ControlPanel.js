import s from './ControlPanel.module.css';

export default function ControlPanel (props) {
    return (
        <div className={s.controlContainer}>
            <div>
                <img className={s.btn1} name='wait' src='Icons/pause.png'/>
            </div>
            <div>
                <img className={s.btn} name='start-stop' src='Icons/play.png'/>
            </div>
            <div>
                <img className={s.btn1} name='reset' src='Icons/reset.png'/>
            </div>
        </div>
    )
}