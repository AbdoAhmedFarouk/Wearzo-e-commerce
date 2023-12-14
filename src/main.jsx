import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import RootLayout from './pages/RootLayout/RootLayout';
import SpecialPage from './pages/SpecialPage/SpecialPage';
import AboutPage from './pages/AboutPage/AboutPage';
import AllBrandsPage from './pages/AllBrandsPage/AllBrandsPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import BlogPage from './pages/BlogPage/BlogPage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/SignupPage/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import CartPage from './pages/CartPage/CartPage';
import BrandName from './pages/BrandName/BrandName';
import AllBrandsPageWrapper from './sections/AllBrandsPageWrapper/AllBrandsPageWrapper';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<RootLayout />} />

            <Route path="special" element={<SpecialPage />} />

            <Route path="brands" element={<AllBrandsPageWrapper />}>
              <Route index element={<AllBrandsPage />} />
              <Route path=":brandId" element={<BrandName />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>

            <Route path="aboutUs" element={<AboutPage />} />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="blog" element={<BlogPage />} />

            <Route path="cart" element={<CartPage />} />
            <Route path="signin" element={<SigninPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="password-recovery" element={<ForgotPasswordPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
