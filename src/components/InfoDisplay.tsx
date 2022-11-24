import React from 'react'
import { infoDisplayType } from '../types'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 2000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 7000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 6000,
        pv: 9800,
        amt: 2290,
    },
];

const InfoDisplay = ({ name, value }: infoDisplayType) => {
    return (
        <div className='bg-white w-[24%] px-4 py-4 rounded-sm flex items-center'>
            <div className='flex flex-col justify-start flex-grow'>
                <p className='text-label_md text-gray-500'>{name}</p>
                <h3 className='text-[1.25rem] text-gray-900'>{value}</h3>
            </div>
            <ResponsiveContainer width="41%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" hide={true} />
                    <YAxis hide={true} />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#0294FF" fill="#7BD2FF" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default InfoDisplay