function checkCreds() {
    //Variable for first name
    var firstName = document.getElementById("fName").value;
    //Variable for last name
    var lastName = document.getElementById("lName").value;
    //Variable for badge number
    var badgeNumb = document.getElementById("badgeId").value;
    // Combining first and last name for full name
    var fullName = firstName + " " + lastName;
//creating character requirements for name input
    if (fullName.length > 20 || fullName.length == 1) {
        document.getElementById("loginStatus").innerHTML = "Full name has too many characters!";
    }
//creating requirements for badge number input
    else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!";
    }
//creating link to home page
    else {
        alert("Access Granted! Welcome " + fullName);
        location.replace("index.html");
    }
}