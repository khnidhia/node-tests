var db= require('./db')

module.exports.handleSignup=(email,password)=>{
	//check if the email already exists
//save the uer to the database
//send the welcome email

	db.saveUser({
		email,
		passsword
	})
}