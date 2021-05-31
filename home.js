let employeeePayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHTML();
    localStorage.removeItem('editEmp');
});

const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>start Date</th><th>Actions</th>";
    if ( employeePayrollList.length == 0 ) return;
    let innerHtml = `${headerHtml}`;
    
    for  ( const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
         <tr>
             <td>
                 <img class="profile" alt="" src="${employeePayrollData._profilePic}">
             </td>
             <td>${employeePayrollData._name}</td>
             <td>${employeePayrollData._gender}</td>
             <td>${getDeptHtml(employeePayrollData._department)}</td>
             <td>${employeePayrollData._salary}</td>
             <td>${stringifyDate(employeePayrollData._startDate)}</td>
             <td> 
                 <img id="${employeePayrollData._id}" onclick ="remove(this)" alt="delete" src="../FS HTML_CSS LP02 Employee Payroll App Assets.zip (Unzipped Files)/assets/icons/delete-black-18dp.svg">
                 <img id="${employeePayrollData._id}" alt="Edit" onclick="update(this)" src="../FS HTML_CSS LP02 Employee Payroll App Assets.zip (Unzipped Files)/assets/icons/create-black-18dp.svg">
                 </td>
         </tr>
         `;
    }
     document.querySelector('#table-display').innerHTML=innerHtml;
}


const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

//UC-19
const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}