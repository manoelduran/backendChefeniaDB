export type Either<L, A> = Left<L, A> | Right<L, A>;

export class Left<L, A> {
  constructor(public readonly value: L) {}

  public isLeft(): this is Left<L, A> {
    return true;
  }

  public isRight(): this is Right<L, A> {
    return false;
  }

  public toJSON(): L {
    return this.value;
  }
}

export class Right<L, A> {
  constructor(public readonly value: A) {}

  public isLeft(): this is Left<L, A> {
    return false;
  }

  public isRight(): this is Right<L, A> {
    return true;
  }
}

export const left = <L, A>(value: L): Either<L, A> => new Left(value);
export const right = <L, A>(value: A): Either<L, A> => new Right<L, A>(value);
