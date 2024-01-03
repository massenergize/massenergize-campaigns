import DataTable from "../../components/data-table";
import React, { useMemo, useState } from "react";
import { SelectColumnFilter } from "../../components/data-table/filters";
import { Button } from "react-bootstrap";
import { CAMPAIGN_MANAGERS } from "../../mocks/campaign";

const removeCampaignManager = async function (id) {};

export function CampaignManagersView({ events = CAMPAIGN_MANAGERS, managers }) {
	const [data, setData] = useState(managers);

	const handleRemove = async (campaign_manager_id) => {
		try {
			const updatedManagers = await removeCampaignManager(campaign_manager_id);

			// campaignManagers = updatedManagers;
		} catch (e) {}
	};

	const columns = useMemo(
		() => [
			{
				id: "image",
				Header: () => null,
				accessor: (values) => {
					const { user } = values;
					let src = user?.profile_picture?.url || "/img/fallback-img.png";
					return (
						<div>
							<img
								src={src}
								alt="logo"
								style={{ width: "40px", height: "40px" }}
								onError={() => {
									src = "/img/fallback-img.png";
								}}
							/>
						</div>
					);
				},
				className: "text-left",
				filter: "equals",

				style: {
					textAlign: "left",
					width: "50px",
				},
			},
			{
				Filter: SelectColumnFilter,
				Header: "Name",
				accessor: (values) => {
					const { user } = values;
					return (
						<div>
							<h6 className={"mb-0 fw-bold"}>{user?.full_name}</h6>
							<p className={"text-muted"}>{user?.email}</p>
						</div>
					);
				},
				className: "text-left",
				filter: "equals",
				id: "name",
				style: {
					textAlign: "left",
				},
			},
			{
				Header: () => null,
				id: "actions",
				accessor: (values) => {
					const { user } = values;

					return user;
				},
				style: {
					textAlign: "left",
					width: "100px",
				},
				disableSortBy: true,
				Cell: ({ cell }) => {
					const {
						value,
						row: { id, values },
						row,
					} = cell;

					return (
						<Button
							className={"link"}
							onClick={() => {
								// handleRemove(user?.id);
							}}
						>
							Remove
						</Button>
					);
				},
			},
		],
		[]
	);

	const [pagesCount, setPagesCount] = useState(1);
	const [pageIndex, setPageIndex] = useState(0);
	const [pageSize, setPageSize] = useState(10);

	const [skipPageReset, setSkipPageReset] = React.useState(false);
	const updateMyData = (rowIndex, columnId, value) => {
		setSkipPageReset(true);
	};

	let [canGotoPreviousPage, setCanPreviousPage] = useState(false);
	let [canGotoNextPage, setCanGotoNextPage] = useState(false);

	// endregion
	return (
		<div>
			<DataTable
				className={"table-responsive-sm table"}
				columns={columns}
				data={data}
				size={pageSize}
				skipPageReset={skipPageReset}
				updateMyData={updateMyData}
				renderRowSubComponent={null}
				rowSelect={true}
			/>
		</div>
	);
}
