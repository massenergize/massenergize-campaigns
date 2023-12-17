import DataTable from "../../components/data-table";
import { TableFooter } from "../../components/data-table/TableFooter";
import React, { useMemo, useState } from "react";
import { SelectColumnFilter } from "../../components/data-table/filters";
import dayjs from "dayjs";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const DUMMY_DATA = [
  {
    image: {
      url : "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png" },
    name: "Name1",
    createdAt: "2023-12-01T00:00:00Z",
    updatedAt: "2023-12-01T00:00:00Z",
    category: "Category1",
    role : "Campaign Manager"
  },
  {
    image: {
      url : "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png" },
    name: "Name2",
    createdAt: "2023-12-02T00:00:00Z",
    updatedAt: "2023-12-02T00:00:00Z",
    category: "Category2",
    role : "Campaign Manager"
  },
  {
    image: {
      url : "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png" },
    name: "Name3",
    createdAt: "2023-12-03T00:00:00Z",
    updatedAt: "2023-12-03T00:00:00Z",
    category: "Category3",
    role : "Campaign Manager"
  },
];

const removeCampaignManager = async function (id) {

}


export function CampaignManagersView ({ events = DUMMY_DATA }) {
  const [data, setData] = useState(DUMMY_DATA);

  const columns = useMemo(
    () => [
      {
        id: "image",
        Header: () => null,
        accessor: (values) => {
          const { logo } = values;
          return (
            <div>
              <img src={logo} alt="logo" style={{ width: "40px", height: "40px" }}/>
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
        accessor: (values) => {
          const { full_name, email } = values;
          return (
            <div>
              <h6>{full_name}</h6>
              <p>{email}</p>
            </div>
          );
        },
        className: "text-left",
        filter: "equals",
        id: "name",
        style: {
          textAlign: "left",
        },
      },
      {
        Header: () => null,
        id: 'actions',
        accessor: (values) => {
          const { id } = values;

          return id;
        },
        disableSortBy: true,
        Cell: ({ cell }) => {
          const { value, row: { id, values }, row } = cell;

          return (
            <Button variant"link-dark">Remove</Button>
          )
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
    <div>
      <DataTable
        className={"table-responsive-sm table"}
        columns={columns}
        data={data}
        size={pageSize}
        skipPageReset={skipPageReset}
        updateMyData={updateMyData}
        renderRowSubComponent={null}
        rowSelect={true}
      />
    </div>
  );
}
