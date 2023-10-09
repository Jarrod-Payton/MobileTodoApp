import { AsyncStorage } from "react-native";

class StorageService {
  LOCAL_STORAGE_TODO_KEY = "JARRODPSTODOAPP.TODOS";
  LOCAL_STORAGE_LIST_KEY = "JARRODPSTODOAPP.LISTS";
}

export const storageService = new StorageService();
