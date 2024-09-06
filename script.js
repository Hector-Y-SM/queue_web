import { Queue } from "./helper.js";

const data = document.getElementById('input_value');
const btn_add = document.getElementById('btn_add');
const btn_delete = document.getElementById('btn_delete');
const btn_clear = document.getElementById('btn_clear');
const queue = document.getElementById('queue');
const myQueue = new Queue();

btn_add.addEventListener('click', () => {
    data.value == ''? 
        alert('you cannot add an empty string to the queue')
        :
        myQueue.push(data.value);
    getData();
});

btn_delete.addEventListener('click', () => {
    myQueue.shift();
    getData();
})

btn_clear.addEventListener('click', () => {
    myQueue.clear();
    getData();
});

function getData() {
    queue.innerHTML = ''; 
    const queueValue = myQueue.queue;

    queueValue.forEach((element, index) => {
        const content = document.createElement('h4');
        content.textContent = element;

        const btn_edit = document.createElement('button');
        btn_edit.textContent = 'edit';


        btn_edit.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'new value';

            const saveChanges = document.createElement('button');
            saveChanges.textContent = 'save changes';

            saveChanges.addEventListener('click', () => {
                const newValue = input.value.trim();
                if (newValue !== '') {
                    myQueue.edit(index, newValue); 
                    getData(); 
                } else {
                    alert('Enter a valid value');
                }
            });

            queue.append(input, saveChanges);
        });

        queue.append(content, btn_edit); 
    });
    data.value = '';
}
