const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const container = document.querySelector (".container");
const loading = document.querySelector(".load");
const loadingCicle = document.querySelector (".loading-circle");



setTimeout(function(){
    loading.innerHTML = "";
}, 2000)



async function games(){
    try{
        const response = await fetch (url);
        const results = await response.json();
        const data = results.results;
        console.log(results);
        console.log(data);

        container.innerHTML = "Loading...";

        setTimeout(function(){
            container.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
            console.log(data[i].name);
            console.log(data[i].tags.length);
            console.log(data[i].rating);


            if (i === 8) {
                break;
            }   
            container.innerHTML += `<div class="list">
                                        <div class="title"> Name: </div>
                                        <div> ${data[i].name} </div>

                                        <div class="title"> Rating: </div>
                                        <div> ${data[i].rating}</div>

                                        <div class="title"> Tags: </div>
                                        <div> ${data[i].tags.length}</div>
                                    </div>`;
    }
        }, 2500)


        
    
    } catch (error) {
        console.log("Oh no, something went wrong");
        container.innerHTML = "Oh no, something went wrong";

    }

}

games();

setTimeout (function(games) {


}, 2000)