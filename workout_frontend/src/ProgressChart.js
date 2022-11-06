import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import getUsersData from './GetData';

Chart.register(...registerables);

// component for progress chart
const ProgressChart = (props) => {
    const username = props.username;
    const [userData, setUserData] = useState(null);
    const [isLoading, setLoading] = useState(true);


    // dummy data 
    const labels = [
        'Week 1',
        'Week 2',
        'Week 3',
        'Week 4'
    ];

    //const projectedWeight = [100, 102.5, 107.5, 112.5];
    const pastWeight = [100, 105, 112.5, 120];


    useEffect(() => {
        getGraphData(username);
    }, [username]);

    // function to retrieve Data from server for the users graph
    const getGraphData = async (username) => {
        console.log("Getting graph data")
        //let usersLifts = await getUsersData(username);
        let usersLifts = await getUsersData(username);
        // get data then check if we got error, or data
        if (usersLifts !== undefined) {
            setUserData(usersLifts);
            console.log("usersLifts", usersLifts);
            setLoading(false);
        }
        //return usersLifts
    };


    const data = {
        labels,
        datasets: [
            {
                label: "Weight Lifted",
                data: pastWeight,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: "Weight Programmed",
                data: userData,
                borderColor: 'rgb(99, 255, 132)',
                backgroundColor: 'rgba(99, 255, 132, 0.5)',
            }

        ]
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Progress',
            },
        },

    };

    // returns a Chart.js Line chart

    if (isLoading) {
        return <p>Loading!!</p>
    }


    else {

        return (
            <div className='ProgressChart'>
                <div className='ChartContainer'><Line options={options} data={data} /></div>
            </div>
        )
    }
}
export default ProgressChart;