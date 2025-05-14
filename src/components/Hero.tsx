
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-company-dark mb-6">
              Innovative <span className="text-company-blue">Software</span> & <span className="text-company-teal">Hardware</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-company-gray mb-8 max-w-lg">
              TwoBuddySolutions delivers cutting-edge SAAS and hardware solutions to transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-company-blue hover:bg-company-blue/90 text-white">
                Explore Solutions
              </Button>
              <Button variant="outline" size="lg" className="border-company-blue text-company-blue hover:bg-company-blue/10">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-company-blue/20 to-company-teal/20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000" 
                alt="TwoBuddySolutions Technology" 
                className="relative rounded-lg shadow-xl w-full max-w-md mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
