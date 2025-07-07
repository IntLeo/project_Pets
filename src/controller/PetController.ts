import { Pet } from "../models/Pet";
import { PetRepository } from "../repository/PetRepository";

export class PetController {

  cadastrar(pet:Pet):void{
    if(!pet.nome || pet.idade < 0){
      throw new Error("Pet invalido!")
    }
    PetRepository.create(pet);
    console.log("Pet cadastrado com sucesso!");
  }

  listar(): Pet[] {
    return PetRepository.findAll();
  }

  buscarPorNome(nome: string): Pet | undefined {
    return PetRepository.findByName(nome);
  }

  listarAdotados():Pet[]{
    return PetRepository.findAdotados();
  }

}
