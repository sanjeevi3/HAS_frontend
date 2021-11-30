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
import login from './login';
import register from './register';
import fieldData from './fieldState';

export default combineReducers({
    user:user,
    myService:myService,
    work:work,
    ourCustomers:ourCustomers,
    ourWorkers:ourWorkers,
    ourServices:ourServices,
    profile:profile,
    service:service,
    ui:ui,
    login:login,
    register:register,
    fieldData
});
