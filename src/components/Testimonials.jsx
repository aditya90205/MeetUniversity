import agImage from '../assets/ag.png';
import sImage from '../assets/shubhamtesti.jpg';
import kImage from '../assets/k.jpg';
const Testimonials = () => {
  const testimonials = [
    {
      name: "Amaresh Gadela",
      quote:
        "They are well versed and helped me in applying my Australian Visa. I would like to suggest an individual to go with them for a hassle-free procedure.",
      image: agImage, // Replace with actual image source
    },
    {
      name: "Shubham Bathwal",
      quote:
        "I would like to thank the team of Meet University. I was totally confused as to what to do after my 12th. I met the team and they helped and guided me in choosing what will be best for me. After the final choice, it was the team who did all the work right from my application to my final visa to the UK.",
      image: sImage, // Replace with actual image source
    },
    {
      name: "Kratagya Singhal",
      quote:
        "Good team, working hard to fulfill their commitments. Proper guidance through the process of university applications. Good assistance in the research part, but some improvements can be made in editing. Nonetheless, great work completed on a short deadline.",
      image: kImage, // Replace with actual image source
    },
  ];

  return (
    <section className="hidden md:block  py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-2xl font-semibold mb-10">TESTIMONIALS</h2>
        <div className="space-y-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-center space-x-6">
              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              {/* Testimonial Content */}
              <div>
                <p className="text-lg italic mb-2">{testimonial.quote}</p>
                <p className="font-semibold text-md">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
