import React from 'react'

class UserDetailForm extends React.Component{
    state ={
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        dob: ''

    }
 handleSubmit=e=>{
     e.preventDefault()
     this.props.getQrCode(this.state)
     this.setState({
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        dob: ''
     })
 }
 handleChange=e=>{
     this.setState({[e.target.name]: e.target.value})
 }
    render(){
        
        const {firstName, lastName, telephone, email, dob}=this.state
        return(
         <form className='user-details-form' onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputText4">First Name</label>
                    <input name='firstName' onChange={this.handleChange} value={firstName} type="text" className="form-control" id="inputText4"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="inputText4">Last Name</label>
                    <input name='lastName' onChange={this.handleChange} value={lastName}  type="text" className="form-control" id="inputText4"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="example-tel-input" className="col-2 col-form-label">Telephone</label>
                        <div className="col-10">
                            <input name='telephone' onChange={this.handleChange} className="form-control" type="tel" value={telephone} id="example-tel-input"/>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input name='email' onChange={this.handleChange} type="email" value={email}  className="form-control" id="inputEmail4"/>
                    </div>

                    <div className="form-group col-md-6">
                        <label for="example-date-input" className="col-2 col-form-label">DOB</label>
                        <div className="col-10">
                            <input name='dob' onChange={this.handleChange} className="form-control" type="date" value={dob} id="example-date-input"/>
                        </div>
                    </div>
                    <div className="form-group col-md-4">
                        <button type='submit' className='btn btn-success btn-large'>Generate QR for me!</button>
                    </div>
            </div>
        </form>
        )
    }

}
export default UserDetailForm