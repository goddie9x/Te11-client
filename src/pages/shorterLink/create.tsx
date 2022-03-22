import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import TInput from 'components/input';
import TBox from 'components/box';
import TTypography from 'components/typography';
import TIconButton from 'components/iconButton';
import TTooltip from 'components/toolTip';
import TButton from 'components/button';

import { setLoading } from 'store/slices/common';
import { setAlert } from 'store/slices/alert';

const TCreateShorterLink = () => {
  const [rawUrl, setRawUrl] = useState('');
  const [copyed, setCopyed] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          url: '',
        }}
        onSubmit={(values, actions) => {
          dispatch(setLoading(true));
          const { url } = values;
          fetch('https://te11api.herokuapp.com/dir', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
          })
            .then((res) => res.json())
            .then((data) => {
              const { shortUrl } = data;
              if (shortUrl) {
                setRawUrl(document.location.origin + '/dir/' + shortUrl);
              } else {
                dispatch(setAlert({ type: 'error', title: t('error'), message: t('error_fetch_data') }));
                dispatch(setLoading(false));
              }
            })
            .catch(() => {
              dispatch(setAlert({ type: 'error', title: t('error'), message: t('error_fetch_data') }));
              dispatch(setLoading(false));
            });

          dispatch(setLoading(false));

          actions.setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          url: Yup.string()
            .trim(t('url_not_valid'))
            .min(5, t('url_not_valid'))
            .required(t('url_not_valid'))
            .matches(
              /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})|[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}$/,
              t('url_not_valid'),
            ),
        })}
      >
        {({ errors, handleChange, values }) => {
          return (
            <TBox marginY={5}>
              <Form>
                <TInput
                  name="url"
                  label={t('url')}
                  value={values.url}
                  onChange={handleChange}
                  error={!!errors.url}
                  helperText={errors.url}
                  margin="dense"
                  width="100%"
                />
                <TButton type="submit" variant="contained">
                  {t('generate_short_link')}
                </TButton>
              </Form>
            </TBox>
          );
        }}
      </Formik>
      {rawUrl && (
        <TBox display="flex" alignItems="center">
          <TTypography variant="body1" marginright={2}>
            {t('your_short_link_is')}
          </TTypography>
          <TBox position="relative">
            <TInput value={rawUrl} disabled={true} paddingRight={8} />
            <TTooltip title={t('copy_to_clipboard')} position="absolute" right={0} top="0">
              <TIconButton
                background="transparent"
                shape="curved"
                onClick={() => {
                  navigator.clipboard.writeText(rawUrl);
                  dispatch(setAlert({ type: 'success', title: t('success'), message: t('copy_to_clipboard_success') }));
                  setCopyed(true);
                }}
              >
                {copyed?<ContentCopyIcon />:<ContentCopyRoundedIcon />}
              </TIconButton>
            </TTooltip>
          </TBox>
        </TBox>
      )}
    </>
  );
};

export default TCreateShorterLink;
