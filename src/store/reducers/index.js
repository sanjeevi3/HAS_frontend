import {combineReducers} from 'redux';
import myService from './myService';
import work from './work';
import ourCustomers from './ourCustomers';
import ourWorkers from './ourWorkers';
import ourServices from './ourServices';
import user from './user';
import profile from './profile'
import service from './service';
import ui from './ui';

export default combineReducers({
    user:user,
    myService:myService,
    work:work,
    ourCustomers:ourCustomers,
    ourWorkers:ourWorkers,
    ourServices:ourServices,
    profile:profile,
    service:service,
    ui:ui
});
