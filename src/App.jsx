import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CategoryIn } from './components/in/CategoryIn';
import { CategoryInItem } from './components/in/CategoryInItem';
import { Input } from "./components/in/Input";
import { CategoryOut } from './components/out/CategoryOut';
import { CategoryOutItem } from './components/out/CategoryOutItem';
import { Output } from './components/out/Output';
import './styles/style.scss';

function App() {
    const [fullName, setFullName] = useState("Arnoldo NoodleDoodle");
    const [email, setEmail] = useState("arnoldo.noodledoodle@example.com");
    const [phoneNumber, setPhoneNumber] = useState("+44 7700 900123");
    const [address, setAddress] = useState("123 Sesame Street, Imaginary Town");

    const educationTemplate = { 'School': 'school', 'Degree': 'degree', 'Start Date': 'startDate', 'End Date': 'endDate', 'Location': 'location' };
    const [educations, setEducations] = useState([{
        id: uuidv4(),
        school: 'london state university',
        degree: 'bachelor',
        visible: true
    },
    { id: uuidv4(), school: 'harvard school', degree: 'major', visible: false }]);

    const experienceTemplate = {
        'Company Name': 'companyName',
        'Position Title': 'positionTitle', 'StartDate': 'startDate', 'End Date': 'endDate', 'Location': 'location', 'Description': 'description'
    };
    const [experiences, setExperiences] = useState([]);

    return (
        <div className="App">
            <CategoryIn personal={true} title={"Personal details"}>
                <CategoryInItem>
                    <Input id={'fullname'} label={'Full Name'} value={fullName} setValue={setFullName}></Input>
                    <Input id={'email'} label={'Email'} value={email} setValue={setEmail}></Input>
                    <Input id={'phonenumber'} label={'Phone number'} value={phoneNumber} setValue={setPhoneNumber}></Input>
                    <Input id={'address'} label={'Address'} value={address} setValue={setAddress}></Input>
                </CategoryInItem>
            </CategoryIn>

            <CategoryIn items={educations} setItems={setEducations} title={"Education"} template={educationTemplate} canAddMore={true}>
            </CategoryIn>
            <CategoryIn items={experiences} setItems={setExperiences} title={"Experience"} template={experienceTemplate} canAddMore={true}>
            </CategoryIn>

            <CategoryOut personal={true}>
                <div>
                    <Output value={fullName}></Output>
                    <Output value={email}></Output>
                    <Output value={phoneNumber}></Output>
                    <Output value={address}></Output>
                </div>
            </CategoryOut>
            <CategoryOut items={educations} title="Education" template={educationTemplate}></CategoryOut>
        </div>
    )
}

export default App
