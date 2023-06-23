import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const App = () => {
  const [selected, setSelected] = useState([]);

  const [options, setOptions] = useState([
    {
      id: 1,
      label: "priya",
      dob: "22/05/2000",
      gender: "female",
      bp: "120/80",
      respirationRate: "18",
      heartRate: 70,
      value: "priya",
      heartRate: "70",
      pulse: "50",
    },
    {
      id: 2,
      label: "kavitha",
      dob: "21/05/2000",
      gender: "female",
      bp: "180/80",
      respirationRate: "20",
      value: "kavitha",
      heartRate: "70",
      pulse: "50",
    },
    {
      id: 3,
      label: "Divya",
      dob: "20/05/2000",
      gender: "female",
      bp: "120/80",
      respirationRate: "17",
      value: "Divya",
      heartRate: "70",
      pulse: "50",
    },
    {
      id: 4,
      label: "joe",
      dob: "18/05/2000",
      gender: "female",
      bp: "120/80",
      respirationRate: "18",
      value: "joe",
      heartRate: "200",
      pulse: "150",
    },
    {
      id: 5,
      label: "pradeepa",
      dob: "4/05/2000",
      gender: "female",
      bp: "170/80",
      respirationRate: "20",
      value: "pradeepa",
      heartRate: "70",
      pulse: "50",
    },
    {
      id: 6,
      label: "lavanya",
      dob: "3/05/2000",
      gender: "female",
      bp: "120/80",
      respirationRate: "16",
      value: "lavanya",
      heartRate: "70",
      pulse: "50",
    },
  ]);

  const numAscending = [...selected].sort((a, b) => (a.id > b.id ? 1 : -1));

  const selectChange = (val) => {
    let change = [...val].map((ele) => JSON.stringify(ele));

    const filteredOptions = [...options] // duplicate options
      .filter((e) => {
        // converting option item to string for compare
        return !change.includes(JSON.stringify(e));
      });
    let initial = [...val, ...filteredOptions];
    setOptions(initial);
    setSelected(val);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Select Patient name</h1>
      <div
        style={{
          margin: "50px",
        }}
      >
        <div style={{ width: "30%", marginLeft: "70%" }}>
          <MultiSelect
            options={options}
            value={numAscending}
            onChange={selectChange}
            labelledBy="Select"
          />
        </div>
        <div style={{ width: "50%", margin: "10px" }}>
          {!selected ? (
            <div>
              {selected.map((e) => (
                 <>
                 <label>Patient Name:{e.label}</label>
                 <br></br>
                 <label>DOB:{e.dob}</label>
                 <br></br>
                 <label>Gender:{e.gender}</label>
                 <br></br>
                 {e.respirationRate > 100 ? (
                   <label style={{ backgroundColor: "red" }}>
                     Respiration Rate:{e.respirationRate}
                   </label>
                 ) : (
                   <label>Respiration Rate:{e.respirationRate}</label>
                 )}
                 <br></br>
                 {e.heartRate > 100 ? (
                   <label style={{ backgroundColor: "red" }}>
                     Heart Rate:{e.heartRate}
                   </label>
                 ) : (
                   <label>Heart Rate:{e.heartRate}</label>
                 )}

                 <br></br>
       
                 {e.pulse > 100 ? (
                   <label style={{ backgroundColor: "orange" }}>
                     Pulse{e.pulse}
                   </label>
                 ) : (
                   <label>Heart Rate:{e.heartRate}</label>
                 )}
                 <br></br>
                 {e.bp > "120/80" ? (
                   <label style={{ backgroundColor: "yellow", width: "25%" }}>
                     BP:{e.bp}
                   </label>
                 ) : (
                   <>
                     <label>BP:{e.bp}</label>
                     <br></br>
                     <label>Respiration Rate:{e.respirationRate}</label>
                     <br></br>
                     <label>Heart Rate:{e.heartRate}</label>
                     <br></br>
                     <label>Pulse:{e.pulse}</label>
                     <br></br>
                   </>
                 )}
                 <hr></hr>
               </>
              ))}
            </div>
          ) : (
            <div>
              {options.map((e) => (
                <>
                  <label>Patient Name:{e.label}</label>
                  <br></br>
                  <label>DOB:{e.dob}</label>
                  <br></br>
                  <label>Gender:{e.gender}</label>
                  <br></br>
                  {e.respirationRate > 100 ? (
                    <label style={{ backgroundColor: "red" }}>
                      Respiration Rate:{e.respirationRate}
                    </label>
                  ) : (
                    <label>Respiration Rate:{e.respirationRate}</label>
                  )}
                  <br></br>
                  {e.heartRate > 100 ? (
                    <label style={{ backgroundColor: "red" }}>
                      Heart Rate:{e.heartRate}
                    </label>
                  ) : (
                    <label>Heart Rate:{e.heartRate}</label>
                  )}

                  <br></br>
        
                  {e.pulse > 100 ? (
                    <label style={{ backgroundColor: "orange" }}>
                      Pulse{e.pulse}
                    </label>
                  ) : (
                    <label>Heart Rate:{e.heartRate}</label>
                  )}
                  <br></br>
                  {e.bp > "120/80" ? (
                    <label style={{ backgroundColor: "yellow", width: "25%" }}>
                      BP:{e.bp}
                    </label>
                  ) : (
                    <>
                      <label>BP:{e.bp}</label>
                      <br></br>
                      <label>Respiration Rate:{e.respirationRate}</label>
                      <br></br>
                      <label>Heart Rate:{e.heartRate}</label>
                      <br></br>
                      <label>Pulse:{e.pulse}</label>
                      <br></br>
                    </>
                  )}
                  <hr></hr>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
