import { Form, Select } from "antd";

type OptionsType = {
    key: string,
    father: string,
    value: string
}
const { Option } = Select;

function SelectInput(
    props: {
        description: string,
        label: string,
        message: string,
        required: boolean,
        options: OptionsType[],
        father: string,
        onChange: (args: string) => void
    }
) {


    return (
        <div className="input">
            <Form.Item
                label={props.label}
                name={props.label}
                rules={[{ required: props.required, message: props.message }]}
            >

                <Select
                    placeholder={props.description}
                    onChange={(value) => props.onChange(value)}
                    allowClear
                >
                    <Option value={0} >Selecione...</Option>
                    {props.options.map(row => (
                        row.father === props.father ?
                            <Option value={row.value} key={row.key}>{row.value}</Option>
                            : ''
                    )
                    )}
                </Select>
            </Form.Item>
        </div>
    )
}


export default SelectInput;