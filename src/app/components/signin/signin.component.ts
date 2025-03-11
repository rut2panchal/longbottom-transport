import { ApiService } from './../../api.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../app.component';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  @Output() close = new EventEmitter<void>();
  signIn: FormGroup;
  userData: User = {
    login: '',
    password: ''
  };

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.signIn = fb.group({
      login: '',
      password: ''
    })
  }

  closePopup() {
    this.close.emit();
  }

  onSubmit() {
    if (this.signIn.valid) {
      this.userData = this.signIn.value;

      this.apiService.signIn(this.userData).subscribe((res: any) => {
        console.log(res);
        var access_token: any = res.access_token;

        var expires = (new Date(Date.now() + 7 * 60 * 1000)).toUTCString();
        document.cookie = `"ACCESS_TOKEN=${access_token}; expires=${expires};path=/;"`
      });
    }

  }
}
