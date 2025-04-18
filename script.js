'use strict';
const inputName = document.getElementById('name');
const inputDate = document.getElementById('date');
const inputAmount = document.getElementById('amount');
const btn = document.querySelector('.btn');
const table = document.querySelector('.table');
const deleteTable = document.querySelector('.delete');

btn.addEventListener('click', () => {
  if (inputName.value === '' || inputAmount.value === '' || inputDate === '') {
    alert('Input the right data');
  } else {
    const tr = document.createElement('tr');
    tr.className = 'tr-2';
    table.appendChild(tr);
    tr.innerHTML += `
            <td>${inputName.value}</td>
            <td>${inputDate.value}</td>
            <td>$${inputAmount.value}</td>
            <td><button class="delete-btn">&#120</button></td>
  `;

    inputName.value = '';
    inputDate.value = '';
    inputAmount.value = '';

    tr.addEventListener('click', e => {
      tr.classList.toggle('delete');
    });

    storeExpense();
  }
});

function storeExpense() {
  localStorage.setItem('data', table.innerHTML);
}
function showExpense() {
  table.innerHTML = localStorage.getItem('data');
}
showExpense();
