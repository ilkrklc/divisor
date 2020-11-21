import { exampleHelper } from '@helpers/helper';

const exampleMethod = (options: ExampleInterface): number =>
  options.n * exampleHelper();

export default exampleMethod;
