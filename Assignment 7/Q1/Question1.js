
document.getElementById("regForm").addEventListener("submit", function (e) 
{
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const address = document.getElementById("address").value.trim();
    const gender = document.querySelector("input[name='gender']:checked");
    const course = document.getElementById("course").value;
    const photo = document.getElementById("uploadphoto").value;

    let valid = true;
    let msg = "";


    if (!/^[A-Za-z]{1,10}$/.test(name)) 
    {
        valid = false;
        msg += "Name must contain only alphabets (max 10 chars)\n";
    }

    
    if (!birthdate) 
    {
        valid = false;
        msg += "Birthdate is required\n";
    } 
    else 
    {
        const birth = new Date(birthdate);
        const today = new Date();
        const age = today.getFullYear() - birth.getFullYear();
        if (birth >= today || age < 18) 
        {
            valid = false;
            msg += "Must be a past date & at least 18 years old\n";
        }
    }

    
    if (!/^.*#.*\d.*$/.test(password) || password.length <= 8) 
    {
        valid = false;
        msg += "Password must be >8 chars, include # and a digit\n";
    }

    if (!email || !address || !gender || !course || !photo) 
    {
        valid = false;
        msg += "All fields are mandatory\n";
    }

    if (!valid) 
    {
        alert(msg);
        return;
    }

    sessionStorage.setItem(
        "registrationData",
        JSON.stringify({ name, birthdate, email, password, address, gender: gender.value, course })
    );

    alert("Registration Successful! Data saved in sessionStorage.");
});



$(document).ready(function () 
{
    $("#regForm").on("submit", function (e) {
        console.log("Form validated successfully using jQuery");
    });
});
