import { Timer } from "@modules/timer/infra/typeorm/entities/Timer";




export type ListTimersResponse = Promise<Timer[]>;
