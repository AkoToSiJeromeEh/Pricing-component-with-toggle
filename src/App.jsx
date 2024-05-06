import "./App.css";
import { useState } from "react";
import { Toggler } from "./components";
import { PricingCard } from "./components";

function App() {
  const [isToggle, setToggle] = useState(false);

  const pricingData = [
    {
      id: 2,
      type: "basic",
      price: 19.99,
      benefits: [
        {
          id: 1,
          content: "500 GB Storage",
        },
        {
          id: 2,
          content: "2 Users Allowed",
        },
        {
          id: 3,
          content: "Send up to 3 GB",
        },
      ],
    },
    {
      id: 1,
      type: "professional",
      price: 24.99,
      benefits: [
        {
          id: 1,
          content: "1 TB Storage",
        },
        {
          id: 2,
          content: "5 Users Allowed",
        },
        {
          id: 3,
          content: "Send up to 10 GB",
        },
      ],
    },
    {
      id: 3,
      type: "master",
      price: 39.99,
      benefits: [
        {
          id: 1,
          content: "2 TB Storage",
        },
        {
          id: 2,
          content: "10 Users Allowed",
        },
        {
          id: 3,
          content: "Send up to 20 GB",
        },
      ],
    },
  ];

  const pricingElement = pricingData?.map((data) => (
    <PricingCard
      key={data.id}
      type={data.type}
      price={data.price}
      benefits={data.benefits}
      isToggle={isToggle}
    />
  ));
  return (
    <>
      <main className=" flex flex-col gap-10 items-center justify-center p-[0.5rem]  Mobile:p-[2rem] Tablet:p-[2rem_10rem_2rem_10rem] mt-5   Mobile:mt-0 
">
        <div>
          <h1 className="text-[1.7rem] text-Very-light-grayish-blue">Our Pricing</h1>
        </div>
        <Toggler
          rightName="Monthly"
          leftName="Anunally"
          isToggle={isToggle}
          setToggle={setToggle}
        />
        <div className="flex w-full justify-center h-full gap-5 Tablet:flex-row flex-col Tablet:gap-0 ">
          {pricingElement}
        </div>
      </main>
    </>
  );
}

export default App;
