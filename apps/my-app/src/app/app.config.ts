import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { GLOBAL_AUTO_ANIMATE_OPTIONS } from 'ng-auto-animate';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: GLOBAL_AUTO_ANIMATE_OPTIONS,
      useValue: {
        duration: 750,
        easing: 'ease-out',
        // etc.
      },
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes), provideAnimationsAsync(),
  ],
};
