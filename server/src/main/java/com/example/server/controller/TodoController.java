package com.example.server.controller;

import com.example.server.domain.TodoItem;
import com.example.server.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/todoItems/")
    public ResponseEntity<?> fetchAllTodoItems () {
        List<TodoItem> todoItems = todoService.fetchAllTodoItems();

        return ResponseEntity.ok(todoItems);
    }

    @PostMapping("/todoItems")
    public ResponseEntity<?> createNewItem () {
        TodoItem todoItem = todoService.createTodoItem();

        return ResponseEntity.ok(todoItem);

    }

    @PutMapping("/todoItems/{id}")
    public ResponseEntity<?> updateTodoItem (@PathVariable Integer id, @RequestBody TodoItem todoItem) {

        TodoItem updatedTodoItem = todoService.updateTodoItem(id, todoItem);
        return ResponseEntity.ok(updatedTodoItem);
    }

    @DeleteMapping("/todoItems/{id}")
    public ResponseEntity<?> deleteTodoItem (@PathVariable Integer id) {

        todoService.deleteTodoItem(id);
        return ResponseEntity.ok("deleted task");
    }

}
