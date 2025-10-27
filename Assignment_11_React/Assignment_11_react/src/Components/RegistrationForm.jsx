import { useState } from "react";

function RegistrationFrom() {
    const [userinfo, setUserInfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        passwd: '',
        confirmPasswd: '',
        mobile: '',
        address: '',
        birth: ''
    })

    const initialvalue = {
        firstname: '',
        lastname: '',
        email: '',
        passwd: '',
        confirmPasswd: '',
        mobile: '',
        address: '',
        birth: ''
    }

    const handlechange = (e) => setUserInfo({ ...userinfo, [e.target.id]: e.target.value })

    const handlereset = (e) => setUserInfo(initialvalue)

    const handlesubmit = () => {
        let Message = ``
        if (!userinfo.firstname)
            Message += "First Name cannot be empty. \n "
        if (!userinfo.lastname)
            Message += "Last Name cannot be empty. \n "
        if (!userinfo.email)
            Message += "Email cannot be empty. \n "
        if (!userinfo.passwd)
            Message += "Password cannot be empty. \n "
        if (userinfo.passwd.length < 8)
            Message += "password must be at least 8 chars.\n"
        if (!userinfo.confirmPasswd)
            Message += "Confirm Password cannot be empty. \n "
        if (!userinfo.mobile)
            Message += "Mobile No cannot be empty. \n "
        if (!userinfo.address)
            Message += "Address cannot be empty. \n "
        if (!userinfo.birth)
            Message += "Birth cannot be empty. \n "
        if (userinfo.passwd !== userinfo.confirmPasswd)
            Message += "Password Not Matched!!!!"
        if (Message)
            alert(Message)
        else {
            alert("Registration data is ok")
            setUserInfo(initialvalue)

        }


    }


    return (
        <div>
            <h4>Registration Form</h4>
            <div>First Name: <input type='text' id="firstname" value={userinfo.firstname} onChange={handlechange} />
                {!userinfo.firstname && <div style={{ display: 'inline', color: 'red' }}>*</div>}
            </div>
            <div>Last Name: <input type='text' id="lastname" value={userinfo.lastname} onChange={handlechange} />
                {!userinfo.lastname && <div style={{ display: 'inline', color: 'red' }}>*</div>}
                </div>
            <div>Email: <input type='text' id="email" value={userinfo.email} onChange={handlechange} />
                {!userinfo.email && <div style={{ display: 'inline', color: 'red' }}>*</div>} </div>
            <div>Password: <input type='text' id="passwd" value={userinfo.passwd} onChange={handlechange} />
                {!userinfo.passwd && <div style={{ display: 'inline', color: 'red' }}>*</div>} </div>
            <div>Confirm Password: <input type='text' id="confirmPasswd" value={userinfo.confirmPasswd} onChange={handlechange} />
                {!userinfo.confirmPasswd && <div style={{ display: 'inline', color: 'red' }}>*</div>}  </div>
            <div>Mobile: <input type='text' id="mobile" value={userinfo.mobile} onChange={handlechange} />
                {!userinfo.mobile && <div style={{ display: 'inline', color: 'red' }}>*</div>} </div>
            <div>Address: <input type='text' id="address" value={userinfo.address} onChange={handlechange} />
                {!userinfo.address && <div style={{ display: 'inline', color: 'red' }}>*</div>}  </div>
            <div>BirthDate: <input type='date' id="birth" value={userinfo.birth} onChange={handlechange} />
                {!userinfo.birth && <div style={{ display: 'inline', color: 'red' }}>*</div>} </div>
            <div><button id='submit' onClick={handlesubmit}>Submit</button></div>
            <div><button id='reset' onClick={handlereset}>Reset</button></div>
        </div>
    )
}

export default RegistrationFrom