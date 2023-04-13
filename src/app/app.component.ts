import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public inicializaFormulario(){
    this.form = this.formBuilder.group({
      name: '',
    });

  }

  ngOnInit(): void {
    this.inicializaFormulario();
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    })
  }

  onSubmit(){
    console.log(this.form.controls['name'].value);
  }
}
