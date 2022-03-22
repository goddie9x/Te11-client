import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import TableRowsIcon from '@mui/icons-material/TableRows';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import TBox from 'components/box';
import { useDispatch } from 'react-redux';
import { setLoading } from 'store/slices/common';
import { setAlert } from 'store/slices/alert';
import { useTranslation } from 'react-i18next';

import TViewPostWrapper, { TViewPostContentWrapper, TCotWrapper, TDividerStyled } from './view.styled';
import TButton from 'components/button';
import TTooltip from 'components/toolTip';
import TIconButton from 'components/iconButton';
import TTypography from 'components/typography';
import TGrid from 'components/grid';
import TImage from 'components/image';
import TLink from 'components/link';

export type TMatchParamsViewPost = {
  slug?: string;
};

export type TViewPostInfor = {
  author?: string;
  authorAvatar?: string;
  title: string;
  authorId?: string;
  //1: post, 2:news
  type?: number;
  avatarUrl?: string;
  description?: string;
  authorQuote?: string;
  content?: string;
  headingList?: string;
  slug: string;
  tag?: Array<{ type: string }>;
  //0: public, 1: private
  publicType?: number;
};

const TViewPost = (props: RouteComponentProps<TMatchParamsViewPost>) => {
  const slug = props.match.params.slug;
  const [post, setPost] = useState<TViewPostInfor>({ title: '', slug: '' });
  const [showCot, setShowCot] = useState(false);
  const [minimalCot, setMinimalCot] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleShowCot = () => {
    const minimumHeightShow = 100;
    const scrollTop = window.scrollY;
    if (scrollTop >= minimumHeightShow) {
      setShowCot(true);
    } else {
      setShowCot(false);
    }
  };

  useEffect(() => {
    dispatch(setLoading(true));
    fetch('https://te11api.herokuapp.com/posts/view/' + slug, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenUser: localStorage.getItem('tokenUser') }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setLoading(false));
        setPost(data);
        document.title = data.title;
      })
      .catch(() => {
        dispatch(setAlert({ type: 'error', message: t('error_occurred'), title: t('error') }));
        dispatch(setLoading(false));
      });
  }, [slug]);

  useEffect(() => {
    window.addEventListener('scroll', handleShowCot);
    return () => {
      window.removeEventListener('scroll', handleShowCot);
    };
  });

  return (
    <TViewPostWrapper>
      {showCot&&!!post.headingList&&post.headingList.length>1&& (
        <TBox position="fixed" right={16}>
          {minimalCot ? (
            <TTooltip title={t('show_table_of_content')} onClick={() => setMinimalCot(false)}>
              <TIconButton shape="curved">
                <TableRowsIcon />
              </TIconButton>
            </TTooltip>
          ) : (
            <TCotWrapper padding={4} position="relative">
              <TTypography variant="h4">{t('main_content')}</TTypography>
              <TDividerStyled margintop={1} marginbottom={1} />
              <TBox dangerouslySetInnerHTML={{ __html: post.headingList || '' }} />
              <TTooltip
                position="absolute"
                top={0}
                left={-1}
                title={t('hide_table_of_content')}
                onClick={() => setMinimalCot(true)}
              >
                <TButton shape="curved" variant="text" padding={0}>
                  <ArrowRightAltIcon />
                </TButton>
              </TTooltip>
            </TCotWrapper>
          )}
        </TBox>
      )}
      <TTypography variant="h1" textalign="center" marginY={2}>
        {post.title}
      </TTypography>
      <TViewPostContentWrapper paddingX={10} dangerouslySetInnerHTML={{ __html: post.content || '' }} />
      <TBox marginY={2}>
        {post.tag &&
          post.tag.map((item, index) => (
            <TTooltip key={index} title={item.type}>
              <TButton shape="curved" variant="text" padding={0}>
                {item.type}
              </TButton>
            </TTooltip>
          ))}
      </TBox>
      <TLink href={'/user/profile/' + post.authorId}>
        <TBox padding={2} marginX={15}>
          <TGrid borderRadius={2} container marginY={2} paddingY={2} paddingX={1} background="#38262647">
            <TGrid item xs={12} sm="auto" padding={2}>
              <TImage borderradius={10} height={60} src={post.authorAvatar} alt={post.author} />
            </TGrid>
            <TGrid item xs={12} sm="auto" padding={2}>
              <TTypography variant="h4">{post.author}</TTypography>
              <TTypography variant="body1">{post.authorQuote}</TTypography>
            </TGrid>
          </TGrid>
        </TBox>
      </TLink>
    </TViewPostWrapper>
  );
};

export default TViewPost;
