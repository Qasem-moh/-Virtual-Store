import Header from './Header';
import Footer from './Footer';
import Categories from './Categories';
import Products from './Products';
import SimpleCart from './SimpleCart';

function App() {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <Products />
        <SimpleCart />
      </main>
      <Footer />
    </>
  );
}

export default App;
