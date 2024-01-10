import React, { useState } from "react";
import dayjs from "dayjs";
import DataTable from "../components/data-table";
import { SelectColumnFilter } from "../components/data-table/filters";
import { TableFooter } from "../components/data-table/TableFooter";
import { ROW_ACTIONS_MENU } from "./menu";
import { useNamedState } from "../hooks/useNamedState";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { fetchAllCampaigns } from "../requests/campaign-requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faFileEdit } from "@fortawesome/free-solid-svg-icons/faFileEdit";
import { useSelector } from "react-redux";
import { NoItems } from "@kehillahglobal/ui";

const DUMMY_CAMPAIGN_NAMEs = [
  "Tree Planting",
  "Carbon Footprint Reduction",
  "Renewable Energy Campaign",
  "5KW Solr installation",
];

export function AllCampaignsView({}) {
  //   const [data, setData] = useNamedState("table data", DUMMY_DATA);
  const [rowMenu, setRowMenu] = useState(ROW_ACTIONS_MENU);
  const campaignAccount = useSelector((state) => state.campaignAccount);

  const [SELECTED_ROW, setSelectedRow] = useNamedState("SELECTED_ROW", null);

  const navigate = useNavigate();

  const handleRowActionsClick = (id, row) => {
    console.log({ id, row });
    setSelectedRow(id);
  };

  const [rowSelection, setRowSelection] = React.useState({});

  const columns = [
    {
      id: "logo",
      Header: () => null,
      accessor: (values) => {
        const { logo } = values;
        let src = logo;
        return (
          <div>
            <img
              src={src}
              alt="logo"
              style={{ width: "40px", height: "40px", objectFit: "contain" }}
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
        textAlign: "left",
      },
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
      },
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
      },
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
        textAlign: "center",
      },
    },

    {
      Header: "Live",
      accessor: (values) => {
        const { is_published } = values;
        return (
          <span
            style={{
              backgroundColor: is_published ? "#9fea9f" : "rgb(255 231 231)",
              paddingBlock: "1px",
              paddingInline: "10px",
              borderRadius: "12px",
            }}
          >
            {is_published ? "Yes" : "No"}
          </span>
        );
      },
      id: "is_published",
      style: {
        textAlign: "center",
      },
    },
    {
      Header: "Template",
      accessor: (values) => {
        const { is_template } = values;
        return (
          <span
            style={{
              backgroundColor: is_template ? "#9fea9f" : "rgb(255 231 231)",
              paddingBlock: "1px",
              paddingInline: "10px",
              borderRadius: "12px",
            }}
          >
            {is_template ? "Yes" : "No"}
          </span>
        );
      },
      id: "is_template",
      style: {
        textAlign: "center",
      },
    },
    {
      Header: () => null,
      id: "actions",
      accessor: (values) => {
        const { id } = values;

        return id;
      },
      style: {
        width: "100px",
      },
      disableSortBy: true,
      Cell: ({ cell }) => {
        const {
          value,
          row: { id, values },
          row,
        } = cell;

        return (
          <ButtonGroup className="mr-2">
            <Button
              variant="success"
              onClick={() => {
                navigate(`/admin/campaign/${value}/stats`);
              }}
            >
              Stats
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                navigate(`/admin/campaign/${value}/edit`);
              }}
            >
              <FontAwesomeIcon icon={faFileEdit} />
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                navigate(`/campaign/${value}`);
              }}
            >
              <FontAwesomeIcon icon={faEye} />
            </Button>
          </ButtonGroup>
        );
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

  let { data: campaigns } = useSWR(
    `campaigns.listForAdmin`,
    () => fetchAllCampaigns("campaigns.listForAdmin", campaignAccount?.id),
    {
      onSuccess: (data) => {
        console.log("Nice stuff insid db", { data });
      },
    }
  );

  const patched = campaigns?.map((campaign, i) => {
    return {
      ...campaign,
      title:
        campaign?.title ||
        DUMMY_CAMPAIGN_NAMEs[
          Math.floor(Math.random() * DUMMY_CAMPAIGN_NAMEs.length)
        ],
      // creator: campaign.owner || DUMMY_CAMPAIGN_OWNERS[i],
      creator: campaign?.owner?.full_name || "Unknown",
      logo:
        campaign.secondary_logo?.url ||
        "http://localhost:3000/img/fallback-img.png",
      logo_alt: campaign.primary_logo?.name,
      show: true,
    };
  });

  if (!patched?.length) {
    return (
      <Container className="d-flex m-auto" style={{ height: "70vh" }}>
        <NoItems text="Ready to start a campaign? Let's create impact together - launch your first one now!" />
      </Container>
    );
  }

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
  );
}
