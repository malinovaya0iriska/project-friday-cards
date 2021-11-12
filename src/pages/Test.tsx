import React, {ChangeEvent, useState} from 'react';
import {CustomButton} from "../common/CustomButton/CustomButton";
import {CustomCheckbox} from "../common/CustomCheckbox/CustomCheckbox";
import {CustomInputText} from "../common/CustomInput/CustomInput";

const Test = () => {
    const [text, setText] = useState<string>('')
    const error = text.trim() ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    return (
        <>
            <div>
                <CustomButton>
                    default
                </CustomButton>
                <CustomButton disabled>
                    disabled
                </CustomButton>
                <CustomButton
                    addStyle // пропсу с булевым значением не обязательно указывать true
                    onClick={() => {
                    }}
                >
                    {/*// название кнопки попадёт в children*/}
                    <span>hover me</span>
                </CustomButton>
                <CustomButton
                    addStyle
                    disabled>
                    <span>disabled</span>
                </CustomButton>
            </div>

            <div>
                <CustomCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </CustomCheckbox>
                <CustomCheckbox
                    checked={checked}
                    onChange={testOnChange}>
                    checkbox
                </CustomCheckbox>
            </div>

            <div>
                <CustomInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                />
            </div>
        </>
    );
};

export default Test;