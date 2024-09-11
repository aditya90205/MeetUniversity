const Services = () => {
  const services = [
    { icon: '🏛️', text: 'University Shortlisting' },
    { icon: '📄', text: 'Application Processing' },
    { icon: '📑', text: 'Offer Acceptance' },
    { icon: '💰', text: 'Loan Assistance' },
    { icon: '🌍', text: 'Visa Counseling' },
    { icon: '✈️', text: 'Fly' }
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Wrapper for service items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-blue-400">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {/* Icon */}
            <div className="text-4xl">{service.icon}</div>
            {/* Text */}
            <p className="text-lg font-medium">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
