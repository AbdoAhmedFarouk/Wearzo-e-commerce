import { Suspense } from 'react';
import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from '../pages/RootLayout/RootLayout';
import Loader from '../components/Loader/Loader';
import ProtectedRoute from '../pages/ProtectedRoute/ProtectedRoute';
import App from '../App';

const SpecialPage = lazy(() => import('../pages/SpecialPage/SpecialPage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const AllBrandsPage = lazy(() =>
  import('../pages/AllBrandsPage/AllBrandsPage'),
);
const DeliveryPage = lazy(() => import('../pages/DeliveryPage/DeliveryPage'));
const BlogPage = lazy(() => import('../pages/BlogPage/BlogPage'));
const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
const SignupPage = lazy(() => import('../pages/SignupPage/SignupPage'));
const ForgotPasswordPage = lazy(() =>
  import('../pages/ForgotPasswordPage/ForgotPasswordPage'),
);
const CartPage = lazy(() => import('../pages/CartPage/CartPage'));
const BrandName = lazy(() => import('../pages/BrandName/BrandName'));
const AllBrandsPageWrapper = lazy(() =>
  import('../sections/AllBrandsPageWrapper/AllBrandsPageWrapper'),
);
const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/ErrorPage'));
const LegalNoticePage = lazy(() =>
  import('../pages/LegalNoticePage/LegalNoticePage'),
);
const SecurePaymentPage = lazy(() =>
  import('../pages/SecurePaymentPage/SecurePaymentPage'),
);
const ContactusPage = lazy(() =>
  import('../pages/ContactusPage/ContactusPage'),
);
const StoresPage = lazy(() => import('../pages/StoresPage/StoresPage'));
const WishListPage = lazy(() => import('../pages/WishListPage/WishListPage'));
const MyAccount = lazy(() => import('../pages/MyAccount/MyAccount'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      { index: true, element: <RootLayout /> },
      {
        path: 'specials',
        element: (
          <Suspense fallback={<Loader />}>
            <SpecialPage />
          </Suspense>
        ),
      },
      {
        path: 'brands',
        element: (
          <Suspense fallback={<Loader />}>
            <AllBrandsPageWrapper />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <AllBrandsPage />
              </Suspense>
            ),
          },
          {
            path: ':brandId',
            element: (
              <Suspense fallback={<Loader />}>
                <BrandName />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'aboutUs',
        element: (
          <Suspense fallback={<Loader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'delivery',
        element: (
          <Suspense fallback={<Loader />}>
            <DeliveryPage />
          </Suspense>
        ),
      },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<Loader />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: 'cart',
        element: (
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'signin',
        element: (
          <Suspense fallback={<Loader />}>
            <SigninPage />
          </Suspense>
        ),
      },
      {
        path: 'signup',
        element: (
          <Suspense fallback={<Loader />}>
            <SignupPage />
          </Suspense>
        ),
      },
      {
        path: 'password-recovery',
        element: (
          <Suspense fallback={<Loader />}>
            <ForgotPasswordPage />
          </Suspense>
        ),
      },
      {
        path: 'legal-notice',
        element: (
          <Suspense fallback={<Loader />}>
            <LegalNoticePage />
          </Suspense>
        ),
      },
      {
        path: 'secure-payment',
        element: (
          <Suspense fallback={<Loader />}>
            <SecurePaymentPage />
          </Suspense>
        ),
      },
      {
        path: 'contactUs',
        element: (
          <Suspense fallback={<Loader />}>
            <ContactusPage />
          </Suspense>
        ),
      },
      {
        path: 'stores',
        element: (
          <Suspense fallback={<Loader />}>
            <StoresPage />
          </Suspense>
        ),
      },
      {
        path: 'product/:id',
        element: (
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'wishList',
        element: (
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <WishListPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'my-account',
        element: (
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          </Suspense>
        ),
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
