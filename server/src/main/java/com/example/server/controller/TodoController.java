package com.example.server.controller;

import com.example.server.domain.TodoItem;
import com.example.server.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/todoItems")
public class TodoController {

    @Autowired
    private TodoService todoService;
    @GetMapping
    public ResponseEntity<?> fetchAllTodoItems () {
        List<TodoItem> todoItems = todoService.fetchAllTodoItems();

        return ResponseEntity.ok(todoItems);
    }

    @PutMapping("/todoItems/{id}")
    public ResponseEntity<?> updateTodoItem (@PathVariable Integer id, @RequestBody TodoItem todoItem) {
        List<TodoItem> todoItems = todoService.fetchAllTodoItems();

        TodoItem updatedTodoItem = todoService.updateTodoItem(id, todoItem);
        return ResponseEntity.ok(updatedTodoItem);
    }
}
