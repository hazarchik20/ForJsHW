import { Navigate } from 'react-router-dom';
function ProtectedRoute({ children, isLogin }) {
    if (!isLogin) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
export default ProtectedRoute;
