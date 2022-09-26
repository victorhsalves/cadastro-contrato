import './index.css';
import { useState } from "react";
import SelectInput from "../../Components/SelectInput";
import LoginInput from "../../Components/TextInput";
import DateInput from '../../Components/DateInput';
import { Button, Card, Table } from 'antd';

type DataSourceType = {
    product: string,
    amount: string,
    finalUnitPrice: string,
    installments: string,
    paidInstallments: string,
    beginningTerm: string,
}




const countriesOptions = [
    { key: '1', father: '', value: 'Brazil' },
    { key: '2', father: '', value: 'USA' },
]


const companyOptions = [
    { key: '1', father: '', value: 'Company 1' },
    { key: '2', father: '', value: 'Companu 2' },
]

const statesOptions = [
    { key: '1', father: 'Brazil', value: 'Maranhão' },
    { key: '2', father: 'Brazil', value: 'Paraná' },
    { key: '3', father: 'Brazil', value: 'Ceará' },
    { key: '4', father: 'USA', value: 'Washington' },
    { key: '5', father: 'USA', value: 'California' },
    { key: '6', father: 'USA', value: 'Texas' },
]


const columns = [
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product'
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount'
    },
    {
        title: 'Final Unit Price',
        dataIndex: 'finalUnitPrice',
        key: 'finalUnitPrice'
    },
    {
        title: 'Installments',
        dataIndex: 'installments',
        key: 'installments'
    },
    {
        title: 'Paid Installments',
        dataIndex: 'paidInstallments',
        key: 'paidInstallments'
    },
    {
        title: 'Beginning of Term',
        dataIndex: 'beginningTerm',
        key: 'beginningTerm'
    },
]

var productList:DataSourceType[] = [];

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
    const [company, setCompany] = useState<string>('');

    const [product, setProduct] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [finalUnitPrice, setFinalUnitPrice] = useState<string>('');
    const [installments, setInstallments] = useState<string>('');
    const [paidInstallments, setPaidInstallments] = useState<string>('');
    const [beginningTerm, setBeginningTerm] = useState<string>('');
    const [dataSource, setDataSource] = useState<DataSourceType[]>([{
        product: 'Produto',
        amount: '1',
        finalUnitPrice: '1',
        installments: '1',
        paidInstallments: '1',
        beginningTerm: '1'
    }])
    console.log(productList)

    const [file, setFile] = useState<string>('');

    
    function handleAddProduct(newProduct: DataSourceType) {
        productList.push(newProduct)
        setDataSource(productList)
        // console.log(dataSource)
    }

    return (
        <>
            <Card title="Contract" bordered={false} className='card'>
                <div className='contractForm'>
                    <SelectInput
                        options={countriesOptions}
                        label='Country'
                        message='Selecione um país!'
                        required={true}
                        father={''}
                        onChange={(value) => setCountry(value)}
                        description={'País'}
                    />
                    <SelectInput
                        options={statesOptions}
                        label='State'
                        message='Selecione um estado!'
                        required={true}
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
                <div className='contractForm'>
                    <LoginInput
                        inputType="text"
                        label='Document Number'
                        message=''
                        required={false}
                        onChange={(value) => setDocNumber(value)}
                    />
                    <LoginInput
                        inputType="text"
                        label='Social Reason'
                        message=''
                        required={false}
                        onChange={(value) => setSocialReason(value)}
                    />
                </div>
                <div className='contractForm'>
                    <LoginInput
                        inputType="text"
                        label='Address'
                        message=''
                        required={true}
                        onChange={(value) => setAddress(value)}
                    />
                    <LoginInput
                        inputType="text"
                        label='District'
                        message=''
                        required={true}
                        onChange={(value) => setDistrict(value)}
                    />
                    <LoginInput
                        inputType="text"
                        label='Number'
                        message=''
                        required={true}
                        onChange={(value) => setNumber(value)}
                    />
                </div>

                <div className='contractForm'>
                    <LoginInput
                        inputType="text"
                        label='Zip code'
                        message=''
                        required={true}
                        onChange={(value) => setZipCode(value)}
                    />
                    <LoginInput
                        inputType="text"
                        label='Email'
                        message=''
                        required={true}
                        onChange={(value) => setEmail(value)}
                    />
                    <LoginInput
                        inputType="text"
                        label='Phone'
                        message=''
                        required={true}
                        onChange={(value) => setPhone(value)}
                    />
                </div>
                <div className='contractForm'>
                    <DateInput
                        onChange={(value) => setStartDate(value)}
                        inputType={''}
                        label={'Contract starts in'}
                        message={'Selecione uma data'}
                        required={true}
                    />
                    <DateInput
                        onChange={(value) => setEndDate(value)}
                        inputType={''}
                        label={'Contract ends in'}
                        message={'Selecione uma data'}
                        required={false}
                    />
                    <LoginInput
                        inputType="text"
                        label='Due Day'
                        message=''
                        required={false}
                        onChange={(value) => setDueDay(value)}
                    />
                </div>
                <div className='contractForm'>
                    <SelectInput
                        options={companyOptions}
                        label='Company'
                        message='Selecione uma compania!'
                        required={true}
                        father={''}
                        onChange={(value) => setCompany(value)}
                        description={'Company'}
                    />
                </div>
            </Card>
            <Card title="Products" bordered={false} className='card'>
                <div className='productForm'>
                    <LoginInput
                        inputType="text"
                        label='Product'
                        message=''
                        required={false}
                        onChange={(value) => setProduct(value)}
                    />
                    <LoginInput
                        inputType="text"
                        label='Amount'
                        message=''
                        required={false}
                        onChange={(value) => setAmount(value)}
                    />
                    <LoginInput
                        inputType="text"
                        label='Final Unit Price (R$)'
                        message=''
                        required={false}
                        onChange={(value) => setFinalUnitPrice(value)}
                    />
                    <LoginInput
                        inputType="text"
                        label='Installments'
                        message=''
                        required={false}
                        onChange={(value) => setInstallments(value)}
                    />
                    <LoginInput
                        inputType="text"
                        label='Paid Installments'
                        message=''
                        required={false}
                        onChange={(value) => setPaidInstallments(value)}
                    />
                    <DateInput
                        onChange={(value) => setBeginningTerm(value)}
                        inputType={''}
                        label={'Beginning of Term'}
                        message={'Selecione uma data'}
                        required={false}
                    />
                    <Button type="primary" onClick={() => handleAddProduct({
                        product,
                        amount,
                        finalUnitPrice,
                        installments,
                        paidInstallments,
                        beginningTerm,
                    })}>
                        + Add
                    </Button>
                </div>
                <div>
                    <Table dataSource={dataSource} rowKey={'product'} columns={columns} />
                </div>
            </Card>
        </>
    )

}

export default CreateContracts;