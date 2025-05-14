
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Solutions = () => {
  const solutionCategories = [
    {
      title: "SAAS Products",
      description: "Our cloud-based software solutions deliver powerful functionality with the flexibility of software-as-a-service.",
      solutions: [
        {
          title: "Enterprise Resource Planning",
          description: "Comprehensive ERP solution that integrates all facets of business operations on a single platform.",
          features: ["Modular architecture", "Real-time analytics", "Multi-device support"]
        },
        {
          title: "Customer Relationship Management",
          description: "Advanced CRM system that optimizes customer interactions and streamlines sales processes.",
          features: ["Lead management", "360° customer view", "Automation tools"]
        },
        {
          title: "Business Intelligence Platform",
          description: "Data visualization and analytics platform that transforms raw data into actionable insights.",
          features: ["Interactive dashboards", "Predictive analytics", "Custom reporting"]
        }
      ]
    },
    {
      title: "Hardware Solutions",
      description: "Cutting-edge hardware products designed for performance, reliability, and seamless integration.",
      solutions: [
        {
          title: "IoT Sensor Networks",
          description: "Connected sensor systems for industrial monitoring, environmental tracking, and smart infrastructure.",
          features: ["Low power consumption", "Wireless connectivity", "Cloud integration"]
        },
        {
          title: "Edge Computing Devices",
          description: "Powerful edge computing hardware for processing data closer to the source.",
          features: ["Distributed architecture", "Real-time processing", "Secure communications"]
        },
        {
          title: "Custom Hardware Development",
          description: "Bespoke hardware solutions tailored to specific business requirements and use cases.",
          features: ["Requirements analysis", "Prototype development", "Manufacturing support"]
        }
      ]
    }
  ];

  return (
    <section id="solutions" className="bg-white py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">Our Solutions</h2>
          <p className="text-company-gray text-lg max-w-3xl mx-auto">
            Comprehensive suite of software and hardware solutions designed to address complex business challenges.
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
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-company-blue text-company-blue hover:bg-company-blue/10">
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
