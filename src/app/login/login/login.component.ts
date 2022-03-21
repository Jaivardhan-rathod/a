import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
local:any
constructor(private fb:FormBuilder,private http:HttpClient, private router:Router) { }



ngOnInit(): void {
this.loginForm=this.fb.group({
email:[''],
password:['']
})

}
logIn(){
this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
const username=res.find((a:any)=>{

  return a.email ===this.loginForm.value.email && a.password === this.loginForm.value.password

})
if(username){
alert("Loged in Successfully!!")
this.loginForm.reset();
this.router.navigate(['dash']);
}
else{
alert("User Not Found")
}
},err=>{
alert("Something went Wrong")
})
localStorage.setItem("user",JSON.stringify(this.loginForm.value))
this.local=localStorage.getItem("user")
console.log(this.local)
}

}
