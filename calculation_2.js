function calc() {
    const vegQuan = parseInt(document.getElementById('vegQuan').value);
    let vegPrice = 30;
    const fruitQuan = parseInt(document.getElementById('fruitQuan').value);
    let fruitPrice = 20;
    const chickenQuan = parseInt(document.getElementById('chickenQuan').value);
    let chickenPrice = 7;
    const porkQuan = parseFloat(document.getElementById('porkQuan').value);
    let porkPrice = 5;


    document.getElementById('result').value = vegQuan * vegPrice + fruitQuan * fruitPrice + chickenQuan * chickenPrice + porkQuan * porkPrice;
}

function showMessage() {
    let receipt = "";
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address1 = document.getElementById("address1").value;
    const address2 = document.getElementById("address2").value;
    const Pickup = document.getElementById('Pickup').checked;
    const Delivery = document.getElementById('Delivery').checked;
    const result = document.getElementById("result").value;
    const vegQuan = document.getElementById("vegQuan").value;
    const fruitQuan = document.getElementById("fruitQuan").value;
    const chickenQuan = document.getElementById("chickenQuan").value;
    const porkQuan = document.getElementById("porkQuan").value;


    
    rhead = `<h3 class="rhead"> Receipt </h3>`;
    rbody = `${firstName}  `;
    rbody += `${lastName}<br>`;
    rbody += `${address1},<br>`;
    rbody += `${address2}<br>`;
    if (Pickup) {
        rbody += `Pickup<br><br>`;
    }
    if (Delivery) {
        rbody += `Delivery<br><br>`;
    }
    rbody += `Order:<br><br>`;
    if (vegQuan > 0) {
        rbody += `${vegQuan} Vegetable Hamper<br>`;
    }
    if (fruitQuan > 0) {
        rbody += `${fruitQuan} Fruit Hamper<br>`;
    }
    if (chickenQuan > 0) {
        rbody += `${chickenQuan} Fresh Chickens<br>`;
    }
    if (porkQuan > 0) {
        rbody += `${porkQuan} Pork<br>`;
    }
    rbody += `<br>Total order:  $${result}`;

    rbody = `<div class="rbody">${rbody}</div>`;

    rbutton = `<button onClick="window.location.reload()" class="form-control">Exit</button>`;

    receipt = `${rhead}${rbody}${rbutton}`;


    document.getElementById('receipt').innerHTML = `<div class="rep">${receipt}</div>`;
}
