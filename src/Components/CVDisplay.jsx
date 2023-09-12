import Profile from './Profile'
import Contact from './Contact'
import Education from './Education'
import Expertise from './Expertise'
import Language from './Language'
import Background from './Background'
import Experience from './Experience'
import Reference from './Reference'
import './Styles/cvdisplay.css'
function CVDisplay() {
    return (
        <>
            <div className="cv-display">
                <div className="first-div">
                    < Profile />
                    < Contact />
                    < Education />
                    < Expertise />
                    < Language />
                </div>
                <div className="second-div">
                    < Background />
                    < Experience />
                    < Reference />
                </div>
            </div>
        </> 
    )
}
export default CVDisplay