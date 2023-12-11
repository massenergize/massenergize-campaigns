import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../../components/admin-components/NavigationBar";
import Button from "../../components/admin-components/Button";
import { motion as m } from "framer-motion";
import CreateNavForm from "../../components/admin-components/CreateNavForm";

const Navigation = () => {
	const [showForm, setShowForm] = useState(false);

	const data = [
		{
			id: 1,
			name: "Home Menu Group",
			url: "http://localhost:3004/admin/campaign/new",
			live: true,
			children: [
				{
					name: "Actions Page",
					url: "http://localhost:3004/admin/campaign/new",
				},
				{
					name: "Actions Page",
					url: "http://localhost:3004/admin/campaign/new",
				},
				{
					name: "Actions Page",
					url: "http://localhost:3004/admin/campaign/new",
				},
			],
		},
		{
			id: 2,
			name: "Actions Menu Group",
			url: "http://localhost:3004/admin/campaign/new",
			live: true,
			children: [
				{
					name: "Events Page",
					url: "http://localhost:3004/admin/campaign/new",
				},
			],
		},
		{
			id: 3,
			name: "Channel Menu Group",
			url: "http://localhost:3004/admin/campaign/new",
			live: true,
			children: [
				{
					name: "Sub Page",
					url: "http://localhost:3004/admin/campaign/new",
				},
			],
		},
	];

	return (
		<m.div
			initial={{ y: "10%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Container>
				<Row className="my-4">
					<Col>
						<p>
							Here, you can organize the flow of the menu on your campaign
							pages.{" "}
						</p>
					</Col>
				</Row>
				<Row className="my-4">
					<Col>
						<p className="theme-color text-link">
							Drag and drop menu groups & menu groups & menu items in the order
							they should appear on the navigation bar.
						</p>
					</Col>
				</Row>
				{data?.map((datum) => {
					return (
						<Row className="my-4">
							<Col>
								<NavigationBar data={datum} showDel={true} />
							</Col>
						</Row>
					);
				})}
			</Container>

			<Container>
				<Row className="py-4 mt-4">
					{showForm && (
						<Col className="py-4 mt-4">
							<CreateNavForm />
						</Col>
					)}
				</Row>

				{/* ................................................................................................ */}

				<Row className="py-4 mt-4">
					{!showForm && (
						<Col className="px-4">
							<button
								onClick={() => {
									setShowForm(true);
								}}
								className=" text-center btn-fill"
							>
								Add A New Menu Group
							</button>
						</Col>
					)}
				</Row>
				<Row className="py-4 justify-content-end mt-4">
					<Col className="px-4">
						<Button
							text="Save Changes"
							// onSubmit={handleUpdate}
							rounded={false}
						/>
					</Col>
				</Row>
			</Container>
		</m.div>
	);
};

export default Navigation;
