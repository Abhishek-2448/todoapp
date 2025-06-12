import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import TaskList from './views/TaskList'

import Login from './views/login'

function App() {

    return (

        <>

            <Router>

                <Routes>

                    <Route path='/' element={<TaskList />} />

                    <Route path='/login' element={<Login />} />

                </Routes>

            </Router>

        </>

    )

}

export default App