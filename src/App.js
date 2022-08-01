import Navbar from "./Components/Navbar";
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Signin from './Pages/Signin'
import Signup from "./Pages/Signup";
import Admin from "./Pages/Admin";
import RequireAdmin from "./Components/RequireAdmin";
import RequireVendor from "./Components/RequireVendor";
import AddProduct from "./Pages/AddProduct";
function App() {
  return (
    <div >
       <Navbar>
          <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/admin' element={<RequireAdmin><Admin/></RequireAdmin>}/>
            <Route path='/addproduct' element={<RequireVendor><AddProduct/></RequireVendor>}/>

            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
       </Navbar>
    </div>
  );
}

export default App;
