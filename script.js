// Form validation

function validateForm(){
    var candy_name = document.getElementById("candy_name").value;
    var description = document.getElementById("description").value;
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;

    if(candy_name == ""){
        alert("Name is required");
        return false;
    }

    if(description == ""){
        alert("Age is required");
        return false;
    }

    if(price == ""){
        alert("Address is Required");
        return false;
    }

    if(quantity == ""){
        alert("Email is required");
        return false;
    }
    

    return true;
}

// Add data

function AddData(){
    if(validateForm() == true){
        var candy_name = document.getElementById("candy_name").value;
        var description = document.getElementById("description").value;
        var price = document.getElementById("price").value;
        var quantity = document.getElementById("quantity").value;

        var itemList;
        if(localStorage.getItem("itemList") == null){
            itemList = [];
        }
        else{
            itemList = JSON.parse(localStorage.getItem("itemList"));
        }

        itemList.push({
            candy_name : candy_name,
            description : description,
            price : price,
            quantity : quantity,
        });

        localStorage.setItem("itemList", JSON.stringify(itemList));
        showData();
        document.getElementById("candy_name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("price").value = "";
        document.getElementById("quantity").value = "";

    }
}

// Show Data

function showData(){
    var itemList;
    if(localStorage.getItem("itemList") == null){
        peopleList = [];
    }
    else{
        itemList = JSON.parse(localStorage.getItem("itemList"))
    }

    var html = "";

    itemList.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>" + element.candy_name + "</td>";
        html += "<td>" + element.description + "</td>";
        html += "<td>" + element.price + "</td>";
        html += "<td>" + element.quantity + "</td>";
        html += '<td><button onClick="buy1Data('+index+')" class ="btn btn-primary">Buy1</button> <button onClick="buy2Data('+index+')" class ="btn btn-primary">Buy2</button> <button onClick="buy3Data('+index+')" class ="btn btn-primary">Buy3</button>'
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

// Load all data when document or page loaded
document.onload = showData();


// Adding one buy quantity

function buy1Data(index){
    var itemList;
    if (localStorage.getItem("itemList") == null) {
        itemList = [];
    } else {
        itemList = JSON.parse(localStorage.getItem("itemList"));
    }

    
    let data = itemList[index].quantity;
    if(parseInt(data)>1){
        var item  = parseInt(data) + 1;

        document.getElementById("quantity").value = item;

        itemList[index].quantity = document.getElementById("quantity").value;
        localStorage.setItem("itemList", JSON.stringify(itemList));
        showData();
        document.getElementById("quantity").value = "";

    }
    return false;
    
}

// Adding two buy quantity

function buy2Data(index){
    var itemList;
    if (localStorage.getItem("itemList") == null) {
        itemList = [];
    } else {
        itemList = JSON.parse(localStorage.getItem("itemList"));
    }

    
    let data = itemList[index].quantity;
    if(parseInt(data)>1){
        var item  = parseInt(data) + 2;

        document.getElementById("quantity").value = item;

        itemList[index].quantity = document.getElementById("quantity").value;
        localStorage.setItem("itemList", JSON.stringify(itemList));
        showData();
        document.getElementById("quantity").value = "";

    }
    return false;
    
}

// Adding three buy quantity

function buy3Data(index){
    var itemList;
    if (localStorage.getItem("itemList") == null) {
        itemList = [];
    } else {
        itemList = JSON.parse(localStorage.getItem("itemList"));
    }

    
    let data = itemList[index].quantity;
    if(parseInt(data)>1){
        var item  = parseInt(data) + 3;

        document.getElementById("quantity").value = item;

        itemList[index].quantity = document.getElementById("quantity").value;
        localStorage.setItem("itemList", JSON.stringify(itemList));
        showData();
        document.getElementById("quantity").value = "";

    }
    return false;
    

}

