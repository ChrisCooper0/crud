let app = new (function () {
  this.el = document.getElementById("tasks");

  this.tasks = [];

  this.fetchAll = () => {
    let data = "";

    if (this.tasks.length > 0) {
      for (let i = 0; i < this.tasks.length; i++) {
        data += "<tr>";
        data += "<td>" + (i + 1) + ". " + this.tasks[i] + "</td>";
        data +=
          '<td><button onclick="app.edit(' +
          i +
          ')"  class="button">Edit</button></td>';
        data +=
          '<td><button onclick="app.delete(' +
          i +
          ')"  class="button">Delete</button></td>';
        data += "</tr>";
      }
    }

    this.count(this.tasks.length);
    return (this.el.innerHTML = data);
  };

  this.add = () => {
    el = document.getElementById("add-todo");
    // Get the value
    let task = el.value;
    if (task) {
      // Add the new value
      this.tasks.push(task.trim());
      // Reset input value
      el.value = "";
      // Display new list
      this.fetchAll();
    }
  };

  this.edit = (item) => {
    let el = document.getElementById("edit-todo");
    // Display value in the field
    this.el.value = this.tasks[item];
    // Display fields
    document.getElementById("edit-box").style.display = "block";
    self = this;

    document.getElementById("save-edit").onsubmit = () => {
      // Get value
      let task = el.value;
      if (task) {
        // Edit Value
        self.tasks.splice(item, 1, task.trim());
        // Display new list
        self.fetchAll();
        // Hide fields
        closeInput();
      }
    };
  };
  this.delete = (item) => {
    // Delete the current row
    this.tasks.splice(item, 1);
    // Display the new list
    this.fetchAll();
  };

  this.count = (data) => {
    let el = document.getElementById("counter");
    let name = "Tasks";

    if (data) {
      if (data == 1) {
        name = "Task";
      }
      el.innerHTML = data + " " + name;
    } else {
      el.innerHTML = "No " + name + " Listed";
    }
  };
})();

app.fetchAll();

let closeInput = () => {
  document.getElementById("edit-box").style.display = "none";
};
