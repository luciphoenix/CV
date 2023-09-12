import './Styles/contact.css'

export default function Language() {
    let languages = ['English', 'Ghanaian Twi', 'Spanish'].map(
        lang => <li key={lang}>{lang}</li>
    )
    return (
        <>
            <h3>Languages</h3>
            <hr />
            <ul>
                {languages}
            </ul>
        </>
    )
}