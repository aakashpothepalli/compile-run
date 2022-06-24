import { runCppFile } from './run-file';
import { runCppSource } from './run-source';
import { runExecutable } from "../executable/execute-executable";

const cpp = {
    runFile: runCppFile,
    runSource: runCppSource,
    runExecutable:runExecutable
};

export default cpp;
