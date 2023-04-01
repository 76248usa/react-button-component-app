import logo from './logo.svg';
import Button from '../components/Button';
import './App.css';
import { FaBeer } from 'react-icons/fa';
import {FiAperture} from 'react-icons/fi';

function ButtonPage() {

  const handleClick = () => {
    console.log('click!!!!')
  }
  return (
    <div className="App">
      <div><Button primary rounded onClick={handleClick}><FaBeer className="mr-1"/>primary </Button></div>
      <div><Button secondary onMouseOver={handleClick}> <FiAperture className="mr-1" />secondary</Button></div>
      <div><Button warning onMouseOver={handleClick}>warning</Button></div>
      <div><Button danger>danger</Button></div>
      <div><Button outline rounded>outline</Button></div>
    </div>
  );
}

export default ButtonPage;
