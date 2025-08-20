import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  loading = false;
  students: Student[] = [];
  error = '';

  constructor(private api: StudentService, private router: Router) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.api.all().subscribe({
      next: (data) => { this.students = data; this.loading = false; },
      error: (e) => { this.error = 'Failed to load'; this.loading = false; }
    });
  }

  onDelete(id?: number) {
    if (!id) return;
    if (!confirm('Delete this student?')) return;
    this.api.delete(id).subscribe({ next: () => this.load() });
  }

  toCreate() { this.router.navigate(['/new']); }
  toEdit(s: Student) { if (s.id) this.router.navigate(['/edit', s.id]); }
}
