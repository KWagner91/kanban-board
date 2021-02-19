const tasks = [
    { "name": "Water Flowers", "priority": 1 },
    { "name": "Buy Groceries", "priority": 2 },
    { "name": "Work on Projects", "priority": 3 },
  ];

  for (let key in tasks) {
    if (tasks.hasOwnProperty(key)) {
        console.log(tasks[key].name);
        console.log(tasks[key].priority);

        // Add dummy data to "New" Board
        let priority = checkPriority(tasks[key].priority);
        addTaskToBoard(tasks[key].name, priority);
    }
}

function addTaskToBoard(text, prio) {
    let newBoard = document.getElementById("new");
    let div = document.createElement("div")
    div.classList.add("card", "mb-3", prio);

    let divCardbody = document.createElement("div")
    divCardbody.classList.add("card-body", "text-dark");

    let p = document.createElement("p")
    let t = document.createTextNode(text);
    p.appendChild(t);
    divCardbody.appendChild(p);
    div.appendChild(divCardbody);
    newBoard.appendChild(div);
}

function checkPriority(number) {
    // 1 = low, 2 = medium, 3 = high
    className = "";
    switch(number) {
        case 1:
            className = "border-primary";
            break;
        case 2:
            className = "border-warning"
            break;
        case 3:
            className = "border-danger"
            break;
        default:
            console.log('error!');
    }
    return className;
}