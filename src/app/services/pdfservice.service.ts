import { Injectable } from '@angular/core';
import {pdfMake} from ;


@Injectable({
  providedIn: 'root'
})
export class PdfserviceService {

  constructor() { }

  public generatepdf() : void  {
    
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    
  }
}
