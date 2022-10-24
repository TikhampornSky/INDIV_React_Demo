import { Container } from "inversify"; 
import { DependencyA, DependencyB } from "./inverse_dependencies";

// To configure the IoC Container, so that the classes can resolve their own dependency
var DIContainer = new Container()
DIContainer.bind<DependencyA>(DependencyA).toSelf()
DIContainer.bind<DependencyB>(DependencyB).toSelf()

export default DIContainer