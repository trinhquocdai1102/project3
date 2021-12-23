import React from 'react';
import { useForm } from 'react-hook-form';
import PrivacyPolicy from '../../components/privacy-policy/PrivacyPolicy';
import ResetSubmitBtn from '../../components/reset-submit-btn/ResetSubmitBtn';
import { UserInfoItems } from './ProcessItems';

const UserInfo = () => {
    const {register, handleSubmit} = useForm();
    const [disable, setDisable] = React.useState(true);

    const onSubmit = (data) => console.log(data)
    const onChange = () => {
        setDisable(!disable)
    }

    return (
        <div className="ProcessInfo">
            <h2>Add your information</h2>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <ul>
                    {UserInfoItems.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <p>{item.title}</p>
                                <input name={item.name} type={item.type} placeholder={item.placeholder} {...register(item.name)} required/>
                            </li>
                        )
                    })}
                </ul>
                <PrivacyPolicy onChange={onChange}/>
                <ResetSubmitBtn disable={disable}/>
            </form>
        </div>
    );
};

export default UserInfo;