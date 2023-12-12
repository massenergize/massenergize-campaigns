import React, { useMemo, useState } from "react";
import { motion as m } from "framer-motion";
import DataTable from "../../components/data-table";
import dayjs from "dayjs";
import { SelectColumnFilter } from "../../components/data-table/filters";
import { TableFooter } from "../../components/data-table/TableFooter";
const DUMMY_DATA = [
	{
		logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
		name: "Name1",
		createdAt: "2023-12-01T00:00:00Z",
		updatedAt: "2023-12-01T00:00:00Z",
		category: "Category1",
	},
	{
		logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
		name: "Name2",
		createdAt: "2023-12-02T00:00:00Z",
		updatedAt: "2023-12-02T00:00:00Z",
		category: "Category2",
	},
	{
		logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
		name: "Name3",
		createdAt: "2023-12-03T00:00:00Z",
		updatedAt: "2023-12-03T00:00:00Z",
		category: "Category3",
	},
	{
		logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
		name: "Name4",
		createdAt: "2023-12-04T00:00:00Z",
		updatedAt: "2023-12-04T00:00:00Z",
		category: "Category4",
	},
	{
		logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
		name: "Name5",
		createdAt: "2023-12-05T00:00:00Z",
		updatedAt: "2023-12-05T00:00:00Z",
		category: "Category5",
	},
	{
		logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
		name: "Name6",
		createdAt: "2023-12-06T00:00:00Z",
		updatedAt: "2023-12-06T00:00:00Z",
		category: "Category6",
	},
	{
		logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
		name: "Name7",
		createdAt: "2023-12-07T00:00:00Z",
		updatedAt: "2023-12-07T00:00:00Z",
		category: "Category7",
	},
	{
		logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
		name: "Name8",
		createdAt: "2023-12-08T00:00:00Z",
		updatedAt: "2023-12-08T00:00:00Z",
		category: "Category8",
	},
	{
		logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
		name: "Name9",
		createdAt: "2023-12-09T00:00:00Z",
		updatedAt: "2023-12-09T00:00:00Z",
		category: "Category9",
	},
	{
		logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
		name: "Name10",
		createdAt: "2023-12-10T00:00:00Z",
		updatedAt: "2023-12-10T00:00:00Z",
		category: "Category10",
	},
];

const Events = () => {
	const [data, setData] = useState(DUMMY_DATA);

	const columns = useMemo(
		() => [
			{
				id: "logo",
				Header: () => null,
				accessor: (values) => {
					const { logo } = values;
					return (
						<div>
							<img
								src={logo}
								alt="logo"
								style={{ width: "40px", height: "40px" }}
							/>
						</div>
					);
				},
				className: "text-left",
				filter: "equals",

				style: {
					textAlign: "left",
				},
			},
			{
				Filter: SelectColumnFilter,
				Header: "Name",
				accessor: "name",
				className: "text-left",
				filter: "equals",
				id: "name",
				style: {
					textAlign: "left",
				},
			},
			{
				Filter: SelectColumnFilter,
				Header: "Date",
				accessor: (values) => {
					const { createdAt } = values;
					return dayjs(createdAt).format("MM-DD-YYYY");
				},
				disableSortBy: true,
				filter: "equals",
				id: "createdAt",
				style: {
					textAlign: "center",
				},
			},

			{
				Header: "Category",
				accessor: (values) => {
					const { category } = values;
					return <span>{category}</span>;
				},
				id: "category",
				style: {
					textAlign: "center",
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

	const fetchData = async function (pageIndex, pageSize) {
		try {
		} catch (e) {
			console.log(e);
		}
	};

	// region Pagination
	const gotoPage = async function (next) {
		if (next !== pageIndex) {
			if (next < pageIndex) {
				if (canGotoPreviousPage) {
					await fetchData(next, pageSize);
				}
			} else if (next > pageIndex) {
				if (canGotoNextPage) {
					let data = await fetchData(next, pageSize);

					if (data) {
						// console.log({ pi : pageIndex + 1, pagesCount });
						if (pageIndex + 1 >= pagesCount) {
							setCanGotoNextPage(false);
						}

						if (!canGotoPreviousPage && pagesCount > 1) {
							setCanGotoNextPage(true);
						}
					}
				}
			}
		}
	};

	const previousPage = async function () {
		if (canGotoPreviousPage) {
			return await fetchData(pageIndex - 1, pageSize);
		}
	};

	const nextPage = async function () {
		if (canGotoNextPage) {
			return await fetchData(pageIndex + 1, pageSize);
		}
	};

	// endregion

	return (
		<m.div
			initial={{ y: " 10%" }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<DataTable
				className={"table-responsive-sm table"}
				columns={columns}
				data={data}
				size={pageSize}
				skipPageReset={skipPageReset}
				updateMyData={updateMyData}
				renderRowSubComponent={null}
			/>
			<TableFooter
				pageIndex={pageIndex}
				pagesCount={pagesCount}
				pageSize={pageSize}
				setPageSize={setPageSize}
				nextPage={nextPage}
				previousPage={previousPage}
				canGotoPreviousPage={canGotoPreviousPage}
				canGotoNextPage={canGotoNextPage}
				gotoPage={gotoPage}
				setPageIndex={setPageIndex}
				fetchData={fetchData}
			/>
		</m.div>
	);
};

export default Events;
