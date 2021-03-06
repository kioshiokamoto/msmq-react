import * as React from 'react'

export default function Shop (props) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 22 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.296 9.97c-.34.62-1 1.03-1.75 1.03h-7.45l-1.1 2h12v2h-12c-1.52 0-2.48-1.63-1.75-2.97l1.35-2.44L2.996 2h-2V0h3.27l.94 2h14.8c.76 0 1.24.82.87 1.48l-3.58 6.49zM18.306 4H6.156l2.37 5h7.02l2.76-5zM6.996 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm8.01 2c0-1.1.89-2 1.99-2s2 .9 2 2-.9 2-2 2-1.99-.9-1.99-2z'
        fill={props.color}
      />
    </svg>
  )
}
