import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const Element = (
  <a href="google.com" target='_blank'>Visit Google</a>
);

const aReact = React.crateElement(
  'a',
  { href: 'google.com', target: '_blank' },
  'Visit Google'
)

createRoot(document.getElementById('root')).render(
  <App />
)
