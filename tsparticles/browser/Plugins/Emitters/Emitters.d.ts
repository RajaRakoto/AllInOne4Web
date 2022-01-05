import type { IContainerPlugin, ICoordinates, IDelta } from "../../Core/Interfaces";
import { EmitterInstance } from "./EmitterInstance";
import type { Container } from "../../Core/Container";
import type { IEmitter } from "./Options/Interfaces/IEmitter";
import type { RecursivePartial, SingleOrMultiple } from "../../Types";
import { Emitter } from "./Options/Classes/Emitter";
import type { IOptions } from "../../Options/Interfaces/IOptions";
import type { IEmitterOptions } from "./Options/Interfaces/IEmitterOptions";
/**
 * @category Emitters Plugin
 */
export declare class Emitters implements IContainerPlugin {
    private readonly container;
    array: EmitterInstance[];
    emitters: SingleOrMultiple<Emitter>;
    interactivityEmitters: SingleOrMultiple<Emitter>;
    constructor(container: Container);
    init(options?: RecursivePartial<IOptions & IEmitterOptions>): void;
    play(): void;
    pause(): void;
    stop(): void;
    update(delta: IDelta): void;
    handleClickMode(mode: string): void;
    resize(): void;
    addEmitter(options: IEmitter, position?: ICoordinates): EmitterInstance;
    removeEmitter(emitter: EmitterInstance): void;
}
