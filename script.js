let flag = true;

function changeToText(e) {
    let oldDiv = document.getElementById("div");
    if (e.key === "e" && e.ctrlKey) {
        e.preventDefault();
        console.log(flag);
        let textarea = document.createElement("textarea");
        console.log(oldDiv.tagName);
        if (flag) {
            let p = document.createTextNode(oldDiv.innerText);
            textarea.appendChild(p);
            textarea.id = oldDiv.id;
            oldDiv.replaceWith(textarea);
            flag = false;
        }
    }
}
function changeToDiv(e) {
    let oldTextArea = document.getElementById("div");
    if (e.key === "s" && e.ctrlKey) {
        console.log(flag);
        e.preventDefault();
        let newDiv = document.createElement("div");
        console.log(oldTextArea.tagName);
        if (!flag) {
            let p = document.createTextNode(oldTextArea.value);
            newDiv.appendChild(p);
            newDiv.id = oldTextArea.id;
            oldTextArea.replaceWith(newDiv);
            flag = true;
        }
    }
}

document.addEventListener("keydown", changeToText);
document.addEventListener("keydown", changeToDiv);

// task 2

let table = document.getElementById("table");
let navigate = table.firstElementChild.firstElementChild;
let navigateArr = navigate.getElementsByTagName("th");
let trArr = table.getElementsByTagName("tr");

function myEvent(e) {
    let target = e.target;
    for (let i = 0; i < navigateArr.length; i++) {
        if (navigateArr[i] === target) {
            mySort(i);
        }
    }
}

function mySort(value) {
    let rows = [];
    for (let i = 1; i < trArr.length; i++) {
        rows[i - 1] = trArr[i];
    }
    rows.sort((rowA, rowB) => {
        let A = rowA.children[value].textContent.trim();
        let B = rowB.children[value].textContent.trim();

        return A.localeCompare(B, { numeric: true });
    });

    table.append(...rows);
}

navigate.addEventListener("click", myEvent);