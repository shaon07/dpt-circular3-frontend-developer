import ButtonGroup from "../../components/buttonGroup";
import Navbar from "../../components/navbar";

type HomePageContainerType = {
  scaffold: any;
};

const buttonOptions = {
  options: [
    <span>Round Trip</span>,
    <span>One Way</span>,
    <span>Multi City</span>,
  ],
};

export default function HomepageScreen({ scaffold }: HomePageContainerType) {
  return (
    <div>
      <div>
        <ButtonGroup options={buttonOptions.options} />
      </div>
    </div>
  );
}
