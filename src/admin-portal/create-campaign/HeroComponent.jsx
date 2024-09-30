
import React, { useState } from 'react'
import {Col, Row, Container} from "react-bootstrap";
import Input from "../../components/admin-components/Input";
import FileUploader, {RESET} from "../../components/admin-components/FileUploader";
import {randomString} from "../../helpers/utils/string";
import Button from "../../components/admin-components/Button";
import {updateCampaign, addCampaignMedia, updateCampaignMedia, removeCampaignMedia} from "../../requests/campaign-requests";
import {useBubblyBalloons} from "../../lib/bubbly-balloon/use-bubbly-balloons";



export default function HeroComponent({campaignDetails, updateCampaignDetails}) {

    const [campaignCallToAction, setCampaignCallToAction] = useState(campaignDetails?.call_to_action || {});
    const { blow, pop } = useBubblyBalloons();

    const [mediaList, setMediaList] = useState(campaignDetails?.media|| []);

    const [currentMedia, setCurrentMedia] = useState({ media: null, order: '' });

    const [loading, setLoading] = useState(false);

    const handleMediaChange = (key, value) => {
        setCurrentMedia({ ...currentMedia, [key]: value });
    };

    const resetForm = ()=>{
        setCurrentMedia({ media: RESET, order: '' })
    }

    const handleSaveMedia = async(index=null) => {
        setLoading(true);

        if(!currentMedia?.id){
            let data = {...currentMedia, campaign_id: campaignDetails?.id}
            let res = await addCampaignMedia(data)
            if(res){
                let items = [...(mediaList||[]), res];
                setMediaList(items)
                let newCampaign = {...campaignDetails, media: items}
                updateCampaignDetails(newCampaign)
                setLoading(false);
                blow({
                    title: "Success",
                    message: "Media file saved successfully",
                    type: "success",
                    duration: 5000,
                });
                resetForm()
            }
            else{
                pop({
                    title: "Error",
                    message: "An error occurred while saving media file",
                    type: "error",
                    duration: 5000,
                });
            }

        }else{
           let data  = {
               id: currentMedia?.id,
               order:currentMedia?.order,
               ...(typeof currentMedia?.media?.url !== "string" ? { media:currentMedia?.media } :  {})
           }
           let  res = await updateCampaignMedia(data)
            if(res){
                let items = mediaList.filter((item) => item?.id !== res?.id)
                items.push(res)
                setMediaList(items)
                let newCampaign = {...campaignDetails, media: items}
                updateCampaignDetails(newCampaign)
                setLoading(false);
                resetForm()
                blow({
                    title: "Success",
                    message: "Media file saved successfully",
                    type: "success",
                    duration: 5000,
                });
            }else{
                pop({
                    title: "Error",
                    message: "An error occurred while saving media file",
                    type: "error",
                    duration: 5000,
                });
            }

        }
    };

    const handleRemoveMedia = async (media) => {
        if(media){
            setLoading(true);
            let res = await removeCampaignMedia({id: media?.id})
            if(res){
                let newMedia = mediaList.filter((item) => item.id !== media?.id)
                setMediaList(newMedia)
                let newCampaign = {...campaignDetails, media: newMedia}
                updateCampaignDetails(newCampaign)
                setLoading(false);
                blow({
                    title: "Success",
                    message: "Media file removed successfully",
                    type: "success",
                })
            }else{
                setLoading(false);
                pop({
                    title: "Error",
                    message: "An error occurred while removing media file",
                    type: "error",
                })
            }
        }
    };

    const handleEditMedia = (media) => {
        setCurrentMedia(media)
    };

    const handleSaveCallToAction = async () => {
        let data = {id: campaignDetails.id, call_to_action: JSON.stringify(campaignCallToAction)};
        let res = await updateCampaign(data);
        if (res) {
            blow({
                title: "Success",
                message: "Call to action saved successfully",
                type: "success",
                duration: 5000,
            });
        }else{
            pop({
                title: "Error",
                message: "An error occurred while saving call to action",
                type: "error",
                duration: 5000,
            });
        }
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
                        onChange={(val) => setCampaignCallToAction({...campaignCallToAction, text: val})}
                        value={campaignCallToAction?.text}
                    />
                </Col>
                <Col>
                    <Input
                        label="Call to Action URL"
                        placeholder="https://www.something.com"
                        required={false}
                        type="textbox"
                        onChange={(val) => setCampaignCallToAction({...campaignCallToAction, url: val})}
                        value={campaignCallToAction?.url}
                    />
                </Col>
                <Row>
                    <Col className="py-4">
                        <Button
                            text="Save Section"
                            onSubmit={() => handleSaveCallToAction()}
                            rounded={false}
                            loading={loading}
                            disabled={loading || !campaignCallToAction?.text || !campaignCallToAction?.url}
                        />
                    </Col>
                </Row>

            </Row>
            {/*    add media code below*/}
            <div className="mt-4">

                <Row className="">
                    <Col>
                        <FileUploader
                            required={false}
                            id={randomString(10)}
                            text="Add media"
                            onChange={(val) => handleMediaChange('media', val)}
                            error={""}
                            value={currentMedia?.media?.url}
                            defaultValue={currentMedia?.media?.url}
                        />
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col>
                        <Input
                            label="Order"
                            placeholder="Enter order"
                            required={false}
                            type="number"
                            onChange={(val) => handleMediaChange('order', val)}
                            value={currentMedia.order}
                        />
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col>
                        <Button
                            text="Save Media"
                            onClick={handleSaveMedia}
                            disabled={loading}
                            loading={loading}
                        >
                            Save Media
                        </Button>
                        {currentMedia?.id && (
                            <small
                                onClick={() => resetForm()}
                                style={{
                                    fontWeight: "bold",
                                    marginLeft: 10,
                                    color: "red",
                                    textDecoration: "underline",
                                }}
                                className="touchable-opacity"
                            >
                                Reset Form
                            </small>
                        )}
                    </Col>
                </Row>
                <Container>
                    <Row className="py-4">
                        {mediaList?.map((media, index) => (
                            <Col key={index} sm={6} xs={6} md={3}>
                                <div className="media-preview">
                                <img src={media?.media?.url} alt={`Media ${index}`} height={100} width={250}  style={{objectFit: "contain", border:"1px solid #f8f9fa", padding:'5px'}} />
                                <div className="media-actions py-3">
                                    <a href={media?.media?.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm mx-1">View</a>
                                    <a onClick={()=> handleEditMedia(media)} className="btn btn-primary btn-sm mx-1">Edit</a>
                                    <a onClick={async() =>{
                                        if(window.confirm(`Are you sure you want to delete this media?`)){
                                            return await handleRemoveMedia(media)
                                        }
                                    }}  className="btn btn-danger btn-sm mx-1">Remove</a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                    </Container>
            </div>
        </Container>
    )
}
