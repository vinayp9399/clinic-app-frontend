import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, role }) => {
    const accessToken = localStorage.getItem('accessToken');
    const usertype = localStorage.getItem('usertype');

    if (!accessToken) {
        return <Navigate to="/login" replace />;
    }

    if (role && usertype !== role) {
        return <Navigate to={usertype === 'doctor' ? '/doctordashboard' : '/patientdashboard'} replace />;
    }

    return element;
};

export const PublicOnlyRoute = ({ element }) => {
    const accessToken = localStorage.getItem('accessToken');
    const usertype = localStorage.getItem('usertype');

    if (accessToken) {
        return <Navigate to={usertype === 'doctor' ? '/doctordashboard' : '/patientdashboard'} replace />;
    }

    return element;
};

export default ProtectedRoute;
