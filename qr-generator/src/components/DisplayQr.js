import React from 'react'

const DisplayQr=(props)=>{
    
    return(
     <div id='user-details-card' className="card" style={{width: "20rem"}}>
        <img src={props.qrCode} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{`${props.firstName} ${props.lastName}`}</h5>
          <p className="card-text">Phone: {props.telephone}</p>
          <p className="card-text">Email: {props.email}</p>
          <p className="card-text">DOB: {props.dob}</p>
          <a href="#" onClick={()=>props.handleDelete(props.id)} className="btn btn-danger">Delete</a>
        </div>
      </div>
    )
}
export default DisplayQr