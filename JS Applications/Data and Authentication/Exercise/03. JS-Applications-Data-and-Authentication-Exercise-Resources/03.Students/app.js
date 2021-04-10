async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}


async function getAllStudents(){

    const students = await request('http://localhost:3030/jsonstore/collections/students');
    document.querySelector('tbody').innerHTML = '';
    Object.values(students).forEach(createRow);

}

function createRow(student){

    const result = e('tr',{},
        e('td',{},student.firstName),
        e('td',{},student.lastName),
        e('td',{},student.facultyNumber),
        e('td',{},student.grade)
        );


    document.querySelector('tbody').appendChild(result);
}



async function createStudent(event){
    event.preventDefault();

    const formData = new FormData(event.target);

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = Number(formData.get('grade'));

    const student = {
        firstName,
        lastName,
        facultyNumber,
        grade
    }

    await request('http://localhost:3030/jsonstore/collections/students',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(student)
    });

    await getAllStudents();
    event.target.reset();
}


function main(){
    document.getElementById('form').addEventListener('submit',createStudent);
}


function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}

main();