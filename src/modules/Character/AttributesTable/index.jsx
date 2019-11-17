import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import capitalize from 'lodash/capitalize';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { getAttributesSelector } from '../../Attributes/selectors';

import styles from './styles';

const AttributesTable = ({
  characterAttributes,
  classes: { attributeCell, prestigeCell },
}) => {
  const attributes = useSelector(getAttributesSelector);

  const findAttribute = slug => ({ slug: characterAttributeSlug }) => (
    characterAttributeSlug === slug
  );

  const renderAttributeRow = (attributeKey) => {
    const { name, slug } = attributes[attributeKey];
    const {
      multiplier,
      negative,
      positive,
      prestige,
    } = characterAttributes.find(findAttribute(slug));
    let modifier = '';

    if (positive || negative) {
      modifier = negative ? `-${negative}` : `+${positive}`;
    }

    const attributeText = `${multiplier}D${modifier && ` ${modifier}`}`;

    return (
      <TableRow key={attributeKey}>
        <TableCell
          className={classNames(attributeCell, { [prestigeCell]: prestige })}
          align={'right'}
        >
          {capitalize(name)}
        </TableCell>
        <TableCell className={classNames(attributeCell, { [prestigeCell]: prestige })}>
          {attributeText}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Table padding={'none'}>
      <TableBody>
        {Object.keys(attributes).map(renderAttributeRow)}
      </TableBody>
    </Table>
  );
};

AttributesTable.propTypes = {
  characterAttributes: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    multiplier: PropTypes.number,
    positive: PropTypes.number,
    negative: PropTypes.number,
    prestige: PropTypes.bool,
  })).isRequired,
  classes: PropTypes.shape({
    attributeCell: PropTypes.string,
    prestige: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(AttributesTable);
