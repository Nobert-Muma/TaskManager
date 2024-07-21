document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM fully loaded');
    const tasksBtn=document.getElementById('createTaskBtn');
    tasksBtn.addEventListener('click', getInputs);
})
function getInputs(){
    const taskTitle=document.getElementById('taskTitle');
    const taskDetails=document.getElementById('taskDetails');
    const taskDate=document.getElementById('taskDate');
    const taskTime=document.getElementById('taskTime');
    // get input values
    const taskTitleValue=taskTitle.value;
    const taskDetailsValue=taskDetails.value;
    const taskDateValue=taskDate.value;
    const taskTimeValue=taskTime.value;
    // log the values to the console
    console.log("These are the values", taskTitleValue, taskDetailsValue, taskDateValue, taskTimeValue);
    // clear the input fields
    taskTitle.value='';
    taskDetails.value='';
    taskDate.value='';
    taskTime.value='';
    // set the focus back to the taskTitle so that it can be ready to receive user input 
    taskTitle.focus();
}