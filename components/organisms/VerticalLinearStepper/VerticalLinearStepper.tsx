import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import { StepData } from '../../../utils/DataParser';

function VerticalLinearStepper({ steps }: { steps: StepData[] }) {
  const [activeStep] = React.useState(0);

  return (
    <Box sx={{ maxWidth: 600, marginTop: '20px' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, i) => (
          <Step expanded key={i} completed={false}>
            <StepLabel>{step.time}</StepLabel>
            {step.details && (
              <StepContent>
                <Typography variant="h6">{step.label}</Typography>
                {step.images && (
                  <Box mt={5} mb={2}>
                    <Carousel navButtonsAlwaysVisible animation="slide">
                      {step.images.map((item, i) => (
                        <Box
                          key={i}
                          sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            height: 500,
                          }}
                        >
                          <Image
                            layout={'fill'}
                            objectFit={'contain'}
                            src={item}
                            alt=""
                            placeholder="blur"
                            blurDataURL={item}
                          />
                        </Box>
                      ))}
                    </Carousel>
                  </Box>
                )}
                <Typography variant="body1">{step.description}</Typography>
                {step.links && (
                  <Box mt={1}>
                    <Button variant="outlined" href={step.links[1]}>
                      {step.links[0]}
                    </Button>
                  </Box>
                )}
                <Grid container spacing={1} sx={{ marginTop: '20px' }}>
                  {step.tech?.map((item, i) => (
                    <Grid item key={i}>
                      <Chip label={item} />
                    </Grid>
                  ))}
                </Grid>
              </StepContent>
            )}
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default VerticalLinearStepper;
