function ContactForm(){

    var userDetails = {};

    function handleChange(e){
        userDetails[e.target.name] = e.target.value;
    }

    function handleSubmit(){
        console.log(userDetails);
    }

    return (
        <div>
            <div>
                <label>Fullname :</label>
                <input name="fulname" onBlur={handleChange} />
            </div>
            <div>
                <label>email :</label>
                <input name="email" onBlur={handleChange} />
            </div>
            <div>
                <label>mobile :</label>
                <input name="mobile" onBlur={handleChange} />
            </div>

            <div>
                <button onClick={handleSubmit}> Submit </button>
            </div>
            
        </div>
    )
}


export default ContactForm;