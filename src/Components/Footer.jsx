import { useState } from "react";
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
  
  let disable = screen < 650 
  console.log(disable);
  return (
    <>
      <div className="footer">
        <button type="button" disabled={disable} onClick={toggle}>{hidden ? 'Edit' : 'Create'}</button>
      </div>
    </>
  );
}

export default Footer;
