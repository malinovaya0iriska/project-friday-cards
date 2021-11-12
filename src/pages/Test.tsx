import React from 'react';
import {CustomButton} from "../common/CustomButton/CustomButton";
import {CustomCheckbox} from "../common/CustomCheckbox/CustomCheckbox";

const Test = () => {
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
            <CustomCheckbox/>
            </div>
        </>
    );
};

export default Test;