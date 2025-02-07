

{/* <li class="collection-item">
                List Item 5
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
</li> */}

// Create element 
const li = document.createElement("li");

// Add Class
li.className = "collection-item";

// Add Id
li.id = "item-5";

// Create a text for li
li.innerText = "List Item 6";

// Create a link element
const link = document.createElement("a");

// Add class to link
link.className = "delete-item secondary-content";

// Add a inner HTML
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append link to li
li.appendChild(link);

const ul = document.querySelector(".collection");

// Append li to ul
ul.appendChild(li);

