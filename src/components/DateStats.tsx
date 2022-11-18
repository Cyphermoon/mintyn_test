import React from 'react'
import DateStateHeader from './DateStateHeader'
import { AreaChart, Area, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'February',
        uv: 500,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'March',
        uv: 3000,
        pv: 9800,
        amt: 2290,
    },

    {
        name: 'April',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'May',
        uv: 1000,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jun',
        uv: 3000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Jul',
        uv: 7000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        uv: 5000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Sep',
        uv: 2000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Oct',
        uv: 8000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Oct',
        uv: 6000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Nov',
        uv: 6000,
        pv: 4300,
        amt: 2100,
    },

    {
        name: 'Dec',
        uv: 4000,
        pv: 4300,
        amt: 2100,
    },

];


const DateStats = () => {
    return (
        <div className='bg-white p-2 flex-grow mr-4'>
            <DateStateHeader />
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart
                    width={300}
                    height={400}
                    data={data}
                    margin={{
                        top: 40,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" hide={true} />
                    <YAxis hide={true} />
                    <Tooltip />
                    <ReferenceLine x="January" stroke="blue" label="Jan" />
                    <ReferenceLine x="February" stroke="blue" label="Feb" />
                    <ReferenceLine x="March" stroke="blue" label="Mar" />
                    <ReferenceLine x="April" stroke="blue" label="Apr" />
                    <ReferenceLine x="May" stroke="blue" label="May" />
                    <ReferenceLine x="Jun" stroke="blue" label="Jun" />

                    <Area type="monotone" dataKey="uv" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DateStats