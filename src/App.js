import { Header } from './components/Header';
import { Shop } from './components/Shop';
import { Footer } from './components/Footer';
import { ContextPrvider } from './context';

function App() {
  return (
    <>
      <Header />
      <ContextPrvider>
        <Shop />
      </ContextPrvider>      
      <Footer />
    </>
  );
}

export default App;
