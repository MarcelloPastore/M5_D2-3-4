/* eslint-disable default-case */
import React, {useState, useEffect} from 'react'

const FormComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({username:"", password:"",});


    



    const validateForm = () => {
        let NewErrors = {};
        if (!username) {
            NewErrors.username = "Username is required";
        }

        if (!password) {
            NewErrors.password = "Password is required";
        }

        setErrors(NewErrors);
    };

    const isFormInvalid = () => {
        return !username.trim() || !password.trim();
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        switch(name) {
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;     
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormInvalid) {
            validateForm();
            return;
        }

        console.log('Submitted');
    };

    useEffect(() => {
      validateForm();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username, password])
    


  return (
    <form className='d-flex flex-column align-items-center justify-content-center'>
        <input type="text" name="username" placeholder='username' onChange={handleInputChange} />
        {errors.username && <p>{errors.username}</p>}
        <input type="password" name="password" placeholder='password' onChange={handleInputChange} />
        {errors.password && <p>{errors.password}</p>}
        <button onClick={handleSubmit}>submit</button>
    </form>
    )
}

export default FormComponent