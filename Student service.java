package com.example.students.service;

import com.example.students.model.Student;
import com.example.students.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public class StudentService {
  private final StudentRepository repo;
  public StudentService(StudentRepository repo) { this.repo = repo; }

  public List<Student> findAll() { return repo.findAll(); }
  public Student create(Student s) { return repo.save(s); }
  public Student update(Long id, Student s) {
    Student db = repo.findById(id).orElseThrow();
    db.setName(s.getName());
    db.setEmail(s.getEmail());
    return db;
  }
  public void delete(Long id) { repo.deleteById(id); }
}
