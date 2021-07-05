

const BackDrop=(props)=>{
    
return(
    <div className="back-drop" onClick={()=>props.click?props.click():()=>{}}></div>
)
}

export default BackDrop;