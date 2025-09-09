package com.paj.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.paj.demo.domain.User;

public interface UserRepository extends JpaRepository<User, String> {
    User findByUsernameAndPassword(String username, String password);
}