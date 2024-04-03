import React from 'react'

export interface TextareaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> { }

export const Textarea =
  ({ className, ...props }: TextareaProps) => {
    return (
      <textarea
        className={"flex text-gray-950 h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " + className}
        {...props}
      />
    )
  }


