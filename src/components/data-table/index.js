import React, { Fragment } from "react";
import * as classes from "classnames";

import {
	useExpanded,
	useFilters,
	usePagination,
	useSortBy,
	useTable,
} from "react-table";
import { DefaultColumnFilter } from "./filters";

import { Button, Col, Row, Table } from "react-bootstrap";

function ArrowDownIcon(props) {
	return (
		<svg
			width={10}
			height={10}
			viewBox="0 0 10 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M5 0L0 5h3v5h4V5h3L5 0z" fill="#000" fillOpacity={0.54} />
		</svg>
	);
}

function ArrowUpIcon(props) {
	return (
		<svg
			width={10}
			height={10}
			viewBox="0 0 10 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M5 10L0 5h3V0h4v5h3l-5 5z" fill="#000" fillOpacity={0.54} />
		</svg>
	);
}

// Create a default prop getter
const defaultPropGetter = () => ({});
/**
 * DataTable
 * @param columns
 * @param data
 * @param [className]
 * @param [defaultFilter]
 * @param getHeaderProps
 * @param getColumnProps
 // * @param getRowProps
 * @param getCellProps
 * @param renderRowSubComponent
 * @param updateMyData
 * @param skipPageReset
 * @param [showHead]
 * @param [size]
 * @param [pagination]
 // * @param [searchable]
 // * @param [downloadable]
 * @returns {JSX.Element}
 * @constructor
 */
const DataTable = ({
	columns,
	data,
	className = "",
	// defaultFilter = '',
	getHeaderProps = defaultPropGetter,
	getColumnProps = defaultPropGetter,
	// getRowProps = defaultPropGetter,
	getCellProps = defaultPropGetter,
	renderRowSubComponent,
	updateMyData,
	skipPageReset,
	showHead = true,
	size = 10,
	pagination = false,
	// searchable = false,
	// downloadable = false,
}) => {
	const defaultColumn = {
		Filter: DefaultColumnFilter,
	};

	// eslint-disable-next-line react/display-name
	/*  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [ resolvedRef, indeterminate ])

      return <input type="checkbox" ref={resolvedRef} {...rest} />
    }
  )*/

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		visibleColumns,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			autoResetPage: !skipPageReset,
			columns,
			data,
			defaultColumn,
			// defaultColumn,
			// use the skipPageReset option to disable page resetting temporarily
			initialState: { pageIndex: 0, pageSize: size },
			updateMyData,
		},
		useFilters,
		useSortBy,
		useExpanded,
		usePagination
	);

	let pagesLength = pageOptions.length;

	const generateSortingIndicator = (column) => {
		return column.isSorted ? (
			column.isSortedDesc ? (
				<ArrowDownIcon fontSize={6} className={"ml-3 text-primary"} />
			) : (
				<ArrowUpIcon className={"ml-3 text-primary"} />
			)
		) : (
			""
		);
	};

	const onChangeInSelect = (event) => {
		setPageSize(Number(event.target.value));
	};

	const onChangeInInput = (event) => {
		const page = event.target.value ? Number(event.target.value) - 1 : 0;
		gotoPage(page);
	};

	let paginationLinks = [];

	if (pagesLength > 1 && pagesLength <= 5) {
		for (let p = 0; p < pagesLength; p++) {
			paginationLinks.push(
				<Button
					primary
					className={classes("round primary", { active: p === pageIndex })}
					color=""
					onClick={() => gotoPage(p)}
				>
					{p + 1}
				</Button>
			);
		}
	}

	return (
		<Fragment>
			<Table hover className={className} {...getTableProps()}>
				{showHead && (
					<thead>
						{headerGroups.map((headerGroup, hgKey) => (
							<tr key={hgKey} {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column, hKey) => (
									<th
										key={hKey}
										{...column.getHeaderProps([
											{
												className: column.className,
												style: column.style,
											},
											getColumnProps(column),
											getHeaderProps(column),
										])}
									>
										<div {...column.getSortByToggleProps()}>
											{column.render("Header")}
											{generateSortingIndicator(column)}
										</div>
										{/*<Filter column={column}/>*/}
									</th>
								))}
							</tr>
						))}
					</thead>
				)}

        <tbody {...getTableBodyProps()}>
        {
          page.map((row) => {
            prepareRow(row);
            return (
              <Fragment key={row.getRowProps().key}>
                <tr>
                  {row.cells.map((cell, cKey) => {
                    return (
                      <td key={cKey}
                        // Return an array of prop objects and react-table will merge them appropriately
                        {
                          ...cell.getCellProps([
                            {
                              className : cell.column.className,
                              style : cell.column.style,
                            },
                            getColumnProps(cell.column),
                            getCellProps(cell),
                          ])
                        }>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}

                </tr>
                {
                  row.isExpanded && (
                    <tr className={'expanded'}>
                      <td className={classes({ 'border-bottom-0 border-top-0' : row.isExpanded })}
                          colSpan={visibleColumns.length}>
                        {renderRowSubComponent(row)}
                      </td>
                    </tr>
                  )
                }
              </Fragment>
            );
          })
        }
        </tbody>
      </Table>

			{pagination && (
				<Row
					className={"justify-content-end w-100"}
					style={{ textAlign: "center" }}
				>
					<Col sm={6}>
						<Row>
							<div className={"col-auto border-right"}>
								<p className={"m-0 text-left"}>
									Page <strong>{pagesLength > 0 ? pageIndex + 1 : 0}</strong> of{" "}
									<strong>{pagesLength}</strong>
								</p>
							</div>
							<div className={"col-auto"}>
								<select
									className={"form-control"}
									id={"page-size-select"}
									value={pageSize}
									onChange={onChangeInSelect}
								>
									{">"}
									{[10, 20, 30, 40, 50].map((pageSize) => (
										<option key={pageSize} value={pageSize}>
											Show {pageSize}
										</option>
									))}
								</select>
							</div>
						</Row>
					</Col>
					<Col sm={6}>
						<div className={"row pagination-controls justify-content-end"}>
							{pagesLength > 1 && (
								<Col md={2} className={""}>
									<input
										type="number"
										min={1}
										style={{ width: 70 }}
										max={pageOptions.length}
										defaultValue={pageIndex + 1}
										onChange={onChangeInInput}
									/>
								</Col>
							)}
							<div className={"col-auto"}>
								{pagesLength > 5 && (
									<Button
										color=""
										onClick={() => gotoPage(0)}
										disabled={!canPreviousPage}
									>
										First
									</Button>
								)}
								<Button
									color=""
									onClick={previousPage}
									disabled={!canPreviousPage}
								>
									<span className={"text-primary"}>{"<"}</span> Prev
								</Button>
							</div>

							<div className={"col-auto"}>{paginationLinks}</div>

							<div className={"col-auto"}>
								<Button color="" onClick={nextPage} disabled={!canNextPage}>
									Next <span className={"text-primary"}>{">"}</span>
								</Button>
								{pagesLength > 5 && (
									<Button
										color=""
										onClick={() => gotoPage(pageCount - 1)}
										disabled={!canNextPage}
									>
										Last
									</Button>
								)}
							</div>
						</div>
					</Col>
				</Row>
			)}
			<style global jsx>
				{`
					.pagination-controls {
						button {
							&,
							&.disabled,
							&[disabled] {
								margin-left: 2px;
								margin-right: 2px;
								background: #fff !important;
								border: none !important;
								padding: 5px;
								color: #000;
								transition: all 0.2s ease-in-out;
							}

							.chevron {
								color: #bf9050;
							}

							&.round {
								width: 25px;
								height: 25px;
								-webkit-border-radius: 50%;
								-moz-border-radius: 50%;
								border-radius: 50%;

								//&.active {
								//  width: 33px;
								//  height: 33px;
								//  padding: 8px;
								//}

								&:hover,
								&.active {
									color: #fff;
								}

								&:hover {
									background-color: #8b6518 !important;
								}

								&.active {
									background: #bf9050 !important;
								}
							}
						}
					}
				`}
			</style>
		</Fragment>
	);
};

DataTable.propTypes = {};

export default DataTable;
