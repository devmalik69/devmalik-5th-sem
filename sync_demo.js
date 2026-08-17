function register()
{waitfordelay(2000);
    console.log("registration here");
}function login()
{waitfordelay(600);
    console.log("logging in");
}function getData()
{waitfordelay(1000);
    console.log("fetch data from DB");
}function displayData()

{waitfordelay(1400);
    console.log("Displaying data");
}function waitfordelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt){

    }
}
register();
login();
getData();
displayData();