import { connect } from 'react-redux'
import {useEffect} from 'react'

function Todo(props){
    let allTodos = props.allTodos;

    useEffect(() => {
        localStorage.setItem("allTodos",JSON.stringify(allTodos));
    },[allTodos])
    
    function handleInput(event) {
        let value = event.target.value;
        if (event.keyCode === 13 && value !== "") {
            let todo = {
                name: value,
                isDone: false,
            };
            props.dispatch({type:"add",payload:todo})
            event.target.value = "";
        }
    }
    return(
        <>
            <header>todos</header>
            <div className="searchbar">
                <div className="icon"><i className="fas fa-chevron-down"></i></div>
                <input type="search" name="text" onKeyUp={handleInput}  id="text" placeholder="What are you looking for?" />
            </div>
            <ul>
                {
                    allTodos.map((todo,index) => {
                        return (
                            <li className="li" key={index} >
                                <div className="name">
                                    <input type="checkbox" onChange={() => props.dispatch({type: "toggle",payload: index})} checked={todo.isDone} />
                                    <p>{todo.name}</p>
                                </div>
                                <span className='spantext' onClick={() => props.dispatch({type: "delete",payload: index})} >X</span>
                            </li>
                        )
                    })
                }
            
            </ul>
        </>
    )
}

function mapStateToProps(state) {
    return{
        allTodos : state.allTodos,
    }
}

export default connect(mapStateToProps)(Todo);