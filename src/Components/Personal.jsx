function Personal({ person }) {
  return (
    <>
      <h2>Personal Details</h2>
      <label htmlFor="fname">First name</label>
      <input
        type="text"
        id="fname"
        value={person.fname}
        onChange={person.cFname}
      />
      <br />
      <label htmlFor="lname">Last name</label>
      <input
        type="text"
        id="lname"
        value={person.lname}
        onChange={person.cLname}
      />
      <br />
      <label htmlFor="otherName">Other Name</label>
      <input
        type="text"
        name="otherName"
        id="otherName"
        value={person.oname}
        onChange={person.cOname}
      />
      <br />
      <label htmlFor="phone"> Phone Number</label>
      <input type="tel" name="number" id="number" value={person.phone} onChange={person.handlePhone}/>
      <br />
      <label htmlFor="email">E-mail Address</label>
      <input
        type="email"
        name="email"
        id="email"
        value={person.email}
        onChange={person.cEmail}
      />
      <br />
      <label htmlFor="address"> Address</label>
      <input type="text" name="address" id="address" value={person.address} onChange={person.cAddress}/>
      <br />
      <label htmlFor="role">Position</label>
      <input type="text" name="role" id="role" value={person.role} onChange={person.cRole} />
      <br />
      <textarea name="role" id="role" cols="30" rows="10" placeholder="Provide decription of your role" value={person.description} onChange={person.cDescription}></textarea>
    </>
  );
}

export default Personal;
