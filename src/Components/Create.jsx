import './Styles/create.css'

function Create() {
    return (
        <>
            <div className='createBody'>
                <form action="#" method="post">
                    <label htmlFor="fname">First name</label>
                    <input type="text" id='fname' /><br />
                    <label htmlFor="lname">Last name</label>
                    <input type="text" id='lname'/><br />
                </form>
            </div>
        </>
    )  
}
export default Create