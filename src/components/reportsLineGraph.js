import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import moment from 'moment';


export default class LineGraph extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            click: false,
            apptMessage: ''
        };
    }
    
    handleClick(month) {
        this.setState({
            name: month,
            click: true
        });
    }

	render () {
           let apptInfo = [];
           
           let janCount = 0;
           let febCount = 0;
           let marCount = 0;
           let aprCount = 0;
           let mayCount = 0;
           let juneCount = 0;
           let julyCount = 0;
           let augCount = 0;
           let septCount = 0;
           let octCount = 0;
           let novCount = 0;
           let decCount = 0;
        // console.log('APPT ARRAY', this.props.user.appointments);
        // console.log('PROPS', this.props.user.appointments.time);
       const totalAppointmentsForUser = this.props.user.appointments.length;
    //    console.log('this is the total amount of appts for user', totalAppointmentsForUser);
       const filterAppts = this.props.user.appointments.map((appointment) => {
           const formatTime = moment(appointment.time).format('MMMM Do YYYY');
           if (formatTime.includes('January')) {
                janCount ++;
           } if (formatTime.includes('February')) {
                febCount ++;
           } if (formatTime.includes('March')) {
                marCount ++;
            } if (formatTime.includes('April')) {
                aprCount ++;
            } if (formatTime.includes('May')) {
                mayCount ++;
            } if (formatTime.includes('June')) {
                juneCount ++;
            } if (formatTime.includes('July')) {
                julyCount ++;
            } if (formatTime.includes('August')) {
                augCount ++;
            } if (formatTime.includes('September')) {
                septCount ++;
            } if (formatTime.includes('October')) {
                octCount ++;
            } if (formatTime.includes('November')) {
                novCount ++;
            } if (formatTime.includes('December')) {
                decCount ++;
            }           
       });
    //    console.log(`1: ${janCount}, 2: ${febCount}, .... 6: ${juneCount}, 7: ${julyCount}, 8: ${augCount}, 12 ${decCount}`);
       const filterApptList = this.props.user.appointments.map((appointment) => {
        const formatTime = moment(appointment.time).format('MMMM');
        const arrayOfTime = formatTime.split(' ');
        
        //console.log(arrayOfTime[0]);
        if(arrayOfTime[0] === this.state.name) {
            apptInfo.push(appointment);
        }
       });

       // console.log('apptinfo!!', apptInfo);
       
       
       const apptDataList = apptInfo.map((appt) => {
           return (
                <li key={appt.id}>
                Date of Appt: {moment(appt.time).format('MMMM Do YYYY')} <br/>
                Client Name: {appt.client.name} <br/>
                Client Email: {appt.client.email} <br/>
                Client Phone: {appt.client.phone} <br/>
                Appt Notes: {appt.notes} <br /> <br />
                </li>
           )
       });

       // console.log('check it', apptDataList);

       const handleMessage = () => {
        if (apptDataList === []) {
            this.setState({
                apptMessage: 'There were no appointments this month.'
            })
           }
    }

    // console.log('message', this.state.apptMessage);
       

       const data = [
        {name: 'January', appointments: janCount},
        {name: 'February', appointments: febCount},
        {name: 'March', appointments: marCount},
        {name: 'April', appointments: aprCount},
        {name: 'May', appointments: mayCount},
        {name: 'June', appointments: juneCount},
        {name: 'July', appointments: julyCount},
        {name: 'August', appointments: augCount},
        {name: 'September', appointments: septCount},
        {name: 'October', appointments: octCount},
        {name: 'November', appointments: novCount},
        {name: 'December', appointments: decCount}
    ]

    const apptPercentage = Math.floor((apptInfo.length / totalAppointmentsForUser) * 100 );
    // console.log('%%', apptPercentage);
    
    console.log('STATE', this.state);
        if (this.state.click === true) {
            return(
                <div>
                    <div>
                 <LineChart 
                     width={780} 
                     height={250} 
                     data={data}
                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                     onClick={(e) => {
                         this.handleClick(e.activeLabel)
                     }}>
                 <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip cursor={false} />
                 <Legend 
                     verticalAlign="top" 
                     height={36} 
                     iconType='rect'
                 />
                 <Line 
                     type="monotoneX" 
                     dataKey="appointments" 
                     stroke="#5DADE2" 
                     dot={{ 
                         stroke: '#5DADE2', 
                         strokeWidth: .5
                     }}/>
                 </LineChart>
                 </div>
                 <h1>Monthly Appointments History</h1>
                 <h2>{this.state.name}</h2>
                 
                 <h3>{apptPercentage}% of your appointments were from {this.state.name}</h3> <br />
     
                 <ul>
                     {apptDataList}
                     {/* {this.handleMessage} */}
                 </ul>
                 </div>
             );
        } else {
            return(
                <div>
                    <div>
                 <LineChart 
                     width={780} 
                     height={250} 
                     data={data}
                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                     onClick={(e) => {
                         this.handleClick(e.activeLabel)
                     }}>
                 <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip cursor={false} />
                 <Legend 
                     verticalAlign="top" 
                     height={36} 
                     iconType='rect'
                 />
                 <Line 
                     type="monotoneX" 
                     dataKey="appointments" 
                     stroke="#5DADE2" 
                     dot={{ 
                         stroke: '#5DADE2', 
                         strokeWidth: .5
                     }}/>
                 </LineChart>
                 </div>
                 
                 </div>
             );
        }
       
    }
}

