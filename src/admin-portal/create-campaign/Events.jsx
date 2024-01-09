import React, { useMemo, useState } from "react";
import { motion as m } from "framer-motion";
import DataTable from "../../components/data-table";
import dayjs from "dayjs";
import { SelectColumnFilter } from "../../components/data-table/filters";
import { TableFooter } from "../../components/data-table/TableFooter";
import { CampaignEventsView } from "./campaign-events-view";

const Events = ({ campaignDetails, setCampaignDetails, setStep, lists }) => {
	const {
		allPartners,
		allManagers,
		allTechnologies,
		allCommunities,
		allEvents,
	} = lists;

	console.log({ allEvents });

	return (
		// <m.div initial={{ y: " 10%" }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
		<CampaignEventsView events={allEvents} campaign={campaignDetails} />
		// </m.div>
	);
};

export default Events;
