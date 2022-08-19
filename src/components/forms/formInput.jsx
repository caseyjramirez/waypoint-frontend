function FormInput({value, label, onChange, type, placeholder, error}) {
    
    function renderMessageClass() {
        return error ? "" : "hidden";
    }

    function renderInputClass() {
        return error ? 'form-control error-input' : 'form-control';
    }
    
    return (
        <div className="form-input mb-20">
            <label className="mb-10">{label}</label>
            
            <input
            className={renderInputClass()}
            type={type} 
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            />
            
            <ul className={renderMessageClass()}>
                <li className="error-message">{error}</li>
            </ul>
        </div>
    );
}

export default FormInput;