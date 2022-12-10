import path from 'path';
import fs from 'fs-extra';
import { generateDeclarations } from './generate-declarations';
import settings from '../../settings';

const paths = settings.docgenPaths.map((filePath) => path.join(__dirname, '../../', filePath));

fs.writeJSONSync(path.join(__dirname, '../../docs/docgen.json'), generateDeclarations(paths), {
  spaces: 2,
});
