import { runCppFile ,compileCppFile} from './run-file';
import { runCppSource } from './run-source';
import { runExecutable } from "../executable/execute-executable";

const cpp = {
    runFile: runCppFile,
    runSource: runCppSource,
    runExecutable:runExecutable,
    compileCppFile:compileCppFile
};

export default cpp;
