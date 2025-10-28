
import { useLocation } from 'react-router';

export function Welcome(){
    const location=useLocation()

    return (
        <div>
            <h3>Welcome</h3>
            <div>Hello, {location.state?.email || 'unknown'}</div>
        </div>
    )
}