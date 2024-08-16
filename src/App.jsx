
import "./app.scss";

import data from "./constants/data.json";

function App() {
  return (
    <>
     <div className="continer">
        <div className="box">
          <div className="title">
            <h4>My Course</h4>
            <h6>View All</h6>
          </div>

          <div className="mainTitle">
            <table>
              <thead>
                <tr>
                  <td>Course Name</td>
                  <td>Start Date</td>
                  <td>Lesson Completed</td>
                  <td>Duration</td>
                </tr>
              </thead>

              <tbody>
              {data.map((item, index) => ( <tr  key={index}>
                  <td>
                    <div className="logo_frame">
                      <div className="logo" >
                      <img src={item.logo} alt="No internet" />
                      </div>
                      <div className="typo">
                        <h6>{item.title}</h6>
                        <p>{item.lesson}</p>
                      </div>
                    </div>
                  </td>
                  <td>{item.start_date}</td>
                  <td>{item.lessons_completed}</td>
                  <td>{item.duration}</td>
                </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
