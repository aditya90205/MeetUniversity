const StudyOptions = () => {
  const studyOptions = [
    {
      country: 'Study in UK',
      flag: '🇬🇧',
      benefits: [
        'Four of the top six Universities of the world are in the UK',
        'Get Faster Master Degrees',
        'Work while you earn (20 hours Pw)',
        'Multiple Scholarships Available',
      ],
    },
    {
      country: 'Study in Australia',
      flag: '🇦🇺',
      benefits: [
        'Application fee waiver',
        '2-4 years of Post Study Work Visa',
        'Work Part-Time while studying',
        'PR options available',
      ],
    },
    {
      country: 'Study in Singapore',
      flag: '🇸🇬',
      benefits: [
        'Closer to home',
        'Affordable Quality Education',
        'Top Tier Educational Institutes',
        'Home to Top Business Companies',
      ],
    },
    {
      country: 'Study in USA',
      flag: '🇺🇸',
      benefits: [
        'Most popular study abroad destination',
        'Hub to the Highest-ranked universities',
        'High quality Education System',
        'Excellent work opportunities',
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studyOptions.map((option, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-2">{option.flag}</span>
                {option.country}
              </h3>
              <ul className="list-disc pl-6">
                {option.benefits.map((benefit, i) => (
                  <li key={i} className="text-sm mb-2">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyOptions;
