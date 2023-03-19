// Ajax Request for Insert Data

document.getElementById("btnadd").addEventListener("click",add_student);


function add_student(e) {
    e.preventDefault();
    console.log("Add Button Clicked");
    let nm = document.getElementById("nameid").value;
    let em = document.getElementById("emailid").value;
    let pm = document.getElementById("passwordid").value;
    // console.log(nm);
    // console.log(em);
    // console.log(pm);
    

    // creating Xhr object
    const xhr = new XMLHttpRequest();

    //initialize
    xhr.open("POST", "insert.php", true);

    //Set Request Header
     xhr.setRequestHeader("Content-Type", "application/json");

    //Hand Response 
    xhr.onload = () => {
        if (xhr.status === 200) {
          // response handling code
          console.log(xhr.responseText); 
        } else {
            console.log("Problem Occured");
        }
    };
    
    //js object
    const mydata = { name: nm, email: em, password: pm };
       console.log(mydata);

    // Converts Java Script object to json string
    const data = JSON.stringify(mydata);
      console.log(data);

    //send Request adta
    xhr.send(data);
}
