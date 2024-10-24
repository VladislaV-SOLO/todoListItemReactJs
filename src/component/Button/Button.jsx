import { useState } from 'react';
import { classNames } from '../../utils';
import './style.css';


export function Button(props) {
    const { title, onClick } = props
    return <button onClick={onClick} className="btn add">{title}</button>
}



// function Button(props) { //{title} а это мы ставим в скобки вместо props
//     const { title, isDanger, isPrimary, m, l, onClick} = props  // если короче это коментим
//     const [counter, setCounter] = useState(0)
//     const [style, setStyle] = useState(false)

// console.log('render Button');

//     return ( <button className={classNames(
//     'btn', 
//     { danger: isDanger, primary: isPrimary, 'btn_m': m, 'btn_l': l, temp: style },
//      ['color-red'])} 
//         onClick={() => {
//             onClick()
//             setCounter((prevState) => prevState + 1)
//             setStyle((prevState)=>!prevState)
//         }}
//         >
//         {`${title}-кликнули: ${counter} раз`} 
//     </button > )
// }

// export default Button