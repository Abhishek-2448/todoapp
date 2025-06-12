import './TaskList.css'

import TaskCard from '../components/TaskCard'

export default function TaskList() {

    const taskListArray = [

        {

            name: 'Task1',

            completed: false

        },

        {

            name: 'Task2',

            completed: true

        },

        {

            name: 'Task3',

            completed: true

        },

        {

            name: 'Task4',

            completed: false

        },

        {

            name: 'Task5',

            completed: false

        }

    ]

 

    return (

        <>

            <div id="ancestorContainer" className="ancestorContainer">

                <div id="header" className='header'> My Tasks</div>

                {taskListArray.map((task) => (

                    <TaskCard task={task} />

                ))}

            </div >

        </>

    )

}