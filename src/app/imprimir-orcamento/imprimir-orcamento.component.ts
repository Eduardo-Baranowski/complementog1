import { Component, OnInit } from '@angular/core';
import { OrcamentosService } from '../orcamentos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprimir-orcamento',
  templateUrl: './imprimir-orcamento.component.html',
  styleUrls: ['./imprimir-orcamento.component.css']
})
export class ImprimirOrcamentoComponent implements OnInit {
  orcamento = null;

  constructor(private orcamentos: OrcamentosService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orcamento = this.orcamentos.encontrar(Number.parseInt(id));
    this.orcamentos.calcular(this.orcamento);
  }

}
