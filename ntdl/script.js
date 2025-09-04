let taskList = [
  {
    task: "Grocery",
    hour: 100,
    type: "good",
  },

  {
    task: "Sleeping",
    hour: 5,
    type: "bad",
  },
];

const displayList = () => {
  // get the good list
  let goodTaskList = taskList.filter((item) => item.type == "good");

  let goodTbody = document.getElementById("goodList");
  let trElement = "";

  let goodIndex = 0;

  for (item of goodTaskList) {
    goodIndex += 1;
    trElement += `<tr>
                    <th scope="row">${goodIndex}</th>
                    <td>${item.task}</td>
                    <td>${item.hour} Hr</td>
                    <td>
                        <button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                        <button class="btn btn-success"><i class="fa-solid fa-arrow-right"></i></button>
                    </td>
                </tr>`;
  }

  goodTbody.innerHTML = trElement;

  // get the bad list
  let badTaskList = taskList.filter((item) => item.type == "bad");

  let badTbody = document.getElementById("badList");
  let badtrElement = "";

  let badIndex = 0;

  for (item of badTaskList) {
    badIndex += 1;
    badtrElement += `<tr>
                    <th scope="row">${badIndex}</th>
                    <td>${item.task}</td>
                    <td>${item.hour} Hr</td>
                    <td>
                    <button class="btn btn-warning"><i class="fa-solid fa-arrow-left"></i></button>
                        <button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                        
                    </td>
                </tr>`;
  }

  badTbody.innerHTML = badtrElement;

  //   calculate total hours
  let calculatedTotalHour = taskList.reduce((acc, item) => {
    return acc + parseFloat(item.hour);
  }, 0);

  let totalHourElement = document.getElementById("totalHour");
  totalHourElement.innerText = calculatedTotalHour;

  // bad hour
let calculatedbadTotalHour = taskList.reduce((acc, item) => {
    return acc + parseFloat(item.hour);
  }, 0);

  let badtotalHourElement = document.getElementById("badTotalHour");
  badtotalHourElement.innerText = calculatedbadTotalHour;

  
  // good hour
  let calculatedgoodTotalHour = taskList.reduce((acc, item) => {
    return acc + parseFloat(item.hour);
  }, 0);

  let goodtotalHourElement = document.getElementById("goodTotalHour");
  goodtotalHourElement.innerText = calculatedgoodTotalHour;
};

// render list
displayList();

// add task function
const addTask = () => {
  let taskElement = document.getElementById("task");
  let hourElement = document.getElementById("hour");
  let typeElement = document.getElementById("type");

  let taskObject = {
    task: taskElement.value,
    hour: hourElement.value,
    type: typeElement.value,
  };

  taskList.push(taskObject);
  displayList();
};
