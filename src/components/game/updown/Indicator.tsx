import React from 'react';
import styled from 'styled-components';
import { Center, VerticallyCenter } from '../../util/Center';
import { identityColor } from '../../../constants';
import UpDownIndicator from './UpDownIndicator';
import { IndicatorType } from './indicatorType';

const Stick = styled.div`
  width: 4px;
  height: 288px;
  background-color: ${identityColor};
  transition: 0.2s;

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    height: 168px;
    visibility: hidden;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    height: 112px;
  }
`;

const CenterWrap = styled.div`
  ${Center}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopWrap = styled.div`
  text-align: center;
`;

const Level = styled.div`
  font-weight: 500;
  font-size: 1.5em;
  letter-spacing: 0.5em;

  text-wrap: no-wrap;

  line-height: 1.5rem;

  padding-left: 0.5em;
  margin-bottom: 12px;

  color: ${identityColor};

  transition: 0.2s;

  user-drag: none; 
  user-select: none;

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 6px;
  }
`;

const Time = styled.div`
  font-weight: 900;
  font-size: 2rem;
  line-height: 2rem;

  margin-bottom: 16px;

  color: ${identityColor};

  transition: 0.2s;

  user-drag: none; 
  user-select: none;

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    display: none;
  }
`;

const Message = styled.div`
  font-weight: 500;
  font-size: 1.5rem;

  line-height: 1.5rem;

  margin-top: 16px;
  margin-bottom: 44px;

  transition: 0.2s;

  user-drag: none; 
  user-select: none;

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    font-size: 1rem;
    line-height: 1rem;
    margin-top: 18px;
    margin-bottom: 36px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    visibility: hidden;
    margin-bottom: 6px;
  }
`;

const LastAnswerIndicator = styled.div<{ type: IndicatorType }>`
  ${VerticallyCenter}
  z-index: -1;

  width: calc(50% - 48px);
  height: 144px;

  background-color: ${identityColor};

  transition: 0.2s;

  user-drag: none; 
  user-select: none;

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    height: 132px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    height: 80px;
  }

  ${({ type }) =>
    type === IndicatorType.Down
      ? 'right: 50%;'
      : type === IndicatorType.Up
      ? 'left: 50%;'
      : 'display: none;'}
`;

export function Indicator(props: {
  level: number;
  currentTime: number;
  type: IndicatorType;
}) {
  return (
    <>
      <UpDownIndicator type={props.type} />

      <CenterWrap>
        <TopWrap>
          <Level>Level {props.level}</Level>
          <Time>{props.currentTime.toFixed(1)}</Time>
        </TopWrap>
        <Stick />
        <Message>
          {props.type === IndicatorType.Down
            ? 'Bigger!'
            : props.type === IndicatorType.Up
            ? 'Smaller!'
            : props.type === IndicatorType.Correct
            ? 'Correct!'
            : '　'}
        </Message>
      </CenterWrap>

      <LastAnswerIndicator type={props.type} />
    </>
  );
}
