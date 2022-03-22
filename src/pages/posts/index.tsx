import React, { useState, useEffect } from 'react';
import unionBy from 'lodash/unionBy';
import { useTranslation } from 'react-i18next';
import { setHelmet } from 'store/slices/helmet';
import { useDispatch } from 'react-redux';

import TPostItem, { TPostItemProps } from 'components/postItem';
import TButton from 'components/button';
import TTypography from 'components/typography';
import { TBoxProps } from 'components/box/box.styled';
import TBox from 'components/box';

import { setLoading } from 'store/slices/common';

export type TPostParams = {
  userId?: string;
  tag?: string;
};

export type TPostProps = TBoxProps & {
  //1: post, 2:news
  userId?: string;
  tag?: Array<string>;
  loadMore?: boolean;
  titleRender?: JSX.Element;
};

const TPost = ({ loadMore, userId, titleRender, ...props }: TPostProps) => {
  const [posts, setPosts] = useState<Array<TPostItemProps> | []>([]);
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      dispatch(setLoading(true));
      const search = window.location.search;
      const query = search.length ? search + '&page=' + page : '?page=' + page;
      const url = 'https://te11api.herokuapp.com/posts/' + query;
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokenUser: localStorage.getItem('tokenUser'), userId }),
      })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error('Bad response from server');
          }
          return response.json();
        })
        .then((data) => {
          const newPost = unionBy(posts, data, '_id');
          setPosts(newPost);
          dispatch(setLoading(false));
        })
        .catch(() => {
          dispatch(setLoading(false));
        });
    }
    return () => {
      isSubscribed = false;
    };
  }, [page]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      dispatch(setHelmet({ title: t('posts') }));
    }
    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <TBox {...props} width={props.width ? props.width : '100%'}>
      {posts.length > 0 ? titleRender : null}
      {posts.map((post, index) => (
        <TPostItem key={index} marginbottom={4} {...post} />
      ))}
      {loadMore ? (
        <TBox margintop={4} textalign="center">
          <TButton variant="outlined" onClick={() => setPage(page + 1)}>
            {t('view_more')}
          </TButton>
        </TBox>
      ) : (
        posts.length > 0 && (
          <TBox margintop={4} textalign="center">
            <TButton onClick={() => setPage(page + 1)}>
              <TTypography variant="h6" color="primary">
                {t('view_more')}
              </TTypography>
            </TButton>
          </TBox>
        )
      )}
    </TBox>
  );
};

export default TPost;
