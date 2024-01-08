import { useState } from 'react'
import { CategoryIn } from './components/in/CategoryIn';

import './styles/style.scss';
import { CategoryInItem } from './components/in/CategoryInItem';
import { Input } from "./components/in/Input";

function App() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    return (
        <div className="App">
            <CategoryIn title={"Personal details"}>
                <CategoryInItem>
                    <Input id={'fullname'} label={'Full Name'} value={fullName} setValue={setFullName}></Input>
                    <Input id={'email'} label={'Email'} value={email} setValue={setEmail}></Input>
                    <Input id={'phonenumber'} label={'Phone number'} value={phoneNumber} setValue={setPhoneNumber}></Input>
                    <Input id={'address'} label={'Address'} value={address} setValue={setAddress}></Input>
                </CategoryInItem>
            </CategoryIn>
        </div>
    )
}

export default App
