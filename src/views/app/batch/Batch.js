import React from 'react'
import Page from '../../../component/commons/Page';
import { useNavigate, NavLink, Link, useLocation } from 'react-router-dom';

import config from '../../../config/config';

export default function Batch() {
  let navigate = useNavigate();
  return (
    <Page title='Batch' titleButton='Create' onClick={() => navigate('/app/batch/new')}>
      <h2>Test</h2>
    </Page>
  )
}
