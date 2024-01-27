import React from 'react'

export const dynamic = 'force-dynamic'

const getData = async (): Promise<string> => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve(`Route two data ${Math.random()}`)
        }, 4000)
    })
}

const RouteTwoPage = async () => {
    const data = await getData()
    return (
        <div>{data}</div>
    )
}

export default RouteTwoPage