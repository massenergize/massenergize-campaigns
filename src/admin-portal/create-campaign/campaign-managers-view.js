import DataTable from "../../components/data-table";
import React, { useMemo, useState } from "react";
import { SelectColumnFilter } from "../../components/data-table/filters";
import { Button, Modal } from "react-bootstrap";
import { CAMPAIGN_MANAGERS } from "../../mocks/campaign";
import { apiCall } from "src/api/messenger";
import { useBubblyBalloons } from "src/lib/bubbly-balloon/use-bubbly-balloons";
import { findItemAtIndex, findItemAtIndexAndRemainder } from "src/utils/utils";

export function CampaignManagersView({
  updateCampaignDetails,
  managers,
  handleRemove,
}) {
  const [data, setData] = useState(managers);
  const [toggleConfirmation, setToggleConfirmation] = useState(false);
  const [toRemove, setToRemove] = useState(null);
  const { blow, pop } = useBubblyBalloons();

  const handleClose = () => {
    setToggleConfirmation(false);
    setToRemove(null);
  };

  const setAsKeyContact = (item) => {
    apiCall("/campaigns.managers.updateKeyContact", { campaign_id: item?.campaign?.id, manager_id: item?.id }).then(
      (response) => {
        const { data, success, error } = response || {};
        if (!success) {
          return pop({
            title: "Error",
            message: error || "Ooops, sorry something happened!",
            type: "error",
            timeout: 3000,
          });
        }
        // const { item, index, remainder } = findItemAtIndexAndRemainder(managers, (it) => it.id === item?.id);
        // remainder?.slice(index, 0, data);

        updateCampaignDetails("managers", data);

        blow({
          title: "Success",
          message: "You have successfully changed the key contact!",
          type: "success",
        });
      },
    );
  };
  const columns = useMemo(
    () => [
      {
        id: "image",
        Header: () => null,
        accessor: (values) => {
          const { user } = values;
          const fallback = "/img/user-avatar.svg";
          let src = user?.profile_picture?.url || fallback;
          return (
            <div>
              <img
                src={src}
                alt="logo"
                style={{ width: "40px", height: "40px" }}
                onError={() => {
                  src = fallback;
                }}
              />
            </div>
          );
        },
        className: "text-left",
        filter: "equals",

        style: {
          textAlign: "left",
          width: "50px",
        },
      },
      {
        Filter: SelectColumnFilter,
        Header: "Name",
        accessor: (values) => {
          const { user } = values;
          return (
            <div>
              <h6 className={"mb-0 fw-bold"}>{user?.full_name}</h6>
              <p className={"text-muted"}>{user?.email}</p>
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
        Header: "Role",
        id: "role",
        accessor: (values) => values,
        style: {
          textAlign: "left",
          width: "100px",
        },
        disableSortBy: true,
        Cell: ({ cell }) => {
          const {
            value,
            row: { id, values },
            row,
          } = cell;
          return <p className={"link"}>{value?.role || "Manager"}</p>;
        },
      },
      {
        Header: () => null,
        id: "actions",
        accessor: (values) => values,
        style: {
          textAlign: "left",
          width: "100px",
        },
        disableSortBy: true,
        Cell: ({ cell }) => {
          const {
            value,
            row: { id, values },
            row,
          } = cell;
          const isKeyContact = value?.is_key_contact;

          return (
            <div
              style={{
                display: "flex",
                // flexDirection: "row-reverse",
                minWidth: 270,
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              {!isKeyContact ? (
                <Button
                  className={"link"}
                  onClick={() => {
                    const wantsToDelete = window.confirm(
                      `Are you sure you want make '${value?.user?.full_name || "..."}' the key contact?`,
                    );
                    if (wantsToDelete) setAsKeyContact(value);
                    else console.log("I say I wont cancel again!")
                  }}
                  variant={"primary"}
                  style={{ marginRight: 10 }}
                >
                  Set As Key Contact
                </Button>
              ) : (
                <p
                  style={{
                    borderRadius: 55,
                    border: "dashed 2px red",
                    fontWeight: "bold",
                    padding: "4px 13px",
                    marginBottom: 0,
                    marginRight: 10,
                    color: "red",
                  }}
                >
                  Key Contact
                </p>
              )}

              {!isKeyContact && (
                <Button
                  className={"link"}
                  onClick={() => {
                    setToRemove(value);
                    setToggleConfirmation(true);
                  }}
                  variant={"danger"}
                >
                  Remove
                </Button>
              )}
            </div>
          );
        },
      },
    ],
    [],
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

  // endregion
  return (
    <div>
      <DataTable
        className={"table-responsive-sm table"}
        columns={columns}
        data={managers}
        size={pageSize}
        skipPageReset={skipPageReset}
        updateMyData={updateMyData}
        renderRowSubComponent={null}
        rowSelect={true}
      />

      <Modal size={"lg"} show={toggleConfirmation} onHide={handleClose} variant="primary">
        <Modal.Header closeButton>
          <Modal.Title className={"text-sm"}>Campaign Manager Removal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to remove{" "}
            <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{toRemove?.user?.full_name}</span> from this
            campaign? This action is irreversible and will permanently delete their association with the campaign.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleRemove(toRemove);
              handleClose();
            }}
          >
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
