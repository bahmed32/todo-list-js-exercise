// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function() {

      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      task.complete = true;
    }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const task = [task1, task2];

task1.logTaskState();
task1.markCompleted();
task1.logTaskState();

task2.title
task2.markCompleted();
task2.logTaskState();

// for now, let's just make sure we see our tasks
// console.log(task);

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1
// newTask("BrushTeeth");


// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

// logTaskState(task1);
// completeTask(task1);
// logTaskState(task1);


// logTaskState(2);
// completeTask(2);
// logTaskState(2);
