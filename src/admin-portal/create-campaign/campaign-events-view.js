import DataTable from "../../components/data-table";
import { TableFooter } from "../../components/data-table/TableFooter";
import React, { useMemo, useState } from "react";
import { SelectColumnFilter } from "../../components/data-table/filters";
import dayjs from "dayjs";
import { Col, Container, FormLabel, Row, Spinner } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "src/components/admin-components/Button";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { daysOfWeek, monthsOfYear } from "src/utils/Constants";
import { AddSelectedEvents } from "src/requests/campaign-requests";

export function CampaignEventsView({ events, campaign }) {
	const [loading, setLoading] = useState(false);

	const allEvents = events?.data || [];

	const [selectedEvents, setSelectedEvents] = useState([]);
	const { blow, pop } = useBubblyBalloons();

	const originalEvents = allEvents || [];
	const originalTestimonialSet = new Set(
		originalEvents?.map((tech) => tech.id)
	);

	const handleRemove = (data) => {
		const filteredTechnologies = selectedEvents.filter(
			(testimonial) => testimonial.id !== data.id
		);
		setSelectedEvents(filteredTechnologies);
	};
	const formatDate = (date) => {
		let d = new Date(date);
		let d_date = d.getDate();
		let day = daysOfWeek[d.getDay()];
		let month = monthsOfYear[d.getMonth()];
		let year = d.getFullYear();

		return `${day}, ${d_date} ${month} ${year} `;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const payload = {
				campaign_id: campaign?.id,
				technology_events_ids: selectedEvents.map((event) => event.id),
			};

			const res = await AddSelectedEvents(payload);

			if (res) {
				setLoading(false);
				// updateTechObject(res);
				blow({
					title: "Success",
					message: "Campaign Testimonials updated successfully.",
					type: "success",
					duration: 5000,
				});
			}
		} catch (e) {
			setLoading(false);
			pop({
				title: "Error",
				message: "Something went wrong. Please try again later.",
				type: "error",
				timeout: 5000,
			});
		}
	};

	if (loading)
		return (
			<div
				className=""
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					height: "100vh",
				}}
			>
				<Spinner color="#6e207c" radius={56} variation="TwoHalfCirclesType" />
			</div>
		);

	const EVENTS_SIZE = (selectedEvents || [])?.length;

	// console.log(selectedEvents);
	// endregion
	return (
		<Container>
			<form>
				<Row>
					<Col>
						<FormLabel>
							Choose one or more events for your campaign from the dropdown
							below.
						</FormLabel>
					</Col>
				</Row>
				<Row className="" style={{ height: "180px" }}>
					<Col>
						<MultiSelect
							options={allEvents?.map((event) => {
								return {
									...event,
									label: event?.name,
									value: event?.id,
								};
							})}
							value={selectedEvents?.map((event) => {
								return {
									...event,
									label: event?.name,
									value: event?.id,
								};
							})}
							valueRenderer={(selected, _options) => {
								if (selected?.length < 1) {
									return "Select Events...";
								}

								if (selected?.length === allEvents?.length) {
									return "All Selected";
								}
								if (selected?.length > 3) {
									return `${selected?.length} Selected`;
								}

								return selected.map(({ name, id }, i) => {
									return name + (i < allEvents?.length ? ", " : "");
								});
							}}
							onChange={(val) => {
								setSelectedEvents(val);
							}}
							labelledBy="Select"
						/>
					</Col>
				</Row>

				<Row
					className=" pb-4 justify-content-start"
					style={{ marginTop: "-5rem" }}
				>
					{EVENTS_SIZE > 0 ? (
						<>
							<table className="table">
								<thead>
									<tr>
										<th className="text-center" scope="col">
											Image
										</th>
										<th className="text-center" scope="col">
											Publicity
										</th>
										<th className="text-center" scope="col">
											Start Date
										</th>
										<th className="text-center" scope="col">
											End Date
										</th>
										<th className="text-center" scope="col">
											Invited Communities
										</th>
										<th className="text-center" scope="col">
											Event Type
										</th>
									</tr>
								</thead>
								<tbody>
									{(selectedEvents || [])?.map((event) => {
										return (
											<tr key={event?.id} className="text-sm">
												{/* <th scope="row">1</th> */}
												<td className="text-center">
													<img
														style={{
															width: "35px",
															height: "35px",
															objectFit: "cover",
															borderRadius: "5px",
														}}
														src={event?.image?.url}
														alt=""
													/>
												</td>
												<td className="text-center">{event?.publicity}</td>
												<td className="text-center">
													{formatDate(event?.start_date_and_time)}
												</td>
												<td className="text-center">
													{formatDate(event?.end_date_and_time)}
												</td>
												<td className="text-end">
													{event?.invited_communities?.length}
												</td>
												<td className="text-center">
													{event?.event_type === "" ? (
														<span>&mdash; </span>
													) : (
														event?.event_type
													)}
												</td>
												<td className="text-center">
													<span
														onClick={() => {
															handleRemove(event);
														}}
														className="d-flex table-trashcan"
													>
														<FontAwesomeIcon
															icon={faTrash}
															className={"m-auto"}
														/>
													</span>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</>
					) : null}
				</Row>

				{
					<Row className="mt-4 py-4 justify-content-end">
						<Col className="mt-4 py-4">
							<Button
								text="Save Changes"
								loading={loading}
								disabled={loading}
								onSubmit={handleSubmit}
								rounded={false}
							/>
						</Col>
					</Row>
				}
			</form>
		</Container>
	);
}
