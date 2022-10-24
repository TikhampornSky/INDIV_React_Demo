import { inject, injectable } from '../../node_modules/inversify' ;
import { DependencyA, DependencyB } from "./inverse_dependencies";

@injectable()
export class DependencyC {
    protected depA: DependencyA
    protected depB: DependencyB

    //dependencies can be injected straight into the class’ constructor by using @inject decorator.
    constructor (
        @inject(DependencyA) dependencyA: DependencyA,           
        @inject(DependencyB) dependencyB: DependencyB
    ) {
        this.depA = dependencyA;
        this.depB = dependencyB;
    }

    // 'When not using inversify '
    // constructor () {
    //     this.depA = new DependencyA()
    //     this.depB = new DependencyB()
    // }

    public getAllNames(): string[] {
        return [this.depA.getName(), this.depB.getName()]
    }
}