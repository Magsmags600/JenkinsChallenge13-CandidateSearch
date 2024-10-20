import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

// Main app component that includes navigation and routing outlet
function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
