import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
loading = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password : ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
ingresar(){
  console.log(this.form)
const usuario = this.form.value.usuario;
const password = this.form.value.password;


//sustituyendo el backend
if(usuario == 'fina' && password == '123'){
// Accedemos
this.fakeLoading();
}else{
// Error Message  
this.error();
this.form.reset();
}
}

error(){
    this._snackBar.open('Usuario o contraseña incorrectos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
}

fakeLoading(){
  this.loading = true;
  setTimeout(() => {
    this.router.navigate(['dashboard'])

  }, 1500 );
}
}
