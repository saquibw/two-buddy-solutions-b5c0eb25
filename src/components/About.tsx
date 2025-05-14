
import { Card, CardContent } from "@/components/ui/card";
import { Database, Code, Server } from "lucide-react";

const About = () => {
  const features = [
    {
      title: "SAAS Solutions",
      description: "Custom software as a service products tailored to your business needs with scalable architecture and intuitive interfaces.",
      icon: <Code className="h-8 w-8 text-company-blue" />
    },
    {
      title: "Hardware Solutions",
      description: "Innovative hardware products designed for optimal performance and reliability to support your operational demands.",
      icon: <Server className="h-8 w-8 text-company-teal" />
    },
    {
      title: "Data Science",
      description: "Advanced analytics and data processing capabilities that transform raw data into actionable business intelligence.",
      icon: <Database className="h-8 w-8 text-company-blue" />
    }
  ];

  return (
    <section id="about" className="bg-white py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">About TwoBuddySolutions</h2>
          <p className="text-company-gray text-lg max-w-3xl mx-auto">
            We are a leading technology company specializing in SAAS and hardware solutions that empower businesses to thrive in the digital era.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-company-dark">{feature.title}</h3>
                <p className="text-company-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-company-dark">Our Mission</h3>
          <p className="text-company-gray text-lg">
            At TwoBuddySolutions, we're committed to creating innovative technology solutions that solve real-world problems and drive business growth. Our mission is to empower organizations with tools that enhance productivity, streamline operations, and create competitive advantages in an increasingly digital marketplace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
