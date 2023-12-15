import React, { useMemo, useState } from "react";
import dayjs from "dayjs";
import DataTable from "../components/data-table";
import { SelectColumnFilter } from "../components/data-table/filters";
import { TableFooter } from "../components/data-table/TableFooter";
import { RowActions } from "./row-actions";
import { ROW_ACTIONS_MENU } from "./menu";
import { useNamedState } from "../hooks/useNamedState";
import useSWR from "swr";
import { Link, useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { fetchAllCampaigns } from "../requests/campaign-requests";

const DUMMY_DATA = [
  {
    logo: "https://i.pinimg.com/originals/a1/a1/18/a1a1183db74a83f52cca1ba55e6c37ec.png",
    creator: "Brad H.",
    updatedAt: "2023-12-01T00:00:00Z",
    isLive: true,
    isTemplate: true,
    category: "Category1",
    "id": "ab3b98d2-f1a3-4620-86db-f48a06459b3d",
    "created_at": "2023-12-07T10:56:12.888Z",
    "updated_at": "2023-12-08T10:34:31.573Z",
    "is_deleted": false,
    "info": null,
    "account": {
      "id": "583c96c5-7fb4-488f-ac54-2558252ae535"
    },
    "title": "Wayland Campaign",
    "description": "Helo there",
    "start_date": "2023-12-07",
    "end_date": null,
    "primary_logo": {
      "id": 620,
      "name": "PrimaryLogoFor Wayland Campaign Campaign",
      "url": "https://massenergize-files.s3.amazonaws.com/media/Screenshot_2023-11-23_at_10.30.36AM.png"
    },
    "secondary_logo": {
      "id": 621,
      "name": "SecondaryLogoFor Wayland Campaign Campaign",
      "url": "https://massenergize-files.s3.amazonaws.com/media/csu.jpeg"
    },
    "image": {
      "id": 631,
      "name": "ImageFor Wayland Campaign Campaign",
      "url": "https://massenergize-files.s3.amazonaws.com/media/pexels-pixabay-221012.jpg"
    },
    "is_approved": false,
    "is_published": false,
    "is_global": true,
    "is_template": false,
    "tagline": "Wayland and Acton Colab",
    "owner": "906d4df9-e7a7-4b75-b2c6-235796cab193"
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

const DUMMY_CAMPAIGN_NAMEs = [
  'Tree Planting',
  'Carbon Footprint Reduction',
  'Renewable Energy Campaign',
  '5KW Solr installation'
];

const DUMMY_CAMPAIGN_OWNERS = [
  'Brad H.',
  'Aimee P.',
  'John D.',
  'Sally C.',
  'Nancy D.',
  'Cindy L.',
  'Linda S.',
  'Bob S.',
  'Micheal J.',
  'James B.',
  'Robert M.',
  'William B.',
  'David S.',
  'Richard H.',
  'Charles M.',
]

export function AllCampaignsView ({}) {
  const [data, setData] = useNamedState("table data", DUMMY_DATA);
  const [rowMenu, setRowMenu] = useState(ROW_ACTIONS_MENU);

  const [SELECTED_ROW, setSelectedRow] = useNamedState("SELECTED_ROW", null);

  const navigate = useNavigate();

  const handleRowActionsClick = (id, row) => {
    console.log({ id, row });
    setSelectedRow(id);
  };

  const [rowSelection, setRowSelection] = React.useState({})

  const columns =  [
      {
        id: "logo",
        Header: () => null,
        accessor: (values) => {
          const { logo } = values;
          let src = logo;
          return (
            <div>
              <img src={src} alt="logo" style={{ width: "40px", height: "40px" }}
                   onError={() => {
                     src = "/fallback-img.png";
                   }}
              />
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
        accessor: (value) => {
          const { creator, owner } = value;
          return creator;
        },
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
          const { created_at } = values;
          return dayjs(created_at).format("MM-DD-YYYY");
        },
        disableSortBy: true,
        filter: "equals",
        id: "created_at",
        style: {
          textAlign: "center"
        }
      },

      {
        Header: "Live",
        accessor: (values) => {
          const { is_published } = values;
          return <span
            style={{
              backgroundColor: is_published ? '#9fea9f' : '#e6c0a6',
              paddingBlock: "1px",
              paddingInline: "10px",
              borderRadius: "12px",
            }}>{is_published ? 'Yes' : 'No'}</span>;
        },
        id: "is_published",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Template",
        accessor: (values) => {
          const { is_template } = values;
          return <span
            style={{
              backgroundColor: is_template ? '#9fea9f' : '#e6c0a6',
              paddingBlock: "1px",
              paddingInline: "10px",
              borderRadius: "12px",
            }}>{is_template ? 'Yes' : 'No'}</span>;
        },
        id: "is_template",
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

          return <Dropdown as={ButtonGroup}>
            <Link to={`/admin/campaign/${value}/stats`} className={'btn btn-primary'}>View Stats</Link>

            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Preview</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        },
      },
    ];

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
    data: campaigns,
  } = useSWR(`campaigns.list`, fetchAllCampaigns, {
      onSuccess: (data) => {
        console.log("Nice stuff insid db", { data });
      },
    }
  );

  console.log({ campaigns })

  const patched = campaigns?.map((campaign, i) => {
    return {
      ...campaign,
      title: campaign?.title || DUMMY_CAMPAIGN_NAMEs[Math.floor(Math.random() * DUMMY_CAMPAIGN_NAMEs.length)],
      // creator: campaign.owner || DUMMY_CAMPAIGN_OWNERS[i],
      creator: DUMMY_CAMPAIGN_OWNERS[i],
      logo: campaign.secondary_logo?.url || "http://localhost:3000/img/fallback-img.png",
      logo_alt: campaign.primary_logo?.name,
      show : true,
    }
  })


  return (
    <div>
      <DataTable
        className={"table-responsive-sm table"}
        columns={columns}
        data={patched || []}
        size={pageSize}
        rowSelect={true}
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
    </div>
  )
}