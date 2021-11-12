import React from 'react';
import {CustomButton} from "../common/CustomButton/CustomButton";

const Test = () => {
    return (
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
    );
};

export default Test;