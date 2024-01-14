import { Col, Row } from "reactstrap";
import React from "react";
import moment from "moment";
import { formatCurrency } from "../../../helpers/utils/string";

let subRowInfo = [
  {
    key: (row) => {
      return moment(row.createdAt).format("hh:mm a");
    },
    label: "Time"
  },
  {
    key: ({ receiveCurrencyId, receiveAmount, promoBonus }) => {
      if (receiveAmount) {
        return (
          <span>
            {receiveCurrencyId} {formatCurrency(receiveAmount, receiveCurrencyId, false)}{" "}
            {promoBonus && promoBonus.applicableTo === "receiveAmount" && (
              <span className={"text-success"}>
                {" "}
                (+<span className={" font-weight-600"}>{promoBonus.receiveBonusAmount}</span> free)
              </span>
            )}
          </span>
        );
      }
      return <span>N/a</span>;
    },
    label: "Recipient got"
  },
  { key: "accountNumber", label: "Account Number" },
  { key: "paymentChannel", label: "Channel" },
  { key: "reference", label: "Reference" }
  // { label : 'Trade Reference', key : 'tradeRef' }
];

export const RowSubComponent = (row) => {
  let rowWidth = Math.floor(12 / subRowInfo.length);
  return (
    <>
      <Row>
        {subRowInfo.map(({ label, key }, index) => {
          return (
            <Col sm={12} md={rowWidth} className={"py-1"} key={`rsc_${index}`}>
              <Row className={" justify-content-between"}>
                <Col>
                  <p className={"mb-0 line-height-1 text-small"}>{label}:</p>
                </Col>
                <Col>
                  <p className={"mb-0 line-height-1 text-small-normal font-weight-500 text-capitalize"}>
                    {typeof key !== "function" ? row.original[key] || "n/a" : key(row.original)}
                  </p>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
