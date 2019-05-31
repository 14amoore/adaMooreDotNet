function greeter(person) {
    return 'Hello, ' + person.firstName + '' + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'User' };
var para = document.createElement('P');
para.innerText = greeter(user);
document.body.appendChild(para);
