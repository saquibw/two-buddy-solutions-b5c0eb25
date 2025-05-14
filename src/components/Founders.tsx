
const Founders = () => {
  const founders = [
    {
      name: "Saquibul Islam Waheed",
      role: "Co-Founder & CTO",
      experience: "12+ years",
      expertise: "Software Architecture & Development",
      image: "/lovable-uploads/af7b92db-0aa4-48a2-b4c0-df9ad812007a.png",
      bio: "With over 12 years of experience in software development and architecture, Saquibul has led numerous successful projects from concept to completion. His expertise spans cloud infrastructure, enterprise applications, and innovative SAAS solutions."
    },
    {
      name: "Sajid Alam Chowdhury",
      role: "Co-Founder & Chief Data Scientist",
      experience: "12+ years",
      expertise: "Data Science & Analytics",
      image: "/lovable-uploads/733c12b6-f9ef-4bd5-965b-b21c1e3a13a3.png",
      bio: "Sajid brings 12+ years of expertise in data science, machine learning, and advanced analytics. His background in transforming complex data into actionable insights has helped businesses across multiple industries optimize operations and drive growth."
    }
  ];

  return (
    <section id="founders" className="bg-gray-50 py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-dark">Meet Our Founders</h2>
          <p className="text-company-gray text-lg max-w-3xl mx-auto">
            Visionary leaders with deep technical expertise and a passion for innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-company-dark">{founder.name}</h3>
                <p className="text-company-teal font-medium">{founder.role}</p>
                <div className="my-4 space-y-2">
                  <p><span className="font-semibold">Experience:</span> {founder.experience}</p>
                  <p><span className="font-semibold">Expertise:</span> {founder.expertise}</p>
                </div>
                <p className="text-company-gray">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
