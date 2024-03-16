import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { lazy } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import RootLayout from './pages/RootLayout/RootLayout';
import ScrollToTop from './hooks/useScrollToTop';

const SpecialPage = lazy(() => import('./pages/SpecialPage/SpecialPage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const AllBrandsPage = lazy(() => import('./pages/AllBrandsPage/AllBrandsPage'));
const DeliveryPage = lazy(() => import('./pages/DeliveryPage/DeliveryPage'));
const BlogPage = lazy(() => import('./pages/BlogPage/BlogPage'));
const SigninPage = lazy(() => import('./pages/SigninPage/SigninPage'));
const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage'));
const ForgotPasswordPage = lazy(() =>
  import('./pages/ForgotPasswordPage/ForgotPasswordPage'),
);
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));
const BrandName = lazy(() => import('./pages/BrandName/BrandName'));
const AllBrandsPageWrapper = lazy(() =>
  import('./sections/AllBrandsPageWrapper/AllBrandsPageWrapper'),
);
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const LegalNoticePage = lazy(() =>
  import('./pages/LegalNoticePage/LegalNoticePage'),
);
const SecurePaymentPage = lazy(() =>
  import('./pages/SecurePaymentPage/SecurePaymentPage'),
);
const ContactusPage = lazy(() => import('./pages/ContactusPage/ContactusPage'));
const StoresPage = lazy(() => import('./pages/StoresPage/StoresPage'));

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<RootLayout />} />

            <Route
              path="specials"
              element={
                <Suspense fallback="loading please wait...">
                  <SpecialPage />
                </Suspense>
              }
            />

            <Route
              path="brands"
              element={
                <Suspense fallback="loading please wait...">
                  <AllBrandsPageWrapper />
                </Suspense>
              }
            >
              <Route
                index
                element={
                  <Suspense fallback="loading please wait...">
                    <AllBrandsPage />
                  </Suspense>
                }
              />
              <Route
                path=":brandId"
                element={
                  <Suspense fallback="loading please wait...">
                    <BrandName />
                  </Suspense>
                }
              />

              <Route
                path="*"
                element={
                  <Suspense fallback="loading please wait...">
                    <ErrorPage />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="aboutUs"
              element={
                <Suspense fallback="loading please wait...">
                  <AboutPage />
                </Suspense>
              }
            />

            <Route
              path="delivery"
              element={
                <Suspense fallback="loading please wait...">
                  <DeliveryPage />
                </Suspense>
              }
            />

            <Route
              path="blog"
              element={
                <Suspense fallback="loading please wait...">
                  <BlogPage />
                </Suspense>
              }
            />

            <Route
              path="cart"
              element={
                <Suspense fallback="loading please wait...">
                  <CartPage />
                </Suspense>
              }
            />

            <Route
              path="signin"
              element={
                <Suspense fallback="loading please wait...">
                  <SigninPage />
                </Suspense>
              }
            />
            
            <Route
              path="signup"
              element={
                <Suspense fallback="loading please wait..." e>
                  <SignupPage />
                </Suspense>
              }
            />

            <Route
              path="password-recovery"
              element={
                <Suspense fallback="loading please wait...">
                  <ForgotPasswordPage />
                </Suspense>
              }
            />

            <Route
              path="legal-notice"
              element={
                <Suspense fallback="loading please wait...">
                  <LegalNoticePage />
                </Suspense>
              }
            />

            <Route
              path="secure-payment"
              element={
                <Suspense fallback="loading please wait...">
                  <SecurePaymentPage />
                </Suspense>
              }
            />

            <Route
              path="contactUs"
              element={
                <Suspense fallback="loading please wait...">
                  <ContactusPage />
                </Suspense>
              }
            />

            <Route
              path="stores"
              element={
                <Suspense fallback="loading please wait...">
                  <StoresPage />
                </Suspense>
              }
            />

            <Route
              path="product/:id"
              element={
                <Suspense fallback="loading please wait...">
                  <ProductPage />
                </Suspense>
              }
            />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
