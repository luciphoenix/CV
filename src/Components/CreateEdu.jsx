function CreateEdu({ name, onChange, deg, id, program ,onClick}) {
  return (
    <>
        {id > 0 && <hr className="divider"/>}
      <div className="school">
        <div>
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            value={name}
            onChange={(e) => onChange(e,id)}
          />
        </div>
        <div>
          <label htmlFor="program">Program</label>
          <input
            type="text"
            name="program"
            id="program"
            value={program}
            onChange={(e) => onChange(e,id)}
          />
        </div>
        <div>
          <label htmlFor="degree">Degree</label>
          <select name="degree" id="degree" value={deg} onChange={(e) => onChange(e,id)}>
            <option value="PhD.">PhD</option>
            <option value="MSc.">Master&apos;s degree</option>
            <option value="Bsc.">
              Bachelor&apos;s Degree
            </option>
            <option value="HnD.">Honour&apos;s Degree(HND)</option>
            <option value="Wassce.">Senior High School</option>
            <option value="BECE.">Junior High School</option>
          </select>
        </div>
        <div>
          <label htmlFor="start">Starting date</label>
          <input type="date" name="start" id="start" />
        </div>
        <div>
          <label htmlFor="end">Graduation day</label>
          <input type="date" name="end" id="end" />
        </div>
        <div>
          <button type='button' onClick={() => onClick(id)}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default CreateEdu;
