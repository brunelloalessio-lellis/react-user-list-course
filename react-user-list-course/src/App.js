import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {

  const [userList, setUserList] = useState([])

  const onAddUserHandler = (user) => {
    console.log(user)
  }

  return (
    <div className="App">
      <UserForm onAddUserTap={onAddUserHandler}/>
      <UserList userList={userList}/>
    </div>
  );
}

export default App;
