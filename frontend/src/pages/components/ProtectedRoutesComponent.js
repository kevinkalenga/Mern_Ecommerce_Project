import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoutesComponent = () => {
 
    const auth = true;
  // Outlet is everything inside ProtectedRoutesComponent
    return auth ? <Outlet /> : <Navigate to='/login' />
  
}

export default ProtectedRoutesComponent