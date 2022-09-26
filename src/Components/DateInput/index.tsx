


import { DatePicker, Form } from "antd";


function DateInput(
    props: {
        inputType: string,
        label: string,
        message: string,
        required: boolean,
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
                <DatePicker />
            </Form.Item>
        </div>
    )
}


export default DateInput;