import {
	faComment,
	faEye,
	faHeart,
	faPenToSquare,
	faPhotoFilm,
	faShareNodes,
	faSquareShareNodes,
	faUserPlus,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CampaignStatsPopup = ({ data }) => {
	const dummyData = [
		{
			id: 0,
			name: "John",
			email: "j@j.com",
			comment: 2323,
			likes: 423,
			progress: 44,
			views: 302320,
			shares: 232,
			testimonials: 232,
			follows: 23211,
		},
	];

	return (
		<Container className="bg-white d-flex flex-column pop-main-container">
			<Row className="pop-container">
				<Col className="pop-img-container">
					<div className="pop-img-container">
						<img
							src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696636800&semt=ais"
							alt=""
							className="pop-img"
						/>
						<div className="pop-title-container">
							<img
								src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png"
								alt=""
							/>
							<div>
								<h3>WAYLAND ENERGY CAMPAIGN</h3>
							</div>
						</div>
					</div>
				</Col>
			</Row>

			<Row className="stats-container">
				<Col>
					<div className="d-flex items-center gap-2">
						<FontAwesomeIcon icon={faComment} />
						<h6 className="mt-1">
							<span className="theme-color">2,323</span> Comments
						</h6>
					</div>
				</Col>
				<Col>
					<div className="d-flex items-center gap-2">
						<FontAwesomeIcon icon={faHeart} />
						<h6 className="mt-1">
							<span className="theme-color">2,323</span> Likes
						</h6>
					</div>
				</Col>
				<Col>
					<div className="d-flex items-center gap-2">
						<FontAwesomeIcon icon={faEye} />
						<h6 className="mt-1">
							<span className="theme-color">2,300</span> Views
						</h6>
					</div>
				</Col>
			</Row>

			<Row className="stats-container-on">
				<Col>
					<div className="d-flex items-center gap-2">
						<FontAwesomeIcon icon={faShareNodes} />
						<h6 className="mt-1">
							<span className="theme-color">1,022</span> Shares
						</h6>
					</div>
				</Col>
				<Col>
					<div className="d-flex items-center gap-2">
						<FontAwesomeIcon icon={faUsers} />
						<h6 className="mt-1">
							<span className="theme-color">1,234</span> Testimonials
						</h6>
					</div>
				</Col>
				<Col>
					<div className="d-flex items-center gap-2">
						<FontAwesomeIcon icon={faUserPlus} />
						<h6 className="mt-1">
							<span className="theme-color">2,300</span> Follows
						</h6>
					</div>
				</Col>
			</Row>
			<Row className="btn-cont-borders">
				<Col>
					<div className="d-flex items-center justify-end pb-4 gap-3 top-0 end-0">
						<button className="edit-btn">
							<FontAwesomeIcon icon={faPhotoFilm} /> Preview
						</button>
						<button className="edit-btn">
							<FontAwesomeIcon icon={faPenToSquare} /> Edit
						</button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default CampaignStatsPopup;
