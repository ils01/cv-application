import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CategoryIn } from './components/in/CategoryIn';
import { Input } from "./components/in/Input";
import { CategoryOut } from './components/out/CategoryOut';
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
        school: 'London State University',
        degree: 'Bachelor',
        startDate: '1975',
        endDate: '1979',
        location: 'San Francisco',
        visible: true
    },
    { id: uuidv4(), school: 'Harvard school', startDate: 2019, endDate: 2022, location: 'Harvard', degree: 'major', visible: false }]);

    const experienceTemplate = {
        'Company Name': 'companyName',
        'Position Title': 'positionTitle', 'StartDate': 'startDate', 'End Date': 'endDate', 'Location': 'location', 'Description': 'description'
    };
    const [experiences, setExperiences] = useState([
        {
            id: uuidv4(),
            companyName: 'Pacifico',
            positionTitle: 'CEO of CEOs',
            startDate: 'this June',
            endDate: 'hope never',
            description: '<textarea> </textarea>',
            location: 'spiritual realm',
            visible: true
        }
    ]);
    function clearResume() {
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setAddress("");
        setEducations([]);
        setExperiences([]);
    }
    function loadDefaultsResume() {
        clearResume();
        setFullName('Arnoldo NoodleDoodle');
        setEmail("arnoldo.noodledoodle@example.com");
        setPhoneNumber("+44 7700 900123");
        setAddress("123 Sesame Street, Imaginary Town");
        setEducations([{
            id: uuidv4(),
            school: 'London state university',
            degree: 'bachelor',
            startDate: '1975',
            endDate: '1979',
            location: 'San Francisco',
            visible: true
        },
        { id: uuidv4(), school: 'Harvard school', startDate: 2019, endDate: 2022, location: 'Harvard', degree: 'major', visible: false }]);
        setExperiences([{
            id: uuidv4(),
            companyName: 'Pacifico',
            positionTitle: 'CEO of CEOs',
            startDate: 'this June',
            endDate: 'hope never',
            description: '<textarea> </textarea>',
            visible: true
        }]);
    }
    return (
        <div className="App">
            <header>
                <h1 className='sr-only' aria-live='polite'>cv builder</h1>
            </header>
            <main>
                <div className="column column_in">
                    <div className='button-row'>
                        <button className='button' onClick={clearResume}>clear resume</button>
                        <button className='button' onClick={loadDefaultsResume}>load example</button>
                    </div>
                    <CategoryIn personal={true} title={"Personal details"} >
                        <Input id={'fullname'} label={'Full Name'} value={fullName} setValue={setFullName}></Input>
                        <Input id={'email'} label={'Email'} value={email} setValue={setEmail}></Input>
                        <Input id={'phonenumber'} label={'Phone number'} value={phoneNumber} setValue={setPhoneNumber}></Input>
                        <Input id={'address'} label={'Address'} value={address} setValue={setAddress}></Input>
                    </CategoryIn>

                    <CategoryIn items={educations} setItems={setEducations} title={"Education"} template={educationTemplate} canAddMore={true} >
                    </CategoryIn>
                    <CategoryIn items={experiences} setItems={setExperiences} title={"Experience"} template={experienceTemplate} canAddMore={true}>
                    </CategoryIn>
                </div>
                <div className="column column_out">
                    <CategoryOut personal={true}>
                        <div className='out_personal__cont'>
                            <div className='personal__row personal__title'>
                                <Output value={fullName}></Output>
                            </div>
                            <div className='personal__row'>
                                <Output value={email}></Output>
                                <Output value={phoneNumber}></Output>
                                <Output value={address}></Output>
                            </div>


                        </div>
                    </CategoryOut>
                    <CategoryOut items={educations} title="Education" template={educationTemplate}></CategoryOut>
                    <CategoryOut items={experiences} title="Experience" template={experienceTemplate}></CategoryOut>
                </div>
            </main>
        </div>
    )
}

export default App
