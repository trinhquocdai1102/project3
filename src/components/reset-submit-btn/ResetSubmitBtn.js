import React from 'react';

const ResetSubmitBtn = (props) => {
    const [reset] = React.useState(true);

    return (
        <div className="Div-Reset-Submit">
            <button className="Submit-Btn" type="submit" onClick={() => reset} disabled={props.disable}>
                <span>Submit</span>
                <div className="Submit-Btn-Desc">Must agree with policy to continue</div>
            </button>
            
            <button className="Reset-Btn" type='reset' onClick={() => reset}>
                <span>Reset</span>
                <div className="Reset-Btn-Desc">Reset all information</div>
            </button>
        </div>
    );
};

export default ResetSubmitBtn;