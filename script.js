//your JS code here. If required.
const fetchButton = document.getElementById('fetch-button');
const clickCount = document.getElementById('click-count');
const resultsDiv = document.getElementById('results');

let clickCounter = 0;
let apiCalls = 0;

fetchButton.addEventListener('click', handleClick);

function handleClick() {
  clickCounter++;
  clickCount.textContent = clickCounter;

  if (clickCounter > 5) {
    alert("Too many API calls. Please wait and try again.");
    return;
  }

  if (apiCalls < 5) {
    apiCalls++;
    fetchData();
  } else {
    setTimeout(() => {
      apiCalls = 0;
      fetchData();
    }, 10000); // Wait for 10 seconds before making more API calls
  }
}

function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
      const output = `ID: ${data.id}, Title: ${data.title}, Completed: ${data.completed}`;
      resultsDiv.innerHTML += `<p>${output}</p>`;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Reset click count after 10 seconds
setInterval(() => {
  clickCounter = 0;
  clickCount.textContent = clickCounter;
}, 10000);
