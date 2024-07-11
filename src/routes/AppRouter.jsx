import { Suspense } from 'react';
import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import RootLayout from '../pages/RootLayout/RootLayout';
import ProtectedRoute from '../pages/ProtectedRoute/ProtectedRoute';
import Loader from '../components/Loader/Loader';

const SpecialPage = lazy(() => import('../pages/SpecialPage/SpecialPage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const DeliveryPage = lazy(() => import('../pages/DeliveryPage/DeliveryPage'));
const BlogPage = lazy(() => import('../pages/BlogPage/BlogPage'));
const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'));
const SignupPage = lazy(() => import('../pages/SignupPage/SignupPage'));
const ForgotPasswordPage = lazy(() =>
  import('../pages/ForgotPasswordPage/ForgotPasswordPage'),
);
const CartPage = lazy(() => import('../pages/CartPage/CartPage'));
const OutletWrapper = lazy(() =>
  import('../components/OutletWrapper/OutletWrapper'),
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
const CheckoutPage = lazy(() => import('../pages/CheckoutPage/CheckoutPage'));
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const OrderHistoryPage = lazy(() =>
  import('../pages/OrderHistoryPage/OrderHistoryPage'),
);
const ChangePasswordPage = lazy(() =>
  import('../pages/ChangePasswordPage/ChangePasswordPage'),
);
const ConfirmedOrderInfo = lazy(() =>
  import('../pages/ConfirmedOrderInfo/ConfirmedOrderInfo'),
);
const EditAccountInfoPage = lazy(() =>
  import('../pages/EditAccountInfoPage/EditAccountInfoPage'),
);
const AddressBookEntriesPage = lazy(() =>
  import('../pages/AddressBookEntriesPage/AddressBookEntriesPage'),
);
const ReturnRequestsPage = lazy(() =>
  import('../pages/ReturnRequestsPage/ReturnRequestsPage'),
);
const ReturnInfoPage = lazy(() =>
  import('../pages/ReturnInfoPage/ReturnInfoPage'),
);
const ComparePage = lazy(() => import('../pages/ComparePage/ComparePage'));
const ArticlePage = lazy(() => import('../pages/ArticlePage/ArticlePage'));
const EditAddressEntryPage = lazy(() =>
  import('../pages/EditAddressEntryPage/EditAddressEntryPage'),
);
const ReturnReasonPage = lazy(() =>
  import('../pages/ReturnReasonPage/ReturnReasonPage'),
);

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
        path: 'blogs',
        element: (
          <Suspense fallback={<Loader />}>
            <OutletWrapper />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <BlogPage />
              </Suspense>
            ),
          },
          {
            path: 'article/:id',
            element: (
              <Suspense fallback={<Loader />}>
                <ArticlePage />
              </Suspense>
            ),
          },
        ],
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
        loader: ({ params }) => {
          if (typeof params.id !== 'string' || !/^[0-9]+$/i.test(params.id)) {
            throw new Response('Bad Request', {
              statusText: 'Product not found.',
              status: 400,
            });
          }
          return true;
        },
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
        path: 'checkout',
        element: (
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'compare',
        element: (
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <ComparePage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: 'account',
        element: (
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <OutletWrapper />
            </ProtectedRoute>
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <AccountPage />
              </Suspense>
            ),
          },
          {
            path: 'edit-account-info',
            element: (
              <Suspense fallback={<Loader />}>
                <EditAccountInfoPage />
              </Suspense>
            ),
          },
          {
            path: 'order-history',
            element: (
              <Suspense fallback={<Loader />}>
                <OutletWrapper />
              </Suspense>
            ),
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<Loader />}>
                    <OrderHistoryPage />
                  </Suspense>
                ),
              },
              {
                path: 'order-info/:id',
                element: (
                  <Suspense fallback={<Loader />}>
                    <ConfirmedOrderInfo />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: 'change-password',
            element: (
              <Suspense fallback={<Loader />}>
                <ChangePasswordPage />
              </Suspense>
            ),
          },
          {
            path: 'edit-address-book',
            element: (
              <Suspense fallback={<Loader />}>
                <OutletWrapper />
              </Suspense>
            ),
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<Loader />}>
                    <AddressBookEntriesPage />
                  </Suspense>
                ),
              },
              {
                path: 'edit-address-entry/:id',
                element: (
                  <Suspense fallback={<Loader />}>
                    <EditAddressEntryPage />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: 'return-requests',
            element: (
              <Suspense fallback={<Loader />}>
                <OutletWrapper />
              </Suspense>
            ),
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<Loader />}>
                    <ReturnRequestsPage />
                  </Suspense>
                ),
              },
              {
                path: ':pathParam1/:pathParam2',
                element: (
                  <Suspense fallback={<Loader />}>
                    <ReturnReasonPage />
                  </Suspense>
                ),
              },
              {
                path: 'return-info/:id',
                element: (
                  <Suspense fallback={<Loader />}>
                    <ReturnInfoPage />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
