import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    const url = environment.apiURL + '/api/auth/login';
    console.log(url)
    const body = {
      username: usuario,
      password: password,
    };
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    this.http
      .post(url, body)
      .toPromise()
      .then((data: any) => {
        this.fakeLoading();
      })
      .catch((e) => {
        this.error();
        this.form.reset();
      });
  }

  error() {
    this._snackBar.open('Usuario o contraseña incorrectos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  ToRegistro(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['registro']);
    }, 500);
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
