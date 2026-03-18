package com.pranat.usermanagement.service;

import com.pranat.usermanagement.model.User;
import com.pranat.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User saveUser(User user) {
        return repo.save(user);
    }

    public List<User> getAllUsers() {
        return repo.findAll();
    }

    public void deleteUser(Long id) {
        repo.deleteById(id);
    }

    public User updateUser(Long id, User user) {
        user.setId(id);
        return repo.save(user);
    }
}
