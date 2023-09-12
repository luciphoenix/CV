import './Styles/create.css'

function Create({fname,cFname,cgen}) {
    return (
        <>
            <div className='createBody'>
                <form action="#" method="post">
                    <fieldset>
                        <legend>Personal Details</legend>
                        <label htmlFor="fname">First name</label>
                        <input type="text" id='fname' value={fname}/><br />
                        <label htmlFor="lname">Last name</label>
                        <input type="text" id='lname' /><br />
                        <label htmlFor="otherName">Other Name</label>
                        <input type="text" name="otherName" id="otherName" /><br />
                        <label htmlFor="birthday"> Birthday</label>
                        <input type="date" name="birthday" id="birthday" /><br />
                        <label htmlFor="email">E-mail Address</label>
                        <input type="email" name="email" id="email  " />
                        <fieldset>
                            <legend>Gender</legend>
                            <label htmlFor="male"><input type="radio" name="gender" id="male" value="male" onSelect={cgen}/>Male</label>
                            <label htmlFor="female"><input type="radio" name="gender" id="femail" value='female' onClick={cgen}/> Female</label>
                        </fieldset>
                    </fieldset>
                    <fieldset>
                        <legend>Education</legend>
                        <label htmlFor="school">School</label>
                        <input type="text" name="school" id="school" /><br />
                        <label htmlFor="degree">Degree</label>
                        <select name="degree" id="degree">
                            <option value="Doctor of Philosophy">PhD</option>
                            <option value="Master's degree" >Master&apos;s degree</option>
                            <option value="Bachelor's Degree" selected>Bachelor&apos;s Degree</option>
                            <option value="Honour's Degree">Honour&apos;s Degree(HND)</option>
                            <option value="Senior High School">Senior High School</option>
                            <option value="Junior High School">Junior High School</option>
                        </select><br />
                        <label htmlFor="start">Starting date</label>
                        <input type="date" name="start" id="start" /><br />
                        <label htmlFor="end">Graduation day</label>
                        <input type="date" name="end" id="end" />
                    </fieldset>
                    <fieldset>
                        <legend>Honours and Awards</legend>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" /><br />
                        <textarea name="description" id="description" cols="30" rows="10" placeholder='write a little about the honour...'></textarea>
                        <br /><label htmlFor="date">Awarded Date</label>
                        <input type="date" name="date" id="date" />
                    </fieldset>
                    <fieldset>
                        <legend>Language</legend>
                        <select name="language" id="language">
                            <option value="#" selected disabled>---- select language ---</option>
                            <option value="English">English</option>
                            <option value="Twi">Twi</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="Greek">Greek</option>
                            <option value="Chiness">Chiness</option>
                            <option value="Hebrew">Hebrew</option>
                        </select><br />
                        <label htmlFor="native"><input type="checkbox" name="level" id="native"value='Native'/>Native</label>
                        <label htmlFor="intermediate"><input type="checkbox" name="level" id="intermediate"value='intermediate'/>Intermediate</label>
                    </fieldset>
                    <button>submit</button>
                </form>
            </div>
        </>
    )  
}
export default Create