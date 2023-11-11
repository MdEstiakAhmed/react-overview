import { useState } from "react"

function Paint() {
  const [item, setItem] = useState('')
  const [list, setList] = useState(['apple', 'banana', 'orange'])

  const handleAddList = () => {
    setList(prev => [...prev, item])
  }
  return (
    <>
      <ol>
        {
          list.sort().map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ol>

      <input 
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        />

        <button onClick={handleAddList}>
          add
        </button>
    </>
  )
}

export default Paint
