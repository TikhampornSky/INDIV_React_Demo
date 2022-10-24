import 'reflect-metadata';
import { DependencyC } from './inverse_service'
import DIContainer from './inverse_di-container';

// const service: Service = new Service()           <--- If 'not' use inversify

const service: DependencyC = DIContainer.resolve<DependencyC>(DependencyC)
export const serviceData = service.getAllNames()

//const ninja = myContainer.get<Warrior>(TYPES.Warrior);
// const inversifyOutput_tmp = DIContainer.get<Service>(Service)
// export const inversifyOutput = inversifyOutput_tmp.getAllNames()