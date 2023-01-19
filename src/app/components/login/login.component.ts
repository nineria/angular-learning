import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.authForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.authForm.valid) console.log('onSubmit: ', this.authForm.value);
    this.authService
      .loginAuth(
        this.authForm.get('username')?.value,
        this.authForm.get('password')?.value
      )
      .subscribe((res) => {
        console.log('Complete');
        this.router.navigate(['/books']);
      });
    // this.router.navigate(['/books']);
  }
}
