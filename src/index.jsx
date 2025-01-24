import './style.css'
import ReactDOM from 'react-dom/client'
import ContainerWrapper from './Pages/ContainerWrapper.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

console.warn = function () {};

root.render(
    <>
    <ContainerWrapper/>

    </>
)