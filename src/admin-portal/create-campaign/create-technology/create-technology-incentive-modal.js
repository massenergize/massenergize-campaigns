import React from "react";
import { IncentiveForm } from "./incentive-form";
import MeModal  from "../../../components/MEModal/MeModal";

export function CreateTechnologyIncentiveModal ({ show, onHide, technology_id, onSubmit }) {
  return (
    <MeModal title={"New Item Form"} open={show} onHide={onHide}>
      <IncentiveForm key={"new-incentive"} technology_id={technology_id} incentive={{}} onSubmit={onSubmit} />
    </MeModal>
  )
}
