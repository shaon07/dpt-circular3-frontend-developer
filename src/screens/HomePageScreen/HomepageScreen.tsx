import moment from "moment";
import Button from "../../components/button";
import ButtonGroup from "../../components/buttonGroup";
import CheckBox from "../../components/checkBox";
import Divider from "../../components/divider";
import InputBox from "../../components/inputBox";
import RadioBox from "../../components/radioBox";
import SelectBox from "../../components/selectBox";
import Table from "../../components/table";

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
  const tableColumns = [
    {
      title: <span>FLIGHT</span>,
      dataIndex: "flight",
      key: "flight",
    },
    {
      title: <span>AIRCRAFT</span>,
      dataIndex: "aircraft",
      key: "aircraft",
    },
    {
      title: <span>CLASS</span>,
      dataIndex: "class",
      key: "class",
    },
    {
      title: <span>FARE</span>,
      dataIndex: "fare",
      key: "fare",
    },
    {
      title: <span>ROUTE</span>,
      dataIndex: "route",
      key: "route",
    },
    {
      title: <span>DEPARTURE</span>,
      dataIndex: "departure",
      key: "departure",
    },
    {
      title: <span>ARRIVAL</span>,
      dataIndex: "arrival",
      key: "arrival",
    },
    {
      title: <span>DURATION</span>,
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: <span>PRICE</span>,
      dataIndex: "price",
      key: "price",
    },
  ];

  const tableData = scaffold.flightData?.map((flight, index) => {
    const segments = flight?.itineraries
      ?.map((itinerary) => itinerary)
      ?.map((itinerary) => itinerary?.segments);

    const flightClass = flight?.class;

    const render = {
      flight: (
        <span key={index} className="flex flex-col">
          {segments?.map((item) => {
            return item?.map((segment, _index) => {
              return (
                <span key={_index}>
                  {segment?.carrierCode} {segment?.aircraft}
                </span>
              );
            });
          })}
        </span>
      ),

      aircraft: (
        <span key={index} className="flex flex-col">
          {segments?.map((item) => {
            return item?.map((segment, _index) => {
              return <span key={_index}>{segment?.flightNumber}</span>;
            });
          })}
        </span>
      ),

      class: (
        <div key={"class"} className="flex flex-col">
          {flightClass?.map((cls) => {
            return cls?.map((item, _index) => {
              return <span key={_index}>{item}</span>;
            });
          })}
        </div>
      ),

      fareBasis: (
        <div key={"fareBasis"} className="flex flex-col">
          {flight?.fareBasis?.map((fare) => {
            return fare?.map((item, _index) => {
              return <span key={_index}>{item}</span>;
            });
          })}
        </div>
      ),

      route: (
        <span key={"route"} className="flex flex-col">
          {segments?.map((item) => {
            return item?.map((segment, _index) => {
              return (
                <span key={_index}>
                  {segment?.arrival?.iataCode}-{segment?.departure?.iataCode}
                </span>
              );
            });
          })}
        </span>
      ),

      departure: (
        <span key={index} className="flex flex-col">
          {segments?.map((item) => {
            return item?.map((segment, index) => {
              return (
                <span key={index}>
                  {moment(segment?.departure?.at).format("lll")}
                </span>
              );
            });
          })}
        </span>
      ),

      arrival: (
        <span key={index} className="flex flex-col">
          {segments?.map((item) => {
            return item?.map((segment, index) => {
              return (
                <span key={index}>
                  {moment(segment?.arrival?.at).format("lll")}
                </span>
              );
            });
          })}
        </span>
      ),

      duration: (
        <span key={index} className="flex flex-col">
          {flight?.itineraries?.map((item) => {
            return <span key={index}>{item?.duration || "cc"}</span>;
          })}
        </span>
      ),

      price: (
        <span key={index} className="flex justify-center items-center flex-col">
          <span>{flight?.price}</span>
          <Button>Select</Button>
        </span>
      ),
    };

    return Object.values(render);
  });

  return (
    <form>
      <div>
        <ButtonGroup options={buttonOptions.options} />
      </div>

      <Divider />
      <div className="flex items-center gap-2">
        <InputBox value="LHR" />
        <InputBox value="CDG" />
        <InputBox value="2022-01-01" type="date" />

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

      <Divider />

      <div className="flex items-center gap-2 justify-between">
        <CheckBox label="Extra Options" />
        <RadioBox
          label="Environment"
          options={[
            { value: "1", label: "Dummy" },
            { value: "2", label: "PDT" },
          ]}
        />
        <Button onClick={scaffold.getFlightData}>Search</Button>
      </div>

      <Divider />

      {scaffold.flightData?.length > 0 && (
        <div>
          <Table data={tableData} columns={tableColumns} />
        </div>
      )}
    </form>
  );
}
