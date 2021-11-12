import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './CustomButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CustomButtonPropsType = DefaultButtonPropsType & {
    addStyle?: boolean
}

export const CustomButton: React.FC<CustomButtonPropsType> = (
    {
        addStyle, className,
        ...restProps
    }
    /*
      все остальные пропсы попадут в объект restProps, там же будет children
    */
) => {
    const finalClassName = `${addStyle ? s.custom : s.default} ${className}`

    return (
        <button className={finalClassName} {...restProps}/>
)
}

