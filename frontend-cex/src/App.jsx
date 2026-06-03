import './App.css';
import { ButtonOne } from './components/Button';

function App() {
    return (
        <div>
            <ButtonOne text="Hello World" onClick={() => console.log('Clicked!')} />
        </div>
    );
}

export default App;
