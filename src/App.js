// import Form from "./component/Form/form";
// import Usememo from "./component/usememo/Memo"
import Register from './page/Register';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import FileUpload from './page/Image';

import {BrowserRouter,Route,Routes} from 'react-router-dom'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Register/>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/dashboard' element={<Dashboard/>}/>
          <Route path ='/file' element={<FileUpload/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
    );
}

export default App;
