import { Button, Card, Col, Row } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';

export default ({ course }) => {
  const { user } = useContext(AuthContext);

  return (
    <Row className='courseDetails__row'>
      <Col>
        <Card className='courseDetails__info'>
          <p className='courseDetails__shortID'>Exam ID: {course.shortID}</p>
          <p>
            <strong>Course Code:</strong> {course.code}
          </p>
          <p>
            <strong>Exam title:</strong> {course.name}
          </p>
          <p>
            <strong>Session:</strong> {course.session}
          </p>
          {user.userLevel === 1 && (
            <>
              <Button type='primary' className='courseDetails__takeAttendance'>
                <Link to={`/course/${course.shortID}/attendanceForm`}>
                  Create Exam Attendance
                </Link>
              </Button>

              <br />
              <br />
            </>
          )}
          <br />
          <Link to={`/course/${course.shortID}/attendanceList`}>
            Exam Attendance List
          </Link>
        </Card>
      </Col>
    </Row>
  );
};
