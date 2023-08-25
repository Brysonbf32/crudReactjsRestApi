import { useEffect, useState } from "react";
import {Link,useNavigate} from 'react-router-dom'


const EmployListing = () => {

    const[empdata,empdataChange]=useState(null);
    const navigate = useNavigate();
 
    const loadEdit =(id)=>{
        navigate("/employee/edit/"+id);
    }
    const loadRemove =(id)=>{
       if(window.confirm('Do you want to remove'));
       fetch("http://localhost:8000/employee/" +id ,{
        method:"DELETE"
    }).then((res)=>{
        alert('Removed Successfully')
        window.location.reload();
    }).catch((err)=>{
        console.log(err.message)
        })
    }
    const  loadDetails =(id)=>{
        navigate("/employee/detail/"+id);
    }
    useEffect(() =>{
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdataChange(resp);
        }).catch((err) =>{
            console.log(err.message);
        })
    }, [])
    return ( 
        <div className="container  py-5">
            <div className="row">
                <div className="col-12 col-lg-1"></div>              
                <div className="col-12 col-lg-10">
                    <div className="containertable">
                        <div className="card-title">
                            <h1 className="emplist py-3">EMPLOYEE LISTE</h1>
                        </div>
                        <div className="container pb-3">
                            <Link to="employee/create" className="btnAdd ">Add New (+)</Link>
                        </div>
                        <div class="container">
                            <table className=" table">
                                <thead class="bg-dark text-white theadcl">
                                    <tr className="entetetable">
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody class="">
                                    {empdata &&
                                        empdata.map(item=>(
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>
                                                    <a onClick={()=>{loadEdit(item.id)}} className="btnedit">&nbsp;Edit&nbsp;</a>&nbsp;
                                                    <a onClick={()=>{loadRemove(item.id)}} className="btnremove">Remove</a>&nbsp;
                                                    <a onClick={()=>{loadDetails(item.id)}} className="btndetails">Details</a>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-1"></div>
            </div>
        </div>
     );
}
 
export default EmployListing;