interface CreateMvpDTO {
    name: string;
    quantity: number;
    image?: string;
    property: string;
    respawn?: string;
    breed: string;
    level: number;
    neutral: number;
    is_general?: boolean;
    water: number
    earth: number;
    fire: number;
    wind: number;
    poison: number;
    holy: number;
    dark: number;
    ghost: number;
    undead: number;   
}

export { CreateMvpDTO }