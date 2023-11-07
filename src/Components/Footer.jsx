import { useEffect, useState } from "react";
import "./Styles/footer.css";


function Footer() {
  const [hidden, setHidden] = useState(false)
  const [screen,setScreen] =useState(window.screen.availWidth)
   const toggle = (e) => {
    e.preventDefault()
     e.target.parentElement.parentElement.children[1].classList.toggle('hide-cv')
     e.target.parentElement.parentElement.children[2].classList.toggle('hide-cv')
     setHidden(!hidden)
   }
  let disable = screen > 650 
  useEffect(()=> window.addEventListener('screen', () => setScreen(window.screen.availWidth)))
  
  return (
    <>
      <div className="footer">
        {disable ? <div>Luciphoenix&copy;<span>&#50;&#48;&#50;&#51;</span></div> : <button type="button"  onClick={toggle}>{hidden ? 'Edit' : 'Create'}</button>}
      </div>
    </>
  );
}

export default Footer;
