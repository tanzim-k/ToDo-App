package com.example.server.repository;

import com.example.server.domain.TodoItem;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class TodoRepository {

    private List<TodoItem> todoItems = new ArrayList<>();
    public List<TodoItem> fetchAllTodoItems () {
        return todoItems;
    }
}
