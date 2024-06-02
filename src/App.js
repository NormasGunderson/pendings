// import './App.css'
// import Header from './components/Header';
// import Todo from './components/Todo';
// import FormatPh from './components/FormatPh'

import { useMemo, useRef, useState } from 'react'


function App() {
  const [items, setItems] = useState([])
  //query to search for
  const [query, setQuery] = useState('')
  const inputRef = useRef()

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])


  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === '') return
    setItems(prev => {
      return [...prev, value]
    })

    inputRef.current.value = ''
  }

  return (
    <>
      Search
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type='search' />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item <input ref={inputRef} type='text' />
        <button type='submit'>Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map(item => (
        <div>{item}</div>
      ))}
    </>
  )
}








// // <div className="App">
//   {/* <Header />
//   <Todo />  */}
//   {/* <FormatPh /> */}
// // </div>


export default App;