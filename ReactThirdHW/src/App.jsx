import { useState, useEffect } from 'react'
//import UserProfileForm from './components/Task2/UserProfileForm'
import schedulesData from "./mocks/schedulesData"
import Sсhedules from './components/Task1/Schedules'
import Schedule from './components/Task1/Schedule'

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const input = prompt("Input date like 'YYYY-MM-DD'");
    if (input) {
      const [y, m, d] = input.split("-").map(Number);
      const localDate = new Date(y, m - 1, d);

      if (!isNaN(localDate)) {
        setSelectedDate(localDate);
      }
    }
  }, []);

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <Sсhedules date={selectedDate}>
        {schedulesData.map((p) => (
          <Schedule key={p.id} p={p} />
        ))}
      </Sсhedules>
    </div>

  );
}

export default App
