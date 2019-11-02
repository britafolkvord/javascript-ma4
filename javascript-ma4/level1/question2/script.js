async function callApi () {

    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
        const json = await response.json();
        loopThroughResults(json);
    }
    catch (error){
        console.log(error);
        
    }
    
}

callApi();

function loopThroughResults(json) {
    console.log(json);
    
    const resultsContainer = document.querySelector(".results");
    const results = json;
    console.log(results);
    
    for (let index = 0; index < results.length; index++) {
        resultsContainer.innerHTML += createCard(results[index]);
        
    }
}

function createCard(data) {
    return `
        <div class=" ${data.completed ? "True" : "False"}">
            <div>
               <h2> UserId:
                ${data.userId} </h2>
            </div>
            <div class="text">
            Id:
            ${data.id}
            </div>
            <div class="text">
                Title:
                ${data.title}
            </div>
            <div class="text">
            Completed:
            ${data.completed ? "True" : "False"}
            </div>
        </div>
    `
}

