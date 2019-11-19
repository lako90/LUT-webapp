import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { patchCharacter } from '../actions';
import { getCharacterFeatures } from '../selectors';
import useFeatureValue from './hooks';

import styles from './styles';

const featuresColors = {
  health: {
    light: '#FFEBEB',
    normal: '#EA9999',
    dark: '#990000',
  },
  mana: {
    light: '#E8F0FF',
    normal: '#A4C2F4',
    dark: '#1155CC',
  },
  money: {
    light: '#FFF2CC',
    normal: '#F1C232',
    dark: '#7F6000',
  },
  experience: {
    light: '#D9EAD3',
    normal: '#6AA84F',
    dark: '#38761D',
  },
};

const getFontBoxColor = ({ feature }) => featuresColors[feature].dark;
const getBorderBoxColor = ({ feature }) => featuresColors[feature].normal;
const getBackgroundBoxColor = ({ feature, type = 'current' }) => (
  type === 'total' ? featuresColors[feature].normal : featuresColors[feature].light
);

const FeatureBox = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: ${({ width = 35 }) => width}px;
  height: 25px;
  line-height: 22px;
  text-align: center;
  background-color: ${getBackgroundBoxColor};
  border-top: 2px solid ${getBorderBoxColor};
  border-left: 2px solid ${getBorderBoxColor};
  border-bottom: 2px solid ${getBorderBoxColor};
  border-right: 2px solid ${getBorderBoxColor};
  color: ${getFontBoxColor};
`;

const Input = styled.input`
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border: none;
  text-align: center;
  width: 90%;
`;


const FeaturesTable = ({
  classes: { attributeCell, prestigeCell },
}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    currentHealth,
    currentMana,
    totalHealth,
    totalMana,
    money,
    experience,
  } = useSelector(getCharacterFeatures(id));
  const [{
    currentHealthValue,
    currentManaValue,
    moneyValue,
    experienceValue,
  }, localSets] = useFeatureValue({
    currentHealthInitialValue: currentHealth,
    currentManaInitialValue: currentMana,
    moneyInitialValue: money,
    experienceInitialValue: experience,
  });

  const patchFeature = feature => ({ target: { value } }) => {
    dispatch(patchCharacter({ id, [feature]: parseInt(value, 10) }));
  };

  const handleInputChange = feature => ({ target: { value } }) => { localSets[feature](value); };

  return (
    <Table padding={'none'}>
      <TableBody>
        <TableRow>
          <TableCell align={'right'}>
            {'Salute'}
          </TableCell>
          <TableCell>
            <FeatureBox feature={'health'} type={'current'}>
              <Input
                type={'text'}
                value={currentHealthValue}
                onBlur={patchFeature('currentHealth')}
                onChange={handleInputChange('currentHealth')}
              />
            </FeatureBox>
            <FeatureBox feature={'health'} type={'total'}>
              <b>{`${totalHealth}`}</b>
            </FeatureBox>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell align={'right'}>
            {'Mana'}
          </TableCell>
          <TableCell>
            <FeatureBox feature={'mana'} type={'current'}>
              <Input
                type={'text'}
                value={currentManaValue}
                onBlur={patchFeature('currentMana')}
                onChange={handleInputChange('currentMana')}
              />
            </FeatureBox>
            <FeatureBox feature={'mana'} type={'total'}>
              <b>{`${totalMana}`}</b>
            </FeatureBox>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell align={'right'}>
            {'Fiorini'}
          </TableCell>
          <TableCell>
            <FeatureBox width={70} feature={'money'}>
              <Input
                type={'text'}
                value={moneyValue}
                onBlur={patchFeature('money')}
                onChange={handleInputChange('money')}
              />
            </FeatureBox>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell align={'right'}>
            {'Punti avventura'}
          </TableCell>
          <TableCell>
            <FeatureBox width={70} feature={'experience'}>
              <Input
                type={'text'}
                value={experienceValue}
                onBlur={patchFeature('experience')}
                onChange={handleInputChange('experience')}
              />
            </FeatureBox>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

FeaturesTable.propTypes = {
  classes: PropTypes.shape({
    attributeCell: PropTypes.string,
    prestige: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(FeaturesTable);
