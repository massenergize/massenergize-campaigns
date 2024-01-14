import { Col, Row } from "reactstrap";
import moment from "moment";
import React, { useState } from "react";
import { contains } from "../../helpers/utils/string";
import { isEmpty } from "../../helpers/utils";
import debounce from "lodash/debounce";
import { downloadTransactionsHistory } from "duck";
import ProgressButton from "../../components/LoadingButton";
import { StatementDownloadModal } from "StatementDownloadModal";
import { notify } from "../../components/notify";

/**
 * @function TableFilters
 * @param columns
 * @param originalData
 * @param first
 * @param last
 * @param setData
 * @param setSearchActive
 * @returns {JSX.Element}
 * @constructor
 */
export function TableFilters ({ columns, originalData, first, last, setData, setSearchActive }) {
  const [ filterText, setFilterText ] = useState("");
  const [ filterBy, setFilterBy ] = useState(columns[0]["id"]);
  const [ filterByHeader, setFilterByHeader ] = useState(columns[0]["Header"]);

  const [ pdfDownloadLoading, setPdfDownloadLoading ] = useState(false);
  const [ statementDownloadModalOpen, setStatementDownloadModalOpen ] = useState(false);

  let startDate = moment(last?.createdAt);
  let endDate = moment(first?.createdAt);

  const toggleStatementDownloadModal = () => setStatementDownloadModalOpen(!statementDownloadModalOpen);

  const filterTable = (value, filters) => {
    filters = filters ? filters : filterBy;
    let filteredList = originalData.filter((row) => {
      if (Array.isArray(filters)) {
        return filters.some((filter) => {
          return contains(row[filter].toLowerCase(), value.toLowerCase());
        });
      }
      return contains(row[filters], value);
    });

    setData(filteredList);
  };

  /**
   * This is the event handler for the search input
   * @param e
   */
  const handleFilterChange = (e) => {
    const value = e.target.value || "";
    setFilterText(value);

    if (isEmpty(value)) {
      setSearchActive(false);
      setData(originalData);
    } else {
      setSearchActive(true);
      debounce(
        () => {
          filterTable(value);
        },
        60,
        { trailing : true }
      )();
    }
  };

  /**
   * This is the event handler for the filter by input
   * @param e
   */
  const handleFilterByChange = (e) => {
    const value = e.target.value;
    let [ columnId, header ] = value.split(",");

    let filters = columnId.split(".");
    setFilterBy(filters);

    if (!isEmpty(filterText)) {
      filterTable(filterText, filters);
    }

    setFilterByHeader(header);
  };

  async function downloadPdfStatement (startDate, endDate) {
    try {
      setPdfDownloadLoading(true);
      let downloadUrl = await downloadTransactionsHistory(startDate, endDate);

      if (downloadUrl) {
        setPdfDownloadLoading(false);
        window.open(downloadUrl, "_blank");
      }
    } catch (e) {
      setPdfDownloadLoading(false);
      notify({
        message : "An error occurred while downloading your statement. Please try again.",
        title : "Error",
        type : "error"
      })
    }
  }

  return (
    <>
      <Row className={"data-table-controls justify-content-start w-100 mx-0 mb-3"}>
        <div className={"col-sm-12 col-md-5 col-lg-auto p-0 mb-2 mb-md-0"}>
          <Row className={"m-0"}>
            <div className="col-auto p-0 d-flex">
              <label htmlFor="filterBy" className="mr-2 my-auto">
                Filter by
              </label>
            </div>
            <Col className={"p-0 d-flex"}>
              <select name="filterBy" className={"form-control w-100 my-auto"} id="filterBy"
                      onBlur={handleFilterByChange}>
                {columns
                  .filter(({ Header, id }) => {
                    return (typeof id === "string" || Array.isArray(id)) && typeof Header === "string";
                  })
                  .map(({ Header, accessor, id }, c) => {
                    return (
                      <option key={`filter-option__${c}`}
                              value={`${typeof id === "string" ? id : id.join(".")},${Header}`}>
                        {Header}
                      </option>
                    );
                  })}
              </select>
            </Col>
          </Row>
        </div>
        <div className="col p-0 pl-md-3">
          <Row className={"m-0"}>
            <div className="col-auto p-0 d-flex">
              <label htmlFor="filterBy" className="my-auto mr-2">
                Filter
              </label>
              {/*<label htmlFor="filterBy" className="my-auto mr-2">
                      {filterBy === "transactionType" ? 'Search' : 'Filter'}
                    </label>*/}
            </div>
            <Col className={"p-0"}>
              <input
                className={"form-control w-100"}
                id={"filterText"}
                name={"filterText"}
                value={filterText}
                onChange={handleFilterChange}
                placeholder={`Search ${filterByHeader}`}
              />

              {/*{
                      filterBy === "transactionType" ?
                        <select name="filterText" id="filterText" className={'form-control  w-100'}
                                onChange={handleFilterChange}>
                          <option value={''}>All</option>
                          {
                            transactionTypes.map((type, t) => <option value={type}>{type}</option>)
                          }
                        </select> :
                        <input
                          className={'form-control w-100'}
                          id={'filterText'}
                          name={'filterText'}
                          value={filterText}
                          onChange={handleFilterChange}
                          placeholder={`Search ${filterByHeader}`}
                        />
                    }*/}
            </Col>
          </Row>
        </div>
        {/*<div className='col-auto'>
          <ProgressButton loading={loading}
                          disabled={loading}
                          label={'Go'}
                          onClick={(e) => {
                            fetchTransactions()
                          }}/>
        </div>*/}
      </Row>

      <Row className={"data-table-controls justify-content-start w-100 mx-0 mb-3"}>
        <Col className={"d-flex"}>
          <h6 className={"text-small m-auto text-center"}>
            {/*<span className="" onClick={() => {toggleStatementDownloadModal()}} role="banner">*/}
            <span className="">
              From <span
              className={"font-weight-600"}>{startDate.format("Do MMMM, YYYY")}</span> &mdash;{" "}
              <span className={"font-weight-600"}>{endDate.format("Do MMMM, YYYY")}</span>
            </span>

            {/*<DateRangePicker
              startDate={from} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={to} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }} // PropTypes.func.isRequired,
              hideKeyboardShortcutsPanel={true}
              noBorder={true}
              enableOutsideDays={true}
              withPortal={true}
              focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
            />*/}
          </h6>
        </Col>
        <div className="col-auto pr-0">
          <ProgressButton label={"Download as PDF"} color={"primary"} loading={pdfDownloadLoading} onClick={() => {
            downloadPdfStatement(startDate, endDate)
          }}/>
        </div>
      </Row>

      <StatementDownloadModal
        isOpen={statementDownloadModalOpen}
        toggle={toggleStatementDownloadModal}
        from={startDate}
        to={startDate}
        pdfDownloadLoading={pdfDownloadLoading}
        setPdfDownloadLoading={setPdfDownloadLoading}
        downloadPdfStatement={downloadPdfStatement}
      />
    </>
  );
}
