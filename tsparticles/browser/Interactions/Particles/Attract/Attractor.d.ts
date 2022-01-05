import type { IParticle } from "../../../Core/Interfaces";
import type { Container } from "../../../Core/Container";
import { Particle } from "../../../Core/Particle";
import { ParticlesInteractorBase } from "../../../Core/ParticlesInteractorBase";
/**
 * @category Interactions
 */
export declare class Attractor extends ParticlesInteractorBase {
    constructor(container: Container);
    interact(p1: IParticle): void;
    isEnabled(particle: Particle): boolean;
    reset(): void;
}
