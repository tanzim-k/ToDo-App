package com.example.server.service;

import com.example.server.domain.TodoItem;
import com.example.server.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepo;
    public List<TodoItem> fetchAllTodoItems () {
        return todoRepo.fetchAllTodoItems();
    }

    public TodoItem updateTodoItem(Integer id, TodoItem todoItem) {
        Optional<TodoItem> todoOpt = todoRepo.fetchAllTodoItems()
                .stream()
                .filter(item -> item.getId().equals(id))
                .findAny();

        if (todoOpt.isPresent()) {
            TodoItem item = todoOpt.get();
            item.setIsDone(todoItem.getIsDone());
            item.setTask(todoItem.getTask());
            return item;
        }
        return null;
    }

    public TodoItem createTodoItem() {
        TodoItem todoItem = new TodoItem();

        todoItem.setIsDone(false);

        todoItem = todoRepo.save(todoItem);
        todoItem.setTask("Task #" + todoItem.getId());
        return todoItem;
    }

    public void deleteTodoItem(Integer id) {
        todoRepo.delete(id);
    }
}
