import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../assets/styles/admin-styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import { useCampaignContext } from "../../../hooks/use-campaign-context";
import { useBubblyBalloons } from "../../../lib/bubbly-balloon/use-bubbly-balloons";
import {
	addTestimonials,
	fetchAllTechnologyTestimonials,
} from "../../../requests/technology-requests";
import useSWR from "swr";
import Button from "src/components/admin-components/Button";
import { FormLabel } from "react-bootstrap";

const Testimonials = () => {
	const [loading, setLoading] = useState(false);

	const [selectedTestimonials, setSelectedTestimonials] = useState([]);

	const path = useParams();

	console.log(path);

	let {
		data: payloadTestimonials,
		isValidating,
		isLoading,
		error,
	} = useSWR(
		"testimonials.list",
		async () => {
			return fetchAllTechnologyTestimonials(80);
		},
		{
			onSuccess: (data) => {
				// console.log(data);
			},
			initialData: [],
		}
	);

	const testimonials = payloadTestimonials || [];

	const { notify, pop } = useBubblyBalloons();

	const {
		campaignDetails,
		// originalCampaignDetails,
		// lists,
		// handleCampaignDetailsChange,
		// setNewCampaignDetails,
	} = useCampaignContext();

	const originalTestimonials = testimonials || [];
	const originalTestimonialSet = new Set(
		originalTestimonials?.map((tech) => tech.id)
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
				campaign_id: path?.campaign_id,
				// technology_id: technologies.map((tech) => tech.id),
				testimonial_ids: selectedTestimonials.map(
					(testimonial) => testimonial.id
				),
			};

			// console.log(payload);

			const res = await addTestimonials(payload);

			if (res) {
				setLoading(false);
				notify({
					title: "Success",
					message: "Campaign Testimonials updated successfully.",
					type: "success",
					timeout: 15000,
				});
			}
		} catch (e) {
			notify({
				title: "Error",
				message: "Something went wrong. Please try again later.",
				type: "error",
				timeout: 15000,
			});
		}
	};

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
				<Row className="mb-4 pb-4">
					<Col>
						<MultiSelect
							options={testimonials?.map((testimonial) => {
								return {
									...testimonial,
									label: testimonial.title, //FIXME use right key when ready
									value: testimonial.id,
								};
							})}
							value={selectedTestimonials}
							valueRenderer={(selected, _options) => {
								if (selected?.length < 1) {
									return "Select Testimonials...";
								}

								if (selected?.length === testimonials?.length) {
									return "All Selected";
								}

								return selected.map(({ label, id }, i) => {
									return label + (i < testimonials?.length ? ", " : "");
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
					className="mt-4 pb-4 justify-content-start"
					style={{ marginTop: "50rem" }}
				>
					{TESTIMONIALS_SIZE > 0 ? (
						<>
							<table className="table">
								<thead>
									<tr>
										<th scope="col">ID</th>
										<th scope="col">Date</th>
										<th scope="col">Title</th>
										<th scope="col">Rank</th>
										<th scope="col">Community</th>
										<th scope="col">Live</th>
										<th scope="col">User</th>
										<th scope="col">Action</th>
									</tr>
								</thead>
								<tbody>
									{(selectedTestimonials || [])?.map((testimonial) => {
										return (
											<tr className="text-sm">
												{/* <th scope="row">1</th> */}
												<td>{testimonial?.id}</td>
												<td>{testimonial?.created_at}</td>
												<td>{testimonial?.title}</td>
												<td>{testimonial?.rank}</td>
												<td>{testimonial?.community?.name}</td>
												<td>
													<p
														className={
															testimonial?.is_published &&
															testimonial?.is_approved
																? "p-2 bg-success text-white text-rounded"
																: !testimonial?.is_published &&
																  testimonial?.is_approved
																? "p-2 bg-secondary text-white text-rounded"
																: !testimonial?.is_published &&
																  !testimonial?.is_approved &&
																  "p-2 bg-danger text-white  text-rounded"
														}
													>
														{testimonial?.is_published &&
														testimonial?.is_approved
															? "Yes"
															: !testimonial?.is_published &&
															  testimonial?.is_approved
															? "No"
															: !testimonial?.is_published &&
															  !testimonial?.is_approved &&
															  "Not Approved"}
													</p>
												</td>
												<td className="text-capitalize">
													{testimonial?.user?.full_name}
												</td>
												<td>{testimonial?.action?.title}</td>
												<td>
													<span
														onClick={() => {
															handleRemove(testimonial);
														}}
														className="image-close-btn d-flex"
													>
														<FontAwesomeIcon
															icon={faClose}
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
};

export default Testimonials;
