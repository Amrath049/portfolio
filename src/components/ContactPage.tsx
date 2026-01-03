import Navigation from './Navigation';
import Contact from './Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Contact showBackButton={true} />
      </div>
    </div>
  );
}