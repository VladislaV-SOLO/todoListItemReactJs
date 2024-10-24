import { Button } from '../Button/Button'
import './style.css'



export function ListItem(params) {

    const { label, onClick } = params
    return <li className="list__item">
    <div className="list__itemBlock">
        <p className="paragraf">{label}</p>
        {/* /* <button class="btn">Remove</button>  */}
        <Button title='Remove' onClick={onClick} />
    </div>
</li>
}

    /* <button class="btn">Remove</button>  */