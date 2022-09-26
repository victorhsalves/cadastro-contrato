import { Form, Input } from "antd";



function LoginInput(
    props: {
        inputType: string,
        label: string,
        message: string,
        required: boolean,
        onChange: (arg: string) => void
    }
) {


    return (
        <div className="input">
            {/* <input type={props.inputType} onChange={(event) => props.onChange(event.target.value)} /> */}

            <Form.Item
                label={props.label}
                name={props.label}
                rules={[{ required: props.required, message: props.message }]}
            >
                <Input type={props.inputType} onChange={(event) => props.onChange(event.target.value)} />
            </Form.Item>
        </div>
    )
}


export default LoginInput;