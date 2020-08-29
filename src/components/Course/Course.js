import React from 'react';

const Course = (props) => {
    const { course_name, inst_name, price } = props.course;
    const courseStyle = {
        border: '20px solid skyblue',
        margin: '20px',
        padding: '10px'
    }

    const handleEnrollBtn = props.handleEnrollBtn;
    const btnStyle = {
        display: 'inline-block',
        padding: '15px 25px',
        fontSize: '24px',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        outline: 'none',
        color: '#fff',
        backgroundColor: '#4CAF50',
        border: 'none',
        borderRadius: '15px',
        boxShadow: '0 9px #999',
        marginBottom: '10px',
        }
        
    
    return (
        <div style={courseStyle}>
            <p>Course Name: <h2>{course_name}</h2> </p>
            <p> <small>Rewarded By:</small> <strong>{inst_name}</strong> </p>
            <p><small>Total Hours: 120 Hours</small></p>
            <h4>${price}</h4>
            <button style={btnStyle} onClick={() => handleEnrollBtn(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Course;