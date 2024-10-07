import Todos from "./components/Todos"
import './app.css'

function App() {

  return (
    <div className="todo-main-container">
      <Todos title='Urgent'/>
      <Todos title='Important'/>
      <Todos title='Upcoming'/>
    </div>
  )
}

export default App
