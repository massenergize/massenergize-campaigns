import React, {useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import Input from "../../../components/admin-components/Input";
import Button from "../../../components/admin-components/Button";

export default function CallToActionForm({data, onSaveFunction}) {
    const [formState, setFormState] = useState(data || {});
    const [loading, setLoading] = useState(false);

    const setFormData = (field, value) => {
        setFormState({...formState, [field]: value});
    }

    const onSave = ()=>{
        if(onSaveFunction) onSaveFunction(formState);
        return formState

   }
    return (
        <Container>
            <Row className="py-4">
                <Col>
                    <Input
                        label="Call to Action Text"
                        placeholder="Enter call to action text..."
                        required={false}
                        type="textbox"
                        onChange={(val) =>setFormData("text", val)}
                        value={formState?.text}
                    />
                </Col>
                <Col>
                    <Input
                        label="Call to Action URL"
                        placeholder="https://www.something.com"
                        required={false}
                        type="textbox"
                        onChange={(val) => setFormData("url", val)}
                        value={formState?.url}
                    />
                </Col>
                <Row>
                    <Col className="py-4">
                        <Button
                            text="Save Action"
                            onSubmit={() => onSave()}
                            rounded={false}
                            loading={loading}
                            disabled={loading || !formState?.text || !formState?.url}
                        />
                    </Col>
                </Row>

            </Row>
        </Container>
    )
}
