import { CampaignEventsView } from "./campaign-events-view";

const Events = ({lists, originalCampaignDetails}) => {
  const {
    allEvents,
  } = lists;

  console.log({ allEvents });

  return (<CampaignEventsView events={allEvents} campaign={originalCampaignDetails} />);
};

export default Events;
