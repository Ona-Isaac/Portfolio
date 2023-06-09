import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero, WhatsUnique, Insights } from '../sections';

const Page = () => (
  <div className="bg-black overflow-hidden">
    <Navbar />
    <div className="gradient-03 z-0" />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsUnique />
    </div>
    <div className="relative">
      {/* <World /> */}
      <div className="gradient-04 z-0" />
      <Insights />
    </div>
    <Footer />
  </div>
);

export default Page;
