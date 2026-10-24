import type {ReactNode , SubmitEventHandler} from 'react';
import clsx from 'clsx';
import {Button} from '../Button/Button';
import './FormPopup.css'

export type FormPopupProps = {
    title : string
    onClose:()=> void
    onSubmit?: SubmitEventHandler<HTMLFormElement>
    children:ReactNode
    actions?:ReactNode
    className?:string
}

export function FormPopup({
    title,
    onClose,
    onSubmit,
    children,
    actions,
    className
}:FormPopupProps){

    const handlesubmit:SubmitEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault()
        onSubmit?.(e)
    }

    return (
        <div className="form-popup-overlay">
            <div
                className={clsx('form-popup',className)}
                role="dialog"
                aria-labellebdy="form-popup-title"
            >
                <h2 className="form-popup-title">{title}</h2>

                <form className="form-popup-form" onSubmit={handlesubmit}>
                    {children}
                    <div className="form-actions">
                        {actions ?? (
                            <>
                                <Button variant="cancel" onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button variant="save" type="submit">
                                    Save
                                </Button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

