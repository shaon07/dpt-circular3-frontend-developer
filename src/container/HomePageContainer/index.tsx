/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import HomepageScreen from "../../screens/HomePageScreen/HomepageScreen";
import rawText from "../../../data/LHR_CDG_ADT1_TYPE_1.txt";

export default function HomePageContainer() {
  const [flightData, setFlightData] = useState<any[]>([]);

  const appScaffold:any = {
    flightData,
  };

  appScaffold.getFlightData = () => {
    fetch(rawText)
      .then((r) => r.json())
      .then((text) => {
        setFlightData(text?.flightOffer);
      });
  };

  return (
    <div>
      <HomepageScreen scaffold={appScaffold} />
    </div>
  );
}
