import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id1090576634"
        demoText="Try Demo" // Default text for Kite
        learnMoreText="Learn More" // Default text for Kite
        showDemoArrow={true} // Show the demo arrow
        showLearnMoreArrow={true} // Show the learn more arrow
      />
      <RightSection
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        imageURL="media/images/console.png"
        learnMoreText="Learn More" // Keep default text for Console
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha/id1245466513"
        demoText="Coin"  // Custom text for Coin section
        learnMoreText={null}  // Custom text for Coin section
        showDemoArrow={true} // Hide the demo arrow for Coin
        showLearnMoreArrow={false} // Hide the learn more arrow for Coin
      />
      <RightSection
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
        imageURL="media/images/kiteconnect.png"
        learnMoreText="Kite Connect" // Change the text to "Kite Connect"
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1234567890"
        demoText="Varsity Mobile" // Default text for Varsity
        learnMoreText={null} // Default text for Varsity
        showDemoArrow={true} // Hide the demo arrow for Varsity
        showLearnMoreArrow={false} // Hide the learn more arrow for Varsity
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
