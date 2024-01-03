import { AdminLayout } from "../../../layouts/admin-layout";
import { useNamedState } from "../../../hooks/useNamedState";
import { useParams } from "react-router-dom";
import { CampaignProvider } from "../../../contexts/campaign-context";
import { CampaignEditView } from "../../../views/campaign-edit-view";

export function EditCampaign ({ props }) {

  const [STEP, setStep] = useNamedState("STEP", "START"); // START, DETAILS, MANAGERS, TECHNOLOGIES, EVENTS, REVIEW, SUBMIT
  const { id, } = useParams();

  return (
    <AdminLayout>
      <CampaignProvider>
        <CampaignEditView id={id} STEP={STEP} setStep={setStep}/>
      </CampaignProvider>
    </AdminLayout>
  );
}
