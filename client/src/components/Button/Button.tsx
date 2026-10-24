// import type { ButtonHTMLAttributes, ReactNode } from 'react'
// import clsx from 'clsx'
// import './Button.css'

// export type ButtonVariant = 'create' | 'save' | 'cancel' | 'delete'

// export type ButtonProps = {
//   variant?: ButtonVariant
//   children: ReactNode
// } & ButtonHTMLAttributes<HTMLButtonElement>

// export function Button({
//   variant = 'create',
//   children,
//   className,
//   type = 'button',
//   ...props
// }: ButtonProps){
//   return (
//     <button 
//       type={type} 
//       className={clsx('btn','btn-${variant}',className)}
//       {...props}
//       >
//         {children}
//       </button>

//   )
// }


import {ButtonHTMLAttributes, ReactNode} from 'react';
import clsx from 'clsx';
import './Button.css';

export type ButtonVariant = 'create' | 'save' | 'cancel' | 'delete'

export type ButtonProps = {
  variant? : ButtonVariant
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>





















