// let btn = document.querySelector('#btn');
// let label = document.querySelector('#input-label');
// let content = document.querySelector('.main-Content');
// let deletebtn;
// let donebtn;
// let newList;


// btn.addEventListener('click' , () => {
//     newList = document.createElement("li");
//     newList.textContent = label.value;
//     newList.id = 'list';
    
//     donebtn = document.createElement("button");
//     donebtn.textContent = 'Done';
//     donebtn.id = 'donebtn';

//     deletebtn = document.createElement("button");
//     deletebtn.textContent = 'Delete';
//     deletebtn.id = 'deletebtn';

//     content.appendChild(newList);
//     newList.appendChild(donebtn);
//     newList.appendChild(deletebtn);
// });






// deletebtn.addEventListener('click', () => {
//     newList.remove();
// });


// let btn = document.querySelector('#btn');
// let label = document.querySelector('#input-label');
// let content = document.querySelector('.main-Content');
// let deletebtn;
// let donebtn;
// let newList;

// btn.addEventListener('click', () => {
//     newList = document.createElement("li");
//     newList.textContent = label.value;
//     newList.id = 'list';

//     donebtn = document.createElement("button");
//     donebtn.textContent = 'Done';
//     donebtn.id = 'donebtn';

//     deletebtn = document.createElement("button");
//     deletebtn.textContent = 'Delete';
//     deletebtn.id = 'deletebtn';

//     content.appendChild(newList);
//     newList.appendChild(donebtn);
//     newList.appendChild(deletebtn);
// });

// deletebtn.addEventListener('click', () => {
//     newList.remove();
// });



let btn = document.querySelector('#btn');
let label = document.querySelector('#input-label');
let content = document.querySelector('.main-Content');
let deletebtn;
let donebtn;
let newList;

window.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        newList = document.createElement("li");
        newList.textContent = label.value;
        newList.id = 'list';
        
        donebtn = document.createElement("button");
        donebtn.textContent = 'Done';
        donebtn.id = 'donebtn';

        deletebtn = document.createElement("button");
        deletebtn.textContent = 'Delete';
        deletebtn.id = 'deletebtn';

        content.appendChild(newList);
        newList.appendChild(donebtn);
        newList.appendChild(deletebtn);

        if(label.value === ''){
            alert('Please Enter a task');
            newList.remove();
        }
        label.value = ''; 
    }
    
    deletebtn.addEventListener('click', (a) => {
        let target = a.target;

        target.parentElement.remove();
    });
        
    donebtn.addEventListener("click" , (b) => {
        let target = b.target;    
        target.parentElement.style.textDecoration = 'line-through';        
    })
       
});



