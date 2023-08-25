import { useEffect, useState } from 'react';
import {Link,useNavigate, useParams} from 'react-router-dom'
const EmpEdit = () => {
    const { empid }=useParams();
    //const [empdata,empdataChange]=useState({});
    useEffect(()=>{
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
           changeId(resp.id);
           changeName(resp.name);
           changeEmail(resp.email);
           changePhone(resp.phone);
           changeActive(resp.active);

        }).catch((err) =>{
            console.log(err.message);
        })
    },[])

    const[id,changeId]=useState("");
    const[name,changeName]=useState("");
    const[email,changeEmail]=useState("");
    const[phone,changePhone]=useState("");
    const[active,changeActive]=useState(true);
    const[validation,valchange]=useState(false);
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const empdata={id,name,email,phone,active};
        
        fetch("http://localhost:8000/employee/"+empid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
        }).then((res)=>{
            alert('Updated Successfully')
            navigate('/');
        }).catch((err)=>{
            console.log(err.message)
            })
    }

 
    return ( 
        <div>
        <div className="row py-5">
            <div className="col-12 col-lg-3"></div>
            <div className="offset col-lg-6">
                <div className="containertable">
                    <form className="" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-title">
                                <h2 className='crename py-4'>UPDATE EMPLOYEE</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group">
                                        
                                        <input value={id} disabled="disabled" type="hidden"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className='labelform'>Name</label>
                                        <input required className="form-control inpuenre" value={name} onMouseDown={e=>valchange(true)} onChange={e=>changeName(e.target.value)} type="text" />
                                        {name.length==0 &&validation &&<span className='text-danger'>Enter Your Name*</span>}
                                    </div>
                                    <div className="form-group">
                                        <label className='labelform'>Email</label>
                                        <input className="form-control inpuenre" value={email} onChange={e=>changeEmail(e.target.value)} type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label className='labelform'>Phone</label>
                                        <input className="form-control inpuenre" value={phone} onChange={e=>changePhone(e.target.value)} type="text" />
                                    </div>
                                    <div className="form-check ">
                                        <input type="checkbox" checked={active} onChange={e=>changeActive(e.target.checked)} className="form-check-input" />
                                        <label  className="form-check-label" >Is Active</label>
                                    </div>
                                    <div className="form-group">
                                        <button className="btnsave">&nbsp;&nbsp;UPDATE&nbsp;&nbsp;</button>
                                        &nbsp;
                                        <Link to="/" className="btnremove">&nbsp;&nbsp;BACK&nbsp;&nbsp;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-12 col-lg-3"></div>
        </div>
    </div>
     );
}
 
export default EmpEdit;