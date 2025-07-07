import { Pet } from "../models/Pet";

import fs from "fs";

const dbPath = "./src/db/pets.json";

export class PetRepository{
    private static load(): Pet[] {
        if (!fs.existsSync(dbPath)) return [];
        const data = fs.readFileSync(dbPath, "utf-8");
        return JSON.parse(data);
    }

    private static save(pets: Pet[]): void{
        fs.writeFileSync(dbPath, JSON.stringify(pets, null, 2));
    }

    static findAll(): Pet[]{
        return this.load();
    }

    static findByName(nome: string): Pet | undefined{
        return this.load().find(p => p.nome === nome);
    }

    static findAdotados(): Pet[]{
        return this.load().filter(p => p.adotado);
    }

    static create(pet:Pet):void{
        const pets = this.load();
        pets.push(pet);
        this.save(pets);
    }

}