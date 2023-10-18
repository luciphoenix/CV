

function CreateSkill({skill, onChange, id, onClick }) {
    return (
      <>
        <input type="text" name="skill" id="skill" placeholder="type skill..." value={skill} onChange={(e) => onChange(e, id)} />
        <button type='button' onClick = {() => onClick(id)}>Delete</button>
            <br />
        <br />
      
      </>
      
  )
}

export default CreateSkill