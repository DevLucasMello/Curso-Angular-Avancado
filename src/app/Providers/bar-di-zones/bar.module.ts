import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarComponent } from './bar.component';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';


@
NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BarComponent
  ],
  exports: [
    BarComponent
  ]
})

export class BarModule {
  static forRoot(config: BarUnidadeConfig): ModuleWithProviders<any>{
    return {
      ngModule: BarModule,
      providers: [
        {provide: 'configManualUnidade', useValue: config},
        {provide: BAR_UNIDADE_CONFIG, useValue: config}
      ]
    }
  }

  static forChild(){

  }
}
