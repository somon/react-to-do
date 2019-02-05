import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';






const App = () => {
    return <div>
        <AppHeader/>
        <SearchPanel/>
        <ToDoList/>
    </div>;
}

ReactDom.render(<App/>,document.getElementById('root'));