import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './Components/Wrapper';
import { ShopCartComponent } from './Components/ShopCartComponent/ShopCartComponent';
import { MainComponent } from './Components/mainComponent/MainComponent';
import { CreateComponent } from './Components/createComponent/CreateComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route index element={<MainComponent/>}/>
          <Route path='createSide' element={<CreateComponent/>} />
        <Route path='shopCart' element={<ShopCartComponent/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
