import DateStateHeader from './DateStateHeader'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        unit: 50,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'February',
        unit: 300,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'March',
        unit: 500,
        pv: 9800,
        amt: 2290,
    },

    {
        name: 'April',
        unit: 350,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'May',
        unit: 900,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jun',
        unit: 1000,
        pv: 4300,
        amt: 2100,
    }
];


const DateStats = () => {
    return (
        <div className='bg-white col-start-1 col-end-9 row-span-full p-6'>
            <DateStateHeader />
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart
                    width={100}
                    // height={200}
                    data={data}
                    margin={{
                        top: 40,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid width={300} horizontal={false} strokeDasharray="3 3" />

                    <XAxis fontSize={"11px"} color={"#000000"} fontWeight={"500"} dataKey="name" hide={false} />
                    <YAxis fontSize={"11px"} color={"#000000"} fontWeight={"500"} hide={false} />
                    <Tooltip />

                    <Area type="monotone" dataKey="unit" stroke="#0294FF" fill="#7BD2FF" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DateStats