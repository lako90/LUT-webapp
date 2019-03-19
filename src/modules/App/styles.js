const styles = ({ spacing, breakpoints }) => ({
  layout: {
    width: 'auto',
    marginTop: spacing.unit * 3,
    marginLeft: spacing.unit * 3,
    marginRight: spacing.unit * 3,
    [breakpoints.up(1100 + spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

export default styles;
