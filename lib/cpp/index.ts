import { runCppFile } from './run-file';
import { runCppSource } from './run-source';
import { execute } from "../execute-command";

const cpp = {
    runFile: runCppFile,
    runSource: runCppSource,
    execute:execute
};

export default cpp;
