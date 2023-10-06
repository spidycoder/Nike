import Hero from "./sections/Hero";
import CustomerReview from "./sections/CustomerReview";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className="max-lg:p-5">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
    </main>
  );
};
export default App;
