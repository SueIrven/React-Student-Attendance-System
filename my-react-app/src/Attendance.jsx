import { useState } from "react";

function Attendance() {

  const [students, setStudents] = useState([
    { id: 1, name: "Ali", present: true },
    { id: 2, name: "Sara", present: false },
    { id: 3, name: "Ahmed", present: true },
    { id: 4, name: "Ayesha", present: false }
  ]);

  const markAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <div className="attendance-container">

      <h1>Student Attendance</h1>

      <div className="student-list">

        {students.map((student) => (

          <div className="student-card" key={student.id}>

            <div>
              <h2>{student.name}</h2>

              {student.present ? (
                <p className="present">Present</p>
              ) : (
                <p className="absent">Absent</p>
              )}
            </div>

            <button onClick={() => markAttendance(student.id)}>
            {student.present ? "Mark Absent" : "Mark Present"}
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Attendance;
