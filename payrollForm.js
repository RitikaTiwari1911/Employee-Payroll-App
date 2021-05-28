//UC 9 On Document load set event Listeners
window.addEventListener('DOMContentLoaded',(event) =>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }    
    });
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function(){
        output.textContent = salary.value;
    });
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const yearsArray = ['January','February','March','April','May','June','July','August','September',
                        'October','November','December'];
    const dateError = document.querySelector('.date-error');

    day.addEventListener('click',function(){            //add listener at date input
        month.addEventListener('click',function(){
            year.addEventListener('click',function(){
                try{
                    const startDate = new Date(year.value,yearsArray.indexOf(month.value),day.value);
                    console.log(startDate);
                    employeePayrollData.startDate = startDate;
                    dateError.textContent = "";
                }catch(e){
                    dateError.textContent = e;
                }
            })
        })
    });
}); 

//On save create Employee payroll Object
const save = () => {
    try{
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }catch (e){
        return;
    }

    const createEmployeePayroll = () => {
        let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }

    //helper methods for multiple inputs
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month')+
               " "+getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}
    //function to get html form values of radio buttons  
    const getSelectedValues = (propertyValue)=>{
    let allItems = document.querySelectorAll(propertyValue);
    let selectItems = [];
    allItems.forEach(item=>{
        if(item.checked) selectItems.push(item.value);
    });
    return selectItems;
}

//function to get form values by Id
const getInputValueById = (id=>{
    let value = document.querySelector(id).value;
    return value;  
    });

//UC12(4) Ability to save the Employee payroll object to Local Storage
function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }else{
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}
}