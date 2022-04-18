import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import union from 'lodash/union';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import io from 'socket.io-client';

import { PostType, PublicType } from 'constants/enum/postType';

import TBox from 'components/box';
import { setAlert } from 'store/slices/alert';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TInput from 'components/input';
import TEditor from 'components/CKEditor';
import { CKEditorEventPayload } from 'ckeditor4-react';
import TGrid from 'components/grid';
import TImagePicker from 'components/imagePicker';
import TSelect from 'components/select';
import MenuItem from '@mui/material/MenuItem';
import TTypography from 'components/typography';
import { onSaveProps } from 'components/imagePicker/imagePicker.styled';
import { setLoading } from 'store/slices/common';
import TButton from 'components/button';
import { Autocomplete } from '@mui/material';

export type TMatchGeneratorPostParams = {
  slug?: string;
};

export type PostSchema = {
  title: string;
  content: string;
  publicType: number;
  avatarUrl?: string;
  description?: string;
  slug: string;
  tag?: Array<string>;
  type?: number;
};

const socket = io('https://te11api.herokuapp.com/');

const TGeneratorPost = ({ match }: RouteComponentProps<TMatchGeneratorPostParams>) => {
  const [slug, setSlug] = useState(match.params.slug || '');
  const [tagOptions, setTagOptions] = useState<Array<string>>([]);
  const [postAvatarUrl, setPostAvatarUrl] = useState<string>('');
  const [postInfo, setPostInfo] = useState<PostSchema>({
    title: '',
    description: '',
    content: '',
    publicType: 0,
    slug: '',
    tag: [],
    type: 0,
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSaveImage = ({ file, imageUrl }: onSaveProps) => {
    if (imageUrl) {
      setPostAvatarUrl(imageUrl);
      return;
    }
    if (file) {
      dispatch(setLoading(true));
      const formData = new FormData();
      formData.append('upload', file);

      fetch('https://te11api.herokuapp.com/cloudinary-upload', {
        method: 'POST',
        body: formData,
      })
        .then((res) => {
          if (res.status >= 400) {
            throw new Error();
          }
          return res.json();
        })
        .then((data) => {
          setPostAvatarUrl(data);
          dispatch(setLoading(false));
          dispatch(setAlert({ type: 'success', message: t('upload_image_success'), title: t('success') }));
        })
        .catch(() => {
          dispatch(setLoading(false));
          dispatch(setAlert({ type: 'error', message: t('error_occurred'), title: t('error') }));
        });
    }
  };

  const postSchema = Yup.object().shape({
    title: Yup.string().trim().required(t('title_required')),
    description: Yup.string().trim().required(t('description_required')),
    content: Yup.string().trim().required(t('content_required')),
  });

  useEffect(() => {
    let isSubscribed = true;
    if (slug) {
      document.title = t('edit_post');
      if (location.pathname.includes('create')) {
        history.push('/posts/modify/' + slug);
      }
      fetch('https://te11api.herokuapp.com/posts/view/' + slug, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokenUser: localStorage.getItem('tokenUser') }),
      })
        .then((res) => {
          if (res.status >= 400) {
            throw new Error('Bad response from server');
          }
          return res.json();
        })
        .then((res) => {
          if (isSubscribed) {
            setPostInfo({ ...res });
            setTagOptions(res.tag);
          }
        })
        .catch(() => {
          dispatch(setAlert({ type: 'error', message: t('error_occurred'), title: t('error') }));
        });
    } else {
      document.title = t('create_post');
    }
    return () => {
      isSubscribed = false;
    };
  }, [slug]);

  return (
    <TBox>
      <Formik
        initialValues={postInfo}
        validationSchema={postSchema}
        onSubmit={(values, { setSubmitting }) => {
          const data = { ...values, avatarUrl: postAvatarUrl, tokenUser: localStorage.getItem('tokenUser') };
          dispatch(setLoading(true));
          fetch('https://te11api.herokuapp.com/posts' + (!slug ? '/create' : '/modify/' + slug), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((res) => {
              if (res.status >= 400) {
                throw new Error('Bad response from server');
              }
              dispatch(setLoading(false));
              return res.json();
            })
            .then((res) => {
              setSlug(res);
              setSubmitting(false);
              socket.emit('posts:updated', {});
              socket.emit('notif:created', {
                type: 'success',
                message: 'Generate post successfully',
              });
              dispatch(setAlert({ type: 'success', message: t('update_post_success'), title: t('success') }));
            })
            .catch(() => {
              dispatch(setLoading(false));
              setSubmitting(false);
              dispatch(setAlert({ type: 'error', message: t('error_occurred'), title: t('error') }));
            });
        }}
        enableReinitialize
      >
        {({ errors, touched, values, handleChange, setFieldValue }) => (
          <Form>
            <TGrid container>
              <TGrid item xs={12} md={8}>
                <TInput
                  name="title"
                  label={t('title')}
                  error={touched.title && !!errors.title}
                  helperText={touched.title && errors.title}
                  value={values.title}
                  onChange={handleChange}
                  width="100%"
                  margintop={2}
                  marginbottom={2}
                />
                {slug && (
                  <TInput
                    disabled
                    label={t('slug')}
                    value={location.origin + '/posts/update/' + slug}
                    width="100%"
                    margintop={2}
                    marginbottom={2}
                  />
                )}
                <TInput
                  name="description"
                  label={t('description')}
                  value={values.description}
                  onChange={handleChange}
                  error={touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                  width="100%"
                  margintop={2}
                  marginbottom={2}
                />
                <TGrid container>
                  <TGrid item xs={12} md={6} paddingRight={4}>
                    <TSelect
                      name="type"
                      value={values.type}
                      label={t('post_type')}
                      onChange={handleChange}
                      formControlProps={{
                        margintop: 2,
                        marginbottom: 2,
                        width: '100%',
                      }}
                      width="100%"
                    >
                      {PostType.map((item, index) => (
                        <MenuItem key={index} value={index}>
                          {t(item)}
                        </MenuItem>
                      ))}
                    </TSelect>
                  </TGrid>
                  <TGrid item xs={12} md={6}>
                    <TSelect
                      name="publicType"
                      value={values.publicType}
                      label={t('public_type')}
                      onChange={handleChange}
                      formControlProps={{
                        margintop: 2,
                        marginbottom: 2,
                        width: '100%',
                      }}
                      width="100%"
                    >
                      {PublicType.map((item, index) => (
                        <MenuItem key={index} value={index}>
                          {t(item)}
                        </MenuItem>
                      ))}
                    </TSelect>
                  </TGrid>
                </TGrid>
                <TBox marginY={2}>
                  <Autocomplete
                    multiple
                    options={tagOptions}
                    defaultValue={values.tag}
                    limitTags={3}
                    getOptionLabel={(option) => option}
                    filterSelectedOptions
                    onChange={(event, value) => {
                      setFieldValue('tag', value);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        const currentTag = (event.target as HTMLInputElement).value;
                        const newTagOptions = union(tagOptions, [currentTag]);
                        setTagOptions([...newTagOptions]);
                      }
                    }}
                    renderInput={(params) => <TInput {...params} label={t('tag')} placeholder={t('tag')} />}
                  />
                </TBox>
              </TGrid>
              <TGrid item xs={12} md={4}>
                <TImagePicker
                  margintop={2}
                  marginbottom={2}
                  marginleft="auto"
                  marginright={4}
                  onSave={handleSaveImage}
                  variant="rounded"
                  src={postInfo.avatarUrl || '/images/default.png'}
                  imageProps={{
                    alt: postInfo.title as string,
                  }}
                  allowBrowse={true}
                  editable={true}
                  width={300}
                />
              </TGrid>
            </TGrid>
            <TTypography variant="body1" marginbottom={1} marginLeft={2} margintop={3}>
              {t('content')}
            </TTypography>
            {slug ? (
              values.content && (
                <TEditor
                  initData={values.content}
                  eventHandler={{
                    onBlur: (evt: CKEditorEventPayload<'blur'>) => {
                      setFieldValue('content', evt.editor.getData());
                    },
                  }}
                />
              )
            ) : (
              <TEditor
                initData={values.content}
                eventHandler={{
                  onBlur: (evt: CKEditorEventPayload<'blur'>) => {
                    setFieldValue('content', evt.editor.getData());
                  },
                }}
              />
            )}
            <TBox marginY={3} textAlign="center">
              <TButton type="submit" variant="contained" minwidth={50}>
                {slug ? t('update') : t('create')}
              </TButton>
            </TBox>
          </Form>
        )}
      </Formik>
    </TBox>
  );
};

export default TGeneratorPost;
