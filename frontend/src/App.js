import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Homepage} exact/>
        <Route path="/chats" component={ChatPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
