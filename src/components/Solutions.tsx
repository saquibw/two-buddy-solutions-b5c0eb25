
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Solutions = () => {
  const solutionCategories = [
    {
      title: "Our Products",
      description: "We specialize in developing innovative SAAS solutions for various industries.",
      solutions: [
        {
          title: "MakeoverBD",
          description: "A comprehensive SAAS solution focusing on automation, client and appointment management for the beauty industry.",
          features: ["Salon management", "Appointment scheduling", "Client records", "Automated reminders"],
          website: "makeoverbd.com"
        },
        {
          title: "ParlorKoi",
          description: "A marketplace platform that lists all beauty salons and spas in your neighborhood, with one-click listing for MakeoverBD customers.",
          features: ["Salon discovery", "Integrated listings", "Customer reviews", "Booking platform"],
          website: "parlorkoi.com"
        },
        {
          title: "DoctorHub",
          description: "A specialized SAAS solution tailored to patient history management for doctors and medical practitioners.",
          features: ["Patient records", "Medical history tracking", "Appointment management", "Digital prescriptions"],
          website: "Coming soon"
        }
      ]
    }
  ];

  const handleLearnMore = (website: string) => {
    if (website && !website.includes("Coming soon")) {
      // Add https:// prefix if not present
      const url = website.startsWith('http') ? website : `https://${website}`;
      window.open(url, '_blank');
    }
  };

  return (
    <section id="solutions" className="bg-white py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">Our Solutions</h2>
          <p className="text-company-gray text-lg max-w-3xl mx-auto">
            Comprehensive suite of software solutions designed to transform businesses in healthcare and beauty sectors.
          </p>
        </div>

        <div className="space-y-20">
          {solutionCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-company-blue">{category.title}</h3>
                <p className="text-company-gray mt-2">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {category.solutions.map((solution, solutionIndex) => (
                  <Card key={solutionIndex} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                    <CardContent className="pt-6 flex-grow">
                      <h4 className="text-xl font-semibold mb-2 text-company-dark">{solution.title}</h4>
                      <p className="text-company-gray mb-4">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg className="h-5 w-5 text-company-teal mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 text-sm text-company-blue">
                        {solution.website}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className={`w-full border-company-blue text-company-blue ${solution.website && !solution.website.includes("Coming soon") ? "hover:bg-company-blue/10" : "opacity-75 cursor-default"}`}
                        onClick={() => handleLearnMore(solution.website)}
                      >
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
