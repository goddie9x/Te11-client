import React from "react";
import { useTranslation } from "react-i18next";

import TBox from "components/box";
import TTypography from "components/typography";
import TImageNotFound from "assets/images/T_not_found.png";
import TImage from "components/image";

const TNotFound = () => {
    const {t}= useTranslation();

    return <TBox  textAlign="center">
        <TTypography variant="h3" lineHeight={2.3} color="textSecondary">
            {t('page_not_found')}
        </TTypography>
        <TImage src={TImageNotFound}/>
    </TBox>;
};

export default TNotFound;