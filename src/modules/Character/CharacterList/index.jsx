import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import PageTitle from '../../../components/PageTitle';

import { getCharacters as getCharactersAction } from '../actions';

class CharacterList extends Component {
  componentDidMount() {
    const { getCharacters } = this.props;

    getCharacters();
  }

  renderCharacterRow = ({
    id,
    name,
    race: { name: raceName },
    class: { name: className },
  }) => (
    <ListItem key={id}>
      <ListItemText>
        {`${name} - ${raceName} ${className}`}
      </ListItemText>
    </ListItem>
  )

  render() {
    const { characters } = this.props;

    return (
      <Fragment>
        <PageTitle
          title={'Personaggi'}
          action={{
            icon: 'add',
            label: 'Crea nuovo',
            linkTo: '/characters/add',
          }}
        />
        <List component={'nav'}>
          {
            characters
              ? characters.map(this.renderCharacterRow)
              : null
          }
        </List>
      </Fragment>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = ({ characters: { data: characters } }) => ({ characters });

const mapDispatchToProps = dispatch => ({
  getCharacters: bindActionCreators(getCharactersAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
