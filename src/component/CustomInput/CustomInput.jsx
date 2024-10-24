import './style.css';


export function CustomInput(props) {

const{ onChange, label } = props
    return <>
        <input onChange={onChange} type="text" className="input" value={label} placeholder="Task to be done.." required />
    </>
}