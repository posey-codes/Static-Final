document.getElementById('submitButton').onclick = function () {
    var scotchName = document.getElementById('scotchNameInput').value;
    var scotchSize = document.getElementById('scotchSizeInput').value;
    var scotchCost = document.getElementById('scotchCostInput').value;
    var scotchTable = document.getElementById('scotchTable');
    var tb = document.getElementById('scotchTB');

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    td1 = tr.insertCell(0);
    td2 = tr.insertCell(1);
    td3 = tr.insertCell(2);

    td1.innerHTML = scotchName;
    td2.innerHTML = scotchSize;
    td3.innerHTML = scotchCost;

    tb.appendChild(tr);
};

