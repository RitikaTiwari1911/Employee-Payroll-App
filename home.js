window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
});

//Template literal ES6 feature 
const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
         <tr>
             <td>
                 <img class="profile" alt="" src="../assets/profile-images/Ellipse -4.png">
             </td>
             <td>Tanya</td>
             <td>Female</td>
             <td><div class ='dept-label'>HR</div>
                  <div class='dept-label'>Finance</div></td>
            <td>3000000</td>
             <td>1 March 2021</td>
             <td> 
                 <img id="1" onclick="remove(this)" alt="delete" src="../FS HTML_CSS LP02 Employee Payroll App Assets.zip (Unzipped Files)/assets/icons/delete-black-18dp.svg">
                 <img id="1" alt="Edit" onclick="update(this)" src="../FS HTML_CSS LP02 Employee Payroll App Assets.zip (Unzipped Files)/assets/icons/create-black-18dp.svg">
             </td>
         </tr>
         `;
     document.querySelector('#table-display').innerHTML=innerHtml;
}
