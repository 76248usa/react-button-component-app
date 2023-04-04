import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);

  
  const onClickChoose = (option) => {
    setSelection(option)
  }
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <Dropdown options={options} onClickChoose={onClickChoose} selection={selection} />
  );
}

export default App;

