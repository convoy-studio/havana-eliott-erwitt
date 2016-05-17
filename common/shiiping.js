import _ from 'lodash';
import dhl from './shipping/dhl';
import zones from './shipping/zones';

export default function getAmountSupply(country, itemsNumber) {
    const index = _.findIndex(dhl, { 'country': country });
    const zone = dhl[index].zone;

    return zones[zone][itemsNumber - 1];
}
