import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faBan,
	faBullhorn,
	faChartLine,
	faComment,
	faDownload,
	faEye,
	faHeart,
	faPenToSquare,
	faPhotoFilm,
	faShareNodes,
	faSquareShareNodes,
	faUserPlus,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import StatsCard from "../../components/admin-components/StatsCard";
import { statsData } from "../../utils/Constants";
import Comments from "../../components/admin-components/Comments";
import Testimonials from "../../components/admin-components/Testimonials";
import classes from "classnames";
import Button from "../../components/admin-components/Button";

const PreviewCampaign = () => {
	const data = statsData;

	const statistics = Object.entries(statsData?.data);

	const tabs = [
		{
			name: "Comments",
			component: Comments,
		},
		{
			name: "Testimonials",
			component: Testimonials,
		},
	];

	const [activeTab, setActiveTab] = useState(tabs[0]?.name);
	return (
		<div>
			<Container fluid>
				<div className="gradient-bg">
					<Container>
						<Row>
							<Col>
								<div className="d-flex campaign-text">
									<h3 className="">CAMPAIGN</h3>
									<div>
										<button className="disable-btn">
											<FontAwesomeIcon icon={faBan} /> Unpublish
										</button>{" "}
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<Container className="title--container">
					<Row>
						<Col className="update-btn-con">
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
								WAYLAND ENERGY CAMPAIGN
							</h3>
							<p className="mt-4">
								You are required to complete this section before you gain access
								to the other sections (tagline){" "}
							</p>
						</Col>
					</Row>
					<Row>
						<Col className="mt-4">
							<div className="d-flex gap-5">
								<p className="camp-date">
									Start Date : <span>27th Jun 2020</span>
								</p>
								<p className="camp-date">
									End Date : <span>27th Aug 2020 </span>
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col className="mt-4">
							<div className="d-flex gap-5">
								<p className="campaign-page-link">
									Visit Campaign Page{" "}
									<span>
										<FontAwesomeIcon icon={faArrowRight} />
									</span>{" "}
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
							<div className="d-all-file">
								<Button
									text="Download Data File"
									// onSubmit={handleClick}
									rounded={false}
									icon={faDownload}
								/>
							</div>
							<div className="statss-con-div">
								{statistics?.map((data, index) => {
									return (
										<div key={index}>
											<StatsCard data={data} index={index} />
										</div>
									);
								})}
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
									activeTab === tab?.name && <tab.component key={tab?.name} />
								);
							})}
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
};

export default PreviewCampaign;
