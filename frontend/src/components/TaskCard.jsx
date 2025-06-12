import './TaskCard.css'

export default function TaskCard(props) {

    return (

        <div id="taskCard" className='taskCard'>

            <div id='taskNameContainer' className='taskNameContainer'>

                <span id='checkBox'>

                    <input type='checkbox' checked={props.task.completed} />

                </span>

                <span id='taskName'>{props.task.name}</span>

            </div>

            <div id="cardActions" className='cardActions'>

                <button id='editButton' onClick={() => window.alert('Edit Clicked')} className='actionButton'>Edit</button>

                <button id='deleteButton' onClick={() => window.alert('Delete Clicked')} className='actionButton deleteButton'>Delete</button>

            </div>

        </div>

    )

}




