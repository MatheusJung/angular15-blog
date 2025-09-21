import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  content_Title:string = "";
  content_Cover:string = "";
  content_Description:string = "";
  private id: string | null = null;

  constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  this.route.paramMap.subscribe(p => {
    const id = p.get('id');        // deve vir '1', '2'...
    this.setValuesToComponent(id);
  });
}

setValuesToComponent(id: string | null) {
    if (!id) return;

    const result = dataFake.find(a => a.id === id);

    if (result) {
      this.content_Title = result.title;
      this.content_Description = result.description;
      this.content_Cover = result.photoCover || result.photo || '';
    } else {
      console.warn('Nenhum item encontrado para id:', id);
    }
  }
}
