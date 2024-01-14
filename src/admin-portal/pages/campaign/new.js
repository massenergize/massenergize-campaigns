import { AdminLayout } from "../../../layouts/admin-layout";
import { StartCampaign } from "../../create-campaign/start-campaign";
import { useNamedState } from "../../../hooks/useNamedState";
import { CAMPAIGN } from "../../../mocks/campaign";
import { CampaignProvider } from "../../../contexts/campaign-context";
import { CampaignEditView } from "../../../views/campaign-edit-view";

const { useReducer } = require("react");

let initialState = CAMPAIGN;

initialState = {
  ...initialState,
  disable_partners_section: false,
  communities: initialState?.communities.map(({ community }) => {
    return {
      ...community,
      value: community?.community,
    }
  }) || []
}

export function NewCampaign () {
  const [campaignDetails] = useReducer((reducer)=>{}, initialState);
  const [STEP, setStep] = useNamedState("STEP", "START"); // START, DETAILS, MANAGERS, TECHNOLOGIES, EVENTS, REVIEW, SUBMIT

  return (
    <AdminLayout>
      <CampaignProvider>
        <div className={""}>
          { STEP === "START" ? (<StartCampaign step={STEP} setStep={setStep}/>) : null }

          {
            STEP === "COMPLETE" ? (<CampaignEditView data={campaignDetails} STEP={STEP} setStep={setStep}/>) : null
          }
        </div>
      </CampaignProvider>
    </AdminLayout>
  );
}
