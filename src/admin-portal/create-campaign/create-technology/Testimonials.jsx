import React, { useState } from "react";
import "../../../assets/styles/admin-styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { MultiSelect } from "react-multi-select-component";
import {
	addTestimonials,
	fetchAllTechnologyTestimonials,
} from "../../../requests/technology-requests";
import { Spinner } from "@kehillahglobal/ui";
import useSWR from "swr";
import Button from "src/components/admin-components/Button";
import { FormLabel } from "react-bootstrap";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { Button as BTN, Container, Col, Row } from "react-bootstrap";

const Testimonials = ({
	campaign_id,
	tech_id,
	techObject,
	updateTechObject,
}) => {
	let existing = [
		...(techObject?.testimonials || [])?.map((testimonial) => {
			return { ...testimonial, id: testimonial?.testimonial };
		}),
	].flat();

	const [loading, setLoading] = useState(false);
	const { blow, pop } = useBubblyBalloons();

	const [selectedTestimonials, setSelectedTestimonials] = useState(
		existing || []
	);

	let {
		data: payloadTestimonials,
		isValidating,
		isLoading,
		error,
	} = useSWR(
		"testimonials.list",
		() => fetchAllTechnologyTestimonials(campaign_id),
		{
			shouldRetryOnError: true,
			errorRetryCount: 3,
			errorRetryInterval: 3000,
		}
	);

	const handleRemove = (data) => {
		const filteredTechnologies = selectedTestimonials.filter(
			(testimonial) => testimonial.id !== data.id
		);
		setSelectedTestimonials(filteredTechnologies);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const payload = {
				campaign_id: campaign_id,
				technology_id: tech_id,
				testimonial_ids: selectedTestimonials.map(
					(testimonial) => testimonial.id
				),
			};

			const res = await addTestimonials(payload);

			if (res) {
				setLoading(false);
				updateTechObject(res);
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

	if (isLoading)
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

	const TESTIMONIALS_SIZE = (selectedTestimonials || [])?.length;

	return (
		<Container>
			<form>
				<Row>
					<Col>
						<FormLabel>
							Choose one or more testimonials for your campaign from the
							dropdown below.
						</FormLabel>
					</Col>
				</Row>
				<Row className="" style={{ height: "180px" }}>
					<Col>
						<MultiSelect
							options={payloadTestimonials?.map((testimonial) => {
								return {
									...testimonial,
									label: testimonial.title,
									value: testimonial.id,
								};
							})}
							value={selectedTestimonials?.map((testimonial) => {
								return {
									...testimonial,
									label: testimonial.title,
									value: testimonial.id,
								};
							})}
							valueRenderer={(selected, _options) => {
								if (selected?.length < 1) {
									return "Select Testimonials...";
								}

								if (selected?.length === payloadTestimonials?.length) {
									return "All testimonials selected";
								}
								if (selected?.length > 3) {
									return `${selected?.length} testimonials selected`;
								}

								return selected.map(({ title, id }, i) => {
									const truncatedTitle =
										title.length > 30 ? title.slice(0, 30) + "..." : title;
									return (
										truncatedTitle +
										(i < payloadTestimonials?.length - 1 ? ", " : "")
									);
								});
							}}
							onChange={(val) => {
								setSelectedTestimonials(val);
							}}
							labelledBy="Select"
						/>
					</Col>
				</Row>

				<Row
					className=" pb-4 justify-content-start"
					style={{ marginTop: "-5rem" }}
				>
					{TESTIMONIALS_SIZE > 0 ? (
						<>
							<table className="table">
								<thead>
									<tr>
										<th scope="col">Title</th>
										<th scope="col">Community</th>
										<th scope="col">User</th>
										<th scope="col"></th>
									</tr>
								</thead>
								<tbody>
									{(selectedTestimonials || [])?.map((testimonial) => {
										return (
											<tr className="text-sm">
												<td>{testimonial?.title}</td>
												<td>{testimonial?.community?.name}</td>
												<td className="text-capitalize">
													{testimonial?.user?.full_name}
												</td>
												<td className="text-cnter">
													<BTN
														// style={{ marginLeft: 10 }}
														onClick={() => {
															if (
																window.confirm(
																	"Are you sure you want to remove this testimonial?"
																)
															) {
																handleRemove(testimonial);
															}
														}}
														variant="primary"
													>
														<span>Remove</span>
													</BTN>
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
};

export default Testimonials;
