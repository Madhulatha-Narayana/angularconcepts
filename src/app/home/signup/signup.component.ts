import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicService } from 'src/app/core/services/public/public.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private publicService: PublicService) {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, this.publicService.passwordValidator()]],
      cPassword: ['', Validators.required]
    }, {validator: this.publicService.mismatchPassword('password', 'cPassword')}
    );
   }

  ngOnInit(): void {
  }

  signup(): void {
    this.submitted = true;
    if (this.signupForm.valid) {

    }
  }

  login(): void {
    this.router.navigate(['/login']);
  }

}
