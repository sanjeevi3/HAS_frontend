import {Fragment} from "react"
import { useForm } from "react-hook-form"
import CardHeader from "../Components/UI/CardHeader"
import EditProfileForm from "../Components/editProfile/EditProfileForm"

const EditProfile=props=>{
    const {register,handleSubmit,watch,errors} = useForm(
        {defaultValues:{
            first_name:"sanjeevi",
            last_name:"kumar",
            phone:"9123510364",
            email_id:"sanjai.developer@gmail.com",
            gender:"male",
            date_of_birth:Date.toString(),
            state:"tamilnadu",
            district:"tirunelveli",
            place:"palayamkottai",
            address:"13b langargana street",
            worker:"yes",
            worker_type:"plumber"
            
        }}
    )
    const changeAsWorker=watch("worker")
    console.log(changeAsWorker)
    let inputs = [
        {
            elementType:"input",
            elementConfig:{
                type:"text",
                name:"first_name",
                placeholder:"First Name"
            },
            label:"First Name",
            validation:{
                required:"The First Name Field is Required",
                minLength:{
                    value:3,
                    message:"Minimum Length is 3"
                },
                maxLength:{
                    value:30,
                    message:"Minimum Length is 30"
                },
                pattern:{
                    value:/[A-Za-z]/,
                    message:"First Name only in Alphabets"
                }
                


            },
            
        },
        {
            elementType:"input",
            elementConfig:{
                type:"text",
                name:"last_name",
                placeholder:"Last Name"
            },
            label:"Last Name",
            validation:{
                required:"The Last Name  is Required",
                minLength:{
                    value:3,
                    message:"Minimum Length is 3"
                },
                maxLength:{
                    value:30,
                    message:"Minimum Length is 30"
                },
                pattern:{
                    value:/[A-Za-z]/,
                    message:"First Name only in Alphabets"
                }

            },
            
        },
        {
            elementType:"input",
            elementConfig:{
                type:"text",
                name:"phone",
                placeholder:"Phone"
            },
            label:"Phone",
            validation:{
                required:"The Phone  is Required",
                minLength:{
                    value:10,
                    message:"Minimum Length is 10"
                },
                maxLength:{
                    value:10,
                    message:"Maximum Length is 10"
                },
                pattern:{
                    value:/^[0-9]{10,10}$/,
                    message:"only in numbers"
                }
                
            },
            
        },
        {
            elementType:"input",
            elementConfig:{
                type:"email",
                name:"email_id",
                placeholder:"Email"
            },
            label:"Email",
            validation:{
                required:"Email is Required",
                minLength:{
                    value:3,
                    message:"Minimum Length is 3"
                },
                maxLength:{
                    value:30,
                    message:"Minimum Length is 30"
                },
                pattern:{
                    value:/^[a-z][a-z0-9]{3,}@[a-z]{5,}\.[a-z]{2,}$/,
                    message:"Enter Correct Email Format"
                }
            },
            
        },
        {
            elementType:"input",
            elementConfig:{
                type:"date",
                name:"date_of_birth",
                placeholder:"User Name,Email Id"
            },
            label:"Date Of Birth",
            validation:{
                required:"The Date of Birth Field is Required",
                valueAsDate:true
            },
            
        },
        {
            elementType:"multi input",
            elementConfig:{
                type:"radio",
                name:"gender",
                
            },
            inputs:[
                {value:"male",label:"Male"},
                {value:"female",label:"Female"},
                {value:"others",label:"Others"}],
            label:"Gender",
            validation:{
                required:"The Gender is Required"
            },
            
        },
       
        {
            elementType:"select",
            elementConfig:{
               
                name:"state",
                
            },
            label:"State",
            options:[
                {value:"tamilnadu",label:"Tamilnadu"}
            ],
            validation:{
                required:"Select Any One State",

            },
           
        },
        {
            elementType:"select",
            elementConfig:{
               
                name:"district",
                
            },
            label:"District",
            options:[
                {value:"tirunelveli",label:"Tirunelveli"}
            ],
            validation:{
                required:"Select Any One District",

            },
           
        },
        {
            elementType:"select",
            elementConfig:{
               
                name:"place",
                
            },
            label:"Place",
            options:[
                {value:"palayamkottai",label:"Palayamkottai"}
            ],
            validation:{
                required:"Select Any One place",

            },
           
        },
        {
            elementType:"text area",
            elementConfig:{
                placeholder:"Address",
                name:"address",
                
            },
            label:"Address",
            
            validation:{
                required:"Enter the Address",

            },
           
        },
        {
            elementType:"multi input",
            elementConfig:{
               
                name:"worker",
                type:"checkbox"
            },
            label:"",
            inputs:[
                {value:"yes",label:"User Change As Worker"}
            ],
            validation:{
                required:false

            },
           
        },
        
        

    ]

    if(changeAsWorker){
        inputs=[
            ...inputs,
            {
                elementType:"select",
                elementConfig:{
                    type:"checkbox",
                    name:"worker_type",
                    
                },
                options:[
                    {value:"plumber",label:"Plumber"},
                    {value:"AC mechanic",label:"AC Mechanic"},
                    {value:"refregirator mechanic",label:"Refregirator Mechanic"}
                ],
                label:"Worker Type",
                validation:{
                    required:"The Gender is Required"
                },
                
            }
        ]}
    return(
        <Fragment>
            <CardHeader>
                Edit Profile
            </CardHeader>
            <div className="body">
                <EditProfileForm 
                register={register} 
                handleSubmit={handleSubmit} 
                errors={errors} 
                inputs={inputs} 
                watch={watch}
                editProfileHandler={data=>console.log(data)}
                />
            </div>
        </Fragment>
        
    )
}

export default EditProfile;