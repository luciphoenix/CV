

function CreateSkill({skill, onChange, id, onClick }) {
    return (
      <>
        {id > 0 && <hr className="divider"/>}
        <div className="skillf">
          <input type="text" name="skill" id="skill" placeholder="type skill..." value={skill} onChange={(e) => onChange(e, id)} />
          <button type='button' onClick = {() => onClick(id)}>Delete</button>
        </div>
      </>
      
  )
}

export default CreateSkill