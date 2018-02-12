var db;


function saveData(e)
{
    db = window.openDatabase("employees",  "1.0", "LearnToProgram", 200000);
    db.transaction(saveRecord, onSuccess, onError);
}
    
function saveRecord(transaction)
{
    var name= document.getElementById('name').value;
    var dbemail = document.getElementById('email').value;
    transaction.executeSql('CREATE TABLE IF NOT EXISTS employeesList (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT NOT NULL, Email TEXT NOT NULL) ');
    
    var sql= "INSERT INTO employeesList (Name,Email) VALUES ('" + name +"', '" + dbemail + "')";
    console.log(sql);
    transaction.executeSql(sql);
    transaction.executeSql("SELECT * FROM employeesList", [], getSuccess, getError);
}
function getSuccess(tx, result)
{
    var rows = result.rows;
    for(var x=0; x< rows.length; x++){
        var name = result.rows[x].Name;
        var dbemail = result.rows[x].Email;
        var out = "<li>" + name + "<br/>" + dbemail + "</li>";
        document.getElementById('members').innerHTML += out;
    }
    
    $('#members').listview('refresh');
}
function getError(e)
{
    console.log(e);
}
    
function onSuccess()
{
    console.log("Record Saved");
}
    
function onError(error)
{
    console.log(error);
}

function storeDatas(e)
		{
            var details = new Array();
            var username = document.getElementById('username').value;
            var password = document.getElementById('pwd').value;
            var surname = document.getElementById('surname').value;
            var names = document.getElementById('names').value;
            var email = document.getElementById('emails').value;
            var address = document.getElementById('address').value;
            var telephone = document.getElementById('tel').value;
            var emergnum = document.getElementById('emergnum').value;
            var emergname = document.getElementById('emergname').value;

            details = [username,password,surname,names,email,address];
            localStorage.setItem("info", JSON.stringify(details));
            /*localStorage.setItem("password", password);
            localStorage.setItem("surname", surname);
            localStorage.setItem("email", email);
            localStorage.setItem("First names", names);
            localStorage.setItem("Address", address);
            localStorage.setItem("Telephone", telephone);
            localStorage.setItem("Emergname", emergname);
            localStorage.setItem("Emergnum", emergnum);
            */
            window.location ="#pagethree";


		}
function getData(e)
    {

        


    }

function storeHabits(e)
        {

            var sleep = document.getElementById('sleep').value;
            var nutrition = document.getElementById('nutrition').value;
            var stress = document.getElementById('stress').value;
            var water = document.getElementById('water').value;
            var symptoms = document.getElementById('symptoms').value;
            var exercise = document.getElementById('exercise').value;
            var todaysdate = document.getElementById('date').value;

            var mood = [sleep,nutrition,stress,water,symptoms,exercise];




            localStorage.setItem("sleep",sleep);
            localStorage.setItem("todaysdate", JSON.stringify(mood));


        }