'use client'

import { useState } from "react";
import BackButton from "./Buttons/BackButton";
import ContinueButton from "./Buttons/ContinueButton";
import FirstBriefingForm from "./Forms/FirstBriefingForm";
import SecondBriefingForm from "./Forms/SecondBriefingForm";
import ThirdBriefingForm from "./Forms/ThirdBriefingForm";
import { RoutesEnum } from "@components/enum/routes.enum";

const BriefingFormCard = ({ stage }: { stage: string }) => {

    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

    function getForm() {
        switch (Number(stage)) {
            case 1: return <FirstBriefingForm setButtonDisabled={setButtonDisabled}/>
            case 2: return <SecondBriefingForm setButtonDisabled={setButtonDisabled}/>
            case 3: return <ThirdBriefingForm setButtonDisabled={setButtonDisabled}/>
        }
    }

    function handlePageToBack(): RoutesEnum {
        switch (Number(stage)) {
            case 1: return RoutesEnum.HOME
            case 2: return RoutesEnum.FIRST_BRIEFING_STAGE
            case 3: return RoutesEnum.SECOND_BRIEFING_STAGE
        }
        return RoutesEnum.FIRST_BRIEFING_STAGE
    }

    function handlePageToGo(): RoutesEnum {
        switch (Number(stage)) {
            case 1: return RoutesEnum.SECOND_BRIEFING_STAGE
            case 2: return RoutesEnum.THIRD_BRIEFING_STAGE
        }
        return RoutesEnum.HOME
    }

    return (
        <>
            <div className="flow-card p-4 w-100">
                {getForm()}
            </div>
            <div className="d-flex justify-content-between">
                <BackButton pageToBack={handlePageToBack()}/>
                <ContinueButton pageToGo={handlePageToGo()} buttonDisabled={buttonDisabled} />
            </div>
        </>
    );
}

export default BriefingFormCard;