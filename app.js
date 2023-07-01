/*
// const array = [1,2,3,5,20,42]
// // const array = new Array(1,2,3,4,null)
// // console.log(array.length)
// console.log(array[0])
// console.log(array[array.length-1])

// array[0] = 'Привет!'
// console.log(array[0])
// array[array.length] = 'becon'
// console.log(array[6])
*/
const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
// console.log(inputElement.value)
const notes = [{
    title: 'записать блок про массивы',
    completed: false,
},
{
    title: 'рассказать про обьекты',
    completed: true,
}]

function render(){
    listElement.innerHTML = ''
    if(notes.length === 0){
         listElement.innerHTML  = '<p>Список пуст</p>'
    }
    for(let i = 0; i < notes.length ; i++){
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i],i))
    }
    // for(let note of notes){
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    // }
    
}
render()

createBtn.onclick =  function (){
        //listElement.innerHTML = 
       
        if(inputElement.value.length != 0)
        {
            const newNote = {
                title: inputElement.value,
                completed: false,
            }
            notes.push(newNote)
            render()
        inputElement.value = ''
        }
      
}
listElement.onclick = function (event){
    if(event.target.dataset.index){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if(type === 'toggle'){
            notes[index].completed = !notes[index].completed
        } else if(type ==='remove')
        {
            notes.splice(index,1)
        }
        render()
    }
  
}
function getNoteTemplate(note, index){
    return `<li 
    class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
        <span>
        <span class="btn btn-small btn-${note.completed ? 'warning':'success'}" data-type = "toggle" data-index="${index}">&check;</span>
        <span class="btn btn-small btn-danger" data-type = "remove" data-index="${index}">&times;</span>
        </span>
    </li>`
} 
// const person = {

// }
