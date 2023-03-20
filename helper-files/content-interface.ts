export interface Content {
  id: number | null;
  title?: string;
  description?: string;
  creator?: string;
  imgURL?: string;
  type?: string;
  tags?: string[];
}

function testFunction(content: Content): void {
  console.log(content.id); // number | null
  console.log(content.title); // string | undefined
  console.log(content['imgURL']); // string | undefined
}
