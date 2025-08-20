import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  id?: number;
  saving = false;
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder,
    private api: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      this.api.getOne(this.id).subscribe(s => this.form.patchValue(s));
    }
  }

  submit() {
    if (this.form.invalid) return;
    this.saving = true;
    const dto = this.form.value as any;

    const req$ = this.id
      ? this.api.update(this.id, dto)
      : this.api.create(dto);

    req$.subscribe({
      next: () => { this.saving = false; this.router.navigate(['/']); },
      error: () => { this.saving = false; alert('Save failed'); }
    });
  }

  cancel() { this.router.navigate(['/']); }
}
