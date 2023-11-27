// add task to the list of tasks
const btnAddTask = document.querySelector('#addTask'),
  ul_task_list = document.querySelector('#ul_task_list');

btnAddTask.addEventListener('click', function (e) {
  e.preventDefault();
  const task = document.querySelector('#task').value;
  if (task) {
    ul_task_list.innerHTML += (`
      <label
        <li><input type="checkbox" >${task}</li>
        <button type="button" class="destroy" onclick="destroy()"></button>
      </label>
    `)
    document.getElementById('items').innerText = ul_task_list.children.length;
    document.querySelector('#task').value = '';
  }
});

// select all items
const showAll = document.querySelector('#showAll');

showAll.addEventListener('click', (event) => {
  const allItems = Array.from(ul_task_list.querySelectorAll('input[type="checkbox"]'));
  event.preventDefault();
  allItems.forEach(item => {
    item.parentNode.classList.remove('hide');
  });
  document.getElementById('items').innerText = allItems.length;
})

// Select only active tasks
const active = document.querySelector('#active');

active.addEventListener('click', (e) => {
  e.preventDefault();
  let count = 0;
  const allItems = Array.from(ul_task_list.querySelectorAll('input[type="checkbox"]'));
  allItems.forEach(item => {
    if (item.checked) {
      item.parentNode.classList.add('hide');
      item.parentNode.classList.remove('show');
    } else {
      count++;
      item.parentNode.classList.add('show');
      item.parentNode.classList.remove('hide');
    }
  });
  document.getElementById('items').innerText = count;
})

// Select only completed tasks
const completed = document.querySelector('#completed');

completed.addEventListener('click', (e) => {
  e.preventDefault();
  let count = 0
  const allItems = Array.from(ul_task_list.querySelectorAll('input[type="checkbox"]'));
  allItems.forEach(item => {
    if (item.checked) {
      count++;
      item.parentNode.classList.add('show');
      item.parentNode.classList.remove('hide');
    } else {
      item.parentNode.classList.add('hide');
      item.parentNode.classList.remove('show');
    }
  });
  document.getElementById('items').innerText = count;
});

// Clear completed tasks
const clearCompleted = document.querySelector('#clearCompleted');

clearCompleted.addEventListener('click', (e) => {
  e.preventDefault();
  let count = 0;
  const allItems = Array.from(ul_task_list.querySelectorAll('input[type="checkbox"]'));
  allItems.forEach(item => {
    if (item.checked) {
      item.parentNode.remove();
    }
    item.checked === true ? count++ : count += 0;
  });
  document.getElementById('items').innerText = allItems.length - count;
});

// remove single item
function destroy() {
  const allItems = Array.from(ul_task_list.querySelectorAll('input[type="checkbox"]'));
  document.activeElement.parentNode.remove();
  document.getElementById('items').innerText = allItems.length - 1;
};
