import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';
import { ProductContext } from "../../provider/ProductProvider";

const Statistics = () => {
    const { carts } = useContext(ProductContext);
    console.log(carts);
    return (
        <div className="max-w-[1400px] mx-auto mt-16">
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div className="w-full h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={400}
                        data={carts}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" scale="band" />
                        <YAxis></YAxis>
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="price" barSize={25} fill="#413ea0" />
                        <Line type="monotone" dataKey="price" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;