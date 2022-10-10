import React,{ Component } from 'react'
import './App.css';


class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:'',phoneNo:'' ,lastname:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, age, address, phoneNo, lastname} = this.state
	event.preventDefault()
	alert(`
	____ข้อมูล ของตุณ____\n
	ชื่อ : ${name}
    นามสกุล : ${lastname}
	อายุ : ${age}
	ที่อยู่ : ${address}
	เบอร์โทรศัพท์ : ${phoneNo}
    E-mail : ${email}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
        <div>
		   <img src="https://c.tenor.com/mugZdxy-l5EAAAAM/welcome-gif.gif" width="300" height="100"/>
		</div>
		<div>
		<label htmlFor='name'>ชื่อ </label>
		<input
			name='name'
			placeholder='ชื่อ'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
        <div>
		<label htmlFor='lastname'>นามสกุล </label>
		<input
			name='lastname'
			placeholder='นามสกุล'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>อายุ </label>
		<input
			name='age'
			placeholder='อายุ'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>ที่อยู่ </label>
		<input
			name='address'
			placeholder='ที่อยู่'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>เบอร์โทรศัพท์ </label>
		<input
			name='phoneNo'
			placeholder='เบอร์โทรศัพท์'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
        <div>
		<label htmlFor='email'>E-mail </label>
		<input
			name='email'
			placeholder='E-mail'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<button>เสร็จสิ้น</button>
		</div>
	</form>
	)
}
}

export default Form
