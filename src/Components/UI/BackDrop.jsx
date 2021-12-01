// back drop for modal and side nave bar in mobile view
/* 
    props
    click - what do click on back drop
*/

const BackDrop = (props) => {
console.log("BackDrop")
    return (
        <div className="back-drop" onClick={() => props.click ? props.click() : () => { }}></div>
    )
}

export default BackDrop;