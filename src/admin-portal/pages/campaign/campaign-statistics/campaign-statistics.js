import React, { useState } from "react";
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
import { campaignData } from "../../../../utils/Constants";
import Comments from "../../../../components/admin-components/Comments";
import Testimonials from "../../../../components/admin-components/Testimonials";
import classes from "classnames";
// import Button from "../../../../components/admin-components/Button";
import { Link, useParams } from "react-router-dom";
import { AdminLayout } from "../../../../layouts/admin-layout";
import useSWR from "swr";
import { fetchCampaign } from "../../../../requests/campaign-requests";
import NProgress from "nprogress";
import { apiCall } from "../../../../api/messenger";
import CustomToast from "../../../../components/admin-components/CustomToast";
import Loading from "../../../../components/pieces/Loading";

export function CampaignStatistics({}) {
	const { id } = useParams();

	const [showToast, setShowToast] = useState(false);

	const {
		data: campaign,
		isLoading: campaignLoading,
		isValidating: campaignValidating,
		error: campaignError,
	} = useSWR(
		`campaign.info/${id}`,
		async () => {
			return await fetchCampaign(id);
		},
		{
			onSuccess: (data) => {
				// console.log({ data });
			},
		}
	);
	const CAMPAIGN = campaign || {};

	const statistics = Object.entries(CAMPAIGN?.stats || {});

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

	console.log({ CAMPAIGN });

	return (
		<AdminLayout>
			<Container fluid className={""}>
				{/*region campaign content*/}
				{!campaignLoading && !campaignError ? (
					<>
						<Row
							className="gradient-bg"
							style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		              url(${CAMPAIGN?.image?.url})`,
							}}
						>
							<Col>
								<Container className={"px-5"} style={{ maxWidth: "100" }}>
									<Row className="campaign-text justify-content-end">
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
													CAMPAIGN?.is_published ? "disable-btn" : "btn-primary"
												}
											>
												<FontAwesomeIcon
													icon={CAMPAIGN?.is_published ? faBan : faGlobe}
												/>{" "}
												{CAMPAIGN?.is_published ? "Unpublish" : "Publish"}
											</Button>
										</Col>
									</Row>
								</Container>
							</Col>
						</Row>

						<Container className={"px-5"} style={{ maxWidth: "100" }}>
							<Row className="title--container rounded-4 px-4 py-5">
								<Col className="mt-4">
									<h3 className="title-txt">
										<FontAwesomeIcon
											icon={faBullhorn}
											style={{ marginRight: "5px" }}
										/>{" "}
										{CAMPAIGN?.title}
									</h3>
									<p className="mt-4">{CAMPAIGN?.tagline}</p>
									<Row>
										<Col className="mt-4">
											<div className="d-flex gap-5">
												<p className="camp-date">
													Start Date :{" "}
													<span>
														{CAMPAIGN?.start_date
															? CAMPAIGN?.start_date
															: "Not specified"}
													</span>
												</p>
												<p className="camp-date">
													End Date :{" "}
													<span>
														{CAMPAIGN?.end_date
															? CAMPAIGN?.end_date
															: "Not specified"}
													</span>
												</p>
											</div>
										</Col>
									</Row>
								</Col>
								<Col className="update-btn-con">
									<p
										className={CAMPAIGN?.is_published ? "active" : "inactive"}
									></p>
									<Link
										className="update-btn btn btn-primary py-2 px-3"
										to={`/admin/campaign/${id}/edit`}
									>
										<FontAwesomeIcon icon={faPenToSquare} /> Update
									</Link>
								</Col>
							</Row>

							<Row>
								<Col>
									<h3 className=" pt-4">
										Campaign Statistics{" "}
										{/*<span><FontAwesomeIcon icon={faChartLine}/></span>*/}
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
												window.history.back();
											}}
										>
											<FontAwesomeIcon icon={faDownload} /> Download Data File
										</Button>
									</div>
								</Col>
							</Row>

							<Row className="mt-4">
								<Col className="mt-4">
									<div className="nav-tabs-container mt-4">
										{tabs?.map((tab, index) => (
											<div
												key={tab?.name}
												className={classes("nav-tabs-main tab", {
													"tab-active": activeTab === tab?.name,
													"rounded-left": index === 0,
													"rounded-right": index === tabs.length - 1,
												})}
												onClick={() => setActiveTab(tab?.name)}
											>
												<h5 className={classes("nav-tabs")}>{tab?.name}</h5>
											</div>
										))}
									</div>
								</Col>
							</Row>

							<Row className="mt-4">
								<Col>
									{tabs?.map((tab) => {
										return (
											activeTab === tab?.name && <div>{tab?.component}</div>
										);
									})}
								</Col>
							</Row>
						</Container>
					</>
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
						<Loading />
					</Col>
				) : null}
			</Container>
		</AdminLayout>
	);
}
