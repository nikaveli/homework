function submitForm() { 
    var first = document.getElementById("fName").value;
    var firstName = document.getElementById("firstInfo");
    firstName.innerHTML = first;

    var lastN = document.getElementById("lName").value;
    var lastName = document.getElementById("lastInfo");
    lastName.innerHTML = lastN;

    var eAdress = document.getElementById("email").value;
    var emailAddress = document.getElementById("emailInfo");
    emailAddress.innerHTML = eAdress;
    
    var age = document.getElementById("age").value;
    var ageYrs = document.getElementById("ageInfo");
    ageYrs.innerHTML = age;

    var secret = document.getElementById("secretA").value;
    var secretA = document.getElementById("secretInfo");
    secretA.innerHTML = secret;

    var message = document.getElementById("mShort").value;
    var messageInfo1 = document.getElementById("messageInfo");
    messageInfo1.innerHTML = message;

    var income = document.getElementById("incomeSelect").value;
    var incomeAmt = document.getElementById("incomeInfo");
    incomeAmt.innerHTML = income;

}