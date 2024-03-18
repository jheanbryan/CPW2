const btnCalculate = document.querySelector('.btn-calculate');
const inputsList = document.querySelectorAll('.client-type input[type=radio]');

function calculateInterest() {
     const value = document.querySelector('#value'); //valor
     const interestRate = document.querySelector('#interestRate')  //taxa juros
     const clientType = document.querySelector('#client')

}

function returnClientType(){
     inputsList.forEach((itemList) => {
          if (itemList.checked) {
               return itemList.id;
          }
     })
}

btnCalculate.addEventListener('click', () => {

     console.log(returnClientType())
})