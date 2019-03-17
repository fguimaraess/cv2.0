import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import * as emailjs from 'emailjs-com';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;
  contactForm: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: ['', Validators.required],
      message: ['', Validators.required],
      name: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  submit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    var data = this.contactForm.value;
  
    emailjs.send('sendgrid', 'cv_felipe', data, 'user_vcvwQB0ubBs6nBkeKIVtG')
      .then((response) => {
        alert("E-mail enviado com sucesso!");
        this.router.navigateByUrl('/');
        this.contactForm.reset();
      }, (err) => {
        this.loading = false;
        alert("Erro ao enviar o e-mail! Tente novamente.");
      });
  }

}
