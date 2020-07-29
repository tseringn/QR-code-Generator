import React from 'react'
import UserDetailForm from '../components/UserDetailsForm'
import DisplayQr from '../components/DisplayQr'

class QrContainer extends React.Component{

    state={userDetails: []}

    componentDidMount(){
        fetch('http://localhost:3000/userDetails')
        .then(res=>res.json())
        .then(userDetails=>{
            this.setState({userDetails})
        })
        .catch(error=>console.log(error))    
    }

    renderUserDetails=()=>{
        return this.state.userDetails.map(user=> <DisplayQr {...user} handleDelete={this.handleDelete}/>
        )}
    serialize = (obj)=> {
            var str = [];
            for (var p in obj)
              if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              }
            return str.join("&");
    }
    getQrCode=(userDetails)=>{
      let  data= this.serialize(userDetails)
      let qrCode=`http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=200x200`
      fetch('http://localhost:3000/userDetails', {
          method: "POST",
          headers: {
              'content-type': 'application/json',
              accept: 'application/json'
          },
          body: JSON.stringify({
              qrCode: qrCode,
              firstName: userDetails.firstName,
              lastName: userDetails.lastName,
              telephone: userDetails.telephone,
              email: userDetails.email,
              dob: userDetails.dob
          })
      })
      .then(res=>res.json())
      .then(newUserDetail=>{
          this.setState({userDetails: [...this.state.userDetails, newUserDetail]})
      })
    }

    handleDelete=(id)=>{
        fetch(`http://localhost:3000/userDetails/${id}`, {method: "DELETE"})
        this.setState({userDetails: [...this.state.userDetails.filter(user=> user.id!==id)]})
    }
    render(){
        console.log(this.state.userDetails)
        return(
            <>
            <h1 id='heading-logo' className='display-1' >QR Generator</h1>
            <UserDetailForm getQrCode={this.getQrCode}/>
            <div className='card-display'>
            {this.renderUserDetails()}
            </div>
            
            </>
        )
    }
}
export default QrContainer