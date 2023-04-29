type StringNonInitialized = string | undefined;

export class Book {

  title: StringNonInitialized;

  author: StringNonInitialized;

  pages: number | undefined;

  description: StringNonInitialized;

  year: number | undefined;


  // constructor(public title: string, public author: string,
  //             public pages: number, public description: string, public year: number) {
  // }
}
