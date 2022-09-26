import './index.css';
import { useState } from "react";
import SelectInput from "../../Components/SelectInput";
import LoginInput from "../../Components/TextInput";

type OptionsType = {
    key: string,
    father: string
    value: string
}
const countriesOptions = [
    { key: '1', father: '', value: 'Brazil' },
    { key: '2', father: '', value: 'USA' },
]

const statesOptions = [
    { key: '1', father: 'Brazil', value: 'Maranhão' },
    { key: '2', father: 'Brazil', value: 'Paraná' },
    { key: '3', father: 'Brazil', value: 'Ceará' },
    { key: '4', father: 'USA', value: 'Washington' },
    { key: '5', father: 'USA', value: 'California' },
    { key: '6', father: 'USA', value: 'Texas' },
]


function CreateContracts() {
    const [country, setCountry] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [docNumber, setDocNumber] = useState<string>('');
    const [socialReason, setSocialReason] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [district, setDistrict] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [zipCode, setZipCode] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [dueDay, setDueDay] = useState<string>('');
    const [file, setFile] = useState<string>('');

    return (
        <>
        <div className='row'>
            <SelectInput
                options={countriesOptions}
                father={''}
                onChange={(value) => setCountry(value)}
                description={'País'}
            />
            <SelectInput
                options={statesOptions}
                father={country}
                onChange={(value) => setState(value)}
                description={'Estado'}
            />
            <LoginInput
                inputType="text"
                label='Cidade'
                message=''
                required={false}
                onChange={(value) => setCity(value)}
            />
        </div>
            <LoginInput
                inputType="text"
                label='Cidade'
                message=''
                required={false}
                onChange={(value) => setDocNumber(value)}
            />
            <LoginInput
                inputType="text"
                label='Cidade'
                message=''
                required={false}
                onChange={(value) => setSocialReason(value)}
            />
            <LoginInput
                inputType="text"
                label='Cidade'
                message=''
                required={false}
                onChange={(value) => setAddress(value)}
            />
            <LoginInput
                inputType="text"
                label='Cidade'
                message=''
                required={false}
                onChange={(value) => setDistrict(value)}
            />
            <LoginInput
                inputType="text"
                label='Cidade'
                message=''
                required={false}
                onChange={(value) => setNumber(value)}
            />
            <LoginInput
                inputType="text"
                label='Cidade'
                message=''
                required={false}
                onChange={(value) => setZipCode(value)}
            />
            <LoginInput
                inputType="text"
                label='Cidade'
                message=''
                required={false}
                onChange={(value) => setEmail(value)}
            />
            <LoginInput
                inputType="text"
                label='Cidade'
                message=''
                required={false}
                onChange={(value) => setPhone(value)}
            />
            {/* Date */}
            {/* Date */}
            <LoginInput
                inputType="text"
                label='Cidade'
                message=''
                required={false}
                onChange={(value) => setDueDay(value)}
            />
        </>
    )

}

export default CreateContracts;