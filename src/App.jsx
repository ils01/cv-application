import { useState } from 'react';

import { CategoryIn } from './components/in/CategoryIn';
import { CategoryInItem } from './components/in/CategoryInItem';
import { Input } from "./components/in/Input";
import { CategoryOut } from './components/out/CategoryOut';
import { CategoryOutItem } from './components/out/CategoryOutItem';
import { Output } from './components/out/Output';
import './styles/style.scss';

function App() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    const educationsTemplate = { 'School': 'school', 'Degree': 'degree', 'Start Date': 'startDate', 'End Date': 'endDate', 'Location': 'location' };
    const [educations, setEducations] = useState([{
        school: 'london',
        degree: 'bachelor'
    },
    { school: 'harvard', degree: 'major' }]);

    return (
        <div className="App">
            {/* <CategoryInPersonal title={"Personal details"}>
                <CategoryInItem>
                    <Input id={'fullname'} label={'Full Name'} value={fullName} setValue={setFullName}></Input>
                    <Input id={'email'} label={'Email'} value={email} setValue={setEmail}></Input>
                    <Input id={'phonenumber'} label={'Phone number'} value={phoneNumber} setValue={setPhoneNumber}></Input>
                    <Input id={'address'} label={'Address'} value={address} setValue={setAddress}></Input>
                </CategoryInItem>
            </CategoryInPersonal> */}

            <CategoryIn items={educations} setItems={setEducations} title={"Education"} template={educationsTemplate} canAddMore={true}>
            </CategoryIn>

            <CategoryOut>
                <CategoryOutItem>
                    <Output value={fullName}></Output>
                    <Output value={email}></Output>
                    <Output value={phoneNumber}></Output>
                    <Output value={address}></Output>
                </CategoryOutItem>
            </CategoryOut>
        </div>
    )
}

export default App
