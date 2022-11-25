import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  registrar() {
    console.log(this.form);
    const url = environment.apiURL + '/api/auth/register';
    const body = {
      username: this.form.value.usuario,
      email: this.form.value.email,
      password: this.form.value.password,
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
        this.error(e);
        this.form.reset();
      });
  }

  error(errormessage:any) {
    console.log(errormessage.error.message);
    this._snackBar.open(errormessage.error.message, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  ToLogin(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 500);
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
