
document.querySelector("#button-1").addEventListener("click",getCustomer);
document.querySelector("#button-2").addEventListener("click",getCustomers);
document.querySelector("#button-2").addEventListener("click",getApiData);


function getCustomer(){

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function(){

    if(this.status === 200){
      const customer = JSON.parse(this.response);

      const output = `
       <ul>
        <li>${customer.id}</li>
        <li>${customer.name}</li>
        <li>${customer.compnay}</li>
        <li>${customer.phone}</li>
       </ul>
      
      `;

      document.querySelector(".customer").innerHTML = output;
    }

  }

  xhr.send();

}



function getCustomers(){
  
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function(){

    if(this.status === 200){
      const customers = JSON.parse(this.response)

      let output = "";

      customers.forEach(function(customer){
        
        output +=  `
        <ul>
         <li>${customer.id}</li>
         <li>${customer.name}</li>
         <li>${customer.compnay}</li>
         <li>${customer.phone}</li>
        </ul>
       `
      })

      document.querySelector(".customers").innerHTML = output;
      
    }

  }

  xhr.send();


}


function getApiData(){
  
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function(){

    if(this.status === 200){
      const customers = JSON.parse(this.response)

      let output = "";

      customers.forEach(function(customer){
        
        output +=  `
        <ul>
         <li>${customer.id}</li>
         <li>${customer.name}</li>
         <li>${customer.compnay}</li>
         <li>${customer.phone}</li>
        </ul>
       `
      })

      document.querySelector(".customers").innerHTML = output;
      
    }

  }

  xhr.send();


}

