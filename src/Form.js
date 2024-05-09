
import {useState} from  "react";

export default function Form(){

	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [repeatPassword,setRepeatPassword] = useState("");
	const [firstName,setFirstName] = useState("");
	const [lastName,setLastName] = useState("");
	const [showPassword,setShowPassword] = useState(false);
	const [showRepeatPassword,setShowRepeatPassword] = useState(false);


	const handleChange = (e)=>{
		const {name,value} = e.target;
		switch(name){
			case "floating_email":
			setEmail(value);
			break;
			case "floating_password":
			setPassword(value);
			break;
			case "repeat_password":
			setRepeatPassword(value);
			break;
			case "floating_first_name":
			setFirstName(value);
			break;
			case "floating_last_name":
			setLastName(value);
			break;
			default:
			break;
		}
	}
	
	const handleSubmit = ()=>{
		if(email!=="" && password!=="" && repeatPassword!=="" && firstName!=="" && lastName!==""){
			if(password===repeatPassword){
				alert("Email: "+email+"\nPassword: "+password+"\nFirst Name: "+firstName+"\nLast Name: "+lastName)
				alert("Form submitted successfully");
			}
			else{
				alert("Password and Confirm Password should be same");
			}
		}
		else{
			alert("Please enter the details;")
		}

	}
	
	return(
	<>
	<div className="h-[100vh] py-20 bg-[#FA7070]">
	<form className="max-w-lg mx-auto my-20 bg-[#FEFDED] border-[#A1C398] border-2 rounded-3xl px-5 py-4" onSubmit={handleSubmit}>
	<h1 className="text-4xl text-[#FFAF61] underline decoration-wavy font-semibold font-mono text-center">React Form</h1>
	  <div className="relative z-0 w-full mb-5 group my-5">
	      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={(e)=>{handleChange(e)}} value={email}/>
	      <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
	  </div>
	  <div className="relative z-0 w-full mb-5 group my-5">
		<img src={showPassword?"https://img.icons8.com/material-outlined/24/000000/visible--v1.png":"https://img.icons8.com/material-outlined/24/000000/invisible.png"} className="absolute right-3 top-3 cursor-pointer" onClick={()=>{setShowPassword(!showPassword)}} alt="Eye-Icon"/>
	      <input type={showPassword?"text":"password"} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={(e)=>{handleChange(e)}} value={password}/>
	      <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
	  </div>
	  <div className="relative z-0 w-full mb-5 group my-5">
		<img src={showRepeatPassword?"https://img.icons8.com/material-outlined/24/000000/visible--v1.png":"https://img.icons8.com/material-outlined/24/000000/invisible.png"} className="absolute right-3 top-3 cursor-pointer" onClick={()=>{setShowRepeatPassword(!showRepeatPassword)}} alt="Eye-Icon"/>
	      <input type={showRepeatPassword?"text":"password"} name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={(e)=>{handleChange(e)}} value={repeatPassword}/>
	      <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
	  </div>
	  <div className="grid md:grid-cols-2 md:gap-6 my-5">
	    <div className="relative z-0 w-full mb-5 group">
	        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={(e)=>{handleChange(e)}} value={firstName}/>
	        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
	    </div>
	    <div className="relative z-0 w-full mb-5 group">
	        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={(e)=>{handleChange(e)}} value={lastName}/>
	        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
	    </div>
	  </div>
	  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
	</form>
	</div>
	</>
)

}