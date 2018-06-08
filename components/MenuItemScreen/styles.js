import {Colors} from '@eatpurely/mobile-ui-kit';
import * as constants from '../../helpers/constants';

export default styles = {
 image: {
   borderRadius: 5,
   width: '100%',
   height: Math.floor(constants.SCREEN_HEIGHT * .3)
 },
 iL: {
   fontFamily: 'AvenirNext-Medium',
   fontSize: 16,
   color: '#616167'
 },
 dCL: {
   fontFamily: 'AvenirNext-Medium',
   fontSize: 14,
   fontWeight: 'bold',
   fontStyle: 'italic',
   color: '#616167'
 },
 details:{
   marginBottom: 20,
   flex: 1
 },
 bottom: {
   borderBottomWidth: 1,
   borderBottomColor: Colors.statics.lightGray,
   marginBottom: 15,
   flex: 1,
 }
}
