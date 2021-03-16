
import React from "react";
import dateFns, {format, addMonths, subMonths, startOfWeek, addDays,
    startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, parse } from "date-fns";

const Calendar = (props) => {
    // state = {
    //     currentMonth: new Date(),
    //     selectedDate: new Date()
    // };

    const { currentMonth, setCurrentMonth, selectedDate, setSelectedDate } = props;

    const renderHeader = () => { 
        const dateFormat = "MMMM yyyy";
        return (
        <div className="header row flex-middle">
            <div className="col col-start">
            <div className="icon" onClick={prevMonth}>
                chevron_left
            </div>
            </div>
            <div className="col col-center">
            <span>
                {format(currentMonth, dateFormat)}
            </span>
            </div>
            <div className="col col-end" onClick={nextMonth}>
            <div className="icon">chevron_right</div>
            </div>
        </div>
        );
    }
    const renderDays = () => {
        const dateFormat = "E";
        const days = [];
        let startDate = startOfWeek(currentMonth);
        for (let i = 0; i < 7; i++) {
          days.push(
            <div className="col col-center" key={i}>
              {format(addDays(startDate, i), dateFormat)}
            </div>
          );
        }
        return <div className="days row">{days}</div>;
      }
    
    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const dateFormat = "d";
        const rows = [];
    
        let days = [];
        let day = startDate;
        let formattedDate = "";
    
        while (day <= endDate) {
          for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            days.push(
              <div
                className={`col cell ${
                  !isSameMonth(day, monthStart)
                    ? "disabled"
                    : isSameDay(day, selectedDate) ? "selected" : ""
                }`}
                key={day}
                onClick={() => onDateClick(cloneDay)}
              >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
                <span>🏡</span>
              </div>
            );
            day = addDays(day, 1);
          }
          rows.push(
            <div className="row" key={day}>
              {days}
            </div>
          );
          days = [];
        }
        return <div className="body">{rows}</div>;
      }
    
    const onDateClick = day => {
        setSelectedDate(day);
      };



    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
  
    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    return (
        <>
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </>
        );
}


export default Calendar;