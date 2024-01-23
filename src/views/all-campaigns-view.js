import React, { useState, useEffect } from "react";

import dayjs from "dayjs";
import DataTable from "../components/data-table";
import { SelectColumnFilter } from "../components/data-table/filters";
import { TableFooter } from "../components/data-table/TableFooter";
import { ROW_ACTIONS_MENU } from "./menu";
import { useNamedState } from "../hooks/useNamedState";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { fetchAllCampaigns } from "../requests/campaign-requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faFileEdit } from "@fortawesome/free-solid-svg-icons/faFileEdit";
import { useSelector } from "react-redux";
import { NoItems } from "@kehillahglobal/ui";
import Searchbar from "../components/admin-components/Searchbar";
import { HorizontalPushLoader } from "../components/horizontal-push-loader/horizontal-push-loader";
import { isEmpty } from "../helpers/utils/string";

export function AllCampaignsView ({}) {
  const [rowMenu, setRowMenu] = useState(ROW_ACTIONS_MENU);
  const campaignAccount = useSelector((state) => state.campaignAccount);

  const [SELECTED_ROW, setSelectedRow] = useNamedState("SELECTED_ROW", null);

  const navigate = useNavigate();

  const handleRowActionsClick = (id, row) => {
    setSelectedRow(id);
  };

  const generateAndCopyCampaignLink = (slug,isLive) => {
  // only add preview mode if not live
    let url = `${window.location.origin}/campaign/${slug}`;
    if(!isLive){
      url += "?preview=true";
    }

   window.open(url, "_blank")


  }

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
			disableSortBy: false,
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
        const { slug, is_published } = values;

        return {slug, is_published};
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
                navigate(`/admin/campaign/${value?.slug}/stats`);
              }}
            >
              Stats
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                navigate(`/admin/campaign/${value?.slug}/edit`);
              }}
            >
              <FontAwesomeIcon icon={faFileEdit} />
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                // TODO: Generate link from BE and shorten it
                generateAndCopyCampaignLink(value?.slug, value?.is_published);
              }}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </Button>
          </ButtonGroup>
        );
      },
    },
  ];


  const [pagesCount, setPagesCount] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(50);

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

  let {
    data: campaigns,
    isLoading : campaignsLoading,
  } = useSWR(
    `campaigns.listForAdmin/${campaignAccount?.id || ""}}`,
    () => fetchAllCampaigns("campaigns.listForAdmin", campaignAccount?.id),
    {
      onSuccess: (data) => {
      },
    },
  );

  const [campaignShow, setCampaignShow] = useState(campaigns);

  const [searchText, setSearchText] = useState("");

/*  useEffect(() => {
    const lowercaseInput = searchText.toLowerCase();

/!*    const filtered = campaigns?.filter((campaign) => {
      return campaign?.title?.toLowerCase()?.includes(lowercaseInput);
    });*!/

    const filteredData = campaigns?.filter((item) => {
      function searchInElement (element) {
        if (element && typeof element === "object") {
          for (const key in element) {
            const value = element[key];

            if (Array.isArray(value)) {
              for (const arrayElement of value) {
                if (searchInElement(arrayElement)) {
                  return true;
                }
              }
            } else if (typeof value === "object") {
              if (searchInElement(value)) {
                return true;
              }
            } else if (
              typeof value === "string" &&
              value.toLowerCase().includes(lowercaseInput)
            ) {
              return true;
            }
          }
        }
        return false;
      }

      return searchInElement(item);
    });

    setCampaignShow(filteredData);
  }, [searchText, campaigns]);*/

  const patched = (campaigns || []).map((campaign, i) => {
    return {
      ...campaign,
      title: campaign?.title,
      creator: campaign?.owner?.full_name || "Unknown",
      logo:
        campaign.secondary_logo?.url || "http://localhost:3000/img/fallback-img.png",
      logo_alt: campaign.primary_logo?.name,
      show: true,
    };
  });


  const SEARCHABLE_FIELDS = [
    "title",
    "creator",
    "created_at",
    "is_published",
    "is_template",
  ];

  const filter = function filter (campaigns, searchText) {
    return campaigns?.filter((campaign) => {
      return SEARCHABLE_FIELDS.some((field) => {
        return campaign[field]?.toString()?.toLowerCase()?.includes(searchText?.toLowerCase());
      });
    });
  }

  let filtered;

  if (!isEmpty(searchText) && patched?.length > 0) {
    filtered = filter(patched, searchText);
  } else {
    filtered = patched;
  }

  if (campaignsLoading) {
    return (
      <Container className="d-flex m-auto" style={{ height: "70vh" }}>
        <HorizontalPushLoader className={"mt-0"}/>
      </Container>
    );
  }

  return (
    <div>
      {patched?.length > 0 ? (
        <div className="mb-4">
          <Searchbar onChange={setSearchText} text={searchText} />
        </div>
      ) : null}

      {patched?.length > 0 ? (
        <>
          {filtered.length > 0 ? (
            <DataTable
              className={"table-responsive-sm table"}
              columns={columns}
              data={filtered}
              size={pageSize}
              rowSelect={false}
              skipPageReset={skipPageReset}
              updateMyData={updateMyData}
              renderRowSubComponent={null}
            />
          ) : (
            <Container className="d-flex m-auto" style={{ height: "70vh" }}>
              <Row className={"justify-content-center w-100"}>
                <Col className=" m-auto text-center" md={"auto"}>
                  <img src="/img/no-search-item.svg" alt="No Search Item" />
                  <h5 className={"mt-4"}>No campaign matches your search</h5>
                  <h6>Try searching for something else</h6>
                </Col>
              </Row>
            </Container>
          )}
        </>
      ) : (
        <Container className="d-flex m-auto" style={{ height: "70vh" }}>
          <NoItems text="Ready to start a campaign? Let's create impact together - launch your first one now!" />
        </Container>
      )}

      {/* <TableFooter
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
      /> */}
    </div>
  );
}
