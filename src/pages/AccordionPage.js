import logo from './logo.svg';
import Button from './components/Button';
import './App.css';
import { FaBeer } from 'react-icons/fa';
import {FiAperture} from 'react-icons/fi';
import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {label: 'Click here',
    content: 'Here is more info',
    id: 'qwe'},
    {label: 'Another section',
    content: 'More content to show',
   id: 'rty'},
    {label: 'More label content',
    content: 'Here is more info about the content',
  id: 'uio'},

  ]

  return <Accordion items={items}/>
}

export default AccordionPage;
