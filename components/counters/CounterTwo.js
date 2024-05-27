import CounterData from "../../data/Counters.json";
import CounterCardOne from "./CounterCardOne";
import SectionTitle from "../common/SectionTitle";

const CounterTwo = () => {
  const counterClass = (i) => {
    if (i === 0) return "axil-counterup text-center counter-1";
    else if (i === 1)
      return "axil-counterup text-center color-style-two mt--60 mt_mobile--40";
    else if (i === 2)
      return "axil-counterup text-center color-style-three mt_mobile--40";
    else if (i === 3)
      return "axil-counterup text-center color-style-four mt--60 mt_mobile--40";
  };

  return (
    <div className="axil-counterup-area ax-section-gap bg-color-lightest">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <SectionTitle
              title="What Sets Us Apart"
              subtitle="Why Us"
              description="What sets Wordnox apart is our unwavering commitment to our clients' success. We don't just focus on completing projects; we focus on achieving our clients' business goals. With five years of experience working with businesses across sectors, from local startups to multinational corporations, we have honed our craft and gained invaluable insights into strategies that work. Transparency and trust are at the core of everything we do, ensuring that our clients are always informed and confident in our partnership."
              color="extra08-color"
              alignment="left"
            />
          </div>

          <div className="col-lg-5 offset-xl-1 col-12 mt_md--40 mt_sm--40">
            <div className="row">
              {CounterData?.map((counter, index) => (
                <CounterCardOne
                  key={`counter-${index}`}
                  column="col-lg-6 col-md-6 col-sm-6 col-6"
                  counterClass={counterClass(index)}
                  data={counter}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterTwo;
