import CakeContainer from './components/cake-container';
import {Provider} from 'react-redux'
import store from './redux/cake/store';
import './App.css';
import HooksCakeContainer from './components/hooks-cake-container';
import  IcecreamContainer  from './components/icecream-container';
import NewCakeContainer from './components/newcake-container';
import ItemContainer from './components/item-container'
import UserContainer from './components/user-container';

function App() {
  return (
    <Provider store = {store}>
      <div>
        {/* <UserContainer/> */}
        {/* <ItemContainer cake/> */}
        {/* <ItemContainer/> */}
        {/* <NewCakeContainer/> */}
        {/* <IcecreamContainer/> */}
        {/* <HooksCakeContainer/> */}
        {/* <CakeContainer/> */}
        
      </div>
    </Provider> 
  );
}

export default App;
