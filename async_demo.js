function register()
{setTimeout(()=>{
    console.log("registration here");
}, 2000)
}
function login()
{setTimeout(()=>{
    console.log("logging in");
}, 600)
}
function getData()
{setTimeout(()=>{
    console.log("fetch data from DB");
}, 1000)
} 
function displayData()
{setTimeout(()=>{
    console.log("Displaying data");
}, 1400)
} 
register();
login();
getData();
displayData();