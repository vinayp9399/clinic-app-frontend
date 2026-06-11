import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        return <Navigate to="/login" replace />;
    }
    return element;
};

export default ProtectedRoute;
