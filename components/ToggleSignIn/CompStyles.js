import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ContentContainer: {
    width: '70%',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderRadius: 9,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    margin: 25,
  },
  CenterAlign: {
    alignItems: 'center',
  },
  ContentSection: {
    padding: 5,
  },
  MainText: {
    fontSize: 30,
  },
  SectionText: {
    fontSize: 15,
  },
  SectionTextSM: {
    paddingTop: 1,
    fontSize: 12,
  },
  MainTextErrorContainer: {
    height: 30,
  },
  MainTextError: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    color: 'red',
  },
  BasicCenterText: {
    textAlign: 'center',
    margin: 10,
  },
  ButtonSection: {
    padding: 5,
    flexDirection: 'row',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  ButtonSectionMain: {
    padding: 5,
  },
  ButtonText: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    textAlign: 'center',
    zIndex: 1000,
  },
  DefaultButton: {
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9,
    minHeight: 50,
    marginTop: 5,
    marginBottom: 5,
    width: '40%',
    justifyContent: 'center',
  },
  DefaultAltButton: {
    minHeight: 50,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
  },
  DefaultInput: {
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    minHeight: 50,
    width: '100%',
    textAlign: 'left',
  },
});
