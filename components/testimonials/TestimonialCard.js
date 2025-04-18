import Image from "next/image";
import Link from "next/link";

const TestimonialCard = ({
  column,
  testimonialClass,
  data,
  index,
  activeIndex,
  changeActive,
}) => {
  return (
    <div className={column} data-aos="aos-fade-in-up">
      <div
        className={`${testimonialClass} ${
          activeIndex === index ? "active" : ""
        }`}
        onMouseEnter={() => changeActive(index)}
      >
        <div className="inner">
          <div className="client-info">
            <h4 className="title">{data.client.fullName}</h4>
            <span>{data.client.designation}</span>
          </div>

          <div className="description">
            <p className="subtitle-3">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
