import Links from './Links'
import './Styles/NavBar.css'


export default function NavBar() {
    return (
        <nav>
            <ul className='nav-ul'>
                <Links />
            </ul>
        </nav>
    )
}