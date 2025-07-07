interface Pet {
  id: number;
  nome: string;
  especie: "cachorro" | "gato" | "outro";
  idade: number;
  adotado: boolean;
}

let pets: Pet[] = [];


function adicionarPet(pet: Pet): void {
  if (pet.nome.trim() === "") {
    throw new Error("O nome do pet não pode estar vazio.");
  }
  if (pet.idade < 0) {
    throw new Error("A idade não pode ser negativa.");
  }
  pets.push(pet);
}

function listarPets(): Pet[] {
  return pets;
}

function filtrarPetsAdotados(): Pet[] {
  return pets.filter(pet => pet.adotado);
}

function buscarPetPorNome(nome: string): Pet | undefined {
  return pets.find(pet => pet.nome === nome);
}


try {
  adicionarPet({ id: 1, nome: "Maia", especie: "cachorro", idade: 5, adotado: true });
  adicionarPet({ id: 2, nome: "Rodolfo", especie: "gato", idade: 1, adotado: false });

  console.log("Todos os pets:", listarPets());
  console.log("Pets adotados:", filtrarPetsAdotados());
  console.log("Buscar por 'Rodolfo':", buscarPetPorNome("Rodolfo"));
} catch (error) {
  console.error("Erro ao adicionar pet:", (error as Error).message);
}
