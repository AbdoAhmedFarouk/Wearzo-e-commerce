import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { currentLoggedUser } from '../../atoms/currentLoggedUser';
import { isCheckingUserStateLoading } from '../../atoms/isCheckingUserStateLoading';

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

function ProtectedRoute({ children }) {
  const currentUser = useRecoilValue(currentLoggedUser);
  const isUserLoggedStateLoading = useRecoilValue(isCheckingUserStateLoading);

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser?.email && !isUserLoggedStateLoading) {
      navigate('/signin');
    }
  }, [navigate, currentUser, isUserLoggedStateLoading]);

  return currentUser?.email && children;
}

export default ProtectedRoute;
