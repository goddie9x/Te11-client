import React from 'react';

import TGrid from 'components/grid';
import TLink from 'components/link';
import TCard from 'components/card';
import TImage from 'components/image';
import TButton from 'components/button';
import TTypography from 'components/typography';
import { TGridProps } from 'components/grid/grid.styled';

export type TPostItemProps = TGridProps & {
  href?: string;
  image?: string;
  title?: string;
  description?: string;
  date?: string;
  tag?: string;
  urlTag?: string;
  colorTag?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  publicType?: string;
};

const TPostItem = ({
  href,
  image,
  title,
  description,
  date,
  tag,
  urlTag,
  colorTag,
  publicType,
  ...props
}: TPostItemProps) => {
  return (
    <TGrid container xs={12} {...props}>
      <TGrid item xs={12} md={6} lg={4}>
        <TLink href={href || '/'}>
          <TCard height="100%" width="100%">
            <TImage src={image} height="100%" width="100%" />
          </TCard>
        </TLink>
      </TGrid>
      <TGrid item xs={12} md={6} lg={8}>
        <TLink href={urlTag || '/'} marginbottom={2}>
          <TButton color={colorTag || 'primary'}>{tag}</TButton>
        </TLink>
        <TLink href={href || '/'} marginbottom={2}>
          <TTypography variant="h3">{title}</TTypography>
        </TLink>
        <TTypography variant="body1" marginbottom={2}>
          {description}
        </TTypography>
        <TTypography variant="body1" marginbottom={2}>
          {date} <TTypography variant="body1">{publicType}</TTypography>
        </TTypography>
      </TGrid>
    </TGrid>
  );
};

export default TPostItem;