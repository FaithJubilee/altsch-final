import { useNavigate } from 'react-router-dom'
import { ABOUT_ROUTE, FINDER_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from '../content-mgt/Landing'
import './nav.scss'
import Button from './Button';
const Nav = () => {
    const navigator = useNavigate();

    const toHomePage = () => {
        navigator(`/${HOME_ROUTE}`)
    }
    const toAboutPage = () => {
        navigator(`/${ABOUT_ROUTE}`)
    }
    const toFinderPage = () => {
        navigator(`/${FINDER_ROUTE}`)
    }
    const toSignupPag = () =>{
        navigator(`/${LOGIN_ROUTE}`)
    }
    return (
        <div className="nav">
            <h2>CareFinder</h2>
            <ul>
                <li onClick={toHomePage}>Home</li>
                <li onClick={toAboutPage}>About</li>
                <li onClick={toFinderPage}>Finder</li>
                <li><Button text="Logout" handleBtn={toSignupPag} /></li>


            </ul>
        </div>
    )
}
export default Nav;