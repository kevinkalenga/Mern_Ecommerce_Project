import {BrowserRouter, Routes, Route} from 'react-router-dom'

// components:
import HeaderComponent from "./pages/components/HeaderComponent";
import FooterComponent from './pages/components/FooterComponent';


// publicly available pages:
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductListPage from './pages/ProductListPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


import ProtectedRoutesComponent from './pages/components/ProtectedRoutesComponent'
// protected user pages:
import UserProfilePage from './pages/user/UserProfilePage';
import UserOrders from './pages/user/UserOrders';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage'

// protected admin pages:
import AdminUserPage from './pages/admin/AdminUsersPage'
import AdminEditUserPage from './pages/admin/AdminEditUserPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import AdminEditProductPage from './pages/admin/AdminEditProductPage'
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage'
import AdminChatPage from './pages/admin/AdminChatPage'
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage'
import AdminOrdersPage from './pages/admin/AdminOrderDetailsPage'
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage'

const App = () => {
  return (
    <BrowserRouter>
       <HeaderComponent />
       <Routes>
           {/* publicly available routes: */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not exists 404" />
          
          {/* user protected routes: */}
          <Route element={<ProtectedRoutesComponent admin={false} />}>
          
             <Route path="/user" element={<UserProfilePage />} />
             <Route path="/user/my-orders" element={<UserOrders />} />
             <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
             <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
          </Route>

          {/* admin protected routes: */}
          <Route element={<ProtectedRoutesComponent admin={true} />}>
             <Route path="/admin/users" element={<AdminUserPage />} />
             <Route path="/admin/edit-user/:id" element={<AdminEditUserPage />} />
             <Route path="/admin/products" element={<AdminProductsPage />} />
             <Route
                  path="/admin/create-new-product"
                  element={<AdminCreateProductPage />}
             />
             <Route
                 path="/admin/edit-product/:id"
                 element={<AdminEditProductPage />}
              />
              <Route path="/admin/orders" element={<AdminOrdersPage />} />
              <Route
                 path="/admin/order-details/:id"
                 element={<AdminOrderDetailsPage />}
              />
              <Route path="/admin/chats" element={<AdminChatPage />} />
              <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          </Route>
       </Routes> 
       <FooterComponent />
    </BrowserRouter>
    
    
  )
}

export default App
