import React, { useMemo, useState } from "react";
import dayjs from "dayjs";
import DataTable from "../components/data-table";
import { SelectColumnFilter } from "../components/data-table/filters";
import { TableFooter } from "../components/data-table/TableFooter";
import { RowActions } from "./row-actions";
import { ROW_ACTIONS_MENU } from "./menu";
import { useNamedState } from "../hooks/useNamedState";
import { fetchAllCampaigns } from "../hooks/requests";
import useSWR from "swr";


const DUMMY_DATA = [
  {
    id: "nwfnwifbuiwbfufpiwifn",
    logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
    title: "Tree Planting",
    creator: "Brad H.",
    createdAt: "2023-12-01T00:00:00Z",
    updatedAt: "2023-12-01T00:00:00Z",
    isLive: true,
    isTemplate: true,
    category: "Category1"
  },
  {
    id: "nwv2b324mlkj2 h2g23c22ifn",
    logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
    title: "Reneable Energy Campaign",
    creator: "Brad H.",
    createdAt: "2023-12-01T00:00:00Z",
    updatedAt: "2023-12-01T00:00:00Z",
    isLive: false,
    isTemplate: false,
    category: "Category1"
  },
  {

    id: "nw6b29x7n6207r2m89dh2mn",
    logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
    title: "Carbon Footprint Reduction",
    creator: "Brad H.",
    createdAt: "2023-12-01T00:00:00Z",
    updatedAt: "2023-12-01T00:00:00Z",
    isLive: true,
    isTemplate: false,
  }
];

export function AllCampaignsView ({}) {
  const [data, setData] = useNamedState("table data", DUMMY_DATA);
  const [rowMenu, setRowMenu] = useState(ROW_ACTIONS_MENU);

  const [SELECTED_ROW, setSelectedRow] = useNamedState("SELECTED_ROW", null);

  const handleRowActionsClick = (id, row) => {
    console.log({ id, row });
    setSelectedRow(id);
  };

  const columns = useMemo(
    () => [
      {
        id: "logo",
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
          textAlign: "left"
        }
      },
      {
        Filter: SelectColumnFilter,
        Header: "Title",
        accessor: "title",
        className: "text-left",
        filter: "equals",
        id: "title",
        style: {
          textAlign: "left",
        }
      },
      {
        Filter: SelectColumnFilter,
        Header: "Creator",
        accessor: "creator",
        className: "text-left",
        filter: "equals",
        id: "creator",
        style: {
          textAlign: "left",
        }
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
          textAlign: "center"
        }
      },

      {
        Header: "Live",
        accessor: (values) => {
          const { isLIve } = values;
          return <span>{isLIve ? 'Yes' : 'No'}</span>;
        },
        id: "isLive",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Template",
        accessor: (values) => {
          const { isTemplate } = values;
          return <span>{isTemplate ? 'Yes' : 'No'}</span>;
        },
        id: "isTemplate",
        style: {
          textAlign: "center"
        }
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

          return <RowActions rowActions={rowMenu} id={id} row={values} onRowActionsClick={() => {
            handleRowActionsClick(id, values);
          }}/>
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
  }

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

  let {
    data: { pages }

  } = useSWR(
    `campaigns.list`,
    fetchAllCampaigns(),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
      revalidateOnMount: true,
      onSuccess: (data) => {
        console.log({ data });
      },
    }
  );
}

// return (
//   <div>
//     <DataTable
//       className={"table-responsive-sm table"}
//       columns={columns}
//       data={data}
//       size={pageSize}
//       skipPageReset={skipPageReset}
//       updateMyData={updateMyData}
//       renderRowSubComponent={null}
//     />
//     <TableFooter
//       pageIndex={pageIndex}
//       pagesCount={pagesCount}
//       pageSize={pageSize}
//       setPageSize={setPageSize}
//       nextPage={nextPage}
//       previousPage={previousPage}
//       canGotoPreviousPage={canGotoPreviousPage}
//       canGotoNextPage={canGotoNextPage}
//       gotoPage={gotoPage}
//       setPageIndex={setPageIndex}
//       fetchData={fetchData}
//     />
//   </div>
// );
// }
