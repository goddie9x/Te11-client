import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import THome from 'pages/home/home';
import TNotFound from 'pages/error/notFound';
import TSchedules from 'pages/schedule';
import TShorterLink from 'pages/shorterLink';
import { TMatchParamsShorterLink } from 'pages/shorterLink';
import TPost from 'pages/posts';
import TGeneratorSchedule from 'pages/schedule/generatorSchedule';
import TSchedulesManager from 'pages/schedule/manager';
import TNoPermission from 'pages/error/notPermission';
import TResetPassword, { TMatchParamsTResetPassword } from 'pages/user/resetPassword';
import TViewUser, { TMatchParamsTViewUser } from 'pages/user';
import TImagesView from 'components/imagesView';
import TGeneratorPost, { TMatchGeneratorPostParams } from 'pages/posts/generatorPost';
import TViewPost, { TMatchParamsViewPost } from 'pages/posts/view';
import TChatRooms from 'pages/chat';
import TRoom from 'pages/chat/room';
import TUsersManager from 'pages/user/manager';

export type TMatchDefaultParam = {
  id?: string;
};

export type TRouteProps = {
  path: string;
  exact?: boolean;
  main: (props: RouteComponentProps<Record<string, string>>) => JSX.Element;
  breadcrumbs?: Array<{ href: string; label: string }>;
  title?: string;
};

export const TRoutesLogged: Array<TRouteProps> = [
  {
    path: '/',
    main: () => <THome />,
    title: 'home',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/images',
    main: () => <TImagesView />,
    title: 'images',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/schedules',
    main: () => <TSchedules />,
    title: 'schedules',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/group-chat',
    main: () => <TChatRooms />,
    title: 'chat_room',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/room-chat/:id',
    main: (props) => <TRoom roomId={props.match.params.id} />,
    exact: true,
  },
  {
    path: '/posts',
    main: () => <TPost loadMore />,
    title: 'posts',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/posts/create',
    main: (props: RouteComponentProps<TMatchGeneratorPostParams>) => <TGeneratorPost {...props} />,
    title: 'create_post',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/posts', label: 'posts' },
    ],
    exact: true,
  },
  {
    path: '/posts/modify/:slug',
    main: (props: RouteComponentProps<TMatchGeneratorPostParams>) => <TGeneratorPost {...props} />,
    title: 'edit_post',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/posts', label: 'posts' },
    ],
    exact: true,
  },
  {
    path: '/posts/tag/',
    main: () => <TPost loadMore />,
    title: 'posts',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/posts/update/:slug',
    main: (props: RouteComponentProps<TMatchGeneratorPostParams>) => <TGeneratorPost {...props} />,
    title: 'update_post',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/posts', label: 'posts' },
    ],
    exact: true,
  },
  {
    path: '/posts/:slug',
    main: (props: RouteComponentProps<TMatchParamsViewPost>) => <TViewPost {...props} />,
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/schedules/examination',
    main: () => <TSchedules type={1} />,
    title: 'examination_schedule',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/schedules', label: 'schedules' },
    ],
    exact: true,
  },
  {
    path: '/schedules/examination/manager',
    main: () => <TSchedulesManager type={1} />,
    title: 'examination_schedule_manager',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/schedules', label: 'schedules' },
      { href: '/examination', label: 'examination_schedule' },
    ],
    exact: true,
  },
  {
    path: '/schedules/manager',
    main: () => <TSchedulesManager />,
    title: 'schedules_manager',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/schedules', label: 'schedules' },
    ],
    exact: true,
  },
  {
    path: '/schedules/manager/deleted',
    main: () => <TSchedulesManager store="trash" />,
    title: 'schedules_deleted_manager',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/schedules', label: 'schedules' },
      { href: '/schedules/manager', label: 'schedules_manager' },
    ],
    exact: true,
  },
  {
    path: '/schedules/examination/manager/deleted',
    main: () => <TSchedulesManager store="trash" type={1} />,
    title: 'examination_deleted_schedule_manager',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/schedules', label: 'schedules' },
      { href: '/schedules/examination', label: 'examination_schedule' },
      { href: '/schedules/examination/manager', label: 'examination_schedule_manager' },
    ],
    exact: true,
  },
  {
    path: '/schedules/create',
    main: (props: RouteComponentProps<TMatchGeneratorPostParams>) => <TGeneratorSchedule {...props} />,
    title: 'create_schedules',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/schedules', label: 'schedules' },
    ],
    exact: true,
  },
  {
    path: '/schedules/edit/:_id',
    main: (props: RouteComponentProps<TMatchGeneratorPostParams>) => <TGeneratorSchedule {...props} />,
    title: 'edit_schedule',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/schedules', label: 'schedules' },
    ],
    exact: true,
  },
  {
    path: '/dir',
    main: (props: RouteComponentProps<TMatchParamsShorterLink>) => <TShorterLink {...props} />,
    title: 'generate_short_link',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/dir/:id',
    main: (props: RouteComponentProps<TMatchParamsShorterLink>) => <TShorterLink {...props} />,
    title: 'short_link',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/dir', label: 'generate_short_link' },
    ],
    exact: true,
  },
  {
    path: '/user/profile/:_id',
    main: (props: RouteComponentProps<TMatchParamsTViewUser>) => <TViewUser {...props} />,
    title: 'profile',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/dashboard/user-manager',
    main: () => <TUsersManager />,
    title: 'profile',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/dashboard/banned',
    main: () => <TUsersManager store="banned" />,
    title: 'profile',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/no_permissions',
    title: '',
    main: () => <TNoPermission />,
    breadcrumbs: [{ href: '/', label: 'home' }],
  },
  {
    path: '/not_found',
    title: '',
    main: () => <TNotFound />,
    breadcrumbs: [{ href: '/', label: 'home' }],
  },
  {
    path: '*',
    title: '',
    main: () => <TNotFound />,
    breadcrumbs: [{ href: '/', label: 'home' }],
  },
];

export const TRoutesNotLogged: Array<TRouteProps> = [
  {
    path: '/',
    main: () => <THome />,
    title: 'home',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/images',
    main: () => <TImagesView />,
    title: 'images',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/schedules',
    main: () => <TSchedules />,
    title: 'schedules',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/schedules/edit/:_id',
    main: (props: RouteComponentProps<TMatchGeneratorPostParams>) => <TGeneratorSchedule {...props} />,
    title: 'edit_schedule',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/schedules', label: 'schedules' },
    ],
    exact: true,
  },
  {
    path: '/group-chat',
    main: () => <TChatRooms />,
    title: 'chat_room',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/posts',
    main: () => <TPost loadMore />,
    title: 'posts',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/posts/:slug',
    main: (props: RouteComponentProps<TMatchParamsViewPost>) => <TViewPost {...props} />,
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/schedules/examination',
    main: () => <TSchedules type={1} />,
    title: 'examination_schedule',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/schedules', label: 'schedules' },
    ],
    exact: true,
  },
  {
    path: '/dir',
    main: (props: RouteComponentProps<TMatchParamsShorterLink>) => <TShorterLink {...props} />,
    title: 'generate_short_link',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/dir/:id',
    main: (props: RouteComponentProps<TMatchParamsShorterLink>) => <TShorterLink {...props} />,
    title: 'short_link',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/dir', label: 'generate_short_link' },
    ],
    exact: true,
  },
  {
    path: '/user/profile/:_id',
    main: (props: RouteComponentProps<TMatchParamsTViewUser>) => <TViewUser {...props} />,
    title: 'infomation',
    breadcrumbs: [{ href: '/', label: 'home' }],
    exact: true,
  },
  {
    path: '/user/reset-password/:tokenRestore',
    main: (props: RouteComponentProps<TMatchParamsTResetPassword>) => <TResetPassword {...props} />,
    title: 'reset_password',
    breadcrumbs: [
      { href: '/', label: 'home' },
      { href: '/user', label: 'user' },
    ],
    exact: true,
  },
  {
    path: '/no_permissions',
    title: '',
    main: () => <TNoPermission />,
    breadcrumbs: [{ href: '/', label: 'home' }],
  },
  {
    path: '/not_found',
    title: '',
    main: () => <TNotFound />,
    breadcrumbs: [{ href: '/', label: 'home' }],
  },
  {
    path: '*',
    title: '',
    main: () => <TNotFound />,
    breadcrumbs: [{ href: '/', label: 'home' }],
  },
];
