import { SelectItem } from 'primeng/api';

interface Categorias {
  name: string;
}

export class ListaCategoria {

  categorias: SelectItem[];

  constructor() {
    //SelectItem API with label-value pairs
    this.categorias = [

      { value: "FINANCEIRO", label: "Financeiro" },
      { value: "COMERCIAL", label: "Comercial" },
      { value: "RH", label: "RH" },
      { value: "JURIDICO", label: "Jurídico" },
      { value: "DESENVOLVIMENTO", label: "Desenvolvimento" }

    ];

  }

}
