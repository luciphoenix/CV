import './Styles/links.css'


export default function Links() {
    let links = ['Home', 'About', 'Profile', 'Contacts', 'Services']
    return links.map(link => <li key={link}><a href="#" className='nav-link'>{link}</a></li>)
}