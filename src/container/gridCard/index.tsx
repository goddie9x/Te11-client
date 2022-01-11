import React from 'react';
import { Grid, GridProps } from '@mui/material';

import TBox, { TBoxProps } from 'components/box';
import TTypography from 'components/typography';

export type TGridCardProps<T> = GridProps &
  TBoxProps & {
    title: string;
    subtitle?: string;
    data: Array<T>;
    renderItem: (item: T) => React.ReactNode;
  };

const TGridCard = ({ title, subtitle, data, renderItem, xs, sm, md, lg, xl, spacing, ...props }: TGridCardProps<any>) => {
  return (
    <TBox {...props}>
      <TTypography variant="h2" textAlign="center">
        {title}
      </TTypography>
      {subtitle && (
        <TTypography variant="h4" textAlign="center" marginBottom={3}>
          {subtitle}
        </TTypography>
      )}
      <Grid container spacing={spacing || 2}>
        {data.map((item, index) => (
          <Grid item key={index} xs={xs ? xs : 12} sm={sm ? sm : 6} md={md ? md : 4} lg={lg ? lg : 3} xl={xl ? xl : 2}>
            {renderItem(item)}
          </Grid>
        ))}
      </Grid>
    </TBox>
  );
};

export default TGridCard;
