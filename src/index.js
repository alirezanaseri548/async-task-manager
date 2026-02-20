import { TaskService } from './services/TaskService.js';
import { User } from './models/User.js';

const controller = new AbortController();

async function startApp() {
  try {
    const tasks = await TaskService.fetchTasks(controller.signal);
    console.log('?? Tasks:', tasks);

    const user1 = new User('Ari', 3);
    user1.increment();
    console.log(user1.name, user1.score);

    const user2 = new User('Jess', 5);
    console.log(user2.name, user2.score);

    // Uncomment to see private static limiter in action
    // const user3 = new User('Tam', 9);

    console.log('Total users:', User.totalUsers);

  } catch (err) {
    console.error(err.message);
  }
}

startApp();
