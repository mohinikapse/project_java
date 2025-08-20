package com.example.students.controller;

import com.example.students.model.Student;
import com.example.students.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:4200") // Angular dev server
public class StudentController {
  private final StudentService service;
  public StudentController(StudentService service) { this.service = service; }

  @GetMapping public List<Student> all() { return service.findAll(); }
  @PostMapping public Student create(@Valid @RequestBody Student s) { return service.create(s); }
  @PutMapping("/{id}") public Student update(@PathVariable Long id, @Valid @RequestBody Student s) { return service.update(id, s); }
  @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { service.delete(id); }
}
