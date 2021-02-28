import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return <div class="navigation">
        <Link to="/">Home</Link>
        <Link to={{
            pathname: '/about',
            state: {
                fromNavigation: true
            }
        }}>About</Link>
    </div>
}

export default Navigation;