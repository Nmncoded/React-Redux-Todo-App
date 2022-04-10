import {render} from 'react-dom';
import './stylesheets/style.css';
import {Provider} from 'react-redux';
import store from './store/todoReducer'
import Todo from './components/todo'

function App(){
    return <Todo />
}

render(
    <Provider store={store} >
        <App />
    </Provider>
,document.getElementById(`root`));