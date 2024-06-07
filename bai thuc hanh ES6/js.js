function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const address = document.getElementById("address").value;

    const userData = {
        name: name,
        age: age,
        address: address
    };

    const table = document.getElementById("studentTable");
    const row = table.insertRow(-1);
    const nameCell = row.insertCell(0);
    const ageCell = row.insertCell(1);
    const addressCell = row.insertCell(2);
    nameCell.textContent = userData.name;
    ageCell.textContent = userData.age;
    addressCell.textContent = userData.address;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    localStorage.setItem('userData', JSON.stringify(userData));

    console.log(userData);
}
