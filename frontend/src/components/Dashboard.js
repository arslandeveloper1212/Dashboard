import React from 'react';
import { PieChart, Pie, Tooltip as PieTooltip, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import '../App.css';

// Data for the pie chart
const pieData = [
    { name: 'Insurer 1', value: 10, fill: '#007bff' },
    { name: 'Insurer 2', value: 20, fill: '#28a745' },
    { name: 'Insurer 3', value: 30, fill: '#dc3545' },
    { name: 'Insurer 4', value: 25, fill: '#ffc107' },
    { name: 'Insurer 5', value: 15, fill: '#17a2b8' },
];

// Data for the bar chart
const barData = [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    { name: 'Apr', uv: 2780, pv: 3908 },
    { name: 'May', uv: 1890, pv: 4800 },
    { name: 'Jun', uv: 2390, pv: 3800 },
    { name: 'Aug', uv: 3410, pv: 4300 },
    { name: 'Sep', uv: 2390, pv: 1800 },
    { name: 'Oct', uv: 1490, pv: 3300 },
    { name: 'Nov', uv: 4390, pv: 6800 },
    { name: 'Dec', uv: 3490, pv: 4300 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const customTicks = [250, 500, 1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000];

const Dashboard = () => {
    return (
        <div className="container-fluid my-4">
            <div className="row g-3" style={{ position: "relative", top: "-13px" }}>
                {/* Cards Section */}
                <div className="col-md-6 col-lg-6 col-12" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="row row-cols-1 g-3">
                        <div className="d-flex flex-row gap-3">
                            <div className="col">
                                <div className="card" style={{ border: "none" }}>
                                    <div className="card-body" style={{ background: "#0045e8", color: "white", borderRadius: "10px",height:"14vh" }}>
                                        <h5 className="card-title">Total Clients</h5>
                                        <p className="card-text cscs">40</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col" >
                                <div className="card" style={{ border: "none" }}>
                                    <div className="card-body" style={{ background: "#dca52c", color: "white", borderRadius: "10px",height:"14vh" }} >
                                        <h5 className="card-title">Total Premiums</h5>
                                        <p className="card-text cscs">34</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row gap-3">
                            <div className="col">
                                <div className="card" style={{ border: "none" }}>
                                    <div className="card-body" style={{ background: "#2d881a", color: "white", borderRadius: "10px", height:"14vh" }}>
                                        <h5 className="card-title">Total Commissions</h5>
                                        <p className="card-text cscs">$5000</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card" style={{ border: "none" }}>
                                    <div className="card-body" style={{ background: "#d03a2c", color: "white", borderRadius: "10px",height:"14vh" }}>
                                        <h5 className="card-title">Pending Orders</h5>
                                        <p className="card-text cscs">15</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pie Chart and Legend Section */}
                <div className="col-md-6 col-lg-6 col-12 d-flex flex-column">
                    <div className="pie-chart-container d-flex justify-content-center mb-3">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <PieTooltip
                                    content={({ payload }) => {
                                        if (payload && payload.length > 0) {
                                            const { value, name } = payload[0].payload;
                                            return (
                                                <div className="custom-tooltip">
                                                    <p className="label">{`${name}: ${value}`}</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Legend Section */}
                    <div className="cpst">
                    <div>
                   
                    </div>
                    
                        <span className="badge bg-primary">Insurer 1</span>
                        <span className="badge bg-success">Insurer 2</span>
                        <span className="badge bg-danger">Insurer 3</span>
                        <span className="badge bg-warning">Insurer 4</span>
                        <span className="badge bg-info">Insurer 5</span>
                    </div>
                </div>
            </div>

            {/* Dropdowns Section */}
            <div className="row mt-4 ftta">
                <select class="form-select-csrp" aria-label="Default select example">
                    <option style={{ padding: "20px;" }} selected>Insurer</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>


                <select class="form-select-csrp" aria-label="Default select example">
                    <option selected>Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>


            </div>




            {/* Bar Chart Section */}
            <div className="row mt-4">
                <div className='d-flex justify-content-between align-items-center'>

                    <h2>Premium Details</h2>
                    <div className='flex-column d-flex'>
                    <div className=' d-flex flex-row gap-3'>
                        <div style={{
                            width: "20px",
                            backgroundColor: "#d03a2c",
                            height: "20px",
                            boxSizing: "border-box"
                        }}></div>
                        <div>Quotes</div>

                    </div>

                    <div className=' d-flex flex-row gap-3'>
                    <div style={{
                        width: "20px",
                        backgroundColor: "#489dcb",
                        height: "20px",
                        boxSizing: "border-box"
                    }}></div>
                    <div>Premium</div>
                    </div>

                </div>
                </div>
                <div className="col-12">
                    <div className="bar-chart-container d-flex justify-content-center">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={barData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis
                                    domain={[250, 'auto']} // Set the Y-axis to start from 250 and auto-adjust maximum value
                                    ticks={customTicks}    // Set custom tick values
                                    tickFormatter={(value) => {
                                        if (value) {
                                            return `${value / 1000}k`; // Format values as 'k' for thousands
                                        }
                                        return value;
                                    }}
                                />
                                <PieTooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#d03a2c" />
                                <Bar dataKey="uv" fill="#489dcc" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;
