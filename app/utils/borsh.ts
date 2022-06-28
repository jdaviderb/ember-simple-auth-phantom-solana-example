import { Buffer } from 'buffer/';
import * as borsh from 'borsh';


/*in order to borsh works in the browser we have todo this hack :(*/
declare global {
  interface Window { Buffer: any }
}

window.Buffer = Buffer;
/*in order to borsh works in the browser we have todo this hack :(*/

export default borsh;
