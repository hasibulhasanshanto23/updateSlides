import React,{Component} from 'react'
import { DateRangePicker,SingleDatePicker } from "react-dates";


class DatePick extends Component{
    constructor(props){
        super(props)
        this.state={
            startDate:null,
            endDate:null

        }
    }

    render(){
        return(
        //     <DateRangePicker
        //     startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        //     startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        //     endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        //     endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        //     onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
        //     focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        //     onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        //     noBorder
        //     block
        //     regular
        //     keepOpenOnDateSelect={false}
        //     hideKeyboardShortcutsPanel
        //     enableOutsideDays
        //     displayFormat="D MMM YY"
        //     readOnly={true}
        //     customArrowIcon={<span />}
        //     transitionDuration={500}
        //     calendarInfoPosition="top"
        //   />

        <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
            noBorder
            
/>
        )
    }
}

export default DatePick