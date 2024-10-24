import { useState } from 'react'
import { AddItemSection } from './component/AddItemSection/AddItemSection'
import { ListItem } from './component/ListItem/ListItem'
import './global.css'
import { click } from '@testing-library/user-event/dist/click'


// const items = [<h1>'car'</h1>,<h2>'phone'</h2>,<h3>'bag'</h3>]
// const items = [<ListItem />,<ListItem />,<ListItem />]
// const items = [{label: 'Todo1', id: 1}, {label: 'Todo2', id: 2}, {label: 'Todo3', id: 3}]

const items = [<ListItem />,<ListItem />,<ListItem />]

function App() {

    const [todos, setTodos] = useState([])
    const [label, setLabel] = useState('')

    const handleAddItem = (event) => {
        console.log('click  label:-> ', label); // кнопка Add
        setTodos((prevState) => [{label: label, id: new Date().getTime()}, ...prevState])
        setLabel('')
    }

    const handleInput = (event) => {
        // console.log(event.target.value); // значение инпута
        setLabel(event.target.value)
    }

    const handleRemoveItem = (id) => {
    console.log('Remove id', id);
    setTodos(todos.filter((todo) => todo.id !== id))
    }

    const list = todos.length ? todos.map((item, index) =>
    <ListItem key={item.id} label={item.label} onClick={() => handleRemoveItem(item.id)} />) : 'Элементов нет'
    console.log('render', todos);
    return <main className='sectionListTask'>
        <AddItemSection  onClick={handleAddItem} onChange={handleInput} label={label} />
        {/* <ListItem /> */}
        {list}
   </main>
}

export default App

// <Button title='Кнопка1'/>
// <Button title='Кнопка2' isDanger  m />
// <Button title='Кнопка3' isPrimary l />
/*
 const [initialState, setInitialState] = useState(0)

  <Button title="+" onClick={() => setInitialState((prevState) => prevState + 1)} />
 <h1>{initialState}</h1>
 <Button title="-" onClick={() => setInitialState((prevState) => prevState - 1)} />
*/