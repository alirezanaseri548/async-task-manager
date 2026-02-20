import { APIClient } from '../api/apiClient.js';
import { Task } from '../models/Task.js';

export class TaskService {
  static async fetchTasks(signal) {
    const data = await APIClient.request('/todos?_limit=3', { signal });
    return data.map(item => new Task(item));
  }
}
