import ButtonGroup from "../../components/buttonGroup";
import InputBox from "../../components/inputBox";
import Navbar from "../../components/navbar";
import SelectBox from "../../components/selectBox";

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

      <hr className="h-px mt-4 my-3 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex items-center gap-2">
        <InputBox />
        <InputBox />
        <InputBox type="date" />

        <div className="flex items-center gap-2 w-full">
          <SelectBox
            placeholder="Day-"
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
            ]}
          />
          <SelectBox
            placeholder="Day+"
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
            ]}
          />
          <SelectBox
            placeholder="Anytime"
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
            ]}
          />

          <div className="flex items-center gap-2">
            <span className="text-2xl">+</span>
            <SelectBox
              placeholder="ADT"
              className="flex-3"
              options={[
                { value: "ADT", label: "ADT" },
                { value: "ADT2", label: "ADT2" },
              ]}
            />
            <SelectBox
              placeholder="1"
              className="flex-3"
              options={[
                { value: "1", label: "ADT" },
                { value: "1", label: "ADT2" },
              ]}
            />
            <span className="text-2xl">+</span>
          </div>
        </div>
      </div>

      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}