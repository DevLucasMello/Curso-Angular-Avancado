import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarServices, BarServicesMock, BebidaService } from './bar.service';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    // {provide: BarServices, useClass: BarServices},
    {
      provide: BarServices, useFactory: BarFactory,
      deps: [
        HttpClient, Injector
      ]
    },
    {provide: BebidaService, useExisting: BarServices}
  ],
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

    configManual: BarUnidadeConfig;
    config: BarUnidadeConfig;
    barBebida1: string;
    dadosUnidade: string;
    barBebida2: string;

  constructor(
    private barServices: BarServices,
    @Inject('configManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private bebidaService: BebidaService
    ) { }

  ngOnInit(): void {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual;
    this.config = this.ApiConfig;

    this.dadosUnidade = this.barServices.obterUnidade();

    this.barBebida2 = this.bebidaService.obterBebidas();
  }
}
