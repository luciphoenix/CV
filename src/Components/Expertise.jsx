import './Styles/contact.css'


export default function Expertise() {
    let skill = ['Javascript', 'Ruby', 'React', 'Ethical Hacking'].map(
        skill => <li key={skill}>{skill}</li>
    )
    return (
        <>
            <h3>Epertise</h3>
            <hr />
            <ul>
                {skill}
            </ul>
            
        </>
    )
}