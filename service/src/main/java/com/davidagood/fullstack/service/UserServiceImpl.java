package com.davidagood.fullstack.service;

import com.davidagood.fullstack.User;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
class UserServiceImpl implements UserService {

    private final List<User> users = List.of(new User("1", "a@b.com"), new User("2", "b@c.com"));

    @Override
    public List<User> getUsers() {
        return users;
    }

}
