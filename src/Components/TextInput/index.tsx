


function LoginInput(props: { inputType: string,  onChange : (arg: string) => void}) {


    return (
        <div className='login-div'>
            <input type={props.inputType} onChange={(event) => props.onChange(event.target.value)} />
        </div>
    )
}


export default LoginInput;