export interface Pet {
  id: number;
  nome: string;
  especie: "cachorro" | "gato" | "outro";
  idade: number;
  adotado: boolean;
}
