function Personal({ person }) {
  return (
    <>
      <div className="personal">
        <h2>Personal Details</h2>
        <div className="background">
          <div className="name">
            <div>
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                id="fname"
                value={person.fname}
                onChange={person.cFname}
              />
            </div>
        
            <div>
              <label htmlFor="lname">Last name</label>
              <input
                type="text"
                id="lname"
                value={person.lname}
                onChange={person.cLname}
              />
            </div>
        
            <div>
              <label htmlFor="otherName">Other names</label>
              <input
                type="text"
                name="otherName"
                id="otherName"
                value={person.oname}
                onChange={person.cOname}
              />
            </div>
          </div>
          <div className="contact">
            <div>
              <label htmlFor="phone"> Phone</label>
              <input type="tel" name="number" id="number" value={person.phone} onChange={person.handlePhone}/>
            </div>
        
            <div>
              <label htmlFor="email">E-mail </label>
              <input
                type="email"
                name="email"
                id="email"
                value={person.email}
                onChange={person.cEmail}
              />
            </div>
        
            <div>
              <label htmlFor="address"> Address</label>
              <input type="text" name="address" id="address" value={person.address} onChange={person.cAddress}/>
            </div>
          </div>        
          <div>
            <label htmlFor="role">Position</label>
            <input type="text" name="role" id="role" value={person.role} onChange={person.cRole} />
          </div>
          <div>
            <label htmlFor="linkdin">Linkdin</label>
            <input type="text" name="linkdin" id="linkdin" value={person.linkdin} onChange={person.clinkdin} />
          </div>
          <textarea name="role" id="role" cols="30" rows="10" placeholder="Provide decription of your role" value={person.description} onChange={person.cDescription}></textarea>
        </div>
      </div>
    </>
  );
}

export default Personal;
