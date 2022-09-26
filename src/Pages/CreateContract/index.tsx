import { useState } from "react";
import SelectInput from "../../Components/SelectInput";

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

    return (
        <>
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
        </>
    )

}

export default CreateContracts;