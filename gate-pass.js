function f1(){
// define variable to take the input from the respective fields--
    const pname = document.getElementById('pname').value;
    const phone = document.getElementById('phone').value;
    const fathername = document.getElementById('fathername').value;
    const pass = document.getElementById('pass').value;
    const add = document.getElementById('add').value;
    const occupy = document.getElementById('occupy').value;
    const proof = document.getElementById('proof').value;
    const visit = document.getElementById('visit').value;
    const visitdate = document.getElementById('visitdate').value;
    const branch = document.getElementById('branch').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;



//-- save the data in local storage thorugh the key value pair--


    localStorage.setItem('Pname', pname);
    localStorage.setItem('Phone', phone);
    localStorage.setItem('Fathername', fathername);
    localStorage.setItem('Pass', pass);
    localStorage.setItem('Add', add);
    localStorage.setItem('Occupy', occupy);
    localStorage.setItem('Proof', proof);
    localStorage.setItem('PurposeVisit', visit);
    localStorage.setItem('Visitdate', visitdate);
    localStorage.setItem('Branch', branch);
    localStorage.setItem('Age', age);
    localStorage.setItem('Gender', gender);


    //--- a alert msg display after submiting the data of the form--
    alert('Data saved successfully!');
}

function f2(){
    //-alert msg for deleting the data from local storage--
     alert("Are you sure you want to delete the data?");

      //-- delete the data from local storage---
     localStorage.clear();
   
}
