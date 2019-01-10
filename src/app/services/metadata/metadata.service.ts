import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface MetadataModel {
  title: string;
  description: string;
  longDescription: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  public updateMeta(data: MetadataModel) {
    this.clearMeta();

    this.title.setTitle(data.title);
    this.meta.addTag({name: 'description', content: data.longDescription});

    // Twitter metadata
    this.meta.addTag({name: 'twitter:card', content: 'summary'});
    this.meta.addTag({name: 'twitter:site', content: 'AaUniversalWorkshop'});
    this.meta.addTag({name: 'twitter:title', content: data.title});
    this.meta.addTag({name: 'twitter:description', content: data.description});
    this.meta.addTag({name: 'twitter:text:description', content: data.description});
    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://www.clipartmax.com/png/middle/158-1584229_ftestickers-cat-catsofpicsart-dab-dance-thuglife-dabbing-cat.png'
    });

    // Facebook metadata
    this.meta.addTag({
      property: 'og:image',
      content: 'https://www.clipartmax.com/png/middle/158-1584229_ftestickers-cat-catsofpicsart-dab-dance-thuglife-dabbing-cat.png'
    });
    this.meta.addTag({property: 'og:title', content: data.title});
    this.meta.addTag({property: 'og:description', content: data.longDescription});
    this.meta.addTag({property: 'og:site_name', content: 'AaUniversalWorkshop'});
  }

  private clearMeta() {
    this.meta.removeTag('name="description"');
    this.meta.removeTag('name="twitter:card"');
    this.meta.removeTag('name="twitter:site"');
    this.meta.removeTag('name="twitter:title"');
    this.meta.removeTag('name="twitter:description"');
    this.meta.removeTag('name="twitter:text:description"');
    this.meta.removeTag('name="twitter:image"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:site_name"');
  }

}
