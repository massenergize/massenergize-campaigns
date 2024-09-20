import {Button as BTN, Col, Container, Row} from "react-bootstrap";
import Input from "../../../components/admin-components/Input";
import Button from "../../../components/admin-components/Button";
import React, {useState} from "react";
import {useBubblyBalloons} from "src/lib/bubbly-balloon/use-bubbly-balloons";
import {updateTechnology} from "../../../requests/technology-requests";
import FileUploader from "../../../components/admin-components/FileUploader";
import {randomString} from "../../../helpers/utils/string";
import {deleteCallToAction} from "../../../requests/campaign-requests";

const VERSION_2 = "v2";

export default function SectionsForm({section, data, updateExistingObject, item_id,apiUpdateFunc, version}) {
    const {pop, blow} = useBubblyBalloons();
    const [media, setMedia] = useState(data?.media?.url);
    const [formData, setFormData] = useState({
        ...data, call_to_action_items: data?.call_to_action_items || [],
    });

    const [loading, setLoading] = useState(false);

    const updateFormData = (field, value) => {
        setFormData({...formData, [field]: value});
    };

    const handleAddCallToAction = () => {
        setFormData({
            ...formData, call_to_action_items: [...formData.call_to_action_items, {text: "", url: ""}],
        });
    };

    const handleRemoveCallToAction = async(ctaObj) => {
        if (ctaObj?.id){
            let res = await deleteCallToAction(ctaObj.id);
            if (!res) return pop({"title": "Error", "message": "Could not delete call to action", "type": "failure"});
        }
        const newCallToAction = formData.call_to_action_items.filter((cta) => cta.id !== ctaObj.id);
        setFormData({...formData, call_to_action_items: newCallToAction});
    };

    const handleCallToActionChange = (index, field, value) => {
        const newCallToAction = formData.call_to_action_items.map((cta, i) => i === index ? {
            ...cta,
            [field]: value
        } : cta);
        setFormData({...formData, call_to_action_items: newCallToAction});
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const toUpdate = {
                id: item_id,
                [section]: JSON.stringify(formData),
                ...(typeof media !== "string" ? { media } : {})
            };

            let res;
            if(apiUpdateFunc){
                res = apiUpdateFunc(toUpdate);
            }else{
                res = await updateTechnology(toUpdate);
            }

            if (res) {
                updateExistingObject({[section]: res[section]});
                setLoading(false);
                blow({
                    title: "Success", message: "Section updated successfully", type: "success", timeout: 3000,
                });
            }
        } catch (e) {
            setLoading(false);
            pop({
                title: "Section Update Failed", message: "An error occurred. Try Again", type: "failure", timeout: 3000,
            });
        }
    };

    return (<div>
            <Container>
                <Row className="py-4">
                    <Col>
                        <Input
                            label="Title"
                            placeholder="Enter title here..."
                            required={true}
                            type="textbox"
                            onChange={(val) => updateFormData("title", val)}
                            value={formData?.title || ""}
                        />
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col>
                        <Input
                            label="Description"
                            placeholder="Add a more description for this incentive..."
                            required={false}
                            type="richText"
                            onChange={(val) => updateFormData("description", val)}
                            value={formData?.description || ""}
                        />
                    </Col>
                </Row>
                {version === VERSION_2 && (<Row className="py-4">
                        <Col>
                            <FileUploader
                                required={false}
                                id={randomString(10)}
                                text="Add media"
                                onChange={(val) => {
                                    setMedia(val);
                                }}
                                error={""}
                                value={media}
                                defaultValue={media}
                            />
                        </Col>
                    </Row>)}

                {version === VERSION_2 && formData.call_to_action_items.map((cta, index) => (
                    <Row className="py-4" key={index}>
                        <Col md={5}>
                            <Input
                                label="Call to Action Text"
                                placeholder="Enter call to action text..."
                                required={false}
                                type="textbox"
                                onChange={(val) => handleCallToActionChange(index, "text", val)}
                                value={cta.text}
                            />
                        </Col>
                        <Col md={5}>
                            <Input
                                label="Call to Action URL"
                                placeholder="https://www.something.com"
                                required={false}
                                type="textbox"
                                onChange={(val) => handleCallToActionChange(index, "url", val)}
                                value={cta.url}
                            />
                        </Col>
                        <Col md={2} className="py-4">
                            <BTN
                                onClick={() => handleRemoveCallToAction(cta)}
                                style={{
                                    backgroundColor: "tomato",
                                    border: "none",
                                    color: "white",
                                    paddingTop: "10px ",
                                    paddingBottom: "10px"
                                }}
                                className="px-4"
                            >
                                <span>Remove</span>
                            </BTN>
                        </Col>
                    </Row>))}
                {version === "v2" && (<div className="py-4 justify-content-end flex">
                        <BTN variant={"secondary"} text="Add Call to Action" onClick={handleAddCallToAction}>
                            Add Call to Action
                        </BTN>
                    </div>)}
                <Row className="py-4">
                    <Col className="px-4">
                        <Button
                            text="Save Section"
                            onSubmit={() => handleSave()}
                            rounded={false}
                            loading={loading}
                            disabled={loading}
                        />
                    </Col>
                </Row>
            </Container>
        </div>);
}
