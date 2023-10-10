import { AsyncStorage } from "react-native";

class StorageService {
  LOCAL_STORAGE_TODO_KEY = "JARRODPSTODOAPP.TODOS";
  LOCAL_STORAGE_LIST_KEY = "JARRODPSTODOAPP.LISTS";

  async getMyTodoLists() {
    console.log("Get All My Todos");
  }

  async getTodoListById(listId) {
    console.log("Get Todo List from Storage");
  }

  async updateTodoListById(listId, updatedList) {
    console.log("Updated List");
  }

  async deleteTodoListById(listId) {
    console.log("List Delete");
  }

  async getTodoById(todoId) {
    console.log("Get Todo By Id");
  }

  async createTodo(todo, listId) {
    console.log("Create Todo");
  }

  async updateTodoById(todoId, updatedTodo) {
    console.log("update todo");
  }

  async deleteTodo(todoId) {
    console.log("delete Todo");
  }
}

export const storageService = new StorageService();
