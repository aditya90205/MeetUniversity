import timesImg from "../assets/times.png";
import incImg from "../assets/inc.png";
import techcircleImg from "../assets/techcircle.png";
import iamwireImg from "../assets/iamwire.png";
const NewsPaper = () => {
  return (
    <section className="py-8 m-9">
      <p className="text-center text-xl mb-6   md:text-3xl">
        Meet University in the News
      </p>
      <div className="container mx-auto px-6 mt-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex justify-center items-center">
            <a
              href="https://www.techcircle.in/2015/04/20/meet-the-seven-startups-picked-for-tlabs-7th-accelerator-batch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={techcircleImg} alt="tech" className="w-auto h-auto" />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="https://inc42.com/buzz/meet-the-7-startups-that-are-part-of-tlabs-batch-7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={incImg} alt="inc" className="w-auto h-auto" />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="http://www.iamwire.com/2015/04/startups-tlabs-seventh-batch/114715"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iamwireImg} alt="iamwire" className="w-auto h-auto" />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="https://timesofindia.indiatimes.com/tech-news/tlabs-launches-batch-7-across-delhi-and-bangalore/articleshow/46999368.cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={timesImg} alt="times" className="w-auto h-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPaper;
