import React from 'react'

interface propsType {
    status: string
}

const StatusButton: React.FC<propsType> = (props) => {
    return (
        <div>
            {props.status}
        </div>
    )
}
export default StatusButton