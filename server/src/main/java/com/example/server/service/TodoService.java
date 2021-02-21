package com.example.server.service;

import com.example.server.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepo;
    public List<TodoItem> fetchAllTodoItems () {
        return todoRepo.fetchAllTodoItems();
    }
}
