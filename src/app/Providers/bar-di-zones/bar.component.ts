import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarServices, BarServicesMock } from './bar.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    {provide: BarServices, useClass: BarServices}
  ],
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

    configManual: BarUnidadeConfig;
    config: BarUnidadeConfig;
    barBebida1: string;

  constructor(
    private barServices: BarServices,
    @Inject('configManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig
    ) { }

  ngOnInit(): void {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.ApiConfigManual;
    this.config = this.ApiConfig;
  }
}
