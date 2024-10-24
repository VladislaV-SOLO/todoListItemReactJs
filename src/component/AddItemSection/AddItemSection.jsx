import { Button } from "../Button/Button";
import { CustomInput } from "../CustomInput/CustomInput";
import './style.css'

export function AddItemSection(props) {
const { onClick, onChange, label } = props
    return <>
            <div className="taskBlockAdd">
        <CustomInput onChange={onChange} label ={label} />
        <Button title='Add'  onClick={onClick}/>
            </div>
            </>
}