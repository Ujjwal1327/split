const gName = localStorage.getItem('groupName')
const groupName = document.getElementById('groupName')
groupName.textContent = gName


let paidBy = document.getElementById("paidBy");
let paidFor = document.getElementById("paidFor");
console.log(paidBy);
const personListString = localStorage.getItem('personList');
const personListLS = JSON.parse(personListString);
personListLS.map((item) => {
    // Create the div and its contents for 'paidBy'
    let div1 = document.createElement('div');
    div1.classList = "border-2 rounded-xl cursor-pointer border-gray-700 px-3 gap-2 flex items-center justify-between";
    let p1 = document.createElement('p');
    p1.textContent = item;
    div1.appendChild(p1);
    paidBy.appendChild(div1);

    // Create a new div and its contents for 'paidFor'
    let div2 = document.createElement('div');
    div2.classList = "border-2 rounded-xl cursor-pointer border-gray-700 px-3 gap-2 flex items-center justify-between";
    let p2 = document.createElement('p');
    p2.textContent = item;
    div2.appendChild(p2);
    paidFor.appendChild(div2);
});
