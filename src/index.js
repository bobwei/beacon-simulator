import 'dotenv/config';
import bleno from 'bleno';

const { uuid } = process.env;

bleno.on('stateChange', state => {
  console.log(`on -> stateChange: ${state}`);

  if (state === 'poweredOn') {
    bleno.startAdvertisingIBeacon(uuid, 0, 0, -59, error => {
      if (error) {
        console.log(error);
        return;
      }
      console.log('startAdvertisingIBeacon');
    });
  } else {
    bleno.stopAdvertising();
  }
});
