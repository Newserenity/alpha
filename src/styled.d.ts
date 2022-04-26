// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      Primary: string;
      PrimaryContainer: string;
      OnPrimary: string;
      OnPrimaryContainer: string;
      Secondary: string;
      SecondaryContainer: string;
      OnSecondary: string;
      OnSecondaryContainer: string;
      Teriary: string;
      TeriaryContainer: string;
      OnTeriary: string;
      OnTeriaryContainer: string;
      Error: string;
      ErrorContainer: string;
      OnErroe: string;
      OnErroeContainer: string;
      Background: string;
      OnBackground: string;
      Surface: string;
      OnSurface: string;

      Outline: string;
    };
  }
}
