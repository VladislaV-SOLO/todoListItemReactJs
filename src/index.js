import ReactDOM from 'react-dom/client';
import App from './App'
import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<App />)



// function Button() {
//     const click = (e) => {
//       e.preventDefault()
//       console.log('click');
//     };
//     return <button onClick={click} className='button'>| Click |</button>
// }