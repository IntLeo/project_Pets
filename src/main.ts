


import { PetController } from "./controller/PetController";

const controller = new PetController();

controller.cadastrar({
  id: 1,
  nome: "Rafael",
  especie: "gato",
  idade: 3,
  adotado: false,
});

  console.log("Todos os pets:", controller.listar());
  console.log("Pets adotados:", controller.listarAdotados());
  console.log("Buscar por 'Luna':", controller.buscarPorNome("Luna"));
