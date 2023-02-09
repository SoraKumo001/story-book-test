import React, { FC } from 'react';
import styled from './Test.module.scss';

interface Props {}

/**
 * Test
 *
 * @param {Props} { }
 */
export const Test: FC<Props> = ({}) => {
  return <div className={styled.root}>Test</div>
};
