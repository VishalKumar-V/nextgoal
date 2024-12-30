import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  button: {
    backgroundColor: 'black',
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
  },
  noDataText: {
    color: colors.white,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlign: 'center'
  },
  errorView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  oopsImage: {
    width: 150,
    height: 150,
  }
});

export default styles;
