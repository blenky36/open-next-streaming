import React, { ReactNode } from 'react'

const TestLayout = ({
    children,
    routeOne,
    routeTwo
}: {
    children: ReactNode,
    routeOne: ReactNode,
    routeTwo: ReactNode
}) => {
    return (
        <div>
            <p>TestLayout</p>
            {children}
            {routeOne}
            {routeTwo}
        </div>
    )
}

export default TestLayout