let personList = [];

function addMember(e) {
    // Prevent the form from reloading the page
    e.preventDefault();
    const inputName = document.getElementById('person-name');
    if (inputName && inputName.value.trim() !== '') {
        // Log the value to the console or add it to the list
        console.log(`Adding member: ${inputName.value}`);
        personList.push(inputName.value);
        console.log(personList);
        let personName = document.getElementById("personName")
        let div = document.createElement('div')
        div.classList = "border-2 rounded-xl border-gray-700 px-3 gap-2 flex items-center justify-between"
        let p = document.createElement('p')
        let button = document.createElement('button')
        let i = document.createElement('i')
        i.classList = 'fa-solid fa-xmark text-gray-700'
        button.appendChild(i)
        p.textContent = inputName.value
        div.appendChild(p)
        // div.appendChild(button)

        personName.appendChild(div)
        inputName.value = '';
    } else {
        // Log an error or provide user feedback
        console.log('Please enter a valid member name.');
    }
}
let errorGroupName = document.getElementById('errorGroupName')
let errorPersonName = document.getElementById('errorPersonName')
function createGroup(e) {
    e.preventDefault();
    const groupName = document.getElementById('group-name')
    if (groupName && groupName.value.trim() !== '') {
        localStorage.setItem('groupName', groupName.value);

    }
    else {
        errorGroupName.textContent = "Please enter a valid group name."
        return 0;
    }
    if (personList.length < 2) {
        errorPersonName.textContent = "Please enter at least two name."
        return 0;
    }
    else {
        localStorage.setItem('personList', JSON.stringify(personList));
    }
    window.location.href = "addexpense.html";
}

function removeGroupError() {
    errorGroupName.textContent = "";
}
function removePersonError() {
    errorPersonName.textContent = "";
}

(function () {
    const gName = localStorage.getItem('groupName')
    if (gName && gName.trim() !== "") {
        const groupName = document.getElementById('group-name')
        groupName.value = gName;
    }
    const personListString = localStorage.getItem('personList');
    const personListLS = JSON.parse(personListString);
    personList = personListLS || [];
    if (personListLS && personListLS.length !== 0) {
        personList.map((item) => {
            let personName = document.getElementById("personName")
            let div = document.createElement('div')
            div.classList = "border-2 rounded-xl border-gray-700 px-3 gap-2 flex items-center justify-between"
            let p = document.createElement('p')
            let button = document.createElement('button')
            let i = document.createElement('i')
            i.classList = 'fa-solid fa-xmark text-gray-700'
            button.appendChild(i)
            p.textContent = item
            div.appendChild(p)
            // div.appendChild(button)
            personName.appendChild(div)
        })
    }
})();
