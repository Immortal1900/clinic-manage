import React from 'react'

function Diagnosis() {
  return (
    <div>Diagnosis

<div className="form-row">
        <div className="col-md-4 nm-1">
          <label htmlFor="validationDefault01">First name</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            id="firstName"
            //onChange={onEdit}
           // value={user.firstName}
            required
          />
        </div>
    </div>
    </div>
  )
}

export default Diagnosis