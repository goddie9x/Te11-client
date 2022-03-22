import React, { useEffect, useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TTable, { TTableColumnData } from 'components/table';
import TBox from 'components/box';
import TLink from 'components/link';
import TTypography from 'components/typography';
import TSelect from 'components/select';
import TButton from 'components/button';
import TFormControlLabel from 'components/formControlLabel';

import { setLoading } from 'store/slices/common';
import { setAlert } from 'store/slices/alert';
import { RootState } from 'store';

import { dayOfWeekEn, dayOfWeekVi, partsOfDayEn, partsOfDayVi } from 'constants/enum/date';
import { Language } from 'constants/enum/language';
import { Checkbox, MenuItem } from '@mui/material';
import { TGeneratorSchedule } from '../generatorSchedule';

export type TSchedulesManagerProps = {
  type?: number;
  store?: string;
};

export type TScheduleRowProps = TGeneratorSchedule & {
  _id: string;
};

const TSchedulesManager = ({ type, store }: TSchedulesManagerProps) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalSchedules, setTotalSchedules] = useState(0);
  const [rows, setRows] = useState<Array<TScheduleRowProps>>([]);
  const [selectedRowID, setSelectedRowID] = useState<Array<string>>([]);
  const [actionSelected, setActionSelected] = useState<string>('delete');
  const [opositeStoredCount, setOpositeStoredCount] = useState(0);
  const [triggerReloadData, setTriggerReloadData] = useState(false);
  const userData = useSelector((state: RootState) => state.auth.userData);
  const currentPage = store === 'trash' ? 'trash/' : 'stored/';

  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.common.language);
  const dayOfWeek = language === Language.EN_US ? dayOfWeekEn : dayOfWeekVi;
  const partsOfDay = language === Language.EN_US ? partsOfDayEn : partsOfDayVi;

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentCheckBox = event.target;
    const checked = currentCheckBox.checked;
    const id = currentCheckBox.value;
    if (checked) {
      setSelectedRowID([...selectedRowID, id]);
    } else {
      setSelectedRowID(selectedRowID.filter((value) => value !== id));
    }
  };

  const handleEditSchedule = (_id?: string) => {
    history.push('/schedules/edit/'+_id);
  };
  const restoreSchedule = (scheduleID: string) => {
    dispatch(setLoading(true));
    fetch('https://te11api.herokuapp.com/schedules/restore/' + scheduleID, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenUser: localStorage.getItem('tokenUser') }),
    })
      .then((response) => {
        dispatch(setLoading(false));
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        dispatch(setAlert({ type: 'success', title: t('success'), message: t('schedule_restore_successfully') }));
        setRows((prevRows) => prevRows.filter((row) => row._id !== scheduleID));
        setOpositeStoredCount((prevCount) => prevCount + 1);
        setTotalSchedules((prevCount) => prevCount - 1);
      })
      .catch(() => {
        dispatch(setLoading(false));
        dispatch(setAlert({ type: 'error', title: t('error'), message: t('schedule_restore_failed') }));
      });
  };
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectAllChecked = event.target.checked;

    if (!selectAllChecked) {
      setSelectedRowID([]);
    } else {
      const newRowIDSelected = [...rows.map((row) => row._id)];
      setSelectedRowID(newRowIDSelected);
    }
  };
  const deleteSchedule = (scheduleID: string) => {
    dispatch(setLoading(true));
    fetch('https://te11api.herokuapp.com/schedules/' + currentPage + scheduleID, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenUser: localStorage.getItem('tokenUser') }),
    })
      .then((response) => {
        dispatch(setLoading(false));
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        dispatch(setAlert({ type: 'success', title: t('success'), message: t('schedule_delete_successfully') }));
        setRows((prevRows) => prevRows.filter((row) => row._id !== scheduleID));
        if (store !== 'trash') {
          setOpositeStoredCount((prevCount) => prevCount + 1);
        }
        setTotalSchedules((prevCount) => prevCount - 1);
      })
      .catch(() => {
        dispatch(setLoading(false));
        dispatch(setAlert({ type: 'error', title: t('error'), message: t('schedule_delete_failed') }));
      });
  };
  const handleMultipleAction = () => {
    if (selectedRowID.length === 0) {
      dispatch(setAlert({ type: 'error', title: t('error'), message: t('no_schedule_selected') }));
      return;
    }
    switch (actionSelected) {
      case 'delete':
        dispatch(setLoading(true));
        fetch('https://te11api.herokuapp.com/schedules/handleMultiAction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tokenUser: localStorage.getItem('tokenUser'),
            method: 'delete',
            ids: selectedRowID,
          }),
        })
          .then((response) => {
            dispatch(setLoading(false));
            if (response.status >= 400) {
              throw new Error('Bad response from server');
            }
            dispatch(setAlert({ type: 'success', title: t('success'), message: t('schedule_delete_successfully') }));
            setRows((prevRows) => prevRows.filter((row) => !selectedRowID.includes(row._id)));
            if (store !== 'trash') {
              setOpositeStoredCount((prevCount) => prevCount + selectedRowID.length);
            }
            setTotalSchedules((prevCount) => prevCount - selectedRowID.length);
            setSelectedRowID([]);
          })
          .catch(() => {
            dispatch(setLoading(false));
            dispatch(setAlert({ type: 'error', title: t('error'), message: t('schedule_delete_failed') }));
          });
        break;
      case 'restore':
        dispatch(setLoading(true));
        fetch('https://te11api.herokuapp.com/schedules/handleMultiAction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tokenUser: localStorage.getItem('tokenUser'),
            method: 'restore',
            ids: selectedRowID,
          }),
        })
          .then((response) => {
            dispatch(setLoading(false));
            if (response.status >= 400) {
              throw new Error('Bad response from server');
            }
            dispatch(setAlert({ type: 'success', title: t('success'), message: t('schedule_restore_successfully') }));
            setRows((prevRows) => prevRows.filter((row) => !selectedRowID.includes(row._id)));
            setOpositeStoredCount((prevCount) => prevCount - selectedRowID.length);
            setTotalSchedules((prevCount) => prevCount + selectedRowID.length);
            setSelectedRowID([]);
          })
          .catch(() => {
            dispatch(setLoading(false));
            dispatch(setAlert({ type: 'error', title: t('error'), message: t('schedule_restore_failed') }));
          });
        break;
      case 'forceDelete':
        dispatch(setLoading(true));
        fetch('https://te11api.herokuapp.com/schedules/handleMultiAction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tokenUser: localStorage.getItem('tokenUser'),
            method: 'forceDelete',
            ids: selectedRowID,
          }),
        })
          .then((response) => {
            dispatch(setLoading(false));
            if (response.status >= 400) {
              throw new Error('Bad response from server');
            }
            dispatch(setAlert({ type: 'success', title: t('success'), message: t('schedule_force_delete_successfully') }));
            setRows((prevRows) => prevRows.filter((row) => !selectedRowID.includes(row._id)));
            if (store !== 'trash') {
              setOpositeStoredCount((prevCount) => prevCount + selectedRowID.length);
            }
            setTotalSchedules((prevCount) => prevCount - selectedRowID.length);
            setSelectedRowID([]);
          })
          .catch(() => {
            dispatch(setLoading(false));
            dispatch(setAlert({ type: 'error', title: t('error'), message: t('schedule_force_delete_failed') }));
          });
        break;
      default:
        break;
    }
    setTriggerReloadData(!triggerReloadData);
  };
  const columns: TTableColumnData[] = [
    {
      field: '_id',
      headerName: '',
      align: 'center',
      renderCell: ({ value }) => (
        <Checkbox name="_id" checked={selectedRowID.includes(value as string)} value={value} onChange={handleCheckbox} />
      ),
    },
    { field: 'name', headerName: t('name'), sortable: true, align: 'center' },
    {
      field: 'dayOfWeek',
      headerName: t('day_of_week'),
      sortable: true,
      align: 'center',
      renderCell: ({ value }) => <TTypography>{dayOfWeek[value as number]}</TTypography>,
    },
    {
      field: 'partOfDay',
      headerName: t('part_of_day'),
      sortable: true,
      align: 'center',
      renderCell: ({ value }) => <TTypography>{partsOfDay[value as number]}</TTypography>,
    },
    { field: 'room', headerName: t('room'), sortable: true, align: 'center' },
    { field: 'dayStart', headerName: t('day_start'), sortable: true, align: 'center' },
    { field: 'dayEnd', headerName: t('day_end'), sortable: true, align: 'center' },
    { field: 'time', headerName: t('time'), sortable: true, align: 'center' },
    {
      field: 'linkMeet',
      headerName: t('link_meet'),
      align: 'center',
      renderCell: ({ value }) =>
        Array.isArray(value) &&
        value.map(
          (value2, index) =>
            value2 && (
              <TButton key={index} marginright={1} onClick={() => window.open(value2, '_blank')}>
                {t('link_index', { index: index + 1 })}
              </TButton>
            ),
        ),
    },
    {
      field: 'linkClass',
      headerName: t('link_class'),
      align: 'center',
      renderCell: ({ value }) =>
        Array.isArray(value) &&
        value.map(
          (value2, index) =>
            value2 && (
              <TButton key={index} marginright={1} onClick={() => window.open(value2, '_blank')}>
                {t('link_index', { index: index + 1 })}
              </TButton>
            ),
        ),
    },
    {
      field: 'multiAction',
      headerName: t('action'),
      align: 'center',
      renderCell: ({ _id }) => (
        <TBox display="flex" alignItems="center">
          {store === 'trash' ? (
            <TButton variant="contained" color="warning" onClick={() => restoreSchedule(_id as string)}>
              {t('restore')}
            </TButton>
          ) : (
            <TButton variant="contained" color="warning" onClick={() => handleEditSchedule(_id as string)}>
              {t('edit')}
            </TButton>
          )}
          <TButton variant="contained" color="error" marginLeft={1} onClick={() => deleteSchedule(_id as string)}>
            {t('delete')}
          </TButton>
        </TBox>
      ),
    },
  ];
  const actionsForSelectedRows =
    store === 'trash'
      ? [
          { label: t('restore'), value: 'restore' },
          { label: t('force_delete'), value: 'forceDelete' },
        ]
      : [{ label: t('delete'), value: 'delete' }];

  useEffect(() => {
    if(!userData||userData.role>1){
      history.push('/no_permissions');
    }
    const urlGetSchedule =
      'https://te11api.herokuapp.com/schedules/' +
      currentPage +
      '?page=' +
      page +
      '&perPage=' +
      rowsPerPage +
      (type ? '&type=' + type : '');
    const tokenUser = localStorage.getItem('tokenUser');
    let isSubscribed = true;

    dispatch(setLoading(true));
    fetch(urlGetSchedule, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenUser }),
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Something went wrong.');
        }
        return response.json();
      })
      .then((data) => {
        if (isSubscribed) {
          setRows(data.schedules);
          setTotalSchedules(data.countCurrentStored);
          setOpositeStoredCount(data.countOpositeStored);
        }
        dispatch(setLoading(false));
      })
      .catch(() => {
        dispatch(setAlert({ type: 'error', message: t('error'), title: t('error_fetch_data') }));
        dispatch(setLoading(false));
        history.push('/no_permissions');
      });

    return () => {
      isSubscribed = false;
    };
  }, [page, triggerReloadData, rowsPerPage]);

  return rows ? (
    <TBox>
      <TBox display="flex" my={2} px={6} alignItems="center" justifyContent="space-between">
        <TBox display="flex" alignItems="center" color="secondary">
          <TFormControlLabel control={<Checkbox onChange={handleSelectAll} />} label={t('select_all') as string} />
          <TSelect
            marginLeft={3}
            value={actionSelected}
            onChange={(e) => {
              setActionSelected(e.target.value as string);
            }}
          >
            {actionsForSelectedRows.map((action, index) => (
              <MenuItem key={index} value={action.value}>
                {action.label}
              </MenuItem>
            ))}
          </TSelect>
          <TButton marginLeft={3} variant="contained" height={7} onClick={handleMultipleAction}>
            <TTypography>{t('apply')}</TTypography>
          </TButton>
        </TBox>
        <TLink href={'/schedules' + (type === 1 ? '/examination' : '') + '/manager' + (store === 'trash' ? '' : '/deleted')}>
          <TTypography>
            {store === 'trash'
              ? t('stored_number', { count: opositeStoredCount })
              : t('deleted_number', { count: opositeStoredCount })}
          </TTypography>
        </TLink>
      </TBox>
      <TTable
        rows={rows}
        columns={columns}
        paginationProps={{
          count: totalSchedules,
          rowsPerPageOptions: [5, 10, 25],
          page: page - 1,
          rowsPerPage: rowsPerPage,
          onPageChange: (event: unknown, newPage: number) => {
            setPage(newPage + 1);
          },
          onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setRowsPerPage(+event.target.value);
            setPage(1);
          },
        }}
      />
    </TBox>
  ) : null;
};

export default memo(TSchedulesManager);
