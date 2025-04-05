import React, { useState } from 'react'
import "./styles/permission.css"

export const Permisson = () => {

    const [curr_conf, set_crr_conf] = useState("doctor")
    const pri_col = "rgb(88, 88, 255)"

    const [data, set_data] = useState({
        visit_manager : {allowed : false, create : false, edit : false, view : false},
        doctor : {allowed : false, create : false, edit : false, view : false},
        expense_claim : {allowed : false, create : false, edit : false, view : false},
        contents : {allowed : false, create : false, edit : false, view : false},
        patient_list : {allowed : false, create : false, edit : false, view : false},
        appointment_manager : {allowed : false, create : false, edit : false, view : false},

        users : {allowed : false, create : false, edit : false, view : false},
        payroll : {allowed : false, create : false, edit : false, view : false},
        reimbursement : {allowed : false, create : false, edit : false, view : false},
        letters : {allowed : false, create : false, edit : false, view : false},
        leave_management : {allowed : false, create : false, edit : false, view : false}
    })
    

    const check_func = (section, cev, value)=>{
        console.log(section, cev, value)
        if(cev!=="allowed"){
            if(data[section].allowed){
                change_data(section, cev, value)
            }
        }else{
            change_data(section, "allowed", value)
            if(!value){
                change_data(section, "create", false)
                change_data(section, "edit", false)
                change_data(section, "view", false)
            }
        }
    }

    const change_data = (section, key, value) => {
        set_data(prev => ({
          ...prev,
          [section]: {
            ...prev[section],
            [key]: value
          }
        }))
      }
      


  return (
    <>
        

        <div className="main_containner">
            {/* left con */}
            <div className="left_containner">
                <div className="left_content">
                    Roles
                    <div className="left_small_box">
                        <li
                        style={{
                            backgroundColor: curr_conf==="doctor"?pri_col : "white",
                            color: curr_conf==="doctor"?"white" : "black"
                        }}
                        onClick={()=>set_crr_conf("doctor")}
                        
                        >Doctor</li>
                        <li
                        style={{
                            backgroundColor: curr_conf==="nurse"?pri_col : "white",
                            color: curr_conf==="nurse"?"white" : "black"
                        }}
                        onClick={()=>set_crr_conf("nurse")}
                        >Nurse</li>
                        <li
                        style={{
                            backgroundColor: curr_conf==="admin"?pri_col : "white",
                            color: curr_conf==="admin"?"white" : "black"
                        }}
                        onClick={()=>set_crr_conf("admin")}
                        >Admin</li>
                        <li
                        style={{
                            backgroundColor: curr_conf==="front desk"?pri_col : "white",
                            color: curr_conf==="front desk"?"white" : "black"
                        }}
                        onClick={()=>set_crr_conf("front desk")}
                        >Front Desk</li>
                        <li
                        style={{
                            backgroundColor: curr_conf==="lab technician"?pri_col : "white",
                            color: curr_conf==="lab technician"?"white" : "black"
                        }}
                        onClick={()=>set_crr_conf("lab technician")}
                        >Lab Technician</li>
                        <li
                        style={{
                            backgroundColor: curr_conf==="field salesforce"?pri_col : "white",
                            color: curr_conf==="field salesforce"?"white" : "black"
                        }}
                        onClick={()=>set_crr_conf("field salesforce")}
                        >Field Salesforce</li>
                    </div>
                </div>

            </div>
            
            
            {/* right con */}
            <div className="right_containner">
                <header>
                    <img src="./telephone.svg" alt="" />
                    <img src="./chat.svg" alt="" />
                    <img src="./bell.svg" alt="" />
                    <img src="./profile.svg" alt="" />

                </header>


                <div className="permission_con">
                    <div className="heading">
                        <div className="close_button">+</div>
                        {"Configuration > "}{curr_conf} 
                    </div>

                    <div className="salesforce_heading">
                        <div className="name">Salesforce Management</div>
                        <div className="des">caption or description for this page's funtions, features or timeline</div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Allowed</th>
                                <th>Create</th>
                                <th>Edit</th>
                                <th>View</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Visit Manager</td>
                                <td><input
                                    checked={data.visit_manager.allowed}
                                    onChange={(e)=>{check_func("visit_manager", "allowed", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                                <td><input
                                    checked={data.visit_manager.create}
                                    onChange={(e)=>{check_func("visit_manager", "create", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                                <td>
                                <input
                                    checked={data.visit_manager.edit}
                                    onChange={(e)=>{check_func("visit_manager", "edit", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                                <td><input
                                    checked={data.visit_manager.view}
                                    onChange={(e)=>{check_func("visit_manager", "view", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                            </tr>
                            <tr>
                                <td>Doctor</td>
                                <td><input
                                    checked={data.doctor.allowed}
                                    onChange={(e)=>{check_func("doctor", "allowed", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                                <td><input
                                    checked={data.doctor.create}
                                    onChange={(e)=>{check_func("doctor", "create", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                                <td><input
                                    checked={data.doctor.edit}
                                    onChange={(e)=>{check_func("doctor", "edit", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                                <td><input
                                    checked={data.doctor.view}
                                    onChange={(e)=>{check_func("doctor", "view", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Expense Claim</td>
                                <td><input
                                    checked={data.expense_claim.allowed}
                                    onChange={(e)=>{check_func("expense_claim", "allowed", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                                <td><input
                                    checked={data.expense_claim.create}
                                    onChange={(e)=>{check_func("expense_claim", "create", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                                <td><input
                                    checked={data.expense_claim.edit}
                                    onChange={(e)=>{check_func("expense_claim", "edit", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                                <td><input
                                    checked={data.expense_claim.view}
                                    onChange={(e)=>{check_func("expense_claim", "view", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Contents</td>
                                <td><input
                                    checked={data.contents.allowed}
                                    onChange={(e)=>{check_func("contents", "allowed", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                                <td><input
                                    checked={data.contents.create}
                                    onChange={(e)=>{check_func("contents", "create", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.contents.edit}
                                    onChange={(e)=>{check_func("contents", "edit", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.contents.view}
                                    onChange={(e)=>{check_func("contents", "view", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                            </tr>
                            <tr>
                                <td>Patient List</td>
                                <td><input
                                    checked={data.patient_list.allowed}
                                    onChange={(e)=>{check_func("patient_list", "allowed", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.patient_list.create}
                                    onChange={(e)=>{check_func("patient_list", "create", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.patient_list.edit}
                                    onChange={(e)=>{check_func("patient_list", "edit", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.patient_list.view}
                                    onChange={(e)=>{check_func("patient_list", "view", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                            </tr>
                            <tr>
                                <td>Appointment Manager</td>
                                <td><input
                                    checked={data.appointment_manager.allowed}
                                    onChange={(e)=>{check_func("appointment_manager", "allowed", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/>
                                </td>
                                <td><input
                                    checked={data.appointment_manager.create}
                                    onChange={(e)=>{check_func("appointment_manager", "create", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.appointment_manager.edit}
                                    onChange={(e)=>{check_func("appointment_manager", "edit", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.appointment_manager.view}
                                    onChange={(e)=>{check_func("appointment_manager", "view", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                            </tr>
                        </tbody>
                    </table>


                    
                    
                    
                    <div className="human_res_heading">
                        <div className="name">Human Resource</div>
                        <div className="des">caption or description for this page's funtions, features or timeline</div>
                    </div> 


                    {/* human resource */}
                    
                    
                    
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Allowed</th>
                                <th>Create</th>
                                <th>Edit</th>
                                <th>View</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Users</td>
                                <td><input
                                    checked={data.users.allowed}
                                    onChange={(e)=>{check_func("users", "allowed", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.users.create}
                                    onChange={(e)=>{check_func("users", "create", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.users.edit}
                                    onChange={(e)=>{check_func("users", "edit", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.users.view}
                                    onChange={(e)=>{check_func("users", "view", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                            </tr>
                            <tr>
                                <td>Payroll</td>
                                <td><input
                                    checked={data.payroll.allowed}
                                    onChange={(e)=>{check_func("payroll", "allowed", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.payroll.create}
                                    onChange={(e)=>{check_func("payroll", "create", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.payroll.edit}
                                    onChange={(e)=>{check_func("payroll", "edit", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.payroll.view}
                                    onChange={(e)=>{check_func("payroll", "view", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                            </tr>
                            <tr>
                                <td>Reimbursement</td>
                                <td><input
                                    checked={data.reimbursement.allowed}
                                    onChange={(e)=>{check_func("reimbursement", "allowed", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.reimbursement.create}
                                    onChange={(e)=>{check_func("reimbursement", "create", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.reimbursement.edit}
                                    onChange={(e)=>{check_func("reimbursement", "edit", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.reimbursement.view}
                                    onChange={(e)=>{check_func("reimbursement", "view", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                            </tr>
                            <tr>
                                <td>Letters</td>
                                <td><input
                                    checked={data.letters.allowed}
                                    onChange={(e)=>{check_func("letters", "allowed", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.letters.create}
                                    onChange={(e)=>{check_func("letters", "create", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.letters.edit}
                                    onChange={(e)=>{check_func("letters", "edit", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.letters.view}
                                    onChange={(e)=>{check_func("letters", "view", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                            </tr>
                            <tr>
                                <td>Leave Management</td>
                                <td><input
                                    checked={data.leave_management.allowed}
                                    onChange={(e)=>{check_func("leave_management", "allowed", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.leave_management.create}
                                    onChange={(e)=>{check_func("leave_management", "create", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.leave_management.edit}
                                    onChange={(e)=>{check_func("leave_management", "edit", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                                <td><input
                                    checked={data.leave_management.view}
                                    onChange={(e)=>{check_func("leave_management", "view", e.target.checked)}}
                                    type="checkbox"
                                    style={{ accentColor: pri_col }}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>

    </>
  )
}
