import { Component, OnInit } from '@angular/core';
import { OrcamentosService } from '../orcamentos.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-cadastrar-orcamento',
  templateUrl: './cadastrar-orcamento.component.html',
  styleUrls: ['./cadastrar-orcamento.component.css']
})
export class CadastrarOrcamentoComponent implements OnInit {
  nome: String;
  email: String;
  mobilia_tipo: String;
  mobilia_puxador: String;
  mobilia_pintura: String;
  mobilia_largura: Number;
  mobilia_altura: Number;
  mobilia_profundidade: Number;
  mobilias = [];
  mostrar_mensagem = false;
  total_orcamento = 0.0;

  constructor(private orcamentos: OrcamentosService) { }

  ngOnInit() {
  }

  adicionarMobilia() {
    this.mobilias.push({
      tipo: this.mobilia_tipo,
      puxador: this.mobilia_puxador,
      pintura: this.mobilia_pintura,
      largura: this.mobilia_largura,
      altura: this.mobilia_altura,
      profundidade: this.mobilia_profundidade
    });
    this.mobilia_tipo = null;
    this.mobilia_puxador = null;
    this.mobilia_pintura = null;
    this.mobilia_largura = null;
    this.mobilia_altura = null;
    this.mobilia_profundidade = null;
  }

  salvar() {
    let orcamento = {
      nome: this.nome,
      email: this.email,
      pecas: this.mobilias
    };
    this.orcamentos.salvar(orcamento);
    this.nome = null;
    this.email = null;
    this.mostrar_mensagem = true;
    this.mobilias = [];
    this.total_orcamento = 0.0;
    localStorage.setItem( 'email', orcamento.email.toString());
    localStorage.setItem( 'nome', orcamento.nome.toString() );
    localStorage.setItem( 'pecas', orcamento.pecas.toString() );
  }

  mostrar_total() {
    let orcamento = {
      nome: this.nome,
      email: this.email,
      pecas: this.mobilias
    };
    this.total_orcamento = this.orcamentos.calcular(orcamento);
  }
}
