function AddresssBox(props){

    function handleBtnClick(){
        props.setAddress({
            city: "child city",
            state:"child state",
            pincode:"123456"
        })
    }

    return (
        <div>
            <div> Address Box </div>
            <div>
                <div> City: {props.address.city} </div>
                <div> State: {props.address.state} </div>
                <div> Pincode: {props.address.pincode} </div>
            </div>

            <button onClick={handleBtnClick}> Child Button </button>
        </div>
    )
}



export default AddresssBox;