import './App.css';
import TaskOne from './components/Task-01';
import TaskTwo from './components/Task-02';
import TaskThree from './components/Task-03';
import TaskFour from './components/Task-04';

function App() {
  return (
    <>
      <div  className='container'>
        <div  className='container-2'>
          <TaskOne />
          <TaskTwo />
          <TaskThree />
        </div>
          <TaskFour />
      </div>
    </>
  );
}

export default App;
