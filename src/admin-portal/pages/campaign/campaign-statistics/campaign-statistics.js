import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faBan,
	faBullhorn,
	faChartLine,
	faDownload,
	faGlobe,
	faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import StatsCard from "../../../../components/admin-components/StatsCard";
import { campaignData, statsData } from "../../../../utils/Constants";
import Comments from "../../../../components/admin-components/Comments";
import Testimonials from "../../../../components/admin-components/Testimonials";
import classes from "classnames";
// import Button from "../../../../components/admin-components/Button";
import useSWR from "swr";
import { fetchCampaign } from "../../../../requests/campaign-requests";
import { useParams } from "react-router-dom";
import NProgress from "nprogress";
import { AdminLayout } from "../../../../layouts/admin-layout";

export function CampaignStatistics({}) {
	const { id } = useParams();

	const CAMPAIGN = campaignData

	const campaignLoading = false;
	const campaignError = false;

	const statistics = Object.entries(CAMPAIGN?.stats);

	console.log(CAMPAIGN);

	const tabs = [
		{
			name: "Comments",
			component: <Comments campaign={CAMPAIGN} />,
		},
		{
			name: "Testimonials",
			component: <Testimonials testimonials={CAMPAIGN?.my_testimonials} />,
		},
	];

	const [activeTab, setActiveTab] = useState(tabs[0]?.name);

	return (
		<AdminLayout>
			<Container fluid className={""}>
				<Row>
					{/*region campaign content*/}
					{!campaignLoading && !campaignError ? (
						<Col>
							<div
								className="gradient-bg"
								style={{
									backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url(${CAMPAIGN?.image?.url})`,
								}}
							>
								<Container>
									<Row>
										<Col>
											<Row className="d-flex campaign-text justify-content-end">
												<Col>
													<h3 className="">CAMPAIGN</h3>
												</Col>

												<Col md={"auto"}>
													<Button
														className="btn-light mr-3"
														onClick={() => {
															window.history.back();
														}}
													>
														<FontAwesomeIcon icon={faArrowLeft} />
													</Button>
													&nbsp;
													<Button
														className={
															CAMPAIGN?.is_published
																? "disable-btn"
																: "btn-primary py-2"
														}
													>
														<FontAwesomeIcon
															icon={CAMPAIGN?.is_published ? faBan : faGlobe}
														/>{" "}
														{CAMPAIGN?.is_published ? "Unpublish" : "Publish"}
													</Button>
												</Col>
											</Row>
										</Col>
									</Row>
								</Container>
							</div>
							<Container className="title--container">
								<Row>
									<Col className="update-btn-con">
										<p
											className={CAMPAIGN?.is_published ? "active" : "inactive"}
										>
											{/* {CAMPAIGN?.is_published ? "live" : "offline"} */}
										</p>
										<button className="update-btn">
											<FontAwesomeIcon icon={faPenToSquare} /> Update
										</button>
									</Col>
								</Row>
								<Row>
									<Col className="mt-4">
										<h3 className="title-txt">
											<FontAwesomeIcon
												icon={faBullhorn}
												style={{ marginRight: "5px" }}
											/>{" "}
											{CAMPAIGN?.title}
										</h3>
										<p className="mt-4">{CAMPAIGN?.tagline}</p>
									</Col>
								</Row>
								<Row>
									<Col className="mt-4">
										<div className="d-flex gap-5">
											<p className="camp-date">
												Start Date : <span>{CAMPAIGN?.start_date}</span>
											</p>
											<p className="camp-date">
												End Date :{" "}
												<span>
													{CAMPAIGN?.end_date
														? CAMPAIGN?.end_date
														: "Not specified"}{" "}
												</span>
											</p>
										</div>
									</Col>
								</Row>
							</Container>

							<Container className="stats-cont">
								<Row>
									<Col>
										<h3 className="text-decoration-underline pt-4">
											Campaign Statistics{" "}
											<span>
												<FontAwesomeIcon icon={faChartLine} />
											</span>
										</h3>
										<div className="statss-con-div">
											{statistics?.map((data, index) => {
												return (
													<div key={index}>
														<StatsCard data={data} index={index} />
													</div>
												);
											})}
										</div>
										<div>
											<Button
												className="btn-success mr-3"
												onClick={() => {
													// download data
													window.history.back();
												}}
											>
												<FontAwesomeIcon icon={faDownload} /> Download Data File
											</Button>
										</div>
									</Col>
								</Row>
							</Container>

							<Container className="my-4">
								<Row className="mt-4">
									<div className="nav-tabs-container mt-4">
										{tabs?.map((tab) => (
											<div
												key={tab?.name}
												className={classes("nav-tabs-main tab", {
													"tab-active": activeTab === tab?.name,
												})}
												onClick={() => setActiveTab(tab?.name)}
											>
												<h5 className={classes("nav-tabs")}>{tab?.name}</h5>
											</div>
										))}
									</div>
									<Col className="mt-4"></Col>
								</Row>
								<Row className="mt-4">
									<Col className="mt-4"></Col>
								</Row>
								<Row className="">
									<Col>
										{tabs?.map((tab) => {
											return (
												activeTab === tab?.name && <div>{tab?.component}</div>
											);
										})}
									</Col>
								</Row>
							</Container>
						</Col>
					) : null}
					{/*endregion*/}

					{/*region error and loader*/}
					{!campaignLoading && campaignError ? (
						<Col>
							<h5>An error occurred</h5>
						</Col>
					) : null}

					{campaignLoading ? (
						<Col>
							<h5>Loading...</h5>
						</Col>
					) : null}
				</Row>
			</Container>
		</AdminLayout>
	);
}
