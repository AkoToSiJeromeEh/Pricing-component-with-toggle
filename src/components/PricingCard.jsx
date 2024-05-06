import PropTypes from "prop-types";
import AnimatedNumber from "animated-number-react";
export const PricingCard = ({ type, price, benefits, isToggle }) => {
  const Annually = Math.round(price * 12);
  

  return (
    <div
      className={` shadow-sm shadow-Light-grayish-blue text-Very-light-grayish-blue  flex items-center flex-col gap-7 justify-center w-full p-8 card  ${
        type.includes("professional")
          ? "  h-[500px] self-center    rounded-md  border-2 border-Very-light-grayish-blue"
          : `  h-fit self-center border-2 ${type.includes('basic') ? ' border-r-2 Tablet:border-r-0' : ' border-l-2  Tablet:border-l-0'} border-Very-light-grayish-blue ${
              type.includes("basic") ? "rounded-l-md" : "rounded-r-md"
            }`
      } `}
    >
      <div>
        <h2 className="text-lg  capitalize">{type}</h2>
      </div>
      <div className=" text-Gradient-2">
        <span className="text-4xl me-1 align-middle">$</span>
        <h1 className=" text-4xl  Mobile:text-6xl inline-block align-middle ">
          {isToggle ? (
            <AnimatedNumber
            value={price}
            formatValue={(value) => value.toFixed(2)}
            easing='linear'
          />
          ) : (
            
          <AnimatedNumber
            value={Annually}
            formatValue={(value) => value.toFixed(2)}
            easing='linear'
          />
          )}
        </h1>
      </div>
      <ul className="flex flex-col gap-6 items-center w-full text-center">
        {benefits?.map((data) => (
          <li
            className={` border-b-[1px] w-full ${
              type.includes("professional")
                ? " border-Very-light-grayish-blue "
                : " border-Grayish-blue"
            } p-2 `}
            key={data.id}
          >
            {data.content}
          </li>
        ))}
      </ul>
      <button
        className={`w-full p-3 rounded-md uppercase hover:bg-transparent hover:border-2 transition-all  ${
          type.includes("professional")
            ? "  bg-white text-Gradient-2 hover:bg-gradient-to-r hover:from-transparent hover:border-2 transition-all  "
            : "bg-gradient-to-r from-Gradient-1  to-Gradient-2 text-white hover:text-Gradient-2  hover:bg-gradient-to-r hover:from-transparent hover:border-2 transition-all"
        }  `}
      >
        Learn More
      </button>
    </div>
  );
};
PricingCard.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  benefits: PropTypes.array.isRequired,
  isToggle: PropTypes.bool.isRequired,
};
